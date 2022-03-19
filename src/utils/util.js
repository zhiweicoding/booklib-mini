import Taro from '@tarojs/taro'


export default class util {

  static formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return (
      [year, month, day].map(this.formatNumber).join('/') +
      ' ' +
      [hour, minute, second].map(this.formatNumber).join(':')
    )
  }

  static formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  static getNowFormatDate() {
    var date = new Date()
    var seperator1 = '-'
    var seperator2 = ':'
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    var currentdate =
      date.getFullYear() +
      seperator1 +
      month +
      seperator1 +
      strDate +
      ' ' +
      date.getHours() +
      seperator2 +
      date.getMinutes() +
      seperator2 +
      date.getSeconds()
    return currentdate
  }

  static getTime() {
    return this.getNowFormatDate()
  }

  static getTimeStr(total) {
    var miao = total % 60
    var fen = (total - miao) / 60
    var time_total_str = ''
    if (fen < 10) {
      time_total_str = time_total_str + '0' + fen.toString() + ':'
    } else {
      time_total_str = time_total_str + fen.toString() + ':'
    }
    if (miao < 10) {
      time_total_str = time_total_str + '0' + miao.toString()
    } else {
      time_total_str = time_total_str + miao.toString()
    }
    return time_total_str
  }

  /**
   * 封封微信的的request
   */
  static request(url, data = {}, method = 'POST') {
    let userInfo = Taro.getStorageSync('userInfo')
    let openId = ''
    if (userInfo) {
      openId = userInfo.openId
    }
    data.openId = openId
    data.userType = process.env.TARO_ENV

    return new Promise(function (resolve, reject) {
      Taro.request({
        url: url,
        data: data,
        method: method,
        header: {
          'Content-Type': 'application/json',
          'Content-token': Taro.getStorageSync('token')
        },
        success: function (res) {
          // console.log("success");

          if (res.statusCode == 200) {
            // if (res.data.msgCode == 10003) {
            //   //需要登录后才可以操作
            //   // Taro.navigateTo({
            //   //   url: '/pages/login/login'
            //   // })
            //   // if (process.env.TARO_ENV === 'alipay') {
            //   //   Taro.hideLoading()
            //   //   Taro.navigateTo({
            //   //     url: '/pages/aliLogin/aliLogin'
            //   //   })
            //   // } else {
            //     Taro.navigateTo({
            //       url: '/pages/login/login'
            //     })
            //   // }
            // } else 
            if (res.data.msgCode == 10000) {
              //成功
              resolve(res.data)
            } else if (res.data.msgCode == 10001) {
              //失败
              resolve(res.data)
              Taro.showToast({
                title: res.data.msgInfo
              })
            } else if (res.data.msgCode == 10002) {
              //没有值
              resolve(res.data)
            }else{
              resolve(res.data)
            }
          } else {
            reject(res.errMsg)
          }
        },
        fail: function (err) {
          reject(err)
          // console.log("failed")
        }
      })
    })
  }

  /**
   * 检查微信会话是否过期
   */
  static checkSession() {
    return new Promise(function (resolve, reject) {
      Taro.checkSession({
        success: function () {
          resolve(true)
        },
        fail: function () {
          reject(false)
        }
      })
    })
  }

  /**
   * 调用微信登录
   */
  static login() {
    return new Promise(function (resolve, reject) {
      Taro.login({
        success: function (res) {
          if (res.code) {
            //登录远程服务器
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }

  static getUserInfo() {
    return new Promise(function (resolve, reject) {
      Taro.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            Taro.getUserInfo({
              success: function (res) {
                console.log(res.userInfo)
                resolve(res)
              },
              fail: function (err) {
                reject(err)
              }
            })
          }
        },
        fail: function (res) {
          Taro.redirectTo({
            url: '/pages/login/login'
          })
        }
      })
    })
  }

  static redirect(url) {
    //判断页面是否需要登录
    {
      Taro.redirectTo({
        url: url
      })
    }
  }

  static showErrorToast(msg) {
    Taro.showToast({
      title: msg,
      image: '../img/icon_error.png'
    })
  }

  static showErrorToastLong(msg) {
    Taro.showToast({
      title: msg,
      image: '../img/icon_error.png',
      duration: 2000
    })
  }

  static showSmileToastLong(msg) {
    Taro.showToast({
      title: msg,
      // image: '/img/icon_smile.png',
      icon: 'none',
      duration: 1000
    })
  }

  static getDateDiff(startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, '/'))).getTime()
    var endTime = new Date(Date.parse(endDate.replace(/-/g, '/'))).getTime()
    var dates = Math.abs(startTime - endTime) / 86400000

    return parseInt(dates)
  }
}

