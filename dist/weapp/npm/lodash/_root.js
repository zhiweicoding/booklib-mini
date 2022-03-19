var freeGlobal = require("./_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || { Function: Function, Boolean: Boolean, Object: Object, Number: Number, Array: Array, Date: Date, String: String, Symbol: Symbol, Error: Error, TypeError: TypeError, Map: Map, Set: Set, WeakMap: WeakMap, WeakSet: WeakSet, ArrayBuffer: ArrayBuffer, Math: Math, Promise: Promise, RegExp: RegExp, DataView: DataView, isFinite: isFinite, parseInt: parseInt, parseFloat: parseFloat, Float32Array: Float32Array, Float64Array: Float64Array, Int8Array: Int8Array, Int16Array: Int16Array, Int32Array: Int32Array, Uint8Array: Uint8Array, Uint16Array: Uint16Array, Uint32Array: Uint32Array, Uint8ClampedArray: Uint8ClampedArray, setTimeout: setTimeout, clearTimeout: clearTimeout, setInterval: setInterval, clearInterval: clearInterval };

module.exports = root;