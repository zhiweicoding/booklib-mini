import { View, Textarea, Input, Image, Button } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import util from '@utils/util.js'
import api from '@myConfig/api.js'

import './like.scss'

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
    navigationBarTitleText: '我的收藏'
  }

  render() {
    return (
      <View className='container'>
        <View className='likeItem'>

          <View className='likeItem-midlle'>
            <View className='likeItem-midlle-head'>
              天津年鉴·2021
            </View>
            <View className='likeItem-midlle-body'>
              改革开放
            </View>
          </View>
          <AtButton className='likeItem-btn' type='primary' size='small' loading={false}>删除收藏</AtButton>
        </View>
        <View className='likeItem'>
          <View className='likeItem-midlle'>
            <View className='likeItem-midlle-head'>
              天津年鉴·2021
            </View>
            <View className='likeItem-midlle-body'>
              改革开放
            </View>
          </View>
          <AtButton className='likeItem-btn' type='primary' size='small' loading={false}>删除收藏</AtButton>
        </View>
        <View className='likeItem'>
          <View className='likeItem-midlle'>
            <View className='likeItem-midlle-head'>
              天津年鉴·2021
            </View>
            <View className='likeItem-midlle-body'>
              改革开放
            </View>
          </View>
          <AtButton className='likeItem-btn' type='primary' size='small' loading={false}>删除收藏</AtButton>
        </View>
      </View>
    )
  }
}
