"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _isUndefined2 = require("../../../../../lodash/isUndefined.js");

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSwitch = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtSwitch, _AtComponent);

  function AtSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSwitch.__proto__ || Object.getPrototypeOf(AtSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__1", "rootCls", "containerCls", "checked", "color", "title", "customStyle", "className", "disabled", "border"], _this.handleChange = function (event) {
      var _this$props;

      for (var _len2 = arguments.length, arg = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        arg[_key2 - 1] = arguments[_key2];
      }

      var _event$detail = event.detail,
          value = _event$detail.value,
          checked = _event$detail.checked;

      var state = (0, _isUndefined3.default)(value) ? checked : value;
      (_this$props = _this.props).onChange.apply(_this$props, [state, event].concat(arg));
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSwitch, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtSwitch.prototype.__proto__ || Object.getPrototypeOf(AtSwitch.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          disabled = _props.disabled,
          border = _props.border,
          title = _props.title,
          checked = _props.checked,
          color = _props.color;


      var rootCls = (0, _index6.default)('at-switch', {
        'at-switch--without-border': !border
      }, className);
      var containerCls = (0, _index6.default)('at-switch__container', {
        'at-switch--disabled': disabled
      });

      var anonymousState__1 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__1: anonymousState__1,
        rootCls: rootCls,
        containerCls: containerCls,
        checked: checked,
        color: color,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtSwitch;
}(_component2.default), _class.$$events = ["handleChange"], _class.$$componentPath = "Users/zhiwei/taroProjects/booklib-mini/node_modules/taro-ui/dist/weapp/components/switch/index", _temp2);


AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false,
  onChange: function onChange() {}
};

AtSwitch.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  title: _index4.default.string,
  color: _index4.default.string,
  checked: _index4.default.bool,
  border: _index4.default.bool,
  disabled: _index4.default.bool,
  onChange: _index4.default.func
};
exports.default = AtSwitch;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtSwitch));