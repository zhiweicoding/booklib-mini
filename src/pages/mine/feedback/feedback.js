import { View, Textarea, Input, Image, Button } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import util from '../../../utils/util.js'
import api from '../../../config/api.js'

import './feedback.scss'

var app = Taro.getApp()

export default class feedback extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textarea: '',
      mobile: ''
    }
  }

  onShareAppMessage = () => {
    let shareInfo = app.globalData.shareInfo
    var shareObj = {
      title: shareInfo.infoTitle,
      desc: shareInfo.infoDetail,
      imageUrl: 'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/find_cat_share2.png',
      path: '/pages/index/index'
    }
    return shareObj
  }

  componentWillMount() { }

  componentDidMount() { }

  componentDidShow() {
  }

  componentDidHide() {
    // 页面隐藏
  }

  componentWillUnmount() {
    // 页面关闭
  }

  textareaInput = e => {
    let that = this
    that.setState({
      textarea: e.detail.value
    })
  }
  mobileInput = e => {
    let that = this
    that.setState({
      mobile: e.detail.value
    })
  }

  submitFeedback = () => {
    let mobile = this.state.mobile
    let textarea = this.state.textarea
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    if (mobile == '') {
      util.showErrorToast('请输入手机号码')
      return false
    } else if (!myreg.test(mobile)) {
      util.showErrorToastLong('手机号有误！')
    }

    if (textarea == '') {
      util.showErrorToast('请输入评价')
      return false
    }
    let userInfo = Taro.getStorageSync('userInfo')
    Taro.showLoading()
    util.request(api.OpinionSend, {
      msg: textarea,
      mobile: mobile,
      openId: userInfo.openId
    }).then(function () {
      Taro.hideLoading()
      Taro.showModal({
        title: '已提交',
        content: '您的意见，已经帮您提交，24小时内有会客服主动联系您',
        cancelText: '取消',
        confirmText: '确定',
        success: function () {
          Taro.navigateBack({
            delta: 1
          })
        }
      })
    })
  }
  config = {
    navigationBarTitleText: '意见反馈'
  }

  render() {
    return (
      <View className='container'>
        <View className='fb-body'>
          <Textarea
            className='content'
            placeholder='对我们网站、宠物、服务，你还有什么建议吗？你还希望在优宠熊上买到什么宠物？请告诉我们...'
            onInput={this.textareaInput}
          ></Textarea>
          <View className='text-count'>0/500</View>
        </View>
        <View className='fb-mobile'>
          <View className='label'>手机号码</View>
          <View className='mobile-box'>
            <Input
              className='mobile'
              placeholder='方便我们与你联系'
              onInput={this.mobileInput}
            ></Input>
            <Image
              className='clear-icon'
              src='http://photo.youchongxiong.com/hxm%252Fyanxuan-wap%252Fp%252F20161201%252Fstyle%252Fimg%252Ficon-normal%252Fclear-fb-dd9d604f86.png'
            ></Image>
          </View>
        </View>
        <Button className='fb-btn' onClick={this.submitFeedback}>
          提交
        </Button>
      </View>
    )
  }
}
