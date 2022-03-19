'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'formatTime',
    value: function formatTime(date) {
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();

      return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':');
    }
  }, {
    key: 'formatNumber',
    value: function formatNumber(n) {
      n = n.toString();
      return n[1] ? n : '0' + n;
    }
  }, {
    key: 'getNowFormatDate',
    value: function getNowFormatDate() {
      var date = new Date();
      var seperator1 = '-';
      var seperator2 = ':';
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = '0' + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
      return currentdate;
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return this.getNowFormatDate();
    }
  }, {
    key: 'getTimeStr',
    value: function getTimeStr(total) {
      var miao = total % 60;
      var fen = (total - miao) / 60;
      var time_total_str = '';
      if (fen < 10) {
        time_total_str = time_total_str + '0' + fen.toString() + ':';
      } else {
        time_total_str = time_total_str + fen.toString() + ':';
      }
      if (miao < 10) {
        time_total_str = time_total_str + '0' + miao.toString();
      } else {
        time_total_str = time_total_str + miao.toString();
      }
      return time_total_str;
    }

    /**
     * 封封微信的的request
     */

  }, {
    key: 'request',
    value: function request(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';

      var userInfo = _index2.default.getStorageSync('userInfo');
      var openId = '';
      if (userInfo) {
        openId = userInfo.openId;
      }
      data.openId = openId;
      data.userType = "weapp";

      return new Promise(function (resolve, reject) {
        _index2.default.request({
          url: url,
          data: data,
          method: method,
          header: {
            'Content-Type': 'application/json',
            'Content-token': _index2.default.getStorageSync('token')
          },
          success: function success(res) {
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
                resolve(res.data);
              } else if (res.data.msgCode == 10001) {
                //失败
                resolve(res.data);
                _index2.default.showToast({
                  title: res.data.msgInfo
                });
              } else if (res.data.msgCode == 10002) {
                //没有值
                resolve(res.data);
              } else {
                resolve(res.data);
              }
            } else {
              reject(res.errMsg);
            }
          },
          fail: function fail(err) {
            reject(err);
            // console.log("failed")
          }
        });
      });
    }

    /**
     * 检查微信会话是否过期
     */

  }, {
    key: 'checkSession',
    value: function checkSession() {
      return new Promise(function (resolve, reject) {
        _index2.default.checkSession({
          success: function success() {
            resolve(true);
          },
          fail: function fail() {
            reject(false);
          }
        });
      });
    }

    /**
     * 调用微信登录
     */

  }, {
    key: 'login',
    value: function login() {
      return new Promise(function (resolve, reject) {
        _index2.default.login({
          success: function success(res) {
            if (res.code) {
              //登录远程服务器
              resolve(res);
            } else {
              reject(res);
            }
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      return new Promise(function (resolve, reject) {
        _index2.default.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userInfo']) {
              _index2.default.getUserInfo({
                success: function success(res) {
                  console.log(res.userInfo);
                  resolve(res);
                },
                fail: function fail(err) {
                  reject(err);
                }
              });
            }
          },
          fail: function fail(res) {
            _index2.default.redirectTo({
              url: '/pages/login/login'
            });
          }
        });
      });
    }
  }, {
    key: 'redirect',
    value: function redirect(url) {
      //判断页面是否需要登录
      {
        _index2.default.redirectTo({
          url: url
        });
      }
    }
  }, {
    key: 'showErrorToast',
    value: function showErrorToast(msg) {
      _index2.default.showToast({
        title: msg,
        image: '../img/icon_error.png'
      });
    }
  }, {
    key: 'showErrorToastLong',
    value: function showErrorToastLong(msg) {
      _index2.default.showToast({
        title: msg,
        image: '../img/icon_error.png',
        duration: 2000
      });
    }
  }, {
    key: 'showSmileToastLong',
    value: function showSmileToastLong(msg) {
      _index2.default.showToast({
        title: msg,
        // image: '/img/icon_smile.png',
        icon: 'none',
        duration: 1000
      });
    }
  }, {
    key: 'getDateDiff',
    value: function getDateDiff(startDate, endDate) {
      var startTime = new Date(Date.parse(startDate.replace(/-/g, '/'))).getTime();
      var endTime = new Date(Date.parse(endDate.replace(/-/g, '/'))).getTime();
      var dates = Math.abs(startTime - endTime) / 86400000;

      return parseInt(dates);
    }
  }]);

  return util;
}();

exports.default = util;