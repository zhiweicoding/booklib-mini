import { Block, View, Image, Text, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {  AtInputNumber } from "taro-ui"
import apiProduct from '@myConfig/apiProduct'
import util from '@utils/util.js'


import './index.scss'

var app = Taro.getApp()

export default class index extends Taro.Component {

  config = {
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    backgroundColor: '#f4f4f4',
    navigationBarTitleText: '我的'
  }

  onPullDownRefresh() {
    let that = this
    let userInfo = Taro.getStorageSync('userInfo')
    let token = Taro.getStorageSync('token')

    // 页面显示
    if (userInfo && token) {
      Taro.showLoading({
        title: '加载中..'
      })
      util.request(apiProduct.refresh, {
      }).then(function (res) {
        Taro.hideLoading();
        if (res.msgCode === 10000) {
          let msgBody = res.msgBody
          let userBean = msgBody.body
          userInfo.totalMemberPointMoney = userBean.totalMemberPointMoney
          userInfo.userMobile = userBean.userMobile
          app.globalData.userInfo = userInfo
          Taro.setStorageSync('userInfo', userInfo)
          that.setState({
            userInfo: app.globalData.userInfo
          })
        }
      });
    } else {
      that.setState({
        userInfo: app.globalData.userInfo
      })
    }

    Taro.showLoading({
      title: '加载中..'
    })
    util.request(apiProduct.orderNum, {
    }).then(function (res) {
      Taro.hideLoading();
      if (res.msgCode === 10000) {
        let msgBody = res.msgBody
        let allOrderNum = msgBody.allOrderNum
        let needOrderNum = msgBody.needOrderNum
        let deliverOrderNum = msgBody.deliverOrderNum
        let appOrderNum = msgBody.appOrderNum
        let buyCatNum = msgBody.buyCatNum
        let needNotice = msgBody.needNotice
        let recharge = msgBody.recharge
        let nextMonthBig = msgBody.nextMonthBig
        let accountBig = msgBody.accountBig
        let leaveMonth = msgBody.leaveMonth
        that.setState({
          allOrderNum: allOrderNum,
          needOrderNum: needOrderNum,
          deliverOrderNum: deliverOrderNum,
          appOrderNum: appOrderNum,
          buyCatNum: buyCatNum,
          needNotice: needNotice,
          recharge: recharge,
          nextMonthBig: nextMonthBig,
          accountBig: accountBig,
          leaveMonth: leaveMonth,
        }, () => {
          Taro.stopPullDownRefresh();
        })
      } else {
        Taro.stopPullDownRefresh();
      }
    });


  }

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      showPhone: false,
      phoneNum: '',
      smsCode: '',
      smsCodeBack: '',
      canClickSms: true,
      sendCodeTxt: '发送验证码',
      isOpened: false,
      allOrderNum: '0',
      needOrderNum: '0',
      deliverOrderNum: '0',
      appOrderNum: '0',
      buyCatNum: '0',
      needNotice: '0',
      recharge: '0',
      nextMonthBig: '0',
      accountBig: '0',
      leaveMonth: '0',
      fontSize: 24
    }
  }

  componentWillMount() {
  }

  componentDidMount() { }

  componentDidShow() {
    let that = this
    let userInfo = Taro.getStorageSync('userInfo')
    let token = Taro.getStorageSync('token')

    // 页面显示
    if (userInfo && token) {
      Taro.showLoading({
        title: '加载中..'
      })
      util.request(apiProduct.refresh, {
      }).then(function (res) {
        Taro.hideLoading();
        if (res.msgCode === 10000) {
          let msgBody = res.msgBody
          let userBean = msgBody.body
          userInfo.totalMemberPointMoney = userBean.totalMemberPointMoney
          userInfo.userMobile = userBean.userMobile
          app.globalData.userInfo = userInfo
          Taro.setStorageSync('userInfo', userInfo)
          that.setState({
            userInfo: app.globalData.userInfo
          })
        }
      });
    } else {
      that.setState({
        userInfo: app.globalData.userInfo
      })
    }

    Taro.showLoading({
      title: '加载中..'
    })
    util.request(apiProduct.orderNum, {
    }).then(function (res) {
      Taro.hideLoading();
      if (res.msgCode === 10000) {
        let msgBody = res.msgBody
        let allOrderNum = msgBody.allOrderNum
        let needOrderNum = msgBody.needOrderNum
        let deliverOrderNum = msgBody.deliverOrderNum
        let appOrderNum = msgBody.appOrderNum
        let buyCatNum = msgBody.buyCatNum
        let needNotice = msgBody.needNotice
        let recharge = msgBody.recharge
        let nextMonthBig = msgBody.nextMonthBig
        let accountBig = msgBody.accountBig
        let leaveMonth = msgBody.leaveMonth
        that.setState({
          allOrderNum: allOrderNum,
          needOrderNum: needOrderNum,
          deliverOrderNum: deliverOrderNum,
          appOrderNum: appOrderNum,
          buyCatNum: buyCatNum,
          needNotice: needNotice,
          recharge: recharge,
          nextMonthBig: nextMonthBig,
          accountBig: accountBig,
          leaveMonth: leaveMonth,
        })
      }
    });


  }

  componentDidHide() {
    // 页面隐藏
  }

  componentWillUnmount() {
    // 页面关闭
  }

  onShareAppMessage() {
    let shareInfo = app.globalData.shareInfo
    var shareObj = {
      title: shareInfo.infoTitle,
      desc: shareInfo.infoDetail,
      imageUrl: 'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniImg/mine.png',
      path: '/pages/mine/index/index'
    }
    return shareObj
  }

  goLogin = () => {
    let userInfo = Taro.getStorageSync('userInfo')
    if (!userInfo) {
      Taro.navigateTo({
        url: '/pages/login/login'
      })

    }
  }

  exitLogin() {
    let that = this
    let localtUserInfo = {
      nickName: 'Hi,游客',
      userMobile: '点击去登录',
      avatarUrl:
        'http://photo.youchongxiong.com/8945ae63d940cc42406c3f67019c5cb6.png',
      isMember: 1
    }
    Taro.showModal({
      title: '提示',
      content: '确定退出登录',
      cancelText: '取消',
      confirmText: '确定',
      success(res) {
        if (res.confirm) {
          Taro.removeStorageSync('userInfo')
          Taro.removeStorageSync('token')
          app.globalData.userInfo = localtUserInfo
          that.setState({
            userInfo: localtUserInfo,
            allOrderNum: '0',
            needOrderNum: '0',
            deliverOrderNum: '0',
            appOrderNum: '0',
            buyCatNum: '0',
            needNotice: '0',
            recharge: '0',
            nextMonthBig: '0',
            accountBig: '0',
            leaveMonth: '0'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

  buyMember() {
    let that = this
    let userInfo = that.state.userInfo
    let isMember = userInfo.isMember
    if (isMember == 0) {
      Taro.navigateTo({
        url: '/pages/webView/webView?webView=https%3a%2f%2fwww.myloveqian.cn%2fshowSome%2fmemberShow&barName=优宠熊宠物卡'
      })
    } else {
      Taro.navigateTo({
        url: '/package/product/product?itemId=b789d1d3b3cd49969db8f1616ddfa4a4'
      })
    }
  }

  handleChangeNum(value) {
    this.setState({
      phoneNum: value
    })
  }

  handleChangeSms(value) {
    this.setState({
      smsCode: value
    })
    return value
  }

  openUrl = () => {
    Taro.navigateTo({
      url: '/pages/mine/buyService/buyService'
    })
  }

  phoneCancel() {
    this.setState({
      showPhone: false
    })
  }

  phoneSure() {
    let that = this
    let phone = this.state.phoneNum
    let smsCode = this.state.smsCode
    let smsCodeBack = this.state.smsCodeBack
    let userInfo = Taro.getStorageSync('userInfo')

    if (!phone || phone == '') {
      Taro.showToast({
        title: '手机号为空',
        icon: 'none',
        duration: 2000
      })
    } else if (!smsCode || smsCode == '') {
      Taro.showToast({
        title: '验证码为空',
        icon: 'none',
        duration: 2000
      })
    } else if (smsCode != smsCodeBack) {
      Taro.showToast({
        title: '验证码有误',
        icon: 'none',
        duration: 2000
      })
    } else {
      Taro.showLoading({
        title: '加载中..'
      })
      util.request(apiProduct.phoneBind, {
        phone: phone
      }).then(function (res) {
        Taro.hideLoading()
        if (res.msgCode === 10000) {
          let msgBody = res.msgBody
          let msgInfo = msgBody.msgInfo

          userInfo.userMobile = phone
          userInfo.totalMemberPointMoney = msgInfo
          app.globalData.userInfo = userInfo
          that.setState({
            userInfo: app.globalData.userInfo,
            showPhone: false
          })
        }
      })
    }
  }

  showBindNum() {
    this.setState({
      showPhone: true
    })
  }
  countdown(that, time) {
    if (time == 0) {
      that.setState({
        sendCodeTxt: '发送验证码',
        canClickSms: true,
      });
      return;
    }
    setTimeout(function () {
      that.setState({
        sendCodeTxt: '重新发送（' + time + 's）'
      });
      time = time - 1
      that.countdown(that, time);
    }, 1000)
  }

  sendCode() {
    let that = this
    let canClickSms = this.state.canClickSms
    let phone = this.state.phoneNum
    if (canClickSms) {

      if (!phone || phone == '') {
        Taro.showToast({
          title: '手机号为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        Taro.showLoading({
          title: '加载中..'
        })
        util.request(apiProduct.smsSend, {
          phone: phone
        }).then(function (res) {
          Taro.hideLoading()
          if (res.msgCode === 10000) {
            let msgBody = res.msgBody
            let msgInfo = msgBody.msgInfo
            that.setState({
              smsCodeBack: msgInfo,
              canClickSms: false,
              sendCodeTxt: '重新发送（60s）'
            })
            that.countdown(that, 60)
          }
        })
      }
    }


  }

  onClose() {
    this.setState({
      isOpened: false
    })
  }

  onOpenFloat() {
    this.setState({
      isOpened: true
    })
  }

  openNotice() {
    let needNotice = this.state.needNotice
    let changeNeedNotice = '0'
    let that = this
    Taro.showLoading({
      title: '加载中..'
    })
    util.request(apiProduct.noticeChange, {
      orderId: needNotice
    }).then(function (res) {
      Taro.hideLoading()
      if (res.msgCode === 10000) {
        if (needNotice == '0') {
          changeNeedNotice = '1'
          Taro.showToast({
            title: '已关闭通知',
            icon: 'null',
            duration: 2000
          })
        } else {
          changeNeedNotice = '0'
          Taro.showToast({
            title: '已打开通知',
            icon: 'null',
            duration: 2000
          })
        }
        that.setState({
          needNotice: changeNeedNotice
        })

      }
    })

  }

  handleFontSizeChange(value) {
    this.setState({
      fontSize: value
    })
  }

  render() {
    const { showPhone, userInfo } = this.state
    return (
      <Block>

        <View className='container'>

          <View className='info'>
            <Image
              className='info-avatar'
              mode='widthFix'
              src={userInfo.avatarUrl}
            ></Image>
            <Text className='info-name'> {userInfo.nickName}  </Text>
          </View>

          <View className='divHeight'></View>

          <View className='config' >
            <View className='config-title'>
              <View className='config-title-left'>设置中心</View>
              <View className='config-title-right'>
                <View className='config-title-right-desc'></View>
              </View>
            </View>
            <View className='config-body'>
              <View className='config-body-item'>
                <View className='config-body-item-txt'>阅读字体大小</View>
                <AtInputNumber
                  min={0}
                  max={50}
                  step={1}
                  value={this.state.fontSize}
                  onChange={this.handleFontSizeChange.bind(this)}
                />
              </View>
              <View className='config-body-itemTitle'>阅读背景颜色</View>
              <View className='config-body-itemSpecial'>
                <View className='config-body-itemSpecial-white'>
                </View>
                <View className='config-body-itemSpecial-green'>
                </View>
                <View className='config-body-itemSpecial-zong'>
                </View>
              </View>
            </View>
          </View>

          <View className='divHeight'></View>
          <View className='account' >
            <View className='account-title'>
              <View className='account-title-left'>个人中心</View>
              <View className='account-title-right'>
                <View className='account-title-right-desc'></View>
              </View>
            </View>
            <View className='account-body'>
              <Navigator className='account-body-item' url={'/pages/mine/like/like'}>
                <View className='account-body-item-icon icon icon-mark'></View>
                <View className='account-body-item-txt'>我的收藏</View>
                <View className='account-body-item-span' >12</View>
              </Navigator>
              <Navigator className='account-body-item' url={'/pages/mine/feedback/feedback'}>
                <View className='account-body-item-icon icon icon-mark'></View>
                <View className='account-body-item-txt'>意见反馈</View>
                <View className='account-body-item-white' >0</View>
              </Navigator>
              <View className='account-body-item' >
                <View className='account-body-item-icon icon icon-message' style='color:white;'></View>
                <View className='account-body-item-txt' style='color:white;'>我待评价</View>
              </View>
              <View className='account-body-item' >
                <View className='account-body-item-icon icon icon-message' style='color:white;'></View>
                <View className='account-body-item-txt' style='color:white;'>我待评价</View>
              </View>
            </View>
          </View>

        </View>

      </Block>
    )
  }
}
