import Taro from '@tarojs/taro'
import util from './util.js'
import api from '../config/api.js'

export default class pay {
  /**
   * 重复刚才的订单
   */
  static payOrder(orderId, goodId, totFee, openId) {
    return new Promise(function (resolve, reject) {
      util.request(api.PayPrepayId, {
        orderId: orderId,
        openId: openId,
        totFee: totFee,
        goodId: goodId
      }).then(function (res) {
        if (res.msgCode === 10000) {
          let msgBody = res.msgBody
          Taro.requestPayment({
            timeStamp: msgBody.signTimeStamp,
            nonceStr: msgBody.signNonceStr,
            package: msgBody.signPackage,
            signType: msgBody.signType,
            paySign: msgBody.signPaySign,
            success: function (r) {
              resolve(r)
            },
            fail: function (rf) {
              reject(rf)
            },
            complete: function (rc) {
              reject(rc)
            }
          })
        } else {
          reject(res)
        }
      })
    })
  }

  /**
   * 重复刚才的订单
   * api.CreateOrderInsurance, {
        openId: openId,
        goodId: goodId,
        nameInput: nameInput,
        idCardInput: idCardInput,
        phoneInput: phoneInput,
        petImg: petImg,
        petIndex: petIndex
      }
   */
  static payInsurance(
    openId,
    goodId,
    nameInput,
    idCardInput,
    phoneInput,
    petImg,
    petIndex
  ) {
    return new Promise(function (resolve, reject) {
      util
        .request(api.CreateOrderInsurance, {
          openId: openId,
          goodId: goodId,
          nameInput: nameInput,
          idCardInput: idCardInput,
          phoneInput: phoneInput,
          petImg: petImg,
          petIndex: petIndex
        })
        .then(function (res) {
          if (res.msgCode === 10000) {
            let msgBody = res.msgBody
            Taro.requestPayment({
              timeStamp: msgBody.signTimeStamp,
              nonceStr: msgBody.signNonceStr,
              package: msgBody.signPackage,
              signType: msgBody.signType,
              paySign: msgBody.signPaySign,
              success: function (r) {
                resolve(r)
              },
              fail: function (rf) {
                reject(rf)
              },
              complete: function (rc) {
                reject(rc)
              }
            })
          } else {
            reject(res)
          }
        })
    })
  }

}
