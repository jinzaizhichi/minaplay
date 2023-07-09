export enum PermissionEnum {
  /** 最高权限 */
  ROOT_OP = '*:*',

  /** 用户管理 */
  USER_OP = 'USER:*',
  /* 用户查看 */
  USER_VIEW = 'USER:VIEW',

  /** 文件管理 */
  FILE_OP = 'FILE:*',
  /** 上传图片 */
  FILE_UPLOAD_IMAGE = 'FILE:UPLOAD:IMAGE',
  /** 上传视频 */
  FILE_UPLOAD_VIDEO = 'FILE_UPLOAD:VIDEO',

  /** 媒体管理 */
  MEDIA_OP = 'MEDIA:*',
  /** 媒体查看 */
  MEDIA_VIEW = 'MEDIA:VIEW',

  /** 剧集管理 */
  SERIES_OP = 'SERIES:*',
  /** 剧集查看 */
  SERIES_VIEW = 'SERIES:VIEW',

  /** 订阅管理 */
  SUBSCRIBE_OP = 'SUBSCRIBE:*',
  /** 订阅查看 */
  SUBSCRIBE_VIEW = 'SUBSCRIBE:VIEW',

  /** 直播管理 */
  LIVE_OP = 'LIVE:*',
  /** 直播查看 */
  LIVE_VIEW = 'LIVE:VIEW',
}
