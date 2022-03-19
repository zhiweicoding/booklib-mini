"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getWindowHeight = getWindowHeight;
exports.getWindowHeightProduct = getWindowHeightProduct;
exports.getWinHeight = getWinHeight;
exports.postcss = postcss;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NAVIGATOR_HEIGHT = 44;
var TAB_BAR_HEIGHT = 50;

/**
 * 返回屏幕可用高度
 * // NOTE 各端返回的 windowHeight 不一定是最终可用高度（例如可能没减去 statusBar 的高度），需二次计算
 * @param {*} showTabBar
 */
function getWindowHeight() {
  var showTabBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var info = _index2.default.getSystemInfoSync();
  var windowHeight = info.windowHeight,
      statusBarHeight = info.statusBarHeight,
      titleBarHeight = info.titleBarHeight;

  var tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0;

  return windowHeight + "px";
}

function getWindowHeightProduct() {
  var showTabBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var info = _index2.default.getSystemInfoSync();
  var windowHeight = info.windowHeight,
      statusBarHeight = info.statusBarHeight,
      titleBarHeight = info.titleBarHeight;

  var tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0;

  return windowHeight - 10 + "px";
}

function getWinHeight() {
  var showTabBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var info = _index2.default.getSystemInfoSync();
  var windowHeight = info.windowHeight,
      statusBarHeight = info.statusBarHeight,
      titleBarHeight = info.titleBarHeight;

  var tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0;

  return "" + windowHeight;
}

/**
 * // NOTE 样式在编译时会通过 postcss 进行处理，但 js 中的 style 可能需要运行时处理
 * 例如加 prefix，或者对 RN 样式的兼容，又或是在此处统一处理 Taro.pxTransform
 * 此处只做演示，若需要做完善点，可以考虑借助 https://github.com/postcss/postcss-js
 */
function postcss(style) {
  if (!style) {
    return style;
  }

  var background = style.background,
      restStyle = _objectWithoutProperties(style, ["background"]);

  var newStyle = {};
  if (background) {
    // NOTE 如 RN 不支持 background，只支持 backgroundColor
    newStyle.backgroundColor = background;
  }
  return _extends({}, restStyle, newStyle);
}