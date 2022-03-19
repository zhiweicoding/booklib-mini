import Taro from '@tarojs/taro'
import './styles/color.scss'
import './styles/mixins.scss'
import './styles/theme.scss'
import './styles/iconfont.scss'

import util from './utils/util.js'
import api from './config/api.js'

// const util = require('./utils/util.js')

import './app.scss'

let innerAudioContext = Taro.createInnerAudioContext()

class _App extends Taro.Component {

  componentWillMount() {
    this.$app.globalData = this.globalData

    let that = this

    if (process.env.TARO_ENV != 'h5') {

      let updateManager = Taro.getUpdateManager()

      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate)
      })

      updateManager.onUpdateReady(function () {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，请更新并重启小程序',
          cancelText: '取消',
          confirmText: '确定',
          success: function (res) {
            updateManager.applyUpdate()
            // if (res.confirm) {}
          }
        })
      })

      updateManager.onUpdateFailed(function () {
        // 新的版本下载失败
        Taro.showModal({
          title: '更新提示',
          content: '新版本下载失败',
          cancelText: '取消',
          confirmText: '确定',
          showCancel: false
        })
      })

    }

    Taro.getSystemInfo({
      success: function (res) {

        let windowWidth = res.windowWidth
        let windowHeight = res.windowHeight
        let realHeight = (750 / windowWidth) * windowHeight
        that.globalData.realHeight = realHeight
        that.globalData.widthHeight = windowHeight
      }
    })

  }

  componentDidShow() {
    let userInfo = Taro.getStorageSync('userInfo')
    let searchHis = Taro.getStorageSync('searchHis')
    if (!searchHis) {
      Taro.setStorageSync('searchHis', [])
    }
  }

  componentWillUnmount() {
  }

  globalData = {
    userInfo: {
      nickName: '微信用户',
      userMobile: '',
      avatarUrl:
        'http://photo.youchongxiong.com/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    certificationOk: 0, //是否认证
    session_key: null,
    openId: null,
    timer: 30000, //定时器设置时间
    token: '',
    catalogId: '0',
    historyKeyword: [],
    indexShowTip: true,
    innerAudioContext: innerAudioContext,
    realHeight: 1200,
    widthHeight: 1200,
  }
  // , 
  config = {
    pages: [
      'pages/index/index',
      'pages/search/search',
      'pages/mine/index/index',
      'pages/mine/like/like',
      'pages/mine/feedback/feedback',
      'pages/cate/cate',
      'pages/content/content',
      'pages/sr/sr',
      'pages/mus/mus'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '天津年鉴',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#868686',
      selectedColor: '#8a4b3f',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './img/home.png',
          selectedIconPath: './img/homeC.png',
          text: '首页'
        },
        {
          pagePath: 'pages/cate/cate',
          iconPath: './img/pic.png',
          selectedIconPath: './img/picC.png',
          text: '彩页'
        },
        {
          pagePath: 'pages/search/search',
          iconPath: './img/search.png',
          selectedIconPath: './img/searchC.png',
          text: '智能检索'
        },
        {
          pagePath: 'pages/mine/index/index',
          iconPath: './img/my.png',
          selectedIconPath: './img/myC.png',
          text: '我的'
        }
      ]
    },
    navigateToMiniProgramAppIdList: [
    ],
    plugins: {

    }
  }

  render() {
    return null
  }
}

export default App
Taro.render(<_App />, document.getElementById('app'))
