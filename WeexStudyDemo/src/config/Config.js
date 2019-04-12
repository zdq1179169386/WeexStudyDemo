// 项目中公共的样式
export const statusHeight = 32
export const navgationBarHeight = 100

// 字体图标
const webIconFontPath = 'static/font/iconfont.ttf';
const androidIconFontPath = 'local:///font/iconfont.ttf';
const iosIconFontPath = 'local:///font/iconfont.ttf';

export default{
  tabTitles: [
    {
      title: '首页',
      icon: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
      activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
    },
    {
      title: '推荐',
      icon: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
      activeIcon: 'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
    },
    {
      title: '消息',
      icon: 'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
      activeIcon: 'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png',
      badge: 5
    },
    {
      title: '我的',
      icon: 'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
      activeIcon: 'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png',
      dot: true
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },
  initIconFont(){
    let domModule = weex.requireModule('dom');
    domModule.addRule('fontFace',{
      'fontFamily': "iconfont",
      'src': "url('iosIconFontPath')"
    })
  },
  getIonFontPath(abs) {
    if (WXEnvironment.platform === 'Web') {
        return abs + webIconFontPath
    } else if (WXEnvironment.platform.toLowerCase() === 'android') {
        return androidIconFontPath
    } else {
        return iosIconFontPath
    }
}
}

// 获取屏幕真正的高度
export function getRealScreenHeight(Utils) {
  if(WXEnvironment.platform === 'Web') {
      return Utils.env.getScreenHeight()
  }
  return Utils.env.getScreenHeight() - statusHeight;
}

