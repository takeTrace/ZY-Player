const setting = [
  {
    id: 0,
    theme: 'light',
    shortcut: true,
    view: 'picture',
    externalPlayer: '',
    searchAllSites: true,
    excludeRootClasses: true,
    excludeR18Films: true,
    forwardTimeInSec: 5
  }
]

const sites = [
  {
    id: 1,
    key: 'okzy',
    name: 'OK 资源网',
    api: 'http://cj.okzy.tv/inc/api.php',
    download: 'http://cj.okzy.tv/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 2,
    key: 'zuidazy',
    name: '最大资源网',
    api: 'http://www.zdziyuan.com/inc/api.php',
    download: 'http://www.zdziyuan.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 3,
    key: 'doubanzy',
    name: '豆瓣电影资源',
    api: 'http://v.1988cj.com/inc/api.php',
    download: 'http://v.1988cj.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 4,
    key: '135zy',
    name: '135 资源网',
    api: 'http://cj.zycjw1.com/inc/api.php',
    download: 'http://cj.zycjw1.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 5,
    key: 'kuyunzy',
    name: '酷云资源',
    api: 'http://caiji.kuyun98.com/inc/ldg_api.php',
    download: 'http://caiji.kuyun98.com/inc/apidown.php',
    isActive: 1,
    group: '默认'
  },
  {
    id: 6,
    key: 'mgtvzy',
    name: '芒果 TV 资源网',
    api: 'https://api.shijiapi.com/api.php/provide/vod/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 7,
    key: 'subo988',
    name: '速播资源站',
    api: 'https://www.subo988.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 8,
    key: '209zy',
    name: '209 资源',
    api: 'http://cj.1156zy.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 9,
    key: 'zuixinzy',
    name: '最新资源',
    api: 'http://api.zuixinapi.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 10,
    key: 'kubozy',
    name: '酷播资源',
    api: 'http://api.kbzyapi.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 11,
    key: 'yongjiuzy',
    name: '永久资源',
    api: 'http://cj.yongjiuzyw.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 12,
    key: '123ku',
    name: '123 资源',
    api: 'http://cj.123ku2.com:12315/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 13,
    key: '88zyw',
    name: '88 影视资源站',
    api: 'http://www.88zyw.net/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 14,
    key: 'wolongzy',
    name: '卧龙资源',
    api: 'http://cj.wlzy.tv/inc/api_mac.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 15,
    key: 'mahuazy',
    name: '麻花资源',
    api: 'https://www.mhapi123.com/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 16,
    key: 'kkzy',
    name: '快快资源',
    api: 'https://api.kkzy.tv/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 17,
    key: '158zy',
    name: '壹伍捌资源网',
    api: 'http://cj.158zyz.net:158/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 18,
    key: 'rrzy',
    name: '人人资源',
    api: 'https://www.rrzyw.cc/api.php/provide/vod/from/rrm3u8/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 19,
    key: 'mokazy',
    name: '魔卡资源网',
    api: 'https://cj.heiyap.com/api.php/provide/vod/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 20,
    key: 'kyzy',
    name: '快影资源站',
    api: 'https://www.kyzy.tv/api.php/kyyun/vod/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 21,
    key: 'solezy',
    name: '搜乐资源网',
    api: 'https://www.caijizy.vip/api.php/provide/vod/at/xml/',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 22,
    key: 'bbkdj',
    name: '步步高顶尖资源网',
    api: 'http://api.bbkdj.com/api',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 23,
    key: '1886zy',
    name: '1886 资源',
    api: 'http://cj.1886zy.co/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 24,
    key: 'mbo',
    name: '秒播资源',
    api: 'http://caiji.mb77.vip/inc/api.php',
    download: '',
    isActive: 1,
    group: '默认'
  },
  {
    id: 25,
    key: '605zy',
    name: '605资源',
    api: 'http://www.605zy.net/inc/seacmsapi.php',
    download: '',
    isActive: 1,
    group: '默认'
  }
]

const localKey = [
  {
    name: 'playAndPause',
    desc: '播放或暂停',
    key: 'space'
  },
  {
    name: 'forward',
    desc: '快进',
    key: 'right'
  },
  {
    name: 'back',
    desc: '快退',
    key: 'left'
  },
  {
    name: 'volumeUp',
    desc: '音量调高',
    key: 'up'
  },
  {
    name: 'volumeDown',
    desc: '音量调低',
    key: 'down'
  },
  {
    name: 'mute',
    desc: '静音',
    key: 'm'
  },
  {
    name: 'top',
    desc: '置顶或退出置顶',
    key: 't'
  },
  {
    name: 'fullscreen',
    desc: '进入或退出全屏',
    key: 'f'
  },
  {
    name: 'escape',
    desc: '退出全屏',
    key: 'esc'
  },
  {
    name: 'next',
    desc: '下一集',
    key: 'alt+right'
  },
  {
    name: 'prev',
    desc: '上一集',
    key: 'alt+left'
  },
  {
    name: 'home',
    desc: '跳到视频开始位置',
    key: 'home'
  },
  {
    name: 'end',
    desc: '跳到视频结束位置',
    key: 'end'
  },
  {
    name: 'opacityUp',
    desc: '透明度调高',
    key: 'alt+up'
  },
  {
    name: 'opacityDown',
    desc: '透明度调低',
    key: 'alt+down'
  },
  {
    name: 'playbackRateUp',
    desc: '播放倍速加快',
    key: 'pageup'
  },
  {
    name: 'playbackRateDown',
    desc: '播放倍速减慢',
    key: 'pagedown'
  },
  {
    name: 'mini',
    desc: '进入或退出mini模式',
    key: 'alt+m'
  }
]

const getSite = (key) => {
  for (const i of sites) {
    if (key === i.key) {
      return i
    }
  }
}

const iptv = [
  {
    id: 1,
    name: 'CCTV-1蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225922/1.m3u8',
    group: '央视高清'
  },
  {
    id: 2,
    name: 'CCTV-2蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225923/1.m3u8',
    group: '央视高清'
  },
  {
    id: 3,
    name: 'CCTV-3蓝光',
    url: 'http://223.110.241.130:6610/gitv/live1/G_CCTV-3-HQ/.m3u8',
    group: '央视高清'
  },
  {
    id: 4,
    name: 'CCTV-4蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225802/1.m3u8',
    group: '央视高清'
  },
  {
    id: 5,
    name: 'CCTV-5蓝光',
    url: 'http://112.17.40.145/PLTV/88888888/224/3221226687/index.m3u8',
    group: '央视高清'
  },
  {
    id: 6,
    name: 'CCTV-5+蓝光',
    url: 'http://117.169.124.46:6410/ysten-businessmobile/live/hdcctv05plus/1.m3u8',
    group: '央视高清'
  },
  {
    id: 7,
    name: 'CCTV-6蓝光',
    url: 'http://223.110.243.139/PLTV/3/224/3221225548/index.m3u8',
    group: '央视高清'
  },
  {
    id: 8,
    name: 'CCTV-7蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225927/1.m3u8',
    group: '央视高清'
  },
  {
    id: 9,
    name: 'CCTV-8蓝光',
    url: 'http://117.169.124.36:6610/ysten-businessmobile/live/cctv-8/1.m3u8',
    group: '央视高清'
  },
  {
    id: 10,
    name: 'CCTV-9蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225820/1.m3u8',
    group: '央视高清'
  },
  {
    id: 11,
    name: 'CCTV-12蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225816/1.m3u8',
    group: '央视高清'
  },
  {
    id: 12,
    name: 'CCTV-14蓝光',
    url: 'http://117.148.187.37/PLTV/88888888/224/3221226126/index.m3u8',
    group: '央视高清'
  },
  {
    id: 13,
    name: 'CCTV-1HD',
    url: 'http://39.134.65.162/PLTV/88888888/224/3221225686/index.m3u8',
    group: '央视'
  },
  {
    id: 14,
    name: 'CCTV-2HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225747/index.m3u8',
    group: '央视'
  },
  {
    id: 15,
    name: 'CCTV-4HD',
    url: 'http://39.134.65.162/PLTV/88888888/224/3221225487/index.m3u8',
    group: '央视'
  },
  {
    id: 16,
    name: 'CCTV-3HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225785/index.m3u8',
    group: '央视'
  },
  {
    id: 17,
    name: 'CCTV-5HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225753/index.m3u8',
    group: '央视'
  },
  {
    id: 18,
    name: 'CCTV-5+HD',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226910/index.m3u8',
    group: '央视'
  },
  {
    id: 19,
    name: 'CCTV-6HD',
    url: 'http://39.134.65.162/PLTV/88888888/224/3221225786/index.m3u8',
    group: '央视'
  },
  {
    id: 20,
    name: 'CCTV-7HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225733/index.m3u8',
    group: '央视'
  },
  {
    id: 21,
    name: 'CCTV-8HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225750/index.m3u8',
    group: '央视'
  },
  {
    id: 22,
    name: 'CCTV-9HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225734/index.m3u8',
    group: '央视'
  },
  {
    id: 23,
    name: 'CCTV-10HD',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225814/1.m3u8',
    group: '央视'
  },
  {
    id: 24,
    name: 'CCTV-11HD',
    url: 'http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221225499/1.m3u8',
    group: '央视'
  },
  {
    id: 25,
    name: 'CCTV-12HD',
    url: 'http://39.134.65.162/PLTV/88888888/224/3221225518/index.m3u8',
    group: '央视'
  },
  {
    id: 26,
    name: 'CCTV13 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226316/1.m3u8',
    group: '央视'
  },
  {
    id: 27,
    name: 'CCTV14 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226229/1.m3u8',
    group: '央视'
  },
  {
    id: 28,
    name: 'CCTV15 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226333/1.m3u8',
    group: '央视'
  },
  {
    id: 29,
    name: 'CCTV17 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226318/1.m3u8',
    group: '央视'
  },
  {
    id: 30,
    name: '澳亚卫视',
    url: 'http://stream.mastvnet.com/MSTV/playlist.m3u8',
    group: '卫视'
  },
  {
    id: 31,
    name: '澳门卫视',
    url: 'http://stream.mastvnet.com/MSTV/SD/live.m3u8',
    group: '卫视'
  },
  {
    id: 32,
    name: '新疆卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225901/1.m3u8',
    group: '卫视'
  },
  {
    id: 33,
    name: '山西卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225895/1.m3u8',
    group: '卫视'
  },
  {
    id: 34,
    name: '西藏卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225900/1.m3u8',
    group: '卫视'
  },
  {
    id: 35,
    name: '内蒙卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225891/1.m3u8',
    group: '卫视'
  },
  {
    id: 36,
    name: '宁夏卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225892/1.m3u8',
    group: '卫视'
  },
  {
    id: 37,
    name: '陕西卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225896/1.m3u8',
    group: '卫视'
  },
  {
    id: 38,
    name: '云南卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225902/1.m3u8',
    group: '卫视'
  },
  {
    id: 39,
    name: '青海卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225893/1.m3u8',
    group: '卫视'
  },
  {
    id: 40,
    name: '甘肃卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225877/1.m3u8',
    group: '卫视'
  },
  {
    id: 41,
    name: '厦门卫视',
    url: 'http://ott.fj.chinamobile.com/PLTV/88888888/224/3221226781/1.m3u8',
    group: '卫视'
  },
  {
    id: 42,
    name: '江西卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226243/1.m3u8',
    group: '卫视'
  },
  {
    id: 43,
    name: '龙江卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226239/1.m3u8',
    group: '卫视'
  },
  {
    id: 44,
    name: '辽宁卫视',
    url: 'http://ott.fj.chinamobile.com/PLTV/88888888/224/3221225947/1.m3u8',
    group: '卫视'
  },
  {
    id: 45,
    name: '深圳卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226245/1.m3u8',
    group: '卫视'
  },
  {
    id: 46,
    name: '广东卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226238/1.m3u8',
    group: '卫视'
  },
  {
    id: 47,
    name: '安徽卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226223/1.m3u8',
    group: '卫视'
  },
  {
    id: 48,
    name: '湖北卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226310/1.m3u8',
    group: '卫视'
  },
  {
    id: 49,
    name: '山东卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226308/1.m3u8',
    group: '卫视'
  },
  {
    id: 50,
    name: '江苏卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226242/1.m3u8',
    group: '卫视'
  },
  {
    id: 51,
    name: '浙江卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226247/1.m3u8',
    group: '卫视'
  },
  {
    id: 52,
    name: '湖南卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226241/1.m3u8',
    group: '卫视'
  },
  {
    id: 53,
    name: '东方卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226237/1.m3u8',
    group: '卫视'
  },
  {
    id: 54,
    name: '天津卫视',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226246/1.m3u8',
    group: '卫视'
  },
  {
    id: 55,
    name: '北京卫视',
    url: 'http://111.40.205.87/PLTV/88888888/224/3221225728/index.m3u8',
    group: '卫视'
  },
  {
    id: 56,
    name: '安多卫视',
    url: 'http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226311/1.m3u8',
    group: '卫视'
  },
  {
    id: 57,
    name: '农林卫视',
    url: 'http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226317/1.m3u8',
    group: '卫视'
  },
  {
    id: 58,
    name: '山东教育卫视',
    url: 'http://117.169.120.98:8080/ysten-businessmobile/live/shandongjy/1.m3u8',
    group: '卫视'
  },
  {
    id: 59,
    name: '康巴卫视',
    url: 'http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226316/1.m3u8',
    group: '卫视'
  },
  {
    id: 60,
    name: '延边卫视',
    url: 'http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226220/1.m3u8',
    group: '卫视'
  },
  {
    id: 61,
    name: '三沙卫视',
    url: 'http://39.130.215.158:6610/gitv_live/G_SANSHA/G_SANSHA.m3u8',
    group: '卫视'
  },
  {
    id: 62,
    name: '兵团卫视',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226950/1.m3u8',
    group: '卫视'
  },
  {
    id: 63,
    name: '重庆卫视',
    url: 'https://onsitecdn.cbgcloud.com/76btqk/d6tb4v.m3u8',
    group: '卫视'
  },
  {
    id: 64,
    name: '四川卫视',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226000/index.m3u8',
    group: '卫视'
  },
  {
    id: 65,
    name: '内蒙古卫视',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225846/1.m3u8',
    group: '卫视'
  },
  {
    id: 66,
    name: '广西卫视',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226002/index.m3u8',
    group: '卫视'
  },
  {
    id: 67,
    name: '吉林卫视',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225637/index.m3u8',
    group: '卫视'
  },
  {
    id: 68,
    name: '河南卫视',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226146/index.m3u8',
    group: '卫视'
  },
  {
    id: 69,
    name: '东南卫视',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226784/index.m3u8',
    group: '卫视'
  },
  {
    id: 70,
    name: '南方卫视',
    url: 'http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226218/1.m3u8',
    group: '卫视'
  },
  {
    id: 71,
    name: '黑龙江卫视',
    url: 'http://39.134.168.76/PLTV/1/224/3221225536/index.m3u8',
    group: '卫视'
  },
  {
    id: 72,
    name: '贵州卫视',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225838/1.m3u8',
    group: '卫视'
  },
  {
    id: 73,
    name: '河北卫视',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225623/index.m3u8',
    group: '卫视'
  },
  {
    id: 74,
    name: '吉林卫视HD',
    url: 'http://ivi.bupt.edu.cn/hls/jlhd.m3u8',
    group: '卫视'
  },
  {
    id: 75,
    name: '贵州卫视HD',
    url: 'http://39.130.215.158:6610/gitv_live/G_GUIZHOU-HD/G_GUIZHOU-HD.m3u8',
    group: '卫视'
  },
  {
    id: 76,
    name: '河南卫视HD',
    url: 'http://ivi.bupt.edu.cn/hls/hnhd.m3u8',
    group: '卫视'
  },
  {
    id: 77,
    name: '云南卫视HD',
    url: 'http://39.130.215.158:6610/gitv_live/G_YUNNAN-HD/G_YUNNAN-HD.m3u8',
    group: '卫视'
  },
  {
    id: 78,
    name: '广西卫视HD',
    url: 'http://39.130.215.158:6610/gitv_live/G_GUANGXI-HD/G_GUANGXI-HD.m3u8',
    group: '卫视'
  },
  {
    id: 79,
    name: '四川卫视HD',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226728/index.m3u8',
    group: '卫视'
  },
  {
    id: 80,
    name: '重庆卫视HD',
    url: 'http://39.134.65.162/PLTV/88888888/224/3221225502/index.m3u8',
    group: '卫视'
  },
  {
    id: 81,
    name: '江西卫视HD',
    url: 'http://39.134.65.162/PLTV/88888888/224/3221225512/index.m3u8',
    group: '卫视'
  },
  {
    id: 82,
    name: '东南卫视HD',
    url: 'http://39.134.168.76/PLTV/1/224/3221225580/index.m3u8',
    group: '卫视'
  },
  {
    id: 83,
    name: '辽宁卫视HD',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226049/index.m3u8',
    group: '卫视'
  },
  {
    id: 84,
    name: '安徽卫视HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225727/index.m3u8',
    group: '卫视'
  },
  {
    id: 85,
    name: '河北卫视HD',
    url: 'http://ivi.bupt.edu.cn/hls/hebhd.m3u8',
    group: '卫视'
  },
  {
    id: 86,
    name: '黑龙江卫视HD',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225862/1.m3u8',
    group: '卫视'
  },
  {
    id: 87,
    name: '湖北卫视HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225705/index.m3u8',
    group: '卫视'
  },
  {
    id: 88,
    name: '山东卫视HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225737/index.m3u8',
    group: '卫视'
  },
  {
    id: 89,
    name: '天津卫视HD',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225830/1.m3u8',
    group: '卫视'
  },
  {
    id: 90,
    name: '北京卫视HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225651/index.m3u8',
    group: '卫视'
  },
  {
    id: 91,
    name: '深圳卫视HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225645/index.m3u8',
    group: '卫视'
  },
  {
    id: 92,
    name: '广东卫视HD',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225699/index.m3u8',
    group: '卫视'
  },
  {
    id: 93,
    name: '东方卫视HD',
    url: 'http://39.134.65.162/PLTV/88888888/224/3221225672/index.m3u8',
    group: '卫视'
  },
  {
    id: 94,
    name: '浙江卫视HD',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221225975/index.m3u8',
    group: '卫视'
  },
  {
    id: 95,
    name: '江苏卫视HD',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226902/index.m3u8',
    group: '卫视'
  },
  {
    id: 96,
    name: '湖南卫视HD',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226144/index.m3u8',
    group: '卫视'
  },
  {
    id: 97,
    name: '旅游卫视',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/lyws/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 98,
    name: '黑龙江卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hljwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 99,
    name: '广东卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/gdwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 100,
    name: '深圳卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/szwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 101,
    name: '江苏卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/jswshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 102,
    name: '山东卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/sdwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 103,
    name: '湖南卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hnwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 104,
    name: '湖北卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hbwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 105,
    name: '浙江卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/zjwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 106,
    name: '东方卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hddfws/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 107,
    name: '北京卫视高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/bjwshd/1300000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 108,
    name: '黑龙江卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hljwshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 109,
    name: '东方卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hddfws/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 110,
    name: '广东卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/gdwshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 111,
    name: '湖北卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hbwshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 112,
    name: '山东卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/sdwshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 113,
    name: '深圳卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/szwshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 114,
    name: '浙江卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/zjwshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 115,
    name: '江苏卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/jswshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 116,
    name: '北京卫视1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/bjwshd/4000000/mnf.m3u8',
    group: '卫视'
  },
  {
    id: 117,
    name: '星空卫视',
    url: 'https://www.fanmingming.cn/hls/startv.m3u8',
    group: '卫视'
  },
  {
    id: 118,
    name: '西藏藏语卫视',
    url: 'http://media.vtibet.com/masvod/HLSLive/7/zangyuTV_q1.m3u8',
    group: '卫视'
  },
  {
    id: 119,
    name: '四川康巴卫视',
    url: 'http://scgctvshow.sctv.com/hdlive/kangba/1.m3u8',
    group: '卫视'
  },
  {
    id: 120,
    name: '南方卫视上星版',
    url: 'http://39.134.156.12/PLTV/88888888/224/3221225614/index.m3u8',
    group: '卫视'
  },
  {
    id: 121,
    name: '东方卫视国际频道',
    url: 'http://61.58.60.230:9319/live/227.m3u8',
    group: '卫视'
  },
  {
    id: 122,
    name: '重庆卫视蓝光',
    url: 'http://ivi.bupt.edu.cn/hls/cqhd.m3u8',
    group: '卫视'
  },
  {
    id: 123,
    name: '浙江卫视蓝光',
    url: 'http://223.110.243.173/PLTV/3/224/3221227215/index.m3u8',
    group: '卫视'
  },
  {
    id: 124,
    name: '天津卫视蓝光',
    url: 'http://112.17.40.140/PLTV/88888888/224/3221226412/index.m3u8',
    group: '卫视'
  },
  {
    id: 125,
    name: '深圳卫视蓝光',
    url: 'http://223.110.243.171/PLTV/3/224/3221227217/index.m3u8',
    group: '卫视'
  },
  {
    id: 126,
    name: '山东卫视蓝光',
    url: 'http://112.17.40.140/PLTV/88888888/224/3221226410/index.m3u8',
    group: '卫视'
  },
  {
    id: 127,
    name: '龙江卫视蓝光',
    url: 'http://112.17.40.140/PLTV/88888888/224/3221226555/index.m3u8',
    group: '卫视'
  },
  {
    id: 128,
    name: '辽宁卫视蓝光',
    url: 'http://223.110.245.145/ott.js.chinamobile.com/PLTV/3/224/3221227410/index.m3u8',
    group: '卫视'
  },
  {
    id: 129,
    name: '江西卫视蓝光',
    url: 'http://112.17.40.140/PLTV/88888888/224/3221226557/index.m3u8',
    group: '卫视'
  },
  {
    id: 130,
    name: '江苏卫视蓝光',
    url: 'http://112.17.40.140/PLTV/88888888/224/3221226414/index.m3u8',
    group: '卫视'
  },
  {
    id: 131,
    name: '湖南卫视蓝光',
    url: 'http://112.17.40.140/PLTV/88888888/224/3221226553/index.m3u8',
    group: '卫视'
  },
  {
    id: 132,
    name: '湖北卫视蓝光',
    url: 'http://223.110.243.171/PLTV/3/224/3221227211/index.m3u8',
    group: '卫视'
  },
  {
    id: 133,
    name: '广东卫视蓝光',
    url: 'http://112.17.40.140/PLTV/88888888/224/3221226225/index.m3u8',
    group: '卫视'
  },
  {
    id: 134,
    name: '东南卫视蓝光',
    url: 'http://hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226046/index.m3u8',
    group: '卫视'
  },
  {
    id: 135,
    name: '东方卫视蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225828/1.m3u8',
    group: '卫视'
  },
  {
    id: 136,
    name: '安徽卫视蓝光',
    url: 'http://223.110.245.147/ott.js.chinamobile.com/PLTV/3/224/3221225634/index.m3u8',
    group: '卫视'
  },
  {
    id: 137,
    name: '凤凰卫视中文台',
    url: 'http://117.169.120.138:8080/live/fhchinese/index.m3u8',
    group: '卫视'
  },
  {
    id: 138,
    name: '凤凰卫视资讯台',
    url: 'http://117.169.124.37:6610/ysten-businessmobile/live/fhzixun/1.m3u8',
    group: '卫视'
  },
  {
    id: 139,
    name: '内蒙卫视超清1',
    url: 'http://223.110.245.161/ott.js.chinamobile.com/PLTV/3/224/3221225836/index.m3u8',
    group: '卫视'
  },
  {
    id: 140,
    name: '宁夏卫视超清1',
    url: 'http://223.110.245.151/ott.js.chinamobile.com/PLTV/3/224/3221225842/index.m3u8',
    group: '卫视'
  },
  {
    id: 141,
    name: '云南卫视超清1',
    url: 'http://223.110.245.159/ott.js.chinamobile.com/PLTV/3/224/3221225838/index.m3u8',
    group: '卫视'
  },
  {
    id: 142,
    name: '贵州卫视超清2',
    url: 'http://223.110.245.149/ott.js.chinamobile.com/PLTV/3/224/3221225787/index.m3u8',
    group: '卫视'
  },
  {
    id: 143,
    name: '河南卫视超清2',
    url: 'http://223.110.245.157/ott.js.chinamobile.com/PLTV/3/224/3221225815/index.m3u8',
    group: '卫视'
  },
  {
    id: 144,
    name: '河北卫视超清1',
    url: 'http://223.110.245.149/ott.js.chinamobile.com/PLTV/3/224/3221225840/index.m3u8',
    group: '卫视'
  },
  {
    id: 145,
    name: '黑龙江卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226498/1.m3u8',
    group: '卫视'
  },
  {
    id: 146,
    name: '黑龙江卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226239/1.m3u8',
    group: '卫视'
  },
  {
    id: 147,
    name: '辽宁卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226500/1.m3u8',
    group: '卫视'
  },
  {
    id: 148,
    name: '贵州卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226497/1.m3u8',
    group: '卫视'
  },
  {
    id: 149,
    name: '湖南卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226509/1.m3u8',
    group: '卫视'
  },
  {
    id: 150,
    name: '湖南卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226241/1.m3u8',
    group: '卫视'
  },
  {
    id: 151,
    name: '湖北卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226503/1.m3u8',
    group: '卫视'
  },
  {
    id: 152,
    name: '湖北卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226240/1.m3u8',
    group: '卫视'
  },
  {
    id: 153,
    name: '深圳卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226495/1.m3u8',
    group: '卫视'
  },
  {
    id: 154,
    name: '深圳卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226245/1.m3u8',
    group: '卫视'
  },
  {
    id: 155,
    name: '浙江卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226504/1.m3u8',
    group: '卫视'
  },
  {
    id: 156,
    name: '浙江卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226247/1.m3u8',
    group: '卫视'
  },
  {
    id: 157,
    name: '河北卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226507/1.m3u8',
    group: '卫视'
  },
  {
    id: 158,
    name: '江西卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226243/1.m3u8',
    group: '卫视'
  },
  {
    id: 159,
    name: '江苏卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226242/1.m3u8',
    group: '卫视'
  },
  {
    id: 160,
    name: '广东卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226508/1.m3u8',
    group: '卫视'
  },
  {
    id: 161,
    name: '广东卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226238/1.m3u8',
    group: '卫视'
  },
  {
    id: 162,
    name: '山东卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226501/1.m3u8',
    group: '卫视'
  },
  {
    id: 163,
    name: '山东卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226244/1.m3u8',
    group: '卫视'
  },
  {
    id: 164,
    name: '安徽卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226499/1.m3u8',
    group: '卫视'
  },
  {
    id: 165,
    name: '安徽卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226223/1.m3u8',
    group: '卫视'
  },
  {
    id: 166,
    name: '天津卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226502/1.m3u8',
    group: '卫视'
  },
  {
    id: 167,
    name: '天津卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226246/1.m3u8',
    group: '卫视'
  },
  {
    id: 168,
    name: '江苏卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226506/1.m3u8',
    group: '卫视'
  },
  {
    id: 169,
    name: '北京卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226441/1.m3u8',
    group: '卫视'
  },
  {
    id: 170,
    name: '北京卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226224/1.m3u8',
    group: '卫视'
  },
  {
    id: 171,
    name: '东方卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226505/1.m3u8',
    group: '卫视'
  },
  {
    id: 172,
    name: '东方卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226237/1.m3u8',
    group: '卫视'
  },
  {
    id: 173,
    name: '东南卫视 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226496/1.m3u8',
    group: '卫视'
  },
  {
    id: 174,
    name: '东南卫视 HD',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226406/1.m3u8',
    group: '卫视'
  },
  {
    id: 175,
    name: '海南三沙卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226544/1.m3u8',
    group: '卫视'
  },
  {
    id: 176,
    name: '新疆兵团卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226541/1.m3u8',
    group: '卫视'
  },
  {
    id: 177,
    name: '山东教育卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226526/1.m3u8',
    group: '卫视'
  },
  {
    id: 178,
    name: '黑龙江卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225883/1.m3u8',
    group: '卫视'
  },
  {
    id: 179,
    name: '青海卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226529/1.m3u8',
    group: '卫视'
  },
  {
    id: 180,
    name: '陕西卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226532/1.m3u8',
    group: '卫视'
  },
  {
    id: 181,
    name: '重庆卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226518/1.m3u8',
    group: '卫视'
  },
  {
    id: 182,
    name: '辽宁卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225889/1.m3u8',
    group: '卫视'
  },
  {
    id: 183,
    name: '贵州卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226521/1.m3u8',
    group: '卫视'
  },
  {
    id: 184,
    name: '西藏卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226527/1.m3u8',
    group: '卫视'
  },
  {
    id: 185,
    name: '甘肃卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226545/1.m3u8',
    group: '卫视'
  },
  {
    id: 186,
    name: '宁夏卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225892/1.m3u8',
    group: '卫视'
  },
  {
    id: 187,
    name: '安徽卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226490/1.m3u8',
    group: '卫视'
  },
  {
    id: 188,
    name: '山东卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226487/1.m3u8',
    group: '卫视'
  },
  {
    id: 189,
    name: '广东南方卫视地面 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226540/1.m3u8',
    group: '卫视'
  },
  {
    id: 190,
    name: '广西卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226534/1.m3u8',
    group: '卫视'
  },
  {
    id: 191,
    name: '山西卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226531/1.m3u8',
    group: '卫视'
  },
  {
    id: 192,
    name: '广东卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226535/1.m3u8',
    group: '卫视'
  },
  {
    id: 193,
    name: '新疆卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226546/1.m3u8',
    group: '卫视'
  },
  {
    id: 194,
    name: '江苏卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225887/1.m3u8',
    group: '卫视'
  },
  {
    id: 195,
    name: '江西卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225888/1.m3u8',
    group: '卫视'
  },
  {
    id: 196,
    name: '河北卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226536/1.m3u8',
    group: '卫视'
  },
  {
    id: 197,
    name: '天津卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225899/1.m3u8',
    group: '卫视'
  },
  {
    id: 198,
    name: '河南卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226525/1.m3u8',
    group: '卫视'
  },
  {
    id: 199,
    name: '浙江卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225903/1.m3u8',
    group: '卫视'
  },
  {
    id: 200,
    name: '海南卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225890/1.m3u8',
    group: '卫视'
  },
  {
    id: 201,
    name: '厦门卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226542/1.m3u8',
    group: '卫视'
  },
  {
    id: 202,
    name: '北京卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226160/1.m3u8',
    group: '卫视'
  },
  {
    id: 203,
    name: '内蒙古卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225891/1.m3u8',
    group: '卫视'
  },
  {
    id: 204,
    name: '云南卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226543/1.m3u8',
    group: '卫视'
  },
  {
    id: 205,
    name: '东方卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226161/1.m3u8',
    group: '卫视'
  },
  {
    id: 206,
    name: '东南卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225876/1.m3u8',
    group: '卫视'
  },
  {
    id: 207,
    name: '海南卫视',
    url: 'http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225639/index.m3u8',
    group: '卫视'
  },
  {
    id: 208,
    name: '吉林卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225886/1.m3u8',
    group: '卫视'
  },
  {
    id: 209,
    name: '四川卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226523/1.m3u8',
    group: '卫视'
  },
  {
    id: 210,
    name: '湖南卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226162/1.m3u8',
    group: '卫视'
  },
  {
    id: 211,
    name: '湖北卫视 标清',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225884/1.m3u8',
    group: '卫视'
  },
  {
    id: 212,
    name: '华视新闻资讯HD',
    url: 'http://hdtv.ub1818.com/ublive/index_10.m3u8',
    group: '其他'
  },
  {
    id: 213,
    name: '中视新闻HD',
    url: 'http://hdtv.ub1818.com/ublive/index_9.m3u8',
    group: '其他'
  },
  {
    id: 214,
    name: '非凡新闻HD',
    url: 'http://hdtv.ub1818.com/ublive/index_8.m3u8',
    group: '其他'
  },
  {
    id: 215,
    name: '上海新闻HD',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/xwzhhd/2300000/d1.m3u8',
    group: '其他'
  },
  {
    id: 216,
    name: '北京新闻 CQ',
    url: 'http://221.179.217.9/otttv.bj.chinamobile.com/PLTV/88888888/224/3221226437/1.m3u8',
    group: '其他'
  },
  {
    id: 217,
    name: '韩国YTN 联合新闻',
    url: 'http://ytnmmd.mmdlive.lldns.net/ytnmmd/9484b70302db4786886ae40308bf45a1/chunklist_b2592000.m3u8',
    group: '国外'
  },
  {
    id: 218,
    name: '美国Fox News Talk Radio',
    url: 'http://fnurtmp-f.akamaihd.net/i/FNRADIO_1@92141/master.m3u8',
    group: '国外'
  },
  {
    id: 219,
    name: '美国360 North',
    url: 'http://wowzaprod3-i.akamaihd.net/hls/live/252236/2147483647_360north_247/playlist.m3u8',
    group: '国外'
  },
  {
    id: 220,
    name: '美国Deutsche Welle',
    url: 'http://dwstream4-lh.akamaihd.net/i/dwstream4_live@131329/master.m3u8',
    group: '国外'
  },
  {
    id: 221,
    name: 'CBS新闻',
    url: 'http://cbsnewshd-lh.akamaihd.net/i/CBSNHD_7@199302/master.m3u8',
    group: '国外'
  },
  {
    id: 222,
    name: 'NBC电视',
    url: 'http://161.0.157.51/PLTV/88888888/224/3221227040/index.m3u8?fluxustv.m3u8',
    group: '国外'
  },
  {
    id: 223,
    name: 'Jewelry电视',
    url: 'http://wowzaprod134-i.akamaihd.net/hls/live/577814/ccddaf02/playlist.m3u8',
    group: '国外'
  },
  {
    id: 224,
    name: 'Darcizzle电视',
    url: 'http://30a-tv.com/darcizzle.m3u8',
    group: '国外'
  },
  {
    id: 225,
    name: 'CBS新闻',
    url: 'http://cbsnewshd-lh.akamaihd.net/i/CBSNHD_7@199302/master.m3u8',
    group: '国外'
  },
  {
    id: 226,
    name: '美国Deutsche Welle',
    url: 'http://dwstream4-lh.akamaihd.net/i/dwstream4_live@131329/master.m3u8',
    group: '国外'
  },
  {
    id: 227,
    name: '美国360 North',
    url: 'http://wowzaprod3-i.akamaihd.net/hls/live/252236/2147483647_360north_247/playlist.m3u8',
    group: '国外'
  },
  {
    id: 228,
    name: '美国Fox News Talk Radio',
    url: 'http://fnurtmp-f.akamaihd.net/i/FNRADIO_1@92141/master.m3u8',
    group: '国外'
  },
  {
    id: 229,
    name: '日本cgntv',
    url: 'http://cgntv-glive.ofsdelivery.net/live/_definst_/cgntv_jp/playlist.m3u8',
    group: '国外'
  },
  {
    id: 230,
    name: '日本Japanet Channel DX',
    url: 'http://bcsecurelivehls-i.akamaihd.net/hls/live/265320/5043843989001/140130JTDX/index_600.m3u8',
    group: '国外'
  },
  {
    id: 231,
    name: '黑莓电影高清',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225927/1.m3u8',
    group: '高清'
  },
  {
    id: 232,
    name: '黑莓电竞高清',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225931/1.m3u8',
    group: '高清'
  },
  {
    id: 233,
    name: '黑莓动画高清',
    url: 'http://111.13.111.242/otttv.bj.chinamobile.com/PLTV/88888888/224/3221225914/1.m3u8',
    group: '高清'
  },
  {
    id: 234,
    name: '高清探索',
    url: 'http://39.134.176.148/PLTV/88888888/224/3221226695/index.m3u8',
    group: '高清'
  },
  {
    id: 235,
    name: '直播7-1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba7/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 236,
    name: '直播6-1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba6/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 237,
    name: '直播5-1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba5/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 238,
    name: '直播4-1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba4/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 239,
    name: '直播3-1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba3/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 240,
    name: '直播2-1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba2/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 241,
    name: '直播1-1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba1/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 242,
    name: '新闻24高清',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba8/1300000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 243,
    name: '上海Knews24 1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/hdnba8/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 244,
    name: '五星体育1080P',
    url: 'http://keonline.shanghai.liveplay.qq.com/live/program/live/ssty/4000000/mnf.m3u8',
    group: '高清'
  },
  {
    id: 245,
    name: '五星体育蓝光',
    url: 'http://117.148.187.37/PLTV/88888888/224/3221226582/index.m3u8',
    group: '高清'
  },
  {
    id: 246,
    name: '蓝光动漫15台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226743/1.m3u8',
    group: '高清'
  },
  {
    id: 247,
    name: '蓝光动画14台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226741/1.m3u8',
    group: '高清'
  },
  {
    id: 248,
    name: '蓝光动画13台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226732/1.m3u8',
    group: '高清'
  },
  {
    id: 249,
    name: '蓝光影视10台',
    url: 'http://112.17.40.145/PLTV/88888888/224/3221226360/index.m3u8',
    group: '高清'
  },
  {
    id: 250,
    name: '蓝光影视9台',
    url: 'http://112.17.40.145/PLTV/88888888/224/3221226606/index.m3u8',
    group: '高清'
  },
  {
    id: 251,
    name: '蓝光影视8台',
    url: 'http://112.17.40.145/PLTV/88888888/224/3221226608/index.m3u8',
    group: '高清'
  },
  {
    id: 252,
    name: '蓝光影视7台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226754/1.m3u8',
    group: '高清'
  },
  {
    id: 253,
    name: '蓝光影视6台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226692/1.m3u8',
    group: '高清'
  },
  {
    id: 254,
    name: '蓝光影视5台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225893/1.m3u8',
    group: '高清'
  },
  {
    id: 255,
    name: '蓝光影视4台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226712/1.m3u8',
    group: '高清'
  },
  {
    id: 256,
    name: '蓝光影视3台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226708/1.m3u8',
    group: '高清'
  },
  {
    id: 257,
    name: '蓝光影视2台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225881/1.m3u8',
    group: '高清'
  },
  {
    id: 258,
    name: '蓝光影视1台',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226736/1.m3u8',
    group: '高清'
  },
  {
    id: 259,
    name: '纪实频道蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225946/1.m3u8',
    group: '高清'
  },
  {
    id: 260,
    name: '极速汽车蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226140/1.m3u8',
    group: '高清'
  },
  {
    id: 261,
    name: '欢笑剧场蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226729/1.m3u8',
    group: '高清'
  },
  {
    id: 262,
    name: '峨眉电影蓝光',
    url: 'http://scgctvshow.sctv.com/hdlive/emei/1.m3u8',
    group: '高清'
  },
  {
    id: 263,
    name: '动漫秀场蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221226141/1.m3u8',
    group: '高清'
  },
  {
    id: 264,
    name: '北京纪实蓝光',
    url: 'http://112.50.243.8/PLTV/88888888/224/3221225944/1.m3u8',
    group: '高清'
  },
  {
    id: 265,
    name: '奥林匹克蓝光',
    url: 'http://ott-live.olympicchannel.com/out/u/OC1_1.m3u8?fluxustv.m3u8',
    group: '高清'
  },
  {
    id: 266,
    name: '台湾音乐',
    url: 'http://hdtv.ub1818.com/ublive/index_34.m3u8',
    group: '港澳台'
  },
  {
    id: 267,
    name: '台湾AMC电影',
    url: 'http://hdtv.ub1818.com/ublive/index_30.m3u8',
    group: '港澳台'
  },
  {
    id: 268,
    name: '台湾CNEX',
    url: 'http://hdtv.ub1818.com/ublive/index_29.m3u8',
    group: '港澳台'
  },
  {
    id: 269,
    name: '台湾影迷电影',
    url: 'http://hdtv.ub1818.com/ublive/index_28.m3u8',
    group: '港澳台'
  },
  {
    id: 270,
    name: '台湾采昌',
    url: 'http://hdtv.ub1818.com/ublive/index_27.m3u8',
    group: '港澳台'
  },
  {
    id: 271,
    name: '民视台湾台',
    url: 'http://hdtv.ub1818.com/ublive/index_3.m3u8',
    group: '港澳台'
  },
  {
    id: 272,
    name: '澳门有线3',
    url: 'http://202.175.127.77/live/show/ch3/index.m3u8',
    group: '港澳台'
  },
  {
    id: 273,
    name: '澳门有线2',
    url: 'http://202.175.127.77/live/show/ch2/index.m3u8',
    group: '港澳台'
  },
  {
    id: 274,
    name: '澳门有线1',
    url: 'http://202.175.127.77/live/show/ch1/index.m3u8',
    group: '港澳台'
  },
  {
    id: 275,
    name: '澳视澳门',
    url: 'http://61.244.22.4/ch1/ch1.live/playelist.m3u8',
    group: '港澳台'
  },
  {
    id: 276,
    name: '凤凰电影',
    url: 'https://www.fanmingming.cn/hls/fhdy.m3u8',
    group: '港澳台'
  },
  {
    id: 277,
    name: '凤凰资讯',
    url: 'https://www.fanmingming.cn/hls/fhzx.m3u8',
    group: '港澳台'
  },
  {
    id: 278,
    name: '凤凰中文',
    url: 'https://www.fanmingming.cn/hls/fhzw.m3u8',
    group: '港澳台'
  }
]

export {
  setting,
  sites,
  iptv,
  localKey,
  getSite
}
