import Taro from '@tarojs/taro'
import util from './util.js'
import api from '../config/api.js'

export default class requestPay {

    // 微信支付
    static paySecondWechat(userBean, orderBean) {
        let orderId = orderBean.id
        let secondMoney = orderBean.secondMoney
        let goodId = orderBean.goodBeanArray[0].goodId
        let openId = userBean.openId
        return new Promise(function (resolve, reject) {
            util.request(api.PaySecondMoney, {
                orderId: orderId,
                openId: openId
            }).then(function (res) {
                Taro.hideLoading();
                if (res.msgCode === 10000) {
                    let msgBody = res.msgBody;
                    Taro.requestPayment({
                        timeStamp: msgBody.signTimeStamp,
                        nonceStr: msgBody.signNonceStr,
                        package: msgBody.signPackage,
                        signType: msgBody.signType,
                        paySign: msgBody.signPaySign,
                        success: function () {
                            Taro.redirectTo({
                                url: '/pages/payResult/payResult?status=0'
                            });
                        },
                        fail: function () {
                            Taro.redirectTo({
                                url: '/pages/payResult/payResult?status=1&orderId=' + orderId + '&totFee=' + secondMoney + '&goodId=' + goodId + '&openId=' + openId
                            });
                        }
                    });
                } else {
                    reject(res)
                }
            });
        })
    }

    //  支付宝支付
    static paySecondAli(userBean, orderBean) {
        let orderId = orderBean.id
        let secondMoney = orderBean.secondMoney
        let goodId = orderBean.goodBeanArray[0].goodId
        let openId = userBean.openId

        return new Promise(function (resolve, reject) {
            // eslint-disable-next-line no-unused-vars
            util.request(api.AliPayBridgeSecond, {
                orderId: orderId,
                openId: openId
            }).then(function (res) {
                Taro.hideLoading();
                if (res.msgCode === 10000) {
                    let msgBody = res.msgBody;
                    // eslint-disable-next-line no-undef
                    my.tradePay({
                        tradeNO: msgBody.signNonceStr,
                        success: (tarRes) => {
                            console.log(JSON.stringify(tarRes))
                            let resultCode = res.resultCode
                            if (resultCode == '9000') {
                                Taro.redirectTo({
                                    url: '/pages/payResult/payResult?status=0'
                                });
                            } else {
                                Taro.redirectTo({
                                    url: '/pages/payResult/payResult?status=1&orderId=' + orderId + '&totFee=' + secondMoney + '&goodId=' + goodId + '&openId=' + openId
                                });
                            }
                        },
                        fail: () => {
                            Taro.redirectTo({
                                url: '/pages/payResult/payResult?status=1&orderId=' + orderId + '&totFee=' + secondMoney + '&goodId=' + goodId + '&openId=' + openId
                            });
                        }
                    });

                } else {
                    reject(res)
                }
            });
        })
    }

}

