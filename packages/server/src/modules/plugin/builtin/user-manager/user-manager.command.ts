import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../user/user.entity.js';
import { Permission } from '../../../authorization/permission.entity.js';
import { Repository } from 'typeorm';
import { isString } from 'class-validator';
import { encryptPassword } from '../../../../utils/encrypt-password.util.js';
import { PermissionEnum } from '../../../../enums/index.js';
import { Injectable } from '@nestjs/common';
import { ApplicationLogger } from '../../../../common/application.logger.service.js';
import { Command } from 'commander';
import { MinaPlayCommand, MinaPlayCommandArgument, MinaPlayListenerInject } from '../../plugin.decorator.js';
import { PluginChat } from '../../plugin-listener-context.js';
import { ConsumableGroup } from '../../../../common/messages/index.js';
import { Action } from '../../../../common/messages/action.js';
import { Text } from '../../../../common/messages/text.js';
import { Consumed } from '../../../../common/messages/consumed.js';
import { Timeout } from '../../../../common/messages/timeout.js';

@Injectable()
export class UserManagerCommand {
  private logger = new ApplicationLogger(UserManagerCommand.name);

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Permission) private permissionRepository: Repository<Permission>,
  ) {}

  @MinaPlayCommand('um', {
    aliases: ['user-manager'],
    description: 'manage users in MinaPlay',
  })
  async handleUm(@MinaPlayListenerInject() program: Command) {
    return program.helpInformation();
  }

  @MinaPlayCommand('add-root', {
    aliases: ['ar'],
    parent: () => UserManagerCommand.prototype.handleUm,
  })
  async handleAddRootUser(
    @MinaPlayCommandArgument('<username>', {
      description: 'Username of this root user',
    })
    username: string,
    @MinaPlayCommandArgument('<password>', {
      description: 'Password of this root user',
    })
    password: string,
  ) {
    const sameNameUser = await this.userRepository.findOneBy({ username });
    if (sameNameUser) {
      return new Text(`Duplicated username '${username}' in database.`, Text.Colors.ERROR);
    }

    if (!isString(password) || password.length < 6 || password.length > 40) {
      return new Text(`Password too short`, Text.Colors.ERROR);
    }

    try {
      const { id } = await this.userRepository.save({
        username,
        password: await encryptPassword(password),
      });
      await this.permissionRepository.save({
        userId: id,
        name: PermissionEnum.ROOT_OP,
      });
      return new Text(`Root user '${username}' added`, Text.Colors.SUCCESS);
    } catch (error) {
      this.logger.error(`Root user '${username}' add failed`, error.stack, UserManagerCommand.name);
      return new Text(`Root user '${username}' add failed`, Text.Colors.WARNING);
    }
  }

  @MinaPlayCommand('delete', {
    aliases: ['d'],
    parent: () => UserManagerCommand.prototype.handleUm,
  })
  async handleDeleteUser(
    @MinaPlayCommandArgument('<username>', {
      description: 'Username of this root user',
    })
    username: string,
    @MinaPlayListenerInject() chat: PluginChat,
    @MinaPlayListenerInject() operator: User,
  ) {
    if (operator.username === username) {
      return new Text(`Cannot delete the currently logged in user`, Text.Colors.ERROR);
    }

    const user = await this.userRepository.findOneBy({ username });
    if (!user) {
      return new Text(`User '${username}' not found in database`, Text.Colors.ERROR);
    }

    const groupId = Date.now().toString();
    await chat.send([
      new Text(`Are you sure to delete user '${username}' ? (Y/n)`),
      new ConsumableGroup(groupId, [
        new Action('yes', new Text('Yes', Text.Colors.ERROR)),
        new Action('no', new Text('No')),
        new Action('cancel', new Text('Cancel')),
        new Timeout(30000),
      ]),
    ]);
    try {
      const resp = await chat.receive(30000);
      if (resp.type === 'ConsumableFeedback' && resp.id === groupId && resp.value === 'yes') {
        try {
          await this.userRepository.delete({ username });
          return [new Consumed(groupId), new Text(`User '${username}' deleted`, Text.Colors.SUCCESS)];
        } catch (error) {
          this.logger.error(`User '${username}' delete failed`, error.stack, UserManagerCommand.name);
          return [new Consumed(groupId), new Text(`User '${username}' delete failed`, Text.Colors.WARNING)];
        }
      } else {
        return [new Consumed(groupId), new Text(`User '${username}' delete canceled`)];
      }
    } catch {
      return [new Consumed(groupId), new Text(`User '${username}' delete canceled`)];
    }
  }
}
