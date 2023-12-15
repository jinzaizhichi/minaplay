import { ErrorCodeEnum } from '@/api/enums/error-code.enum';
import { StatusEnum } from '@/api/enums/status.enum';
import { FileSourceEnum } from '@/api/enums/file-source.enum';

export default {
  app: {
    name: 'MinaPlay',
    ok: 'OK',
    cancel: 'Cancel',
    on: 'ON',
    off: 'OFF',
    loader: {
      loading: 'Loading...',
      error: 'Whoops, something went wrong! Please try ',
      all: 'All items loaded',
      empty: 'No items founded',
      notLoaded: 'Data not loaded! Please try ',
      moreBtn: 'Load More',
      retryBtn: 'Reload',
      loadBtn: 'Load',
      itemsPerPage: 'Items Per Page',
      pageText: 'Page {page} of {max}',
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
      source: 'RSS source',
      rule: 'subscribe rule',
      download: 'download item',
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
      cancelTitle: 'Cancel Confirm',
      cancelConfirm: 'Are your sure to cancel this upload?',
      status: {
        finished: 'Finished',
        generating: 'Generating Media Files',
        sizeExceed: 'File Size Exceeded(> 10GB)',
        canceled: 'Canceled',
        wrongType: 'Wrong File Type',
        wrongContent: 'Wrong File Content',
        error: 'Unknown Error',
      },
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
      openInVLC: 'Open VLC',
      play: 'Play Together',
      watch: 'Watch Now',
    },
  },
  media: {
    entity: {
      name: 'Name',
      isPublic: 'Is Public',
      poster: 'Poster',
      createAt: 'Create At',
    },
  },
  series: {
    entity: {
      name: 'Name',
      poster: 'Poster',
      season: 'Season',
      count: 'Episode Count',
      user: 'User',
      createAt: 'Create At',
    },
  },
  episode: {
    entity: {
      title: 'Title',
      no: 'No',
      series: 'Series',
      media: 'Media',
      pubAt: 'Publish At',
      createAt: 'Create At',
    },
  },
  user: {
    entity: {
      username: 'Username',
      avatar: 'Avatar',
      email: 'Email',
      notify: 'Notify Enabled',
      createAt: 'Create At',
    },
    actions: {
      modifyPermissions: 'Modify Permissions',
      resetPassword: 'Reset Password',
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
      user: 'Create User',
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
      updateToast: 'Run update succeeded.',
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
      user: 'Create User',
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
      [FileSourceEnum.ARIA2_DOWNLOAD]: 'Auto Download',
      [FileSourceEnum.USER_UPLOAD]: 'User Upload',
      other: 'Unknown Source',
    },
  },
  live: {
    entity: {
      title: 'Title',
      hasPassword: 'Need Password',
      poster: 'Poster',
      user: 'User',
      createAt: 'Create At',
    },
  },
  dashboard: {
    sections: {
      system: 'System',
      user: 'Users',
      source: 'Sources',
      rule: 'Rules',
      media: 'Medias',
      series: 'Series',
      episode: 'Episodes',
      live: 'Lives',
      file: 'Files',
    },
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
    [ErrorCodeEnum.BAD_REQUEST]: 'Params invalid! Please check your inputs',
    [ErrorCodeEnum.WRONG_USERNAME_OR_PASSWORD]: 'Wrong username or password',
    [ErrorCodeEnum.INVALID_TOKEN]: 'Token is expired or invalid',
    [ErrorCodeEnum.NO_PERMISSION]: 'Operation not permitted',
    other: 'Request failed! Please try again later',
  },
};
