import { ErrorCodeEnum } from '@/api/enums/error-code.enum';
import { StatusEnum } from '@/api/enums/status.enum';
import { FileSourceEnum } from '@/api/enums/file-source.enum';
import { MessageSchema } from '@/lang/index';
import { AuthActionEnum } from '@/api/enums/auth-action.enum';
import { NotificationServiceEnum } from '@/api/enums/notification-service.enum';
import { NotificationEventEnum } from '@/api/enums/notification-event.enum';

const zh: MessageSchema = {
  app: {
    name: 'MinaPlay',
    ok: '确认',
    cancel: '取消',
    on: '已开启',
    off: '已关闭',
    auto: '自动',
    unknown: '未知',
    or: '或',
    none: '无',
    loader: {
      loading: '加载中...',
      error: '加载失败了！请尝试 ',
      all: '加载完成',
      empty: '这里空空如也~',
      notLoaded: '数据未加载！请尝试 ',
      moreBtn: '加载更多',
      retryBtn: '重新加载',
      loadBtn: '加载',
      itemsPerPage: '每页数据数量',
      pageText: '第 {page} 页，共 {max} 页',
    },
    player: {
      danmaku: {
        settings: '弹幕设置',
        fontSize: '字体大小',
        opacity: '透明度',
        shadow: '字体描边',
      },
    },
    input: {
      keyword: '搜索关键字',
      placeholder: '查找 {item}...',
      sort: '排列',
      order: '顺序',
      status: '状态',
      unselected: '未选择',
      desc: '降序',
      asc: '升序',
    },
    entities: {
      user: '用户',
      source: 'RSS 订阅源',
      rule: '订阅规则',
      download: '下载项目',
      live: '放映室',
      media: '媒体文件',
      series: '剧集',
      episode: '单集',
      file: '文件',
      notificationMeta: '通知服务',
    },
    actions: {
      add: '新建',
      save: '保存',
      reset: '重置',
      delete: '删除',
      edit: '编辑',
      clear: '清空',
      close: '关闭',
      view: '查看',
      retry: '重试',
      refresh: '刷新',
      upload: '上传',
      download: '下载',
      select: '选择',
      selectAll: '全选',
      unselectAll: '全不选',
      send: '发送',
      more: '[展开]',
      collapse: '[收起]',
      pause: '暂停',
      unpause: '继续',
      cancel: '取消',
      copy: '复制',
      saveToast: '对象已保存',
      deleteTitle: '删除确认',
      deleteConfirm: '确定要删除此{item}吗？',
      deleteToast: '对象已删除',
    },
  },
  layout: {
    sections: '菜单',
    dark: '夜间模式',
    light: '昼间模式',
    actions: {
      search: '搜索资源',
      pluginConsole: '插件控制台',
      upload: '上传媒体文件',
      github: '访问 Github',
    },
    navs: {
      resource: '媒体库',
      home: '主页',
      search: '搜索',
      live: '放映室',
      subscribe: '订阅',
      source: 'RSS 订阅源',
      rule: '订阅规则',
      download: '下载任务',
      parser: '解析器',
      dashboard: '控制台',
      setting: '设置',
      install: '安装 MinaPlay 应用',
    },
    user: {
      edit: '编辑用户资料',
      notification: {
        title: '通知中心',
        unread: '未读',
        read: '已读',
      },
      logout: {
        title: '注销登录确认',
        confirm: '确定要注销登录当前 MinaPlay 账号吗？',
        btn: '注销登录',
      },
    },
    upload: {
      title: '文件上传',
      drop: '将文件拖动到此处上传',
      closePageHint: '关闭此页面会终止所有上传任务！',
      cancelTitle: '取消确认',
      cancelConfirm: '确定要取消上传此文件吗？',
      status: {
        finished: '已完成',
        generating: '正在生成资源文件',
        sizeExceed: '文件大小超过 10GB',
        canceled: '已取消',
        error: '未知错误',
      },
    },
    error: {
      back: '返回',
      noPermission: '没有权限访问该页面',
      notFound: '所访问的页面不存在',
    },
  },
  download: {
    title: '下载任务',
    item: '下载项目',
    copyLink: '复制下载链接',
    linkCopied: '链接已复制',
    linkCopyFailed: '链接复制失败',
    createAt: '创建于',
    deleteConfirm: '确定要删除此下载项目吗？该操作可能导致资源文件的重复下载。',
    create: '创建下载任务',
    url: '下载链接',
    name: '任务名称（可选）',
  },
  parser: {
    available: '可用解析器',
    calendar: '更新日期表',
    weekdays: {
      today: '今天',
      0: '周日',
      1: '周一',
      2: '周二',
      3: '周三',
      4: '周四',
      5: '周五',
      6: '周六',
    },
    search: '查找剧集',
  },
  resource: {
    seriesUpdates: '最新剧集',
    mediaUpdates: '最新媒体',
    histories: '历史记录',
    allSeries: '全部剧集',
    medias: '媒体',
    recommendMedias: '推荐媒体',
    series: '剧集',
    recommendSeries: '推荐剧集',
    episodes: '单集',
    information: '信息',
    noDescription: '无描述内容',
    continuePlay: '已定位到上次播放位置',
    watched: '看过',
    fin: '已完结',
    episode: {
      next: '下集',
      previous: '上集',
    },
    actions: {
      copy: '复制播放链接',
      openInPlayer: '在本地播放器中打开',
      play: '一起看',
      watch: '立即播放',
    },
  },
  media: {
    entity: {
      name: '名称',
      description: '描述',
      isPublic: '是否公开',
      poster: '海报',
      createAt: '创建时间',
    },
  },
  series: {
    seasonLabel: '第 {season} 季',
    entity: {
      name: '名称',
      description: '描述',
      poster: '海报',
      season: '季度',
      pubAt: '发布日期',
      tags: '标签',
      count: '总集数',
      finished: '是否完结',
      user: '创建用户',
      createAt: '创建时间',
    },
  },
  episode: {
    entity: {
      title: '标题',
      no: '集号',
      series: '剧集',
      media: '媒体文件',
      pubAt: '发布时间',
      createAt: '创建时间',
    },
  },
  user: {
    deleted: '已删除用户',
    noPermissions: '无操作权限',
    entity: {
      username: '用户名',
      password: '密码',
      permissions: '用户权限',
      avatar: '头像',
      notify: '是否启用通知',
      createAt: '创建时间',
    },
    actions: {
      modifyPermissions: '修改权限',
      resetPassword: '修改密码',
    },
    permission: {
      groups: {
        presets: '预设模板',
        file: '文件',
        media: '媒体文件',
        series: '剧集',
        subscribe: '订阅',
        live: '放映室',
      },
      presets: {
        administrator: '管理员',
        user: '普通用户',
        guest: '访客',
        banned: '禁用',
      },
      fullAccess: '完全控制',
      view: '查看',
      uploadVideo: '视频上传',
      uploadImage: '图片上传',
    },
  },
  source: {
    title: 'RSS 订阅源',
    unnamed: '未命名 RSS 订阅源',
    working: '已启用',
    paused: '已停止',
    nextTriggerTimes: '解析时间:',
    wrongCronExp: '错误的 CRON 表达式',
    entity: {
      id: 'ID',
      title: '标题',
      remark: '备注',
      cron: 'CRON 表达式',
      url: '链接',
      enabled: '是否启用',
      user: '创建用户',
      createAt: '创建时间',
    },
    sections: {
      info: '信息',
      raw: '原始数据',
      log: '解析日志',
      download: '下载项目',
      rule: '订阅规则',
    },
    info: {
      actions: '操作',
      update: '更新',
      updateDescription: '立即执行更新， MinaPlay 将会自动下载符合您定义的`订阅源规则`的媒体资源文件。',
      updateBtn: '立即更新',
      updateToast: '执行更新成功',
      enabled: '启用状态',
      enabledDescription: '表示该订阅源是否启用。',
      delete: '删除订阅源',
      deleteDescription: '删除此订阅源，该操作不可撤销！',
      cronExps: {
        every10Minutes: '每10分钟',
        every30Minutes: '每30分钟',
        everyHour: '每小时',
        every6Hours: '每6小时',
        everyDay: '每天凌晨 0:00',
      },
    },
    raw: {
      parsedView: '解析视图',
      rawView: '原始视图',
      publishAt: '发布于:',
      visit: '访问网站',
      openPage: '访问发布页',
      download: '在 MinaPlay 中下载',
      downloadCreated: '已创建下载项目',
      copyLink: '复制下载链接',
      linkCopied: '链接已复制',
      linkCopyFailed: '链接复制失败',
    },
    logs: {
      clearLogsTitle: '清空确认',
      clearLogsConfirm: '确定要清空所有日志吗？',
    },
  },
  rule: {
    title: '订阅规则',
    unnamed: '未命名订阅规则',
    template: '选择模板',
    templates: {
      default: '默认模板',
      regexp: '正则表达式模板',
      filter: '内容过滤器模板',
      'download-all': '全部下载模板',
    },
    entity: {
      id: 'ID',
      remark: '备注',
      sources: 'RSS 订阅源',
      user: '创建用户',
      createAt: '创建时间',
      updateAt: '修改时间',
    },
    sections: {
      info: '信息',
      error: '错误日志',
      download: '下载项目',
    },
    info: {
      code: '代码',
      actions: '操作',
      delete: '删除订阅规则',
      deleteDescription: '删除此订阅规则，该操作不可撤销！',
      duplicate: '复制订阅规则',
      duplicateDescription: '复制此订阅规则，使用相同代码、RSS订阅源创建新的订阅规则。',
      duplicateBtn: '复制',
      copyLabel: '（副本）',
    },
    logs: {
      clearLogsTitle: '清空确认',
      clearLogsConfirm: '确定要清空所有日志吗？',
    },
  },
  file: {
    entity: {
      name: '名称',
      size: '大小',
      md5: 'MD5',
      mimetype: 'Mimetype',
      source: '来源',
      createAt: '创建时间',
    },
    source: {
      [FileSourceEnum.AUTO_GENERATED]: '自动生成',
      [FileSourceEnum.DOWNLOAD]: '自动下载',
      [FileSourceEnum.USER_UPLOAD]: '用户上传',
      [FileSourceEnum.NETWORK]: '网络',
      [FileSourceEnum.LOCAL]: '本地',
      other: '未知来源',
    },
  },
  live: {
    title: '放映室',
    unnamed: '未命名放映室',
    entity: {
      title: '标题',
      password: '密码',
      hasPassword: '密码验证',
      poster: '海报',
      user: '创建用户',
      stream: '直播流',
      createAt: '创建时间',
    },
    play: {
      sendChat: '发送聊天消息...',
      validateTitle: '密码验证',
      validateHint: '该放映室需要密码验证',
      validate: '验证',
      streamTitle: '播放确认',
      streamHint: '是否播放选中的媒体资源文件？',
      disposeTitle: '关闭提示',
      disposeHint: '放映室已被管理员关闭',
      closeTitle: '关闭确认',
      closeConfirm: '确定要关闭该放映室吗？',
      exit: '退出',
      password: '密码',
      cancelPassword: '取消密码验证',
      passwordLengthRule: '密码至少需要包含4个字符',
      unknownChatType: '未知消息类型',
      noStream: '无直播流',
      stopStreaming: '停止直播',
      stream: {
        'client-sync': '客户端同步',
        'server-push': '服务端推流',
        'live-stream': '第三方视频流',
        type: '直播流类型',
        url: '链接',
      },
      playing: '正在看： ',
      voice: {
        single: '您包场了此语音房间！',
        voiceNotConnected: '放映室语音服务未连接',
        voiceConnectFailed: '连接放映室语音服务失败',
        voiceNotEnabled: '浏览器录音被禁止',
        join: '加入语音',
        quit: '退出语音',
        muted: '已静音',
        speaking: '说话中',
      },
      tabs: {
        chat: '聊天消息',
        voice: '房间语音',
        settings: '房间设置',
      },
      notify: {
        connect: '已连接放映室',
        disconnect: '已和放映室断开连接',
        'member-join': '加入了放映室',
        'member-quit': '离开了放映室',
        'member-mute-chat': '您已被放映室管理员禁言',
        'member-mute-voice': '您已被放映室管理员静音',
        'member-kick': `您已被移出该放映室`,
      },
    },
  },
  actionLog: {
    entity: {
      ip: 'IP',
      action: '操作',
      operator: '操作用户',
      target: '对象用户',
      createAt: '创建时间',
    },
    actions: {
      [AuthActionEnum.LOGIN]: '登录',
      [AuthActionEnum.LOGOUT]: '登出',
      [AuthActionEnum.REFRESH]: '刷新令牌',
      [AuthActionEnum.GRANT]: '授予权限',
      [AuthActionEnum.CHANGE_PASSWORD]: '更改密码',
    },
  },
  plugin: {
    console: '插件控制台',
    openConsole: '打开插件控制台',
    sendChat: '发送消息到插件控制台...',
    initializing: '正在初始化插件控制台...',
    connectFailed: '插件控制台连接失败',
    welcome: `欢迎使用 MinaPlay 插件控制台。\n使用命令 'help' 查看 MinaPlay 插件控制台支持的命令列表。`,
    official: '官方插件',
    program: '提供命令: {program}',
    parser: '提供解析: {parser}',
    enabled: '已启用',
    disabled: '已禁用',
    enablePlugin: '启用插件',
    disablePlugin: '禁用插件',
    uninstallTitle: '卸载确认',
    uninstallHint: '确定要卸载此插件吗？',
    uninstalled: '插件已卸载',
    entity: {
      repo: '源码仓库',
      author: '作者',
      version: '当前版本',
      license: '开源许可',
    },
  },
  dashboard: {
    nav: {
      application: '应用程序',
      module: '模块',
    },
    system: '系统',
    logs: '程序日志',
    actionLogs: '操作日志',
    plugins: '插件',
    user: '用户',
    source: 'RSS 订阅源',
    rule: '订阅规则',
    media: '媒体文件',
    series: '剧集',
    episode: '单集',
    live: '放映室',
    file: '文件',
  },
  system: {
    usage: '用量',
    diskUsage: '存储空间用量',
    memoryUsage: '内存用量',
    usageLabels: {
      minaplay: 'MinaPlay 使用',
      others: '其他应用使用',
      free: '空闲',
    },
    workingTime: '工作时间',
    startTime: '启动时间',
    workedTime: '已持续运行',
    version: '版本',
    currentVersion: '当前版本',
    latestVersion: '最新版本',
    updateAvailable: '可更新',
    about: {
      title: '关于',
      description: 'MinaPlay 是一个基于 RSS 订阅的追番 / 追剧个人媒体库。',
      copyright: 'MinaPlay ©2024 Nepsyn.',
      license: 'AGPL-3.0',
      doc: '官方文档',
      github: 'GitHub 仓库',
    },
  },
  logs: {
    clearTitle: '清空确认',
    clearConfirm: '确定要清空所有日志吗？',
  },
  settings: {
    title: '设置',
    sections: {
      app: '偏好设置',
      profile: '用户资料',
    },
    app: {
      ui: '显示',
      language: '默认语言',
      languageDescription: 'MinaPlay 页面默认显示语言。',
      theme: '默认主题样式',
      themeDescription: 'MinaPlay 页面默认主题样式。',
      common: '通用',
      subtitle: '视频字幕',
      subtitleDescription: '是否在视频播放时自动播放视频字幕。',
      danmaku: '放映室弹幕',
      danmakuDescription: '是否在放映室连接时自动播放弹幕。',
      joinVoice: '自动加入放映室语音',
      joinVoiceDescription: '是否在放映室连接时自动加入语音房间。',
      autoContinue: '自动续播',
      autoContinueDescription: '是否自动续播到上次播放位置',
      homepage: '主页内容',
      homepageHint: '拖拽下方板块进行排序或隐藏',
      visiblePlates: '可见板块',
      hiddenPlates: '隐藏板块',
      noPlate: '这里似乎没有可见板块',
    },
    profile: {
      basic: '基本信息',
      username: '用户名',
      avatar: '用户头像',
      uploadAvatar: '上传新头像',
      globalNotification: '全局通知',
      password: '密码',
      oldPassword: '原密码',
      newPassword: '新密码',
      passwordConfirm: '确认新密码',
      passwordChanged: '密码已更改，请重新登录',
      passwordLength: '密码长度应在 6~40 之间',
      passwordMismatch: '两次输入的新密码不一致',
      changePassword: '更改密码',
      notification: '通知',
      availableAdapters: '可选通知服务',
      adapters: {
        [NotificationServiceEnum.WS]: '客户端通知',
        [NotificationServiceEnum.EMAIL]: '邮箱通知',
        [NotificationServiceEnum.SERVER_CHAN]: 'ServerChan 通知',
        [NotificationServiceEnum.TELEGRAM]: 'Telegram 通知',
      },
      editSubscriptions: '编辑消息订阅',
      subscriptions: {
        [NotificationEventEnum.NEW_MEDIA]: '媒体文件更新',
        [NotificationEventEnum.NEW_EPISODE]: '剧集更新',
      },
      email: {
        address: '邮箱地址',
        sendCode: '发送验证码',
        resend: '{timeout}秒后重新发送',
        verifyCode: '邮箱验证码',
        verify: '验证',
      },
      serverChan: {
        token: 'Token',
      },
      telegram: {
        token: 'Token',
        chatId: 'Chat ID',
      },
    },
  },
  login: {
    username: '用户名',
    password: '密码',
    hint: '登录到 MinaPlay',
    btn: '登录',
  },
  utils: {
    copied: '已复制到剪切板',
    copyFailed: '复制失败',
  },
  status: {
    [StatusEnum.PENDING]: '运行中',
    [StatusEnum.SUCCESS]: '已完成',
    [StatusEnum.PAUSED]: '暂停中',
    [StatusEnum.FAILED]: '已失败',
    unknown: '未知',
  },
  notification: {
    markAsRead: '标记为已读',
    markAsUnread: '标记为未读',
    titles: {
      [NotificationEventEnum.NEW_MEDIA]: '媒体文件更新',
      [NotificationEventEnum.NEW_EPISODE]: '剧集更新',
    },
    descriptions: {
      [NotificationEventEnum.NEW_MEDIA]: `MinaPlay 中更新了新的媒体文件 《{name}》`,
      [NotificationEventEnum.NEW_EPISODE]: `MinaPlay 中更新了新的剧集 《{series} #{no}》`,
    },
  },
  error: {
    [ErrorCodeEnum.BAD_REQUEST]: '请求失败！参数错误',
    [ErrorCodeEnum.INTERNAL_SERVER_ERROR]: '请求失败！服务器繁忙',
    [ErrorCodeEnum.QUERY_FAILED]: '请求失败！参数错误',
    [ErrorCodeEnum.UNKNOWN_ERROR]: '请求失败！未知错误',
    [ErrorCodeEnum.NO_SYNC_FIELD]: '请求失败！无同步字段',
    [ErrorCodeEnum.NOT_FOUND]: '请求失败！所访问的资源不存在',
    [ErrorCodeEnum.TIMEOUT]: '请求超时！请稍后再试',
    [ErrorCodeEnum.NOT_IMPLEMENTED]: '请求失败！操作未支持',
    [ErrorCodeEnum.WRONG_USERNAME_OR_PASSWORD]: '用户名或密码错误',
    [ErrorCodeEnum.USER_NOT_LOGGED_IN]: '用户未登录',
    [ErrorCodeEnum.NO_PERMISSION]: '无操作权限',
    [ErrorCodeEnum.INVALID_TOKEN]: 'Token已过期或失效',
    [ErrorCodeEnum.USERNAME_ALREADY_OCCUPIED]: '用户名被注册',
    [ErrorCodeEnum.INVALID_FILE]: '文件类型错误',
    [ErrorCodeEnum.INVALID_IMAGE_FILE_TYPE]: '文件内容错误',
    [ErrorCodeEnum.INVALID_VIDEO_FILE_TYPE]: '文件内容错误',
    [ErrorCodeEnum.DUPLICATE_SERIES]: '剧集已存在',
    [ErrorCodeEnum.INVALID_SUBSCRIBE_SOURCE_FORMAT]: '订阅源内容不是合法的 RSS 格式',
    [ErrorCodeEnum.INVALID_SUBSCRIBE_RULE_CODE]: '订阅规则错误',
    [ErrorCodeEnum.DUPLICATED_DOWNLOAD_ITEM]: '下载项目已存在',
    [ErrorCodeEnum.USER_CHAT_MUTED]: '用户已被管理员禁言',
    [ErrorCodeEnum.USER_VOICE_MUTED]: '用户已被管理员静音',
    [ErrorCodeEnum.VOICE_SERVICE_ESTABLISH_FAILED]: '放映室语音服务初始化失败',
    [ErrorCodeEnum.WRONG_LIVE_PASSWORD]: '放映室密码错误',
    [ErrorCodeEnum.DUPLICATED_CONNECTION]: '存在多个放映室连接',
    [ErrorCodeEnum.DUPLICATED_NOTIFICATION_SERVICE]: '已存在同类型通知服务',
    [ErrorCodeEnum.WRONG_EMAIL_VERIFY_CODE]: '邮箱验证码错误',
    [ErrorCodeEnum.BUILTIN_PLUGIN_NOT_UNINSTALLABLE]: '不可卸载内置插件',
    other: '请求失败！请稍后再试',
  },
};

export default zh;
