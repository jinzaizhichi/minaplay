import { ErrorCodeEnum } from '@/api/enums/error-code.enum';
import { StatusEnum } from '@/api/enums/status.enum';
import { FileSourceEnum } from '@/api/enums/file-source.enum';
import { AuthActionEnum } from '@/api/enums/auth-action.enum';

export default {
  app: {
    name: 'MinaPlay',
    ok: 'OK',
    cancel: 'Cancel',
    on: 'ON',
    off: 'OFF',
    unknown: 'Unknown',
    or: 'Or',
    loader: {
      loading: 'Loading...',
      error: 'Oops, something went wrong! Please try ',
      all: 'All items loaded',
      empty: 'No items founded',
      notLoaded: 'Data not loaded! Please try ',
      moreBtn: 'Load More',
      retryBtn: 'Reload',
      loadBtn: 'Load',
      itemsPerPage: 'Items Per Page',
      pageText: 'Page {page} of {max}',
    },
    player: {
      danmaku: {
        settings: 'Danmaku Settings',
        fontSize: 'Font Size',
        opacity: 'Opacity',
        shadow: 'Text Shadow',
      },
    },
    input: {
      keyword: 'Keyword',
      placeholder: 'Find {item}...',
      sort: 'Sort By',
      order: 'Order By',
      status: 'Status',
      unselected: 'Unselected',
      desc: 'DESC',
      asc: 'ASC',
    },
    entities: {
      user: 'User',
      source: 'RSS source',
      rule: 'Subscribe rule',
      download: 'Download item',
      live: 'Live room',
      media: 'Media',
      series: 'Series',
      episode: 'Episode',
      file: 'File',
    },
    actions: {
      add: 'New',
      save: 'Save',
      reset: 'Reset',
      delete: 'Delete',
      edit: 'Edit',
      clear: 'Clear All',
      close: 'Close',
      view: 'View',
      retry: 'Retry',
      refresh: 'Refresh',
      upload: 'Upload',
      download: 'Download',
      select: 'Select',
      more: '[more]',
      collapse: '[collapse]',
      pause: 'Pause',
      unpause: 'Unpause',
      cancel: 'Cancel',
      saveToast: 'Item saved',
      deleteTitle: 'Delete Item Confirm',
      deleteConfirm: 'Are you sure to delete this {item}?',
      deleteToast: 'Item deleted',
    },
  },
  layout: {
    sections: 'Sections',
    actions: {
      dark: 'Dark Mode',
      light: 'Light Mode',
      upload: 'Upload Media Files',
      github: 'Github',
    },
    navs: {
      resource: 'RESOURCES',
      live: 'LIVES',
      source: 'SOURCES',
      rule: 'RULES',
      dashboard: 'DASHBOARD',
      setting: 'SETTINGS',
    },
    user: {
      edit: 'Edit User Profile',
      logout: {
        title: 'Logout Confirm',
        confirm: 'Are you sure to logout from MinaPlay?',
        btn: 'Logout',
      },
    },
    upload: {
      title: 'Upload Files',
      drop: 'Drop files here to upload',
      closePageHint: 'Closing this page will cancel all upload tasks.',
      cancelTitle: 'Cancel Confirm',
      cancelConfirm: 'Are your sure to cancel this upload?',
      status: {
        finished: 'Finished',
        generating: 'Generating media files',
        sizeExceed: 'File size exceed 10GB',
        canceled: 'Canceled',
        error: 'Unknown error',
      },
    },
    error: {
      back: 'Go Back',
      noPermission: 'No permission to access this page',
      notFound: 'Page not found',
    },
  },
  common: {
    download: {
      title: 'Download',
      item: 'download task',
      sorts: {
        createAt: 'Create Time',
        title: 'Title',
      },
      copyLink: 'Copy Download Link',
      linkCopied: 'Download link copied',
      linkCopyFailed: 'Download link copy failed',
      createAt: 'Create at',
      deleteConfirm: 'Are you sure to delete this download item? This action may cause duplicated download tasks.',
    },
  },
  resource: {
    updates: 'Updates',
    medias: 'Medias',
    series: 'Series',
    episodes: 'Episodes',
    information: 'Info',
    noDescription: 'No Description',
    episode: {
      next: 'Next',
      previous: 'Prev',
    },
    actions: {
      copy: 'Copy Video URL',
      openInVLC: 'Open in VLC',
      play: 'Play Together',
      watch: 'Watch Now',
    },
  },
  media: {
    entity: {
      name: 'Name',
      description: 'Description',
      isPublic: 'Is Public',
      poster: 'Poster',
      createAt: 'Create At',
    },
  },
  series: {
    seasonLabel: 'Season {season}',
    entity: {
      name: 'Name',
      description: 'Description',
      poster: 'Poster',
      season: 'Season',
      pubAt: 'Publish Date',
      tags: 'Tags',
      count: 'Total Episode Count',
      finished: 'Finished',
      user: 'User',
      createAt: 'Create At',
    },
  },
  episode: {
    entity: {
      title: 'Title',
      no: 'No.',
      series: 'Series',
      media: 'Media',
      pubAt: 'Publish Time',
      createAt: 'Create At',
    },
  },
  user: {
    deleted: 'Deleted User',
    noPermissions: 'No Permissions',
    entity: {
      username: 'Username',
      password: 'Password',
      permissions: 'User Permissions',
      avatar: 'Avatar',
      email: 'Email',
      notify: 'Notify Enabled',
      createAt: 'Create At',
    },
    actions: {
      modifyPermissions: 'Modify Permissions',
      resetPassword: 'Reset Password',
    },
    permission: {
      groups: {
        presets: 'Presets',
        file: 'File',
        media: 'Media',
        series: 'Series',
        subscribe: 'Subscribe',
        live: 'Live',
      },
      presets: {
        administrator: 'Administrator',
        user: 'User',
        guest: 'Guest',
        banned: 'Banned',
      },
      fullAccess: 'Full Access',
      view: 'View',
      uploadVideo: 'Upload Video',
      uploadImage: 'Upload Image',
    },
  },
  source: {
    title: 'RSS Sources',
    unnamed: 'Unnamed RSS source',
    working: 'Working',
    paused: 'Paused',
    nextTriggerTimes: 'Next Trigger Times:',
    wrongCronExp: 'Wrong Cron Expression',
    entity: {
      id: 'ID',
      title: 'Title',
      remark: 'Remark',
      cron: 'CRON Expression',
      url: 'URL',
      enabled: 'Enabled',
      user: 'User',
      createAt: 'Create At',
    },
    sections: {
      info: 'Information',
      raw: 'Raw Data',
      log: 'Parse Log',
      download: 'Download',
    },
    info: {
      actions: 'Actions',
      update: 'Run Update',
      updateDescription:
        'Run update task instantly, MinaPlay will automatically parse content and download items match your `Rules`.',
      updateBtn: 'Run Update',
      updateToast: 'Run update succeeded',
      enabled: 'Enabled',
      enabledDescription: 'Indicates whether this RSS source is enabled.',
      delete: 'Delete RSS Source',
      deleteDescription: 'Delete this RSS source. Note that this action is irreversible!',
      cronExps: {
        every10Minutes: 'Every 10 Minutes',
        every30Minutes: 'Every 30 Minutes',
        everyHour: 'Every Hour',
        every6Hours: 'Every 6 Hours',
        everyDay: 'Every Day at 0:00',
      },
    },
    raw: {
      parsedView: 'Parsed View',
      rawView: 'Raw View',
      publishAt: 'Publish at:',
      visit: 'Visit Website',
      openPage: 'Open Publish Page',
      download: 'Download on MinaPlay',
      downloadCreated: 'Download task created',
      copyLink: 'Copy Download Link',
      linkCopied: 'Download link copied',
      linkCopyFailed: 'Download link copy failed',
    },
    logs: {
      clearLogsTitle: 'Clear All Confirm',
      clearLogsConfirm: 'Are you sure to clear all logs?',
    },
  },
  rule: {
    title: 'Rules',
    unnamed: 'Unnamed Subscribe Rule',
    entity: {
      id: 'ID',
      remark: 'Remark',
      sources: 'RSS Sources',
      user: 'User',
      createAt: 'Create At',
      updateAt: 'Update At',
    },
    sections: {
      info: 'Information',
      error: 'Error Log',
      download: 'Download',
    },
    info: {
      code: 'Code',
      actions: 'Actions',
      delete: 'Delete Subscribe Rule',
      deleteDescription: 'Delete this subscribe rule. Note that this action is irreversible!',
      duplicate: 'Duplicate Subscribe Rule',
      duplicateDescription: 'Duplicate this subscribe rule, use same code, RSS sources to create a new one.',
      duplicateBtn: 'Duplicate',
      copyLabel: '(Copy)',
    },
    logs: {
      clearLogsTitle: 'Clear All Confirm',
      clearLogsConfirm: 'Are you sure to clear all error logs?',
    },
  },
  file: {
    entity: {
      name: 'Name',
      size: 'Size',
      md5: 'MD5',
      mimetype: 'Mimetype',
      source: 'Source',
      createAt: 'Create At',
    },
    source: {
      [FileSourceEnum.AUTO_GENERATED]: 'Auto Generate',
      [FileSourceEnum.DOWNLOAD]: 'Auto Download',
      [FileSourceEnum.USER_UPLOAD]: 'User Upload',
      other: 'Unknown Source',
    },
  },
  live: {
    title: 'Live Rooms',
    unnamed: 'Unnamed Live Room',
    entity: {
      title: 'Title',
      password: 'Password',
      hasPassword: 'Password Required',
      poster: 'Poster',
      user: 'User',
      stream: 'Stream',
      createAt: 'Create At',
    },
    play: {
      sendChat: 'Send a chat...',
      validateTitle: 'Password Validate',
      validateHint: 'Password validation required',
      validate: 'Validate',
      disposeTitle: 'Room Closed',
      disposeHint: 'Live room was closed by administrator',
      closeTitle: 'Close Room Confirm',
      closeConfirm: 'Are you sure to close this live room?',
      exit: 'Exit Room',
      password: 'Password',
      cancelPassword: 'Cancel Password',
      passwordLengthRule: 'Password should contain at least 4 characters',
      unknownChatType: 'Unknown chat message type',
      noStream: 'No Streaming Content',
      stopStreaming: 'Stop Streaming',
      stream: {
        clientSync: 'Client Sync',
        serverPush: 'Server Push',
        liveStream: 'Live Stream',
        type: 'Type',
        url: 'URL',
      },
      voice: {
        single: 'You are the only one!',
        voiceConnectFailed: 'Live voice service connect failed',
        voiceNotEnabled: 'Audio recording is forbidden',
        join: 'Join Live Voice',
        quit: 'Quit Live Voice',
        muted: 'Muted',
        speaking: 'Speaking',
      },
      tabs: {
        chat: 'Chat',
        voice: 'Voice',
        settings: 'Settings',
      },
      notify: {
        connect: 'Live room connected',
        disconnect: 'Live room disconnected',
        'member-join': 'joined live room',
        'member-quit': 'left live room',
        'member-mute-chat': 'Your chat is muted by live room owner',
        'member-mute-voice': 'Your voice is muted by live room owner',
        'member-kick': `You've been removed from this live room`,
      },
    },
  },
  actionLog: {
    entity: {
      ip: 'IP',
      action: 'Action',
      operator: 'Operator',
      target: 'Target',
      createAt: 'Create At',
    },
    actions: {
      [AuthActionEnum.LOGIN]: 'LOGIN',
      [AuthActionEnum.LOGOUT]: 'LOGOUT',
      [AuthActionEnum.REFRESH]: 'REFRESH TOKEN',
      [AuthActionEnum.GRANT]: 'GRANT PERMISSIONS',
      [AuthActionEnum.BIND_EMAIL]: 'BIND EMAIL',
      [AuthActionEnum.CHANGE_PASSWORD]: 'CHANGE PASSWORD',
    },
  },
  dashboard: {
    nav: {
      application: 'Application',
      module: 'Modules',
    },
    system: 'System',
    logs: 'Application Logs',
    actionLogs: 'Auth Action Logs',
    user: 'Users',
    source: 'Sources',
    rule: 'Rules',
    media: 'Medias',
    series: 'Series',
    episode: 'Episodes',
    live: 'Lives',
    file: 'Files',
  },
  login: {
    username: 'Username',
    password: 'Password',
    hint: 'Login to MinaPlay',
    btn: 'Login',
  },
  utils: {
    copied: 'Copied to clipboard.',
    copyFailed: 'Copy failed!',
  },
  status: {
    [StatusEnum.PENDING]: 'Running',
    [StatusEnum.SUCCESS]: 'Success',
    [StatusEnum.PAUSED]: 'Paused',
    [StatusEnum.FAILED]: 'Failed',
    unknown: 'Unknown',
  },
  error: {
    [ErrorCodeEnum.BAD_REQUEST]: 'Request failed! Params invalid',
    [ErrorCodeEnum.INTERNAL_SERVER_ERROR]: 'Request failed! Server is busy',
    [ErrorCodeEnum.QUERY_FAILED]: 'Request failed! Params invalid',
    [ErrorCodeEnum.UNKNOWN_ERROR]: 'Request failed! Unknown Error',
    [ErrorCodeEnum.NO_SYNC_FIELD]: 'Request failed! No sync field',
    [ErrorCodeEnum.NOT_FOUND]: 'Request failed! Resource not found',
    [ErrorCodeEnum.WRONG_USERNAME_OR_PASSWORD]: 'Wrong username or password',
    [ErrorCodeEnum.USER_NOT_LOGGED_IN]: 'User not logged in',
    [ErrorCodeEnum.NO_PERMISSION]: 'Operation not permitted',
    [ErrorCodeEnum.INVALID_TOKEN]: 'Token is expired or invalid',
    [ErrorCodeEnum.USERNAME_ALREADY_OCCUPIED]: 'Username is already occupied',
    [ErrorCodeEnum.EMAIL_ALREADY_OCCUPIED]: 'Email is already occupied',
    [ErrorCodeEnum.WRONG_EMAIL_VERIFY_CODE]: 'Wrong email verify code',
    [ErrorCodeEnum.INVALID_FILE]: 'Wrong file type',
    [ErrorCodeEnum.INVALID_IMAGE_FILE_TYPE]: 'Wrong file content',
    [ErrorCodeEnum.INVALID_VIDEO_FILE_TYPE]: 'Wrong file content',
    [ErrorCodeEnum.DUPLICATE_SERIES]: 'Duplicated series name',
    [ErrorCodeEnum.INVALID_SUBSCRIBE_SOURCE_FORMAT]: 'Subscribe source format is invalid RSS',
    [ErrorCodeEnum.INVALID_SUBSCRIBE_RULE_CODE]: 'Subscribe rule code is invalid',
    [ErrorCodeEnum.DUPLICATED_DOWNLOAD_ITEM]: 'Duplicated download item',
    [ErrorCodeEnum.USER_CHAT_MUTED]: 'User chat is muted by room owner',
    [ErrorCodeEnum.USER_VOICE_MUTED]: 'User voice is muted by room owner',
    [ErrorCodeEnum.VOICE_SERVICE_ESTABLISH_FAILED]: 'User voice initialize failed',
    [ErrorCodeEnum.WRONG_LIVE_PASSWORD]: 'Wrong live password',
    [ErrorCodeEnum.DUPLICATED_CONNECTION]: 'Duplicated live connection',
    [ErrorCodeEnum.TIMEOUT]: 'Request timeout! Please try again later',
    other: 'Request failed! Please try again later',
  },
};
