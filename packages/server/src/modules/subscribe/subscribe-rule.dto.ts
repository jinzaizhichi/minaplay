import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class SubscribeRuleDto {
  @ApiProperty({
    description: '代码规则',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(2048)
  code: string;

  @ApiProperty({
    description: '订阅规则备注',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(40)
  remark?: string;

  @ApiProperty({
    description: '剧集 id',
    required: false,
  })
  @IsOptional()
  @IsInt()
  seriesId?: number;
}
