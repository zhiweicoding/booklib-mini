'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _api = require('../config/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var user = function () {
  function user() {
    _classCallCheck(this, user);
  }

  _createClass(user, null, [{
    key: 'loginByWeixin',

    /**
    * 调用微信登录
    */
    value: function loginByWeixin() {
      var code = null;
      return new Promise(function (resolve, reject) {
        return _util2.default.login().then(function (res) {
          code = res.code;
          return _util2.default.getUserInfo();
        }).then(function (userInfo) {
          //登录远程服务器
          _util2.default.request(_api2.default.AuthLoginByWeixin, {
            code: code,
            userInfo: userInfo.userInfo,
            appId: 'wxc4542c5853ed259d'
          }, 'POST').then(function (res) {
            if (res.msgCode === 10000) {
              var msgBody = res.msgBody;
              //存储用户信息
              _index2.default.setStorageSync('userInfo', msgBody.userInfo);
              _index2.default.setStorageSync('token', msgBody.contentToken);
              _index2.default.setStorageSync('session_key', msgBody.session_key);
              resolve(res);
            } else {
              reject(res);
            }
          }).catch(function (err) {
            reject(err);
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    }

    /**
     * 调用微信登录
     */

  }, {
    key: 'loginByWeixinSimple',
    value: function loginByWeixinSimple() {
      var code = null;
      return new Promise(function (resolve, reject) {
        // eslint-disable-next-line no-unused-vars
        return _util2.default.login().then(function (res) {
          code = res.code;
        }).then(function () {
          //登录远程服务器
          _util2.default.request(_api2.default.AuthLoginByWeixin, {
            code: code,
            userInfo: _index2.default.getStorageSync('userInfo'),
            appId: 'wxc4542c5853ed259d'
          }).then(function (res) {
            if (res.msgCode === 10000) {
              var msgBody = res.msgBody;
              //存储用户信息
              _index2.default.setStorageSync('token', msgBody.contentToken);
              _index2.default.setStorageSync('userInfo', msgBody.userInfo);
              _index2.default.setStorageSync('session_key', msgBody.session_key);
              _index2.default.setStorageSync('isSeller', msgBody.isSeller); //1 销售
              // Taro.setStorageSync('isSeller', 1)//1 销售
              resolve(res);
            } else {
              reject(res);
            }
          }).catch(function (err) {
            reject(err);
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    }

    /**
     * 调用百度登录
     */

  }, {
    key: 'loginByBaidu',
    value: function loginByBaidu(userInfo) {
      var code = null;
      return new Promise(function (resolve, reject) {
        return _util2.default.login().then(function (res) {
          code = res.code;
        }).then(function () {
          //登录远程服务器
          _util2.default.request(_api2.default.BaiduGetSessionKey, {
            code: code,
            userInfo: userInfo
          }).then(function (res) {
            if (res.msgCode === 10000) {
              var msgBody = res.msgBody;
              //存储用户信息
              _index2.default.setStorageSync('token', msgBody.contentToken);
              _index2.default.setStorageSync('userInfo', msgBody.userInfo);
              _index2.default.setStorageSync('session_key', msgBody.session_key);
              resolve(res);
            } else {
              reject(res);
            }
          }).catch(function (err) {
            reject(err);
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    }

    /**
     * 判断用户是否登录
     */

  }, {
    key: 'checkLogin',
    value: function checkLogin() {
      return new Promise(function (resolve, reject) {
        if (_index2.default.getStorageSync('userInfo') && _index2.default.getStorageSync('token')) {
          _util2.default.checkSession().then(function () {
            resolve(true);
          }).catch(function () {
            reject(false);
          });
        } else {
          this.loginByWeixin().then(function (res) {
            if (res.msgCode === 10000) {
              var msgBody = res.msgBody;
              //存储用户信息
              _index2.default.setStorageSync('userInfo', msgBody.userInfo);
              _index2.default.setStorageSync('token', msgBody.contentToken);
              _index2.default.setStorageSync('session_key', msgBody.session_key);

              resolve(res);
            } else {
              reject(res);
            }
          }).catch(function (err) {
            reject(err);
          });
        }
      });
    }
  }]);

  return user;
}();

exports.default = user;