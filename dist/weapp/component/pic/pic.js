'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require('../../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

var _util = require('../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _api = require('../../config/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pic = (_temp2 = _class = function (_Taro$Component) {
  _inherits(pic, _Taro$Component);

  function pic() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pic.__proto__ || Object.getPrototypeOf(pic)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["item", "whereFrom", "catIndex"], _this.config = {
      Component: true
    }, _this.openUrl = function (item, whereFrom) {
      var goodId = item.goodId;
      var scale = item.scale;
      var goodType = item.goodType;
      if (whereFrom == 10) {
        _index2.default.navigateTo({
          url: "/package/product/product?itemId=" + goodId + "&whereFrom=" + whereFrom
        });
      } else {
        _index2.default.navigateTo({
          url: "/package/catProduct/catProduct?itemId=" + goodId + "&whereFrom=" + whereFrom
        });
      }
    }, _this.onAdd = function (goodId) {
      _util2.default.request(_api2.default.ModifyGoodUrl, {
        goodId: goodId,
        addOrMinus: 0
      }).then(function (res) {
        if (res.msgCode === 10000) {
          _index2.default.showToast({
            title: '已添加到购物车',
            icon: 'none'
          });
        } else if (res.msgCode === 10001) {
          _index2.default.showToast({
            title: '添加喜欢失败',
            icon: 'none'
          });
        }
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pic, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(pic.prototype.__proto__ || Object.getPrototypeOf(pic.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: 'delGood',
    value: function delGood(item, whereFrom) {
      var goodId = item.goodId;
      var isSeller = _index2.default.getStorageSync('isSeller');
      if (isSeller == 1 && whereFrom == 0) {
        _index2.default.showModal({
          title: '请确认',
          content: '是否删除该商品',
          cancelText: '取消',
          confirmText: '确定',
          showCancel: true,
          success: function success(e) {
            if (e.confirm) {
              _index2.default.showLoading({
                title: '加载中..'
              });
              _util2.default.request(_api2.default.SellerGood, {
                goodId: goodId
              }).then(function (res) {
                _index2.default.hideLoading();
                if (res.msgCode === 10000) {
                  _index2.default.showToast({
                    title: '删除成功',
                    icon: 'success',
                    duration: 2000
                  });
                } else if (res.msgCode === 10001) {
                  _index2.default.showToast({
                    title: '删除失败',
                    icon: 'none',
                    duration: 2000
                  });
                }
              });
            }
          }
        });
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          item = _props.item,
          catIndex = _props.catIndex,
          whereFrom = _props.whereFrom;

      var goodBrief = item.goodBrief;

      Object.assign(this.__state, {
        item: item,
        whereFrom: whereFrom
      });
      return this.__state;
    }
  }]);

  return pic;
}(_index2.default.Component), _class.$$events = ["openUrl"], _class.defaultProps = {
  item: {},
  catIndex: 0,
  wherefrom: 0
}, _class.options = {
  multipleSlots: true // 在组件定义时的选项中启用多slot支持
}, _class.$$componentPath = "component/pic/pic", _temp2);
exports.default = pic;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(pic));