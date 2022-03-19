'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require('../../../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

var _util = require('../../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _api = require('../../../config/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = _index2.default.getApp();

var feedback = (_temp2 = _class = function (_BaseComponent) {
  _inherits(feedback, _BaseComponent);

  function feedback() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, feedback);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = feedback.__proto__ || Object.getPrototypeOf(feedback)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["textarea", "mobile"], _this.onShareAppMessage = function () {
      var shareInfo = app.globalData.shareInfo;
      var shareObj = {
        title: shareInfo.infoTitle,
        desc: shareInfo.infoDetail,
        imageUrl: 'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/find_cat_share2.png',
        path: '/pages/index/index'
      };
      return shareObj;
    }, _this.textareaInput = function (e) {
      var that = _this;
      that.setState({
        textarea: e.detail.value
      });
    }, _this.mobileInput = function (e) {
      var that = _this;
      that.setState({
        mobile: e.detail.value
      });
    }, _this.submitFeedback = function () {
      var mobile = _this.state.mobile;
      var textarea = _this.state.textarea;
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
      if (mobile == '') {
        _util2.default.showErrorToast('请输入手机号码');
        return false;
      } else if (!myreg.test(mobile)) {
        _util2.default.showErrorToastLong('手机号有误！');
      }

      if (textarea == '') {
        _util2.default.showErrorToast('请输入评价');
        return false;
      }
      var userInfo = _index2.default.getStorageSync('userInfo');
      _index2.default.showLoading();
      _util2.default.request(_api2.default.OpinionSend, {
        msg: textarea,
        mobile: mobile,
        openId: userInfo.openId
      }).then(function () {
        _index2.default.hideLoading();
        _index2.default.showModal({
          title: '已提交',
          content: '您的意见，已经帮您提交，24小时内有会客服主动联系您',
          cancelText: '取消',
          confirmText: '确定',
          success: function success() {
            _index2.default.navigateBack({
              delta: 1
            });
          }
        });
      });
    }, _this.config = {
      navigationBarTitleText: '意见反馈'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(feedback, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(feedback.prototype.__proto__ || Object.getPrototypeOf(feedback.prototype), '_constructor', this).call(this, props);
      this.state = {
        textarea: '',
        mobile: ''
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {
      // 页面隐藏
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // 页面关闭
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return feedback;
}(_index.Component), _class.$$events = ["textareaInput", "mobileInput", "submitFeedback"], _class.$$componentPath = "pages/mine/feedback/feedback", _temp2);
exports.default = feedback;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(feedback, true));