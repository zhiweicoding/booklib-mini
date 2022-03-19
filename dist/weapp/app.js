'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const util = require('./utils/util.js')

var innerAudioContext = _index2.default.createInnerAudioContext();

var _App = function (_Taro$Component) {
  _inherits(_App, _Taro$Component);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.globalData = {
      userInfo: {
        nickName: '微信用户',
        userMobile: '',
        avatarUrl: 'http://photo.youchongxiong.com/8945ae63d940cc42406c3f67019c5cb6.png'
      },
      certificationOk: 0, //是否认证
      session_key: null,
      openId: null,
      timer: 30000, //定时器设置时间
      token: '',
      catalogId: '0',
      historyKeyword: [],
      indexShowTip: true,
      innerAudioContext: innerAudioContext,
      realHeight: 1200,
      widthHeight: 1200
      // , 
    }, _this.config = {
      pages: ['pages/index/index', 'pages/search/search', 'pages/mine/index/index', 'pages/mine/like/like', 'pages/mine/feedback/feedback', 'pages/cate/cate', 'pages/content/content', 'pages/sr/sr', 'pages/mus/mus'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '天津年鉴',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#868686',
        selectedColor: '#8a4b3f',
        borderStyle: 'black',
        list: [{
          pagePath: 'pages/index/index',
          iconPath: './img/home.png',
          selectedIconPath: './img/homeC.png',
          text: '首页'
        }, {
          pagePath: 'pages/cate/cate',
          iconPath: './img/pic.png',
          selectedIconPath: './img/picC.png',
          text: '彩页'
        }, {
          pagePath: 'pages/search/search',
          iconPath: './img/search.png',
          selectedIconPath: './img/searchC.png',
          text: '智能检索'
        }, {
          pagePath: 'pages/mine/index/index',
          iconPath: './img/my.png',
          selectedIconPath: './img/myC.png',
          text: '我的'
        }]
      },
      navigateToMiniProgramAppIdList: [],
      plugins: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.$app.globalData = this.globalData;

      var that = this;

      {

        var updateManager = _index2.default.getUpdateManager();

        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          console.log(res.hasUpdate);
        });

        updateManager.onUpdateReady(function () {
          _index2.default.showModal({
            title: '更新提示',
            content: '新版本已经准备好，请更新并重启小程序',
            cancelText: '取消',
            confirmText: '确定',
            success: function success(res) {
              updateManager.applyUpdate();
              // if (res.confirm) {}
            }
          });
        });

        updateManager.onUpdateFailed(function () {
          // 新的版本下载失败
          _index2.default.showModal({
            title: '更新提示',
            content: '新版本下载失败',
            cancelText: '取消',
            confirmText: '确定',
            showCancel: false
          });
        });
      }

      _index2.default.getSystemInfo({
        success: function success(res) {

          var windowWidth = res.windowWidth;
          var windowHeight = res.windowHeight;
          var realHeight = 750 / windowWidth * windowHeight;
          that.globalData.realHeight = realHeight;
          that.globalData.widthHeight = windowHeight;
        }
      });
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      var userInfo = _index2.default.getStorageSync('userInfo');
      var searchHis = _index2.default.getStorageSync('searchHis');
      if (!searchHis) {
        _index2.default.setStorageSync('searchHis', []);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_index2.default.Component);

exports.default = App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});