(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateChange = exports.getRotateEventPosition = exports.getChangeData = exports.fullCircleRadius = exports.Cursors = void 0;
var _util = _interopRequireDefault(require("./util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var fullCircleRadius = exports.fullCircleRadius = Math.PI * 2;
/**
 * 操作杠指针配置
 */
var Cursors = exports.Cursors = {
  data: {
    'l': '',
    'lt': '',
    't': '',
    'tr': '',
    'r': '',
    'rb': '',
    'b': '',
    'lb': '',
    'rotate': '',
    'skew': 'pointer'
  },
  // 根据角度旋转指针
  get: function get(dir) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var rotation, rotationKey, key, cursor, normal, _normal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            rotation = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
            if (!(dir === 'rotate' || dir === 'skew')) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", _this[dir]);
          case 3:
            if (Math.abs(rotation) > fullCircleRadius) rotation = rotation % fullCircleRadius;
            // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
            rotationKey = Number(rotation.toFixed(2)); // 精度只取小数2位
            key = rotationKey === 0 ? dir : "".concat(dir, "_").concat(rotationKey);
            cursor = _this[key];
            if (cursor) {
              _context.next = 40;
              break;
            }
            if (!(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b')) {
              _context.next = 25;
              break;
            }
            if (!(rotation === 0)) {
              _context.next = 16;
              break;
            }
            _context.next = 12;
            return _util["default"].rotateImage(_this['t'], Math.PI / 2);
          case 12:
            cursor = _context.sent;
            _this['l'] = _this['r'] = cursor;
            _context.next = 23;
            break;
          case 16:
            _context.next = 18;
            return _this.get(dir, 0);
          case 18:
            normal = _context.sent;
            _context.next = 21;
            return _util["default"].rotateImage(normal, rotation);
          case 21:
            cursor = _context.sent;
            _this[key] = cursor;
          case 23:
            _context.next = 40;
            break;
          case 25:
            if (!(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb')) {
              _context.next = 40;
              break;
            }
            if (!(rotation === 0)) {
              _context.next = 33;
              break;
            }
            _context.next = 29;
            return _util["default"].rotateImage(_this['lt'], Math.PI / 2);
          case 29:
            cursor = _context.sent;
            return _context.abrupt("return", _this['tr'] = _this['lb'] = cursor);
          case 33:
            _context.next = 35;
            return _this.get(dir, 0);
          case 35:
            _normal = _context.sent;
            _context.next = 38;
            return _util["default"].rotateImage(_normal, rotation);
          case 38:
            cursor = _context.sent;
            _this[key] = cursor;
          case 40:
            return _context.abrupt("return", cursor);
          case 41:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
};
/**
 * 因为旋转后坐标要回原才好计算操作，
 * @param offset
 * @param oldPosition
 * @param newPosition
 * @param rotation
 * @param center
 * @returns
 */
var getRotateEventPosition = exports.getRotateEventPosition = function getRotateEventPosition(offset, oldPosition, newPosition, rotation, center) {
  // 先回原坐标，再主算偏移量，这样保证操作更容易理解
  if (rotation) {
    var _util$rotatePoints = _util["default"].rotatePoints([oldPosition, newPosition], center, -rotation),
      _util$rotatePoints2 = _slicedToArray(_util$rotatePoints, 2),
      pos1 = _util$rotatePoints2[0],
      pos2 = _util$rotatePoints2[1];
    offset.x = pos2.x - pos1.x;
    offset.y = pos2.y - pos1.y;
  }
  return offset;
};
/**
 *  发生旋转, 计算得到的旋转角度
 */
var rotateChange = exports.rotateChange = function rotateChange(oldPosition, newPosition, center) {
  // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
  var cx1 = oldPosition.x - center.x;
  var cy1 = oldPosition.y - center.y;
  var angle1 = Math.atan(cy1 / cx1);
  var cx2 = newPosition.x - center.x;
  var cy2 = newPosition.y - center.y;
  var angle2 = Math.atan(cy2 / cx2);
  if (angle1 >= 0 && angle2 < 0) {
    if (cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0) angle2 = Math.PI + angle2;else if (cx1 <= 0 && cy1 <= 0 && cx2 >= 0 && cy2 <= 0) angle2 = Math.PI + angle2;
    //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
  } else if (angle1 <= 0 && angle2 >= 0) {
    if (cx1 >= 0 && cy1 <= 0 && cx2 < 0) angle2 = angle2 - Math.PI;else angle2 = -angle2;
  } else if (angle1 >= 0 && angle2 > 0) {
    //if(cy2 === 0) angle2 = 0;
  }
  return angle2 - angle1;
};
/**
 *  根据操作参数，计算位移，大小和旋转角度等
 */
var getChangeData = exports.getChangeData = function getChangeData(dir, offset, oldPosition, newPosition, center) {
  var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  // 当前移动对原对象的改变
  var args = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    rotation: 0,
    skew: {
      x: 0,
      y: 0
    }
  };
  // 先回原坐标，再主算偏移量，这样保证操作更容易理解
  if (rotation) {
    offset = getRotateEventPosition(offset, oldPosition, newPosition, rotation, center);
  }
  switch (dir) {
    case 'l':
      {
        args.x = offset.x;
        args.width = -offset.x;
        break;
      }
    case 't':
      {
        args.y = offset.y;
        args.height = -offset.y;
        break;
      }
    case 'r':
      {
        args.width = offset.x;
        break;
      }
    case 'b':
      {
        args.height = offset.y;
        break;
      }
    case 'lt':
      {
        args.x = offset.x;
        args.width = -offset.x;
        args.y = offset.y;
        args.height = -offset.y;
        break;
      }
    case 'tr':
      {
        args.width = offset.x;
        args.y = offset.y;
        args.height = -offset.y;
        break;
      }
    case 'rb':
      {
        args.width = offset.x;
        args.height = offset.y;
        break;
      }
    case 'lb':
      {
        args.x = offset.x;
        args.width = -offset.x;
        args.height = offset.y;
        break;
      }
  }
  // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
  if (rotation && (args.x || args.y || args.width || args.height)) {
    var newCenter = {
      x: center.x + args.x + args.width / 2,
      y: center.y + args.y + args.height / 2
    };
    var targetCenter = _util["default"].rotatePoints(_objectSpread({}, newCenter), center, rotation);
    args.x += targetCenter.x - newCenter.x;
    args.y += targetCenter.y - newCenter.y;
  }
  return args;
};

},{"./util":4}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  util: true,
  controller: true
};
exports["default"] = exports.controller = void 0;
Object.defineProperty(exports, "util", {
  enumerable: true,
  get: function get() {
    return _util["default"];
  }
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
var _util = _interopRequireDefault(require("./util"));
var controller = _interopRequireWildcard(require("./controller"));
exports.controller = controller;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _util["default"];

},{"./controller":1,"./types":3,"./util":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _default = exports["default"] = {
  /**
   * 是否是数字，字符串数字或配身就是number返回true
   * @param v 原字符串或数字
   * @returns true/false
   */
  isNumber: function isNumber(v) {
    return typeof v === 'number' || /^\s*[\d]+(\.\d+)?\s*$/.test(v);
  },
  /**
   * 是否是带像素单位(px)的字符串
   * @param v
   * @returns
   */
  isPXNumber: function isPXNumber(v) {
    return /^\s*[\d\.]+\s*px\s*/i.test(v);
  },
  /**
   * 是否是带角度单位(deg)的字符串
   * @param v
   * @returns
   */
  isDegNumber: function isDegNumber(v) {
    return /^\s*[\d\.]+\s*deg\s*/i.test(v);
  },
  /**
   * 是否是带弧度单位(rad)的字符串
   * @param v
   * @returns
   */
  isRadNumber: function isRadNumber(v) {
    return /^\s*[\d\.]+\s*rad\s*/i.test(v);
  },
  /**
   * 转为像素字符串格式 : 2 -> 2px
   * @param v
   * @returns
   */
  toPX: function toPX(v) {
    if (this.isNumber(v)) return v + 'px';
    return v;
  },
  /**
   * 带像素或其它单位的转换为数字: 2px -> 2
   * @param v
   * @returns
   */
  toNumber: function toNumber(v) {
    if (this.isNumber(v)) return Number(v);else if (typeof v === 'string') return parseFloat(v) || 0;
  },
  /**
   * 弧度转角度: Math.PI -> 180
   * @param v
   * @returns
   */
  radToDeg: function radToDeg(v) {
    return v * (180 / Math.PI);
  },
  /**
   * 角度转弧度 180 -> Math.PI
   * @param v
   * @returns
   */
  degToRad: function degToRad(v) {
    return v * (Math.PI / 180);
  },
  /**
   * 转为角度格式 1 -> 1deg, 3.14rad -> 180deg
   * @param v
   * @returns
   */
  toDeg: function toDeg(v) {
    if (this.isNumber(v)) return v + 'deg';
    if (typeof v === 'string' && this.isRadNumber(v)) return this.toDeg(this.radToDeg(parseFloat(v)));
    return v;
  },
  /**
   * 转为弧度格式, 1 -> 1rad,  180deg -> 3.14rad
   * @param v
   * @returns
   */
  toRad: function toRad(v) {
    if (this.isNumber(v)) return v + 'rad';
    if (typeof v === 'string' && this.isDegNumber(v)) return this.toRad(this.degToRad(parseFloat(v)));
    return v;
  },
  /**
   * 获取元素的绝对定位
   * @param  el - 目标元素对象
   * @returns  位置对象(top,left)
   */
  getElementPosition: function getElementPosition(el) {
    var pos = {
      "y": 0,
      "x": 0
    };
    if (!el) return pos;
    if (el.offsetParent) {
      while (el.offsetParent) {
        pos.y += el.offsetTop;
        pos.x += el.offsetLeft;
        el = el.offsetParent;
      }
    }
    // @ts-ignore
    else if (el.x) {
      // @ts-ignore
      pos.x += el.x;
    }
    // @ts-ignore
    else if (el.y) {
      // @ts-ignore
      pos.y += el.y;
    }
    return pos;
  },
  /**
   * 获取元素bounds
   * @param el
   * @returns
   */
  getElementBoundingRect: function getElementBoundingRect(el) {
    var bounds = {
      height: 0,
      width: 0,
      x: 0,
      y: 0
    };
    if (el.getBoundingClientRect) {
      bounds = el.getBoundingClientRect();
      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      bounds.x += scrollLeft;
      bounds.y += scrollTop;
    } else {
      var pos = this.getElementPosition(el);
      bounds.x = pos.x;
      bounds.y = pos.y;
      bounds.width = el.clientWidth;
      bounds.height = el.clientHeight;
    }
    return bounds;
  },
  /**
   * 把domcument坐标转为指定元素相对坐标
   * @param pos
   * @param dom
   * @returns
   */
  toDomPosition: function toDomPosition(pos, dom) {
    var domPos = this.getElementBoundingRect(dom);
    return {
      x: pos.x - domPos.x,
      y: pos.y - domPos.y
    };
  },
  /**
   * 把一个或多个点绕某个点旋转一定角度
   * 先把坐标原点移到旋转中心点，计算后移回
   * @param  p - 一个或多个点
   * @param  rp -  旋转中心点
   * @param  r - 旋转角度
   */
  rotatePoints: function rotatePoints(p, center, r) {
    if (!r || !p) return p;
    var cos = Math.cos(r);
    var sin = Math.sin(r);
    if (Array.isArray(p)) {
      for (var i = 0; i < p.length; i++) {
        if (!p[i]) continue;
        var x1 = p[i].x - center.x;
        var y1 = p[i].y - center.y;
        p[i].x = x1 * cos - y1 * sin + center.x;
        p[i].y = x1 * sin + y1 * cos + center.y;
      }
    } else {
      var _x = p.x - center.x;
      var _y = p.y - center.y;
      p.x = _x * cos - _y * sin + center.x;
      p.y = _x * sin + _y * cos + center.y;
    }
    return p;
  },
  /**
   * 设置dom样式
   * @param dom
   * @param name
   * @param value
   * @returns
   */
  css: function css(dom, name, value) {
    if (!name) return;
    if (_typeof(name) === 'object') {
      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(name)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var n = _step.value;
          this.css(dom, n, name[n]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      dom.style[name] = value;
    }
    return this;
  },
  /**
   * 设置或读取dom属性
   * @param dom
   * @param name
   * @param value
   * @returns
   */
  attr: function attr(dom, name, value) {
    if (typeof value !== 'undefined') {
      dom.setAttribute(name, value + '');
      return value;
    } else {
      return dom.getAttribute(name);
    }
  },
  /**
   * 设置光标位置
   * @param dom 元素 htmlelement
   */
  setRange: function setRange(dom, position) {
    var range;
    if (position) {
      //@ts-ignore
      range = document.caretPositionFromPoint ? document.caretPositionFromPoint(position.x, position.y) : document.caretRangeFromPoint(position.x, position.y);
    } else {
      // 把光标置于最后
      range = document.createRange();
      if (dom) {
        var nodes = dom.childNodes;
        if (nodes.length) {
          var last = nodes[nodes.length - 1];
          range.setStart(last, last.textContent.length);
        }
      }
    }
    var sel = window.getSelection();
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  },
  // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
  uuid: function uuid() {
    var time = Date.now();
    var rnd = Math.floor(Math.random() * 10000000000);
    return (time + rnd).toString();
  },
  /**
   * 把图片旋转一定角度，返回base64
   * @param url
   * @param rotation
   * @returns
   */
  rotateImage: function rotateImage(url, rotation) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var img = new Image();
              img.onload = function (e) {
                var cvs = document.createElement('canvas');
                cvs.width = img.width;
                cvs.height = img.height;
                var ctx = cvs.getContext('2d');
                ctx.clearRect(0, 0, cvs.width, cvs.height);
                ctx.translate(cvs.width / 2, cvs.height / 2);
                ctx.rotate(rotation);
                ctx.translate(-cvs.width / 2, -cvs.height / 2);
                ctx.drawImage(img, 0, 0);
                var data = cvs.toDataURL();
                resolve(data);
              };
              img.onerror = function (e) {
                reject && reject(e);
              };
              img.src = url;
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 请求远程资源
   * @param url
   * @param option
   * @returns
   */
  request: function request(url, option) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            option = option || {};
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var request = new XMLHttpRequest(); //新建XMLHttpRequest对象
              if (option.headers) {
                for (var name in option.headers) {
                  request.setRequestHeader(name, option.headers[name]);
                }
              }
              var params = [];
              if (option.data) {
                for (var _name in option.data) {
                  params.push("".concat(_name, "=").concat(encodeURIComponent(option.data[_name])));
                }
              }
              var method = option.method ? option.method.toUpperCase() : 'GET';
              if (method === 'GET') {
                url += (url.includes('?') ? '&' : '?') + params.join('&');
              }
              request.onreadystatechange = function (e) {
                if (this.readyState === 4) {
                  //成功完成
                  //判断相应结果：
                  if (this.status === 200) {
                    resolve(this.responseText);
                  } else {
                    reject(e);
                  }
                }
              };
              //发送请求：
              request.open(method, url);
              request.send(method === 'POST' ? params.join('&') : null);
            }));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbnRyb2xsZXIuanMiLCJkaXN0L2luZGV4LmpzIiwiZGlzdC91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUEwQixTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUEsY0FBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsT0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsTUFBQSxDQUFBLHlCQUFBLEdBQUEsTUFBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsa0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLFNBQUEseUVBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZUFBQSxHQUFBLEVBQUEsQ0FBQSxXQUFBLGVBQUEsQ0FBQSxHQUFBLEtBQUEscUJBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxLQUFBLDJCQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxnQkFBQTtBQUFBLFNBQUEsaUJBQUEsY0FBQSxTQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsTUFBQSxTQUFBLENBQUEscUJBQUEsQ0FBQSxzQkFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsbUJBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSwrREFBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGtCQUFBLEdBQUEsRUFBQSxHQUFBLFFBQUEsR0FBQSxZQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsTUFBQSxJQUFBLE9BQUEsS0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQTtBQUFBLFNBQUEsc0JBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxnQ0FBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEtBQUEsQ0FBQSw0QkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxpQkFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsUUFBQSxDQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSx1QkFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLHlCQUFBLENBQUEsWUFBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBLENBQUEsY0FBQSxNQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsMkJBQUEsQ0FBQSxRQUFBLENBQUEsYUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQTtBQUFBLFNBQUEsb0JBQUEsa0JBQzFCLHFKQUFBLG1CQUFBLFlBQUEsb0JBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEtBQUEsQ0FBQSx3QkFBQSxNQUFBLEdBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxrQkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGFBQUEsdUJBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLDhCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxNQUFBLFlBQUEsTUFBQSxRQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsV0FBQSxNQUFBLG1CQUFBLENBQUEsSUFBQSxNQUFBLFlBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsZ0JBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBLGVBQUEsS0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxhQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLElBQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxjQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsR0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEscUJBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHFDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLFlBQUEsc0JBQUEsQ0FBQSxnQ0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHNCQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLDJCQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFlBQUEsS0FBQSxzQ0FBQSxDQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxtQkFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLHNCQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLHFCQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHVDQUFBLENBQUEsaUJBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHNDQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxjQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxNQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsVUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsb0JBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsYUFBQSxRQUFBLENBQUEsU0FBQSxVQUFBLE1BQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxjQUFBLEtBQUEsaUJBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsS0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLGdCQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxrQ0FBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxDQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLG1CQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxpQkFBQSw2QkFBQSxDQUFBLENBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSwwQkFBQSxLQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLGFBQUEsT0FBQSxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxpQ0FBQSxDQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlDQUFBLE1BQUEsQ0FBQSxDQUFBLDZEQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxhQUFBLEtBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsSUFBQSxXQUFBLElBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLElBQUEsWUFBQSxRQUFBLGNBQUEsTUFBQSxnQkFBQSxHQUFBLEdBQUEsQ0FBQSxPQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxJQUFBLFdBQUEsS0FBQSxTQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsS0FBQSxpQkFBQSxXQUFBLGtCQUFBLENBQUEsYUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsa0JBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxZQUFBLEtBQUEscURBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLFlBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSx3QkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsTUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLFNBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLFdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBLE1BQUEsa0JBQUEsSUFBQSx5QkFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxLQUFBLDhCQUFBLGFBQUEsV0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxRQUFBLEtBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxvQkFBQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxjQUFBLElBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsaUJBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxZQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsRUFBQSw2QkFBQSxJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsYUFBQSxPQUFBLFdBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxZQUFBLE1BQUEsS0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsVUFBQSxLQUFBLGNBQUEsT0FBQSxHQUFBLElBQUEsa0JBQUEsQ0FB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QUFPLElBQUk7QUFDZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMRCxJQUFBLE1BQUEsR0FBQSxPQUFBO0FBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsT0FBQSxXQUFBLEdBQUE7RUFBQSxJQUFBLEdBQUEsa0JBQUEsR0FBQTtFQUFBLElBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLFlBQUEsRUFBQSxHQUFBO0VBQUEsSUFBQSxHQUFBLElBQUEsT0FBQSxJQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsTUFBQSxDQUFBLEdBQUE7RUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxHQUFBO0lBQUEsVUFBQTtJQUFBLEdBQUEsV0FBQSxJQUFBO01BQUEsT0FBQSxNQUFBLENBQUEsR0FBQTtJQUFBO0VBQUE7QUFBQTtBQUNBLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsVUFBQSxHQUFBLHVCQUFBLENBQUEsT0FBQTtBQUEyQyxPQUFBLENBQUEsVUFBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLHlCQUFBLENBQUEsNkJBQUEsT0FBQSxtQkFBQSxDQUFBLE9BQUEsT0FBQSxJQUFBLENBQUEsT0FBQSxPQUFBLFlBQUEsd0JBQUEsWUFBQSx5QkFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQTtBQUFBLFNBQUEsd0JBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsQ0FBQSxlQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxzQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLHdCQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsU0FBQSxVQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxJQUFBLE1BQUEsQ0FBQSx3QkFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLG9CQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsWUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLElBQUEsUUFBQSxHQUFBLE9BQUEsY0FFNUIsZ0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDSG5CLHFKQUFBLG1CQUFBLFlBQUEsb0JBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEtBQUEsQ0FBQSx3QkFBQSxNQUFBLEdBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxrQkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGFBQUEsdUJBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLDhCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxNQUFBLFlBQUEsTUFBQSxRQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsV0FBQSxNQUFBLG1CQUFBLENBQUEsSUFBQSxNQUFBLFlBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsZ0JBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBLGVBQUEsS0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxhQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLElBQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxjQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsR0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEscUJBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHFDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLFlBQUEsc0JBQUEsQ0FBQSxnQ0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHNCQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLDJCQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFlBQUEsS0FBQSxzQ0FBQSxDQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxtQkFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLHNCQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLHFCQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHVDQUFBLENBQUEsaUJBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHNDQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxjQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxNQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsVUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsb0JBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsYUFBQSxRQUFBLENBQUEsU0FBQSxVQUFBLE1BQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxjQUFBLEtBQUEsaUJBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsS0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLGdCQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxrQ0FBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxDQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLG1CQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxpQkFBQSw2QkFBQSxDQUFBLENBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSwwQkFBQSxLQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLGFBQUEsT0FBQSxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxpQ0FBQSxDQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlDQUFBLE1BQUEsQ0FBQSxDQUFBLDZEQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxhQUFBLEtBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsSUFBQSxXQUFBLElBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLElBQUEsWUFBQSxRQUFBLGNBQUEsTUFBQSxnQkFBQSxHQUFBLEdBQUEsQ0FBQSxPQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxJQUFBLFdBQUEsS0FBQSxTQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsS0FBQSxpQkFBQSxXQUFBLGtCQUFBLENBQUEsYUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsa0JBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxZQUFBLEtBQUEscURBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLFlBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSx3QkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsTUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLFNBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLFdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBLE1BQUEsa0JBQUEsSUFBQSx5QkFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxLQUFBLDhCQUFBLGFBQUEsV0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxRQUFBLEtBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxvQkFBQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxjQUFBLElBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsaUJBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxZQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsRUFBQSw2QkFBQSxJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsYUFBQSxPQUFBLFdBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxZQUFBLE1BQUEsS0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsVUFBQSxLQUFBLGNBQUEsT0FBQSxHQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxXQUFBLEdBQUEsS0FBQSxLQUFBLENBQUEsU0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsOEJBQUEsTUFBQSxRQUFBLEdBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxNQUFBLFNBQUEsQ0FBQSxxQkFBQSxDQUFBLHNCQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxtQkFBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLCtEQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxHQUFBLFlBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxNQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBO0FBQUEsU0FBQSxRQUFBLENBQUEsc0NBQUEsT0FBQSx3QkFBQSxNQUFBLHVCQUFBLE1BQUEsQ0FBQSxRQUFBLGFBQUEsQ0FBQSxrQkFBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLHlCQUFBLE1BQUEsSUFBQSxDQUFB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QUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxLQUFLO2NBQ2xFLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDbEIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2NBQzdEO2NBQ0EsT0FBTyxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2tCQUFFO2tCQUN6QjtrQkFDQSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO29CQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztrQkFDOUIsQ0FBQyxNQUNJO29CQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7a0JBQ2I7Z0JBQ0o7Y0FDSixDQUFDO2NBQ0Q7Y0FDQSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7Y0FDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELENBQUMsQ0FBQztVQUFBO1VBQUE7WUFBQSxPQUFBLFNBQUEsQ0FBQSxJQUFBO1FBQUE7TUFBQSxHQUFBLFFBQUE7SUFBQTtFQUNOO0FBQ0osQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XG5leHBvcnQgY29uc3QgZnVsbENpcmNsZVJhZGl1cyA9IE1hdGguUEkgKiAyO1xuLyoqXG4gKiDmk43kvZzmnaDmjIfpkojphY3nva5cbiAqL1xuZXhwb3J0IGNvbnN0IEN1cnNvcnMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICAnbCc6ICcnLFxuICAgICAgICAnbHQnOiAnJyxcbiAgICAgICAgJ3QnOiAnJyxcbiAgICAgICAgJ3RyJzogJycsXG4gICAgICAgICdyJzogJycsXG4gICAgICAgICdyYic6ICcnLFxuICAgICAgICAnYic6ICcnLFxuICAgICAgICAnbGInOiAnJyxcbiAgICAgICAgJ3JvdGF0ZSc6ICcnLFxuICAgICAgICAnc2tldyc6ICdwb2ludGVyJ1xuICAgIH0sXG4gICAgLy8g5qC55o2u6KeS5bqm5peL6L2s5oyH6ZKIXG4gICAgYXN5bmMgZ2V0KGRpciwgcm90YXRpb24gPSAwKSB7XG4gICAgICAgIGlmIChkaXIgPT09ICdyb3RhdGUnIHx8IGRpciA9PT0gJ3NrZXcnKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbZGlyXTtcbiAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0aW9uKSA+IGZ1bGxDaXJjbGVSYWRpdXMpXG4gICAgICAgICAgICByb3RhdGlvbiA9IHJvdGF0aW9uICUgZnVsbENpcmNsZVJhZGl1cztcbiAgICAgICAgLy8gMlBJIOS4uuS4gOS4quWchu+8jOaKiuinkuW6pui9rOS4uuS4gOS4quWchuWGheeahOWAvO+8jOS7peWFjemHjeWkjeeUn+aIkOWbvueJh1xuICAgICAgICBjb25zdCByb3RhdGlvbktleSA9IE51bWJlcihyb3RhdGlvbi50b0ZpeGVkKDIpKTsgLy8g57K+5bqm5Y+q5Y+W5bCP5pWwMuS9jVxuICAgICAgICBjb25zdCBrZXkgPSByb3RhdGlvbktleSA9PT0gMCA/IGRpciA6IGAke2Rpcn1fJHtyb3RhdGlvbktleX1gO1xuICAgICAgICBsZXQgY3Vyc29yID0gdGhpc1trZXldO1xuICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgaWYgKGRpciA9PT0gJ2wnIHx8IGRpciA9PT0gJ3InIHx8IGRpciA9PT0gJ3QnIHx8IGRpciA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5peL6L2s6KeS5bqm77yM5YiZ5oqKbnPovaw5MOW6puWNs+WPr1xuICAgICAgICAgICAgICAgIGlmIChyb3RhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBhd2FpdCB1dGlsLnJvdGF0ZUltYWdlKHRoaXNbJ3QnXSwgTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzWydsJ10gPSB0aGlzWydyJ10gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWmguaenOacieaXi+i9rOinkuW6pu+8jOWImeiOt+WPluagh+WHhueahOWGjei9rOWvueW6lOeahOinkuW6plxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWwgPSBhd2FpdCB0aGlzLmdldChkaXIsIDApO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBhd2FpdCB1dGlsLnJvdGF0ZUltYWdlKG5vcm1hbCwgcm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyID09PSAndHInIHx8IGRpciA9PT0gJ2xiJyB8fCBkaXIgPT09ICdsdCcgfHwgZGlyID09PSAncmInKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5peL6L2s6KeS5bqm77yM5YiZ5oqKbndzZei9rDkw5bqm5Y2z5Y+vXG4gICAgICAgICAgICAgICAgaWYgKHJvdGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IGF3YWl0IHV0aWwucm90YXRlSW1hZ2UodGhpc1snbHQnXSwgTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1sndHInXSA9IHRoaXNbJ2xiJ10gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWmguaenOacieaXi+i9rOinkuW6pu+8jOWImeiOt+WPluagh+WHhueahOWGjei9rOWvueW6lOeahOinkuW6plxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWwgPSBhd2FpdCB0aGlzLmdldChkaXIsIDApO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBhd2FpdCB1dGlsLnJvdGF0ZUltYWdlKG5vcm1hbCwgcm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJzb3I7XG4gICAgfVxufTtcbi8qKlxuICog5Zug5Li65peL6L2s5ZCO5Z2Q5qCH6KaB5Zue5Y6f5omN5aW96K6h566X5pON5L2c77yMXG4gKiBAcGFyYW0gb2Zmc2V0XG4gKiBAcGFyYW0gb2xkUG9zaXRpb25cbiAqIEBwYXJhbSBuZXdQb3NpdGlvblxuICogQHBhcmFtIHJvdGF0aW9uXG4gKiBAcGFyYW0gY2VudGVyXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0Um90YXRlRXZlbnRQb3NpdGlvbiA9IChvZmZzZXQsIG9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbiwgcm90YXRpb24sIGNlbnRlcikgPT4ge1xuICAgIC8vIOWFiOWbnuWOn+WdkOagh++8jOWGjeS4u+eul+WBj+enu+mHj++8jOi/meagt+S/neivgeaTjeS9nOabtOWuueaYk+eQhuino1xuICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICBjb25zdCBbcG9zMSwgcG9zMl0gPSB1dGlsLnJvdGF0ZVBvaW50cyhbb2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uXSwgY2VudGVyLCAtcm90YXRpb24pO1xuICAgICAgICBvZmZzZXQueCA9IHBvczIueCAtIHBvczEueDtcbiAgICAgICAgb2Zmc2V0LnkgPSBwb3MyLnkgLSBwb3MxLnk7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuLyoqXG4gKiAg5Y+R55Sf5peL6L2sLCDorqHnrpflvpfliLDnmoTml4vovazop5LluqZcbiAqL1xuZXhwb3J0IGNvbnN0IHJvdGF0ZUNoYW5nZSA9IChvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24sIGNlbnRlcikgPT4ge1xuICAgIC8vIOWboOS4umNlbnRlcuaYr+ebuOWvueS6jue8lui+keWZqOeahO+8jOaJgOS7peS6i+S7tuWdkOagh+S5n+mcgOimgei9rOWIsOe8lui+keWZqFxuICAgIGNvbnN0IGN4MSA9IG9sZFBvc2l0aW9uLnggLSBjZW50ZXIueDtcbiAgICBjb25zdCBjeTEgPSBvbGRQb3NpdGlvbi55IC0gY2VudGVyLnk7XG4gICAgbGV0IGFuZ2xlMSA9IE1hdGguYXRhbihjeTEgLyBjeDEpO1xuICAgIGNvbnN0IGN4MiA9IG5ld1Bvc2l0aW9uLnggLSBjZW50ZXIueDtcbiAgICBjb25zdCBjeTIgPSBuZXdQb3NpdGlvbi55IC0gY2VudGVyLnk7XG4gICAgbGV0IGFuZ2xlMiA9IE1hdGguYXRhbihjeTIgLyBjeDIpO1xuICAgIGlmIChhbmdsZTEgPj0gMCAmJiBhbmdsZTIgPCAwKSB7XG4gICAgICAgIGlmIChjeDEgPj0gMCAmJiBjeTEgPj0gMCAmJiBjeDIgPD0gMCAmJiBjeTIgPj0gMClcbiAgICAgICAgICAgIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgIGVsc2UgaWYgKGN4MSA8PSAwICYmIGN5MSA8PSAwICYmIGN4MiA+PSAwICYmIGN5MiA8PSAwKVxuICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgLy9lbHNlIGlmKGN4MSA8PSAwICYmIGN5MSA8PTAgJiYgY3gyID49IDAgJiYgY3kyID49IDApIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFuZ2xlMSA8PSAwICYmIGFuZ2xlMiA+PSAwKSB7XG4gICAgICAgIGlmIChjeDEgPj0gMCAmJiBjeTEgPD0gMCAmJiBjeDIgPCAwKVxuICAgICAgICAgICAgYW5nbGUyID0gYW5nbGUyIC0gTWF0aC5QSTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYW5nbGUyID0gLWFuZ2xlMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5nbGUxID49IDAgJiYgYW5nbGUyID4gMCkge1xuICAgICAgICAvL2lmKGN5MiA9PT0gMCkgYW5nbGUyID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGFuZ2xlMiAtIGFuZ2xlMTtcbn07XG4vKipcbiAqICDmoLnmja7mk43kvZzlj4LmlbDvvIzorqHnrpfkvY3np7vvvIzlpKflsI/lkozml4vovazop5LluqbnrYlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENoYW5nZURhdGEgPSAoZGlyLCBvZmZzZXQsIG9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbiwgY2VudGVyLCByb3RhdGlvbiA9IDApID0+IHtcbiAgICAvLyDlvZPliY3np7vliqjlr7nljp/lr7nosaHnmoTmlLnlj5hcbiAgICBjb25zdCBhcmdzID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgc2tldzoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgIG9mZnNldCA9IGdldFJvdGF0ZUV2ZW50UG9zaXRpb24ob2Zmc2V0LCBvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24sIHJvdGF0aW9uLCBjZW50ZXIpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICBjYXNlICdsJzoge1xuICAgICAgICAgICAgYXJncy54ID0gb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLndpZHRoID0gLW9mZnNldC54O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAndCc6IHtcbiAgICAgICAgICAgIGFyZ3MueSA9IG9mZnNldC55O1xuICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2Zmc2V0Lnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdyJzoge1xuICAgICAgICAgICAgYXJncy53aWR0aCA9IG9mZnNldC54O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYic6IHtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2Zmc2V0Lnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdsdCc6IHtcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZnNldC54O1xuICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3MueSA9IG9mZnNldC55O1xuICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2Zmc2V0Lnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICd0cic6IHtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3MueSA9IG9mZnNldC55O1xuICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2Zmc2V0Lnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdyYic6IHtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2Zmc2V0Lnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdsYic6IHtcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZnNldC54O1xuICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2Zmc2V0Lnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlpoLmnpzkuK3lv4Plj5HnlJ/kuoblgY/np7vvvIzliJnmlrDkuK3lv4PngrnopoHnp7vliLDnu5Xljp/kuK3lv4Pngrnml4vovazlvZPliY3ml4vovazop5LluqbnmoTngrnvvIzmiY3kuL7kvb/lm77lvaLnp7vliqjkuI3mraPluLhcbiAgICBpZiAocm90YXRpb24gJiYgKGFyZ3MueCB8fCBhcmdzLnkgfHwgYXJncy53aWR0aCB8fCBhcmdzLmhlaWdodCkpIHtcbiAgICAgICAgY29uc3QgbmV3Q2VudGVyID0ge1xuICAgICAgICAgICAgeDogY2VudGVyLnggKyBhcmdzLnggKyBhcmdzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IGNlbnRlci55ICsgYXJncy55ICsgYXJncy5oZWlnaHQgLyAyXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRhcmdldENlbnRlciA9IHV0aWwucm90YXRlUG9pbnRzKHsgLi4ubmV3Q2VudGVyIH0sIGNlbnRlciwgcm90YXRpb24pO1xuICAgICAgICBhcmdzLnggKz0gdGFyZ2V0Q2VudGVyLnggLSBuZXdDZW50ZXIueDtcbiAgICAgICAgYXJncy55ICs9IHRhcmdldENlbnRlci55IC0gbmV3Q2VudGVyLnk7XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmV4cG9ydCB7IHV0aWwsIGNvbnRyb2xsZXIgfTtcbmV4cG9ydCBkZWZhdWx0IHV0aWw7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5pWw5a2X77yM5a2X56ym5Liy5pWw5a2X5oiW6YWN6Lqr5bCx5pivbnVtYmVy6L+U5ZuedHJ1ZVxuICAgICAqIEBwYXJhbSB2IOWOn+Wtl+espuS4suaIluaVsOWtl1xuICAgICAqIEByZXR1cm5zIHRydWUvZmFsc2VcbiAgICAgKi9cbiAgICBpc051bWJlcih2KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgL15cXHMqW1xcZF0rKFxcLlxcZCspP1xccyokLy50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5bim5YOP57Sg5Y2V5L2NKHB4KeeahOWtl+espuS4slxuICAgICAqIEBwYXJhbSB2XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBpc1BYTnVtYmVyKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypweFxccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5bim6KeS5bqm5Y2V5L2NKGRlZynnmoTlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgaXNEZWdOdW1iZXIodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKmRlZ1xccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5bim5byn5bqm5Y2V5L2NKHJhZCnnmoTlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgaXNSYWROdW1iZXIodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKnJhZFxccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6L2s5Li65YOP57Sg5a2X56ym5Liy5qC85byPIDogMiAtPiAycHhcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgdG9QWCh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHYgKyAncHgnO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOW4puWDj+e0oOaIluWFtuWug+WNleS9jeeahOi9rOaNouS4uuaVsOWtlzogMnB4IC0+IDJcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgdG9OdW1iZXIodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodik7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHYpIHx8IDA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlvKfluqbovazop5LluqY6IE1hdGguUEkgLT4gMTgwXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHJhZFRvRGVnKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDop5LluqbovazlvKfluqYgMTgwIC0+IE1hdGguUElcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZGVnVG9SYWQodikge1xuICAgICAgICByZXR1cm4gdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOi9rOS4uuinkuW6puagvOW8jyAxIC0+IDFkZWcsIDMuMTRyYWQgLT4gMTgwZGVnXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHRvRGVnKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdkZWcnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNSYWROdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RlZyh0aGlzLnJhZFRvRGVnKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDovazkuLrlvKfluqbmoLzlvI8sIDEgLT4gMXJhZCwgIDE4MGRlZyAtPiAzLjE0cmFkXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHRvUmFkKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdyYWQnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNEZWdOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JhZCh0aGlzLmRlZ1RvUmFkKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKDnmoTnu53lr7nlrprkvY1cbiAgICAgKiBAcGFyYW0gIGVsIC0g55uu5qCH5YWD57Sg5a+56LGhXG4gICAgICogQHJldHVybnMgIOS9jee9ruWvueixoSh0b3AsbGVmdClcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50UG9zaXRpb24oZWwpIHtcbiAgICAgICAgY29uc3QgcG9zID0geyBcInlcIjogMCwgXCJ4XCI6IDAgfTtcbiAgICAgICAgaWYgKCFlbClcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwb3MueSArPSBlbC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgcG9zLnggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVsc2UgaWYgKGVsLngpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBvcy54ICs9IGVsLng7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC55KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueSArPSBlbC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKBib3VuZHNcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldEVsZW1lbnRCb3VuZGluZ1JlY3QoZWwpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHtcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgYm91bmRzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGJvdW5kcy54ICs9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICBib3VuZHMueSArPSBzY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbihlbCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHBvcy54O1xuICAgICAgICAgICAgYm91bmRzLnkgPSBwb3MueTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oqKZG9tY3VtZW505Z2Q5qCH6L2s5Li65oyH5a6a5YWD57Sg55u45a+55Z2Q5qCHXG4gICAgICogQHBhcmFtIHBvc1xuICAgICAqIEBwYXJhbSBkb21cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHRvRG9tUG9zaXRpb24ocG9zLCBkb20pIHtcbiAgICAgICAgY29uc3QgZG9tUG9zID0gdGhpcy5nZXRFbGVtZW50Qm91bmRpbmdSZWN0KGRvbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb3MueCAtIGRvbVBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnkgLSBkb21Qb3MueVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oqK5LiA5Liq5oiW5aSa5Liq54K557uV5p+Q5Liq54K55peL6L2s5LiA5a6a6KeS5bqmXG4gICAgICog5YWI5oqK5Z2Q5qCH5Y6f54K556e75Yiw5peL6L2s5Lit5b+D54K577yM6K6h566X5ZCO56e75ZueXG4gICAgICogQHBhcmFtICBwIC0g5LiA5Liq5oiW5aSa5Liq54K5XG4gICAgICogQHBhcmFtICBycCAtICDml4vovazkuK3lv4PngrlcbiAgICAgKiBAcGFyYW0gIHIgLSDml4vovazop5LluqZcbiAgICAgKi9cbiAgICByb3RhdGVQb2ludHMocCwgY2VudGVyLCByKSB7XG4gICAgICAgIGlmICghciB8fCAhcClcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICBsZXQgY29zID0gTWF0aC5jb3Mocik7XG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbihyKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghcFtpXSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgbGV0IHgxID0gcFtpXS54IC0gY2VudGVyLng7XG4gICAgICAgICAgICAgICAgbGV0IHkxID0gcFtpXS55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgcFtpXS54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHBbaV0ueSA9IHgxICogc2luICsgeTEgKiBjb3MgKyBjZW50ZXIueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4MSA9IHAueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgbGV0IHkxID0gcC55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICBwLnggPSB4MSAqIGNvcyAtIHkxICogc2luICsgY2VudGVyLng7XG4gICAgICAgICAgICBwLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDorr7nva5kb23moLflvI9cbiAgICAgKiBAcGFyYW0gZG9tXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGNzcyhkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jc3MoZG9tLCBuLCBuYW1lW25dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6K6+572u5oiW6K+75Y+WZG9t5bGe5oCnXG4gICAgICogQHBhcmFtIGRvbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhdHRyKGRvbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgKyAnJyk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog6K6+572u5YWJ5qCH5L2N572uXG4gICAgICogQHBhcmFtIGRvbSDlhYPntKAgaHRtbGVsZW1lbnRcbiAgICAgKi9cbiAgICBzZXRSYW5nZShkb20sIHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCByYW5nZTtcbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY2FyZXRQb3NpdGlvbkZyb21Qb2ludCA/IGRvY3VtZW50LmNhcmV0UG9zaXRpb25Gcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSkgOiBkb2N1bWVudC5jYXJldFJhbmdlRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5oqK5YWJ5qCH572u5LqO5pyA5ZCOXG4gICAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICBpZiAoZG9tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBkb20uY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQobGFzdCwgbGFzdC50ZXh0Q29udGVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG4gICAgfSxcbiAgICAvLyDmnKzlnLDllK/kuIBJRO+8jOi/meS4quWPquimgeS/neivgeW9k+WJjee6v+eoi+WUr+S4gOWNs+WPr++8jOmdnuWFqOeQg+WUr+S4gFxuICAgIHV1aWQoKSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMCk7XG4gICAgICAgIHJldHVybiAodGltZSArIHJuZCkudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaKiuWbvueJh+aXi+i9rOS4gOWumuinkuW6pu+8jOi/lOWbnmJhc2U2NFxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gcm90YXRpb25cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGFzeW5jIHJvdGF0ZUltYWdlKHVybCwgcm90YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgY3ZzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIGN2cy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3ZzLndpZHRoLCBjdnMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKGN2cy53aWR0aCAvIDIsIGN2cy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKHJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKC1jdnMud2lkdGggLyAyLCAtY3ZzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY3ZzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdCAmJiByZWplY3QoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDor7fmsYLov5znqIvotYTmupBcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIG9wdGlvblxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdCh1cmwsIG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBvcHRpb24gfHwge307XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8v5paw5bu6WE1MSHR0cFJlcXVlc3Tlr7nosaFcbiAgICAgICAgICAgIGlmIChvcHRpb24uaGVhZGVycykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBvcHRpb24uaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIobmFtZSwgb3B0aW9uLmhlYWRlcnNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5kYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIG9wdGlvbi5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbi5kYXRhW25hbWVdKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBvcHRpb24ubWV0aG9kID8gb3B0aW9uLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCc7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPycpICsgcGFyYW1zLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7IC8v5oiQ5Yqf5a6M5oiQXG4gICAgICAgICAgICAgICAgICAgIC8v5Yik5pat55u45bqU57uT5p6c77yaXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL+WPkemAgeivt+axgu+8mlxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZChtZXRob2QgPT09ICdQT1NUJyA/IHBhcmFtcy5qb2luKCcmJykgOiBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiJdfQ==
