"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _apiProduct = require("../../../config/apiProduct.js");

var _apiProduct2 = _interopRequireDefault(_apiProduct);

var _util = require("../../../utils/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = _index2.default.getApp();

var index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(index, _Taro$Component);

  function index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1", "userInfo", "showPhone", "phoneNum", "smsCode", "smsCodeBack", "canClickSms", "sendCodeTxt", "isOpened", "allOrderNum", "needOrderNum", "deliverOrderNum", "appOrderNum", "buyCatNum", "needNotice", "recharge", "nextMonthBig", "accountBig", "leaveMonth", "fontSize"], _this.config = {
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      backgroundColor: '#f4f4f4',
      navigationBarTitleText: '我的'
    }, _this.goLogin = function () {
      var userInfo = _index2.default.getStorageSync('userInfo');
      if (!userInfo) {
        _index2.default.navigateTo({
          url: '/pages/login/login'
        });
      }
    }, _this.openUrl = function () {
      _index2.default.navigateTo({
        url: '/pages/mine/buyService/buyService'
      });
    }, _this.customComponents = ["AtInputNumber"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(index, [{
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      var that = this;
      var userInfo = _index2.default.getStorageSync('userInfo');
      var token = _index2.default.getStorageSync('token');

      // 页面显示
      if (userInfo && token) {
        _index2.default.showLoading({
          title: '加载中..'
        });
        _util2.default.request(_apiProduct2.default.refresh, {}).then(function (res) {
          _index2.default.hideLoading();
          if (res.msgCode === 10000) {
            var msgBody = res.msgBody;
            var userBean = msgBody.body;
            userInfo.totalMemberPointMoney = userBean.totalMemberPointMoney;
            userInfo.userMobile = userBean.userMobile;
            app.globalData.userInfo = userInfo;
            _index2.default.setStorageSync('userInfo', userInfo);
            that.setState({
              userInfo: app.globalData.userInfo
            });
          }
        });
      } else {
        that.setState({
          userInfo: app.globalData.userInfo
        });
      }

      _index2.default.showLoading({
        title: '加载中..'
      });
      _util2.default.request(_apiProduct2.default.orderNum, {}).then(function (res) {
        _index2.default.hideLoading();
        if (res.msgCode === 10000) {
          var msgBody = res.msgBody;
          var allOrderNum = msgBody.allOrderNum;
          var needOrderNum = msgBody.needOrderNum;
          var deliverOrderNum = msgBody.deliverOrderNum;
          var appOrderNum = msgBody.appOrderNum;
          var buyCatNum = msgBody.buyCatNum;
          var needNotice = msgBody.needNotice;
          var recharge = msgBody.recharge;
          var nextMonthBig = msgBody.nextMonthBig;
          var accountBig = msgBody.accountBig;
          var leaveMonth = msgBody.leaveMonth;
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
            leaveMonth: leaveMonth
          }, function () {
            _index2.default.stopPullDownRefresh();
          });
        } else {
          _index2.default.stopPullDownRefresh();
        }
      });
    }
  }, {
    key: "_constructor",
    value: function _constructor(props) {
      _get(index.prototype.__proto__ || Object.getPrototypeOf(index.prototype), "_constructor", this).call(this, props);
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
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var that = this;
      var userInfo = _index2.default.getStorageSync('userInfo');
      var token = _index2.default.getStorageSync('token');

      // 页面显示
      if (userInfo && token) {
        _index2.default.showLoading({
          title: '加载中..'
        });
        _util2.default.request(_apiProduct2.default.refresh, {}).then(function (res) {
          _index2.default.hideLoading();
          if (res.msgCode === 10000) {
            var msgBody = res.msgBody;
            var userBean = msgBody.body;
            userInfo.totalMemberPointMoney = userBean.totalMemberPointMoney;
            userInfo.userMobile = userBean.userMobile;
            app.globalData.userInfo = userInfo;
            _index2.default.setStorageSync('userInfo', userInfo);
            that.setState({
              userInfo: app.globalData.userInfo
            });
          }
        });
      } else {
        that.setState({
          userInfo: app.globalData.userInfo
        });
      }

      _index2.default.showLoading({
        title: '加载中..'
      });
      _util2.default.request(_apiProduct2.default.orderNum, {}).then(function (res) {
        _index2.default.hideLoading();
        if (res.msgCode === 10000) {
          var msgBody = res.msgBody;
          var allOrderNum = msgBody.allOrderNum;
          var needOrderNum = msgBody.needOrderNum;
          var deliverOrderNum = msgBody.deliverOrderNum;
          var appOrderNum = msgBody.appOrderNum;
          var buyCatNum = msgBody.buyCatNum;
          var needNotice = msgBody.needNotice;
          var recharge = msgBody.recharge;
          var nextMonthBig = msgBody.nextMonthBig;
          var accountBig = msgBody.accountBig;
          var leaveMonth = msgBody.leaveMonth;
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
            leaveMonth: leaveMonth
          });
        }
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      // 页面隐藏
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 页面关闭
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      var shareInfo = app.globalData.shareInfo;
      var shareObj = {
        title: shareInfo.infoTitle,
        desc: shareInfo.infoDetail,
        imageUrl: 'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniImg/mine.png',
        path: '/pages/mine/index/index'
      };
      return shareObj;
    }
  }, {
    key: "exitLogin",
    value: function exitLogin() {
      var that = this;
      var localtUserInfo = {
        nickName: 'Hi,游客',
        userMobile: '点击去登录',
        avatarUrl: 'http://photo.youchongxiong.com/8945ae63d940cc42406c3f67019c5cb6.png',
        isMember: 1
      };
      _index2.default.showModal({
        title: '提示',
        content: '确定退出登录',
        cancelText: '取消',
        confirmText: '确定',
        success: function success(res) {
          if (res.confirm) {
            _index2.default.removeStorageSync('userInfo');
            _index2.default.removeStorageSync('token');
            app.globalData.userInfo = localtUserInfo;
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
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
  }, {
    key: "buyMember",
    value: function buyMember() {
      var that = this;
      var userInfo = that.state.userInfo;
      var isMember = userInfo.isMember;
      if (isMember == 0) {
        _index2.default.navigateTo({
          url: '/pages/webView/webView?webView=https%3a%2f%2fwww.myloveqian.cn%2fshowSome%2fmemberShow&barName=优宠熊宠物卡'
        });
      } else {
        _index2.default.navigateTo({
          url: '/package/product/product?itemId=b789d1d3b3cd49969db8f1616ddfa4a4'
        });
      }
    }
  }, {
    key: "handleChangeNum",
    value: function handleChangeNum(value) {
      this.setState({
        phoneNum: value
      });
    }
  }, {
    key: "handleChangeSms",
    value: function handleChangeSms(value) {
      this.setState({
        smsCode: value
      });
      return value;
    }
  }, {
    key: "phoneCancel",
    value: function phoneCancel() {
      this.setState({
        showPhone: false
      });
    }
  }, {
    key: "phoneSure",
    value: function phoneSure() {
      var that = this;
      var phone = this.state.phoneNum;
      var smsCode = this.state.smsCode;
      var smsCodeBack = this.state.smsCodeBack;
      var userInfo = _index2.default.getStorageSync('userInfo');

      if (!phone || phone == '') {
        _index2.default.showToast({
          title: '手机号为空',
          icon: 'none',
          duration: 2000
        });
      } else if (!smsCode || smsCode == '') {
        _index2.default.showToast({
          title: '验证码为空',
          icon: 'none',
          duration: 2000
        });
      } else if (smsCode != smsCodeBack) {
        _index2.default.showToast({
          title: '验证码有误',
          icon: 'none',
          duration: 2000
        });
      } else {
        _index2.default.showLoading({
          title: '加载中..'
        });
        _util2.default.request(_apiProduct2.default.phoneBind, {
          phone: phone
        }).then(function (res) {
          _index2.default.hideLoading();
          if (res.msgCode === 10000) {
            var msgBody = res.msgBody;
            var msgInfo = msgBody.msgInfo;

            userInfo.userMobile = phone;
            userInfo.totalMemberPointMoney = msgInfo;
            app.globalData.userInfo = userInfo;
            that.setState({
              userInfo: app.globalData.userInfo,
              showPhone: false
            });
          }
        });
      }
    }
  }, {
    key: "showBindNum",
    value: function showBindNum() {
      this.setState({
        showPhone: true
      });
    }
  }, {
    key: "countdown",
    value: function countdown(that, time) {
      if (time == 0) {
        that.setState({
          sendCodeTxt: '发送验证码',
          canClickSms: true
        });
        return;
      }
      setTimeout(function () {
        that.setState({
          sendCodeTxt: '重新发送（' + time + 's）'
        });
        time = time - 1;
        that.countdown(that, time);
      }, 1000);
    }
  }, {
    key: "sendCode",
    value: function sendCode() {
      var that = this;
      var canClickSms = this.state.canClickSms;
      var phone = this.state.phoneNum;
      if (canClickSms) {

        if (!phone || phone == '') {
          _index2.default.showToast({
            title: '手机号为空',
            icon: 'none',
            duration: 2000
          });
        } else {
          _index2.default.showLoading({
            title: '加载中..'
          });
          _util2.default.request(_apiProduct2.default.smsSend, {
            phone: phone
          }).then(function (res) {
            _index2.default.hideLoading();
            if (res.msgCode === 10000) {
              var msgBody = res.msgBody;
              var msgInfo = msgBody.msgInfo;
              that.setState({
                smsCodeBack: msgInfo,
                canClickSms: false,
                sendCodeTxt: '重新发送（60s）'
              });
              that.countdown(that, 60);
            }
          });
        }
      }
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "onOpenFloat",
    value: function onOpenFloat() {
      this.setState({
        isOpened: true
      });
    }
  }, {
    key: "openNotice",
    value: function openNotice() {
      var needNotice = this.state.needNotice;
      var changeNeedNotice = '0';
      var that = this;
      _index2.default.showLoading({
        title: '加载中..'
      });
      _util2.default.request(_apiProduct2.default.noticeChange, {
        orderId: needNotice
      }).then(function (res) {
        _index2.default.hideLoading();
        if (res.msgCode === 10000) {
          if (needNotice == '0') {
            changeNeedNotice = '1';
            _index2.default.showToast({
              title: '已关闭通知',
              icon: 'null',
              duration: 2000
            });
          } else {
            changeNeedNotice = '0';
            _index2.default.showToast({
              title: '已打开通知',
              icon: 'null',
              duration: 2000
            });
          }
          that.setState({
            needNotice: changeNeedNotice
          });
        }
      });
    }
  }, {
    key: "handleFontSizeChange",
    value: function handleFontSizeChange(value) {
      this.setState({
        fontSize: value
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__1"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1 = _genCompid2[0],
          $compid__1 = _genCompid2[1];

      var _state = this.__state,
          showPhone = _state.showPhone,
          userInfo = _state.userInfo;

      _index.propsManager.set({
        "min": 0,
        "max": 50,
        "step": 1,
        "value": this.__state.fontSize,
        "onChange": this.handleFontSizeChange.bind(this)
      }, $compid__1, $prevCompid__1);
      Object.assign(this.__state, {
        $compid__1: $compid__1
      });
      return this.__state;
    }
  }]);

  return index;
}(_index2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/mine/index/index", _temp2);
exports.default = index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(index, true));