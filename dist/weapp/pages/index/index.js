"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _util = require("../../utils/util.js");

var _util2 = _interopRequireDefault(_util);

var _api = require("../../config/api.js");

var _api2 = _interopRequireDefault(_api);

var _user = require("../../utils/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var banner1 = "/img/banner1.jpg";

//获取应用实例
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1", "$compid__2", "$compid__3", "banners", "doYouLikeList", "horList", "tapImage", "isShow", "showBackTop", "showPhone", "defaultSearchKey", "shareInfo", "hasMore", "moreShow", "currentPage", "scrollTop", "showLogin", "disabled", "loading", "horBannerBean"], _this.config = {
      navigationBarTitleText: '天津年鉴',
      enablePullDownRefresh: false
    }, _this.onShareAppMessage = function () {
      var userInfo = _index2.default.getStorageSync('userInfo');
      var that = _this;
      return {
        title: that.state.shareInfo.infoTitle,
        desc: that.state.shareInfo.infoDetail,
        imageUrl: 'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniImg/index.png',
        path: '/pages/index/index'
      };
    }, _this.getIndexData = function (pageNum) {
      var that = _this;

      _index2.default.showLoading({
        title: '加载中..'
      });
      _util2.default.request(_api2.default.IndexUrl, {
        pageNum: pageNum
      }).then(function (res) {
        _index2.default.hideLoading();
        if (res.msgCode === 10000) {
          var msgBody = res.msgBody;
          var hasNext = msgBody.hasNext;
          var moreShow = that.state.moreShow;
          var doYouLikeList = that.state.doYouLikeList;
          doYouLikeList = doYouLikeList.concat(msgBody.doYouLikeList);
          if (hasNext) {
            moreShow = false;
          } else {
            moreShow = true;
          }
          that.setState({
            doYouLikeList: doYouLikeList,
            banners: msgBody.banners,
            horList: msgBody.horList,
            tapImage: msgBody.tapImage,
            shareInfo: msgBody.shareInfo,
            currentPage: msgBody.currentPage,
            defaultSearchKey: msgBody.defaultSearchKey,
            hasMore: msgBody.hasNext,
            moreShow: moreShow,
            horBannerBean: msgBody.horBannerBean
          });
          app.globalData.shareInfo = msgBody.shareInfo;
        }
      });
    }, _this.onPageScroll = function (res) {
      // event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
      var top = 0;

      var that = _this;
      var showBackTop = _this.state.showBackTop;
      if (top > 900) {
        if (!showBackTop) {
          that.setState({
            showBackTop: true
          });
        }
      } else {
        if (showBackTop) {
          that.setState({
            showBackTop: false
          });
        }
      }
    }, _this.redirectPage = function (event) {
      var symbolId = event.target.id;
      app.globalData.catalogId = symbolId;
      _index2.default.switchTab({
        url: '/pages/catalog/catalog'
      });
    }, _this.closeTap = function () {
      _this.setState({
        isShow: false
      });
    }, _this.openTapImageUrl = function () {
      var imageUrl = _this.state.tapImage.imageUrl;
      _this.setState({
        isShow: false
      });
      _index2.default.navigateTo({
        url: '/pages/webView/webView?webView=' + imageUrl
      });
    }, _this.uploadPhoto = function () {
      _index2.default.navigateTo({
        url: '/pages/search/search'
      });
    }, _this.gotoSearch = function () {
      _index2.default.navigateTo({
        url: '/pages/search/search'
      });
    }, _this.toTop = function () {
      _this.setState({
        scrollTop: Math.random()
      });
    }, _this.gotoSearch = function () {
      _index2.default.navigateTo({
        url: "/pages/search/search?fromPage=act"
      });
    }, _this.openUrl = function (e) {
      if (e.indexOf("/") != -1) {
        _index2.default.navigateTo({
          url: e
        });
      } else {
        _index2.default.showModal({
          title: '温馨提示',
          content: e,
          cancelText: '取消',
          confirmText: '确定',
          showCancel: false
        });
      }
    }, _this.customComponents = ["Book", "Loadmore"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(index.prototype.__proto__ || Object.getPrototypeOf(index.prototype), "_constructor", this).call(this, props);
      this.state = {
        banners: [{
          id: 'someId1',
          link: '',
          image_url: banner1
        }, {
          id: 'someId2',
          link: '',
          image_url: banner1
        }],
        doYouLikeList: [],
        horList: [],
        tapImage: {},
        isShow: true,
        showBackTop: false,
        showPhone: true,
        defaultSearchKey: '',
        // eslint-disable-next-line react/no-unused-state
        shareInfo: {
          infoTitle: '优宠熊寻猫商城',
          infoDetail: '全国连锁繁育猫舍，各种优惠等你来领取'
        },
        hasMore: true,
        moreShow: true,
        currentPage: 1,
        scrollTop: 0,
        showLogin: true,
        disabled: false,
        loading: false,
        horBannerBean: {
          configContent: 'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniProgram/horimgbanner.jpg',
          configMsg: 'width:100%;height:100px;',
          configUrl: '/package/actPage/actPage?pageType=6'
        }
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$router.params || {};

      var that = this;
      this.getIndexData(this.state.currentPage);
      var showTip = _index2.default.getStorageSync('showTip');
      that.setState({
        typeId: app.globalData.typeId,
        isShow: showTip //TODO
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var userInfo = _index2.default.getStorageSync('userInfo');
      var showLogin = true;
      if (userInfo && userInfo != '' && userInfo.nickName != 'Hi,游客') {
        showLogin = false;
      }
      this.setState({
        showLogin: showLogin
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // 页面渲染完成
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
    key: "loadMoreData",
    value: function loadMoreData() {
      this.getIndexData(this.state.currentPage);
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url) {
      _index2.default.navigateTo({
        url: url
      });
    }
  }, {
    key: "showDialog",
    value: function showDialog() {
      _index2.default.showModal({
        title: '提示信息',
        content: '您点击暂不授权，无法使用小程序全部功能，您可以关闭小程序也可以点击授权使用，感谢您的理解。',
        cancelText: '取消',
        confirmText: '确定',
        showCancel: false
      });
    }
  }, {
    key: "loginTo",
    value: function loginTo(e) {
      var that = this;
      that.setState({
        disabled: true,
        loading: true
      });
      var whichDevice = 0;
      {
        whichDevice = 0;
      }
      var userInfo = e.detail.userInfo;
      _index2.default.setStorageSync('userInfo', userInfo);
      switch (whichDevice) {
        case 0:
          //微信授权登陆
          _user2.default.loginByWeixinSimple().then(function (res) {
            if (res.msgCode === 10000) {
              that.setState({
                showLogin: false
              });
            } else {
              console.error(res);
            }
          });

          break;
        case 1:
          //百度授权登陆
          _user2.default.loginByBaidu(userInfo).then(function (res) {
            if (res.msgCode === 10000) {
              that.setState({
                showLogin: false
              });
            } else {
              console.error(res);
            }
          });
          break;
        default:
          break;
      }
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

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__2"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__2 = _genCompid4[0],
          $compid__2 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__3"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__3 = _genCompid6[0],
          $compid__3 = _genCompid6[1];

      var _state = this.__state,
          tapImage = _state.tapImage,
          horBannerBean = _state.horBannerBean;

      _index.propsManager.set({
        "doYouLikeList": this.__state.doYouLikeList,
        "whereFrom": 0
      }, $compid__1, $prevCompid__1);
      _index.propsManager.set({
        "doYouLikeList": this.__state.doYouLikeList,
        "whereFrom": 0
      }, $compid__2, $prevCompid__2);
      this.__state.moreShow && _index.propsManager.set({
        "hasMore": this.__state.hasMore
      }, $compid__3, $prevCompid__3);
      Object.assign(this.__state, {
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3
      });
      return this.__state;
    }
  }]);

  return index;
}(_index2.default.Component), _class.$$events = ["loadMoreData", "onPageScroll", "gotoSearch"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(index, true));