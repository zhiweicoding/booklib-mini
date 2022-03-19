import Taro from '@tarojs/taro'
import util from './util.js'
import api from '../config/api.js'
import ald from './utils/ald-stat.js'

export default class user {
  /**
 * 调用微信登录
 */
  static loginByWeixin() {
    let code = null
    return new Promise(function (resolve, reject) {
      return util
        .login()
        .then(res => {
          code = res.code
          return util.getUserInfo()
        })
        .then(userInfo => {
          //登录远程服务器
          util.request(api.AuthLoginByWeixin,
            {
              code: code,
              userInfo: userInfo.userInfo,
              appId: 'wxc4542c5853ed259d'
            },
            'POST'
          ).then(res => {
            if (res.msgCode === 10000) {
              let msgBody = res.msgBody
              //存储用户信息
              Taro.setStorageSync('userInfo', msgBody.userInfo)
              Taro.setStorageSync('token', msgBody.contentToken)
              Taro.setStorageSync('session_key', msgBody.session_key)
              resolve(res)
            } else {
              reject(res)
            }
          }).catch(err => {
            reject(err)
          })
        }).catch(err => {
          reject(err)
        })
    })
  }

  /**
   * 调用微信登录
   */
  static loginByWeixinSimple() {
    let code = null
    return new Promise(function (resolve, reject) {
      // eslint-disable-next-line no-unused-vars
      return util.login()
        .then(res => {
          code = res.code
        }).then(() => {
          //登录远程服务器
          util.request(api.AuthLoginByWeixin, {
            code: code,
            userInfo: Taro.getStorageSync('userInfo'),
            appId: 'wxc4542c5853ed259d'
          }).then(res => {
            if (res.msgCode === 10000) {
              let msgBody = res.msgBody
              //存储用户信息
              Taro.setStorageSync('token', msgBody.contentToken)
              Taro.setStorageSync('userInfo', msgBody.userInfo)
              Taro.setStorageSync('session_key', msgBody.session_key)
              Taro.setStorageSync('isSeller', msgBody.isSeller)//1 销售
              // Taro.setStorageSync('isSeller', 1)//1 销售
              resolve(res)
            } else {
              reject(res)
            }
          }).catch(err => {
            reject(err)
          })
        }).catch(err => {
          reject(err)
        })
    })
  }

  /**
   * 调用百度登录
   */
  static loginByBaidu(userInfo) {
    let code = null
    return new Promise(function (resolve, reject) {
      return util.
        login()
        .then(res => {
          code = res.code
        })
        .then(() => {
          //登录远程服务器
          util
            .request(api.BaiduGetSessionKey, {
              code: code,
              userInfo: userInfo
            })
            .then(res => {
              if (res.msgCode === 10000) {
                let msgBody = res.msgBody
                //存储用户信息
                Taro.setStorageSync('token', msgBody.contentToken)
                Taro.setStorageSync('userInfo', msgBody.userInfo)
                Taro.setStorageSync('session_key', msgBody.session_key)
                resolve(res)
              } else {
                reject(res)
              }
            })
            .catch(err => {
              reject(err)
            })
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /**
   * 判断用户是否登录
   */
  static checkLogin() {
    return new Promise(function (resolve, reject) {
      if (Taro.getStorageSync('userInfo') && Taro.getStorageSync('token')) {
        util
          .checkSession()
          .then(() => {
            resolve(true)
          })
          .catch(() => {
            reject(false)
          })
      } else {
        this
          .loginByWeixin()
          .then(res => {
            if (res.msgCode === 10000) {
              let msgBody = res.msgBody
              //存储用户信息
              Taro.setStorageSync('userInfo', msgBody.userInfo)
              Taro.setStorageSync('token', msgBody.contentToken)
              Taro.setStorageSync('session_key', msgBody.session_key)

              resolve(res)
            } else {
              reject(res)
            }
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }
}

