import {
  View,
  Navigator,
  Image,
  ScrollView
} from '@tarojs/components'

import Taro from '@tarojs/taro'
import Book from '@com/book/book'
import Loadmore from '@com/loadMore/loadMore'
import util from '@utils/util'
import api from '@myConfig/api'
import user from '@utils/user.js'

import './index.scss'

//获取应用实例
var app = Taro.getApp()


export default class index extends Taro.Component {

  config = {
    navigationBarTitleText: '天津年鉴',
    enablePullDownRefresh: false
  }

  constructor(props) {
    super(props)
    this.state = {
      doYouLikeList: [],
      hasMore: true,
      moreShow: true,
      currentPage: 1,
      scrollTop: 0,
      disabled: false,
      loading: false,
    }
  }

  onShareAppMessage = () => {
    // return {
    //   title: that.state.shareInfo.infoTitle,
    //   desc: that.state.shareInfo.infoDetail,
    //   imageUrl: 'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniImg/index.png',
    //   path: '/pages/index/index'
    // }
  }
  
  getIndexData = (pageNum) => {
    let that = this

    Taro.showLoading({
      title: '加载中..'
    })
    util.request(api.IndexUrl, {
      pageNum: pageNum
    }).then(function (res) {
      Taro.hideLoading()
      if (res.msgCode === 10000) {
        let msgBody = res.msgBody
        let hasNext = msgBody.hasNext
        let moreShow = that.state.moreShow
        let doYouLikeList = that.state.doYouLikeList
        doYouLikeList = doYouLikeList.concat(msgBody.doYouLikeList)
        if (hasNext) {
          moreShow = false
        } else {
          moreShow = true
        }
        that.setState({
          doYouLikeList: doYouLikeList,
          banners: msgBody.banners,
          horList: msgBody.horList,
          tapImage: msgBody.tapImage,
          shareInfo: msgBody.shareInfo,
          currentPage: msgBody.currentPage,
          defaultSearchKey: msgBody.defaultSearchKey,
          hasMore: msgBody.hasNext,
          moreShow: moreShow,
          horBannerBean: msgBody.horBannerBean,
        })
        app.globalData.shareInfo = msgBody.shareInfo
      }
    })
  }


  componentWillMount(options = this.$router.params || {}) {
    let that = this
    this.getIndexData(this.state.currentPage)

  }

  componentDidShow() {
    let userInfo = Taro.getStorageSync('userInfo')
    let showLogin = true;
    if (userInfo && userInfo != '' && userInfo.nickName != 'Hi,游客') {
      showLogin = false
    }
    this.setState({
      showLogin: showLogin
    })
  }

  componentDidMount() {
    // 页面渲染完成
  }

  componentDidHide() {
    // 页面隐藏
  }

  componentWillUnmount() {
    // 页面关闭
  }

  onPageScroll = res => {
    // event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
    let top = 0
    if (process.env.TARO_ENV == 'wepp' || process.env.TARO_ENV == 'alipay' || process.env.TARO_ENV == 'tt') {
      top = res.scrollTop
    } else if (process.env.TARO_ENV == 'swan') {
      top = res.detail.scrollTop
    }
    let that = this
    let showBackTop = this.state.showBackTop
    if (top > 900) {
      if (!showBackTop) {
        that.setState({
          showBackTop: true
        })
      }
    } else {
      if (showBackTop) {
        that.setState({
          showBackTop: false
        })
      }
    }

  }

  redirectPage = event => {
    let symbolId = event.target.id
    app.globalData.catalogId = symbolId
    Taro.switchTab({
      url: '/pages/catalog/catalog'
    })
  }

  closeTap = () => {
    this.setState({
      isShow: false
    })
  }

 
  gotoSearch = () => {
    Taro.navigateTo({
      url: '/pages/search/search'
    })
  }

  toTop = () => {
    this.setState({
      scrollTop: Math.random()
    })
  }

  loadMoreData() {
    this.getIndexData(this.state.currentPage)
  }

  gotoSearch = () => {
    Taro.navigateTo({
      url: `/pages/search/search?fromPage=act`
    })
  }

  jumpUrl(url) {
    Taro.navigateTo({
      url: url
    })
  }

  openUrl = (e) => {
    if (e.indexOf("/") != -1) {
      Taro.navigateTo({
        url: e
      })
    } else {
      Taro.showModal({
        title: '温馨提示',
        content: e,
        cancelText: '取消',
        confirmText: '确定',
        showCancel: false,
      })
    }

  }

  render() {
    const {
      tapImage, horBannerBean
    } = this.state
    return (
      <ScrollView
        className='scrollViewCss'
        scrollY
        scrollWithAnimation
        onScrollToLower={this.loadMoreData}
        lowerThreshold='50'
        upperThreshold='50'
        scrollTop={this.state.scrollTop}
        onScroll={this.onPageScroll}>
        <View className='search'>
          <View className='input'>
            <View onClick={this.gotoSearch} className='searchBefore'>
              <Image className='icon'></Image>
              <Input className='txt' placeholder='随便搜搜' value='' />
            </View>
            <View className='searchAfter'>
              <Navigator url='/pages/search/search?fromPage=act' className='searchName'>搜索</Navigator>
            </View>
          </View>
        </View>

        <View className='backline3'></View>
        <Book doYouLikeList={this.state.doYouLikeList} whereFrom={0} ></Book>
        <Book doYouLikeList={this.state.doYouLikeList} whereFrom={0}></Book>
        {this.state.moreShow && (
          <Loadmore hasMore={this.state.hasMore}></Loadmore>
        )}
      </ScrollView>
    )
  }
}