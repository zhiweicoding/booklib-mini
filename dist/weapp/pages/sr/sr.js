"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /* eslint-disable no-unused-vars */

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _style = require("../../utils/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = _index2.default.getApp();

var search = (_temp2 = _class = function (_Taro$Component) {
  _inherits(search, _Taro$Component);

  function search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1", "checkValue", "searchHis", "switchType"], _this.config = {
      navigationBarTitleText: '智能搜索'
    }, _this.onShareAppMessage = function () {}, _this.handleChange = function (e) {
      var that = _this;
      that.setState({
        checkValue: e
      });
    }, _this.switchType = function (num) {
      _this.setState({
        switchType: num
      });
    }, _this.customComponents = ["AtSwitch"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(search, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(search.prototype.__proto__ || Object.getPrototypeOf(search.prototype), "_constructor", this).call(this, props);
      this.state = {
        checkValue: false,
        searchHis: [],
        switchType: 1
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$router.params || {};

      console.log(this.$router.params);

      var searchHis = _index2.default.getStorageSync('searchHis');
      this.setState({
        searchHis: searchHis
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$router.params || {};

      console.log(this.$router.params);
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
          historyKeyword = _state.historyKeyword,
          hotKeyword = _state.hotKeyword,
          helpKeyword = _state.helpKeyword,
          searchStatus = _state.searchStatus,
          moreFilter = _state.moreFilter;

      var height = (0, _style.getWindowHeightProduct)(false);
      _index.propsManager.set({
        "checked": this.__state.checkValue,
        "border": false,
        "color": '#8a4b3f',
        "onChange": this.handleChange.bind(this)
      }, $compid__1, $prevCompid__1);
      Object.assign(this.__state, {
        $compid__1: $compid__1
      });
      return this.__state;
    }
  }]);

  return search;
}(_index2.default.Component), _class.$$events = ["switchType"], _class.$$componentPath = "pages/sr/sr", _temp2);
exports.default = search;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(search, true));