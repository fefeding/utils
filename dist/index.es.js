(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChangeData = exports.rotateChange = exports.getRotateEventPosition = exports.Cursors = exports.fullCircleRadius = void 0;
var util_1 = __importDefault(require("./util"));
exports.fullCircleRadius = Math.PI * 2;
/**
 * 操作杠指针配置
 */
exports.Cursors = {
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
      var rotation, data, rotationKey, key, cursor, normal, _normal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            rotation = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
            data = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : _this.data;
            if (!(dir === 'rotate' || dir === 'skew')) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", data[dir] || 'pointer');
          case 4:
            if (Math.abs(rotation) > exports.fullCircleRadius) rotation = rotation % exports.fullCircleRadius;
            // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
            rotationKey = Number(rotation.toFixed(2)); // 精度只取小数2位
            key = rotationKey === 0 ? dir : "".concat(dir, "_").concat(rotationKey);
            cursor = data[key];
            if (cursor) {
              _context.next = 59;
              break;
            }
            if (!(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b')) {
              _context.next = 35;
              break;
            }
            if (!(rotation === 0)) {
              _context.next = 24;
              break;
            }
            if (data['t']) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", 'pointer');
          case 13:
            if (!(dir === 'b')) {
              _context.next = 17;
              break;
            }
            cursor = data[dir] = data['t'];
            _context.next = 22;
            break;
          case 17:
            _context.next = 19;
            return util_1["default"].rotateImage(data['t'], Math.PI / 2);
          case 19:
            cursor = _context.sent;
            if (!data['l']) data['l'] = cursor;
            if (!data['r']) data['r'] = cursor;
          case 22:
            _context.next = 33;
            break;
          case 24:
            _context.next = 26;
            return _this.get(dir, 0, data);
          case 26:
            normal = _context.sent;
            if (!(!normal || normal === 'pointer')) {
              _context.next = 29;
              break;
            }
            return _context.abrupt("return", 'pointer');
          case 29:
            _context.next = 31;
            return util_1["default"].rotateImage(normal, rotation);
          case 31:
            cursor = _context.sent;
            data[key] = cursor;
          case 33:
            _context.next = 59;
            break;
          case 35:
            if (!(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb')) {
              _context.next = 59;
              break;
            }
            if (!(rotation === 0)) {
              _context.next = 50;
              break;
            }
            if (data['lt']) {
              _context.next = 39;
              break;
            }
            return _context.abrupt("return", 'pointer');
          case 39:
            if (!(dir === 'rb')) {
              _context.next = 43;
              break;
            }
            cursor = data[dir] = data['lt'];
            _context.next = 48;
            break;
          case 43:
            _context.next = 45;
            return util_1["default"].rotateImage(data['lt'], Math.PI / 2);
          case 45:
            cursor = _context.sent;
            if (!data['tr']) data['tr'] = cursor;
            if (!data['lb']) data['lb'] = cursor;
          case 48:
            _context.next = 59;
            break;
          case 50:
            _context.next = 52;
            return _this.get(dir, 0, data);
          case 52:
            _normal = _context.sent;
            if (!(!_normal || _normal === 'pointer')) {
              _context.next = 55;
              break;
            }
            return _context.abrupt("return", 'pointer');
          case 55:
            _context.next = 57;
            return util_1["default"].rotateImage(_normal, rotation);
          case 57:
            cursor = _context.sent;
            data[key] = cursor;
          case 59:
            return _context.abrupt("return", cursor);
          case 60:
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
var getRotateEventPosition = function getRotateEventPosition(offset, oldPosition, newPosition, rotation, center) {
  // 先回原坐标，再主算偏移量，这样保证操作更容易理解
  if (rotation) {
    var _util_1$default$rotat = util_1["default"].rotatePoints([oldPosition, newPosition], center, -rotation),
      _util_1$default$rotat2 = _slicedToArray(_util_1$default$rotat, 2),
      pos1 = _util_1$default$rotat2[0],
      pos2 = _util_1$default$rotat2[1];
    offset.x = pos2.x - pos1.x;
    offset.y = pos2.y - pos1.y;
  }
  return offset;
};
exports.getRotateEventPosition = getRotateEventPosition;
/**
 *  发生旋转, 计算得到的旋转角度
 */
var rotateChange = function rotateChange(oldPosition, newPosition, center) {
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
exports.rotateChange = rotateChange;
/**
 *  根据操作参数，计算位移，大小和旋转角度等
 */
var getChangeData = function getChangeData(dir, offset, oldPosition, newPosition, center) {
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
    offset = (0, exports.getRotateEventPosition)(offset, oldPosition, newPosition, rotation, center);
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
    var targetCenter = util_1["default"].rotatePoints(_objectSpread({}, newCenter), center, rotation);
    args.x += targetCenter.x - newCenter.x;
    args.y += targetCenter.y - newCenter.y;
  }
  return args;
};
exports.getChangeData = getChangeData;

},{"./util":4}],2:[function(require,module,exports){
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = exports.util = void 0;
__exportStar(require("./types"), exports);
var util_1 = __importDefault(require("./util"));
exports.util = util_1["default"];
var controller = __importStar(require("./controller"));
exports.controller = controller;
exports["default"] = util_1["default"];

},{"./controller":1,"./types":3,"./util":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],4:[function(require,module,exports){
"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
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
    if (this.isNumber(v) || !this.isPXNumber(v)) return v + 'px';
    return v + '';
  },
  /**
   * 带像素或其它单位的转换为数字: 2px -> 2
   * @param v
   * @param fractionDigits 保留小数位
   * @returns
   */
  toNumber: function toNumber(v, fractionDigits) {
    if (this.isNumber(v)) v = Number(v);else if (typeof v === 'string') v = parseFloat(v) || 0;
    if (typeof fractionDigits !== 'undefined') {
      v = Number(v.toFixed(fractionDigits));
    }
    return v;
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
    return v + '';
  },
  /**
   * 转为弧度格式, 1 -> 1rad,  180deg -> 3.14rad
   * @param v
   * @returns
   */
  toRad: function toRad(v) {
    if (this.isNumber(v)) return v + 'rad';
    if (typeof v === 'string' && this.isDegNumber(v)) return this.toRad(this.degToRad(parseFloat(v)));
    return v + '';
  },
  /**
   * 把数值按比例转为目标数值，比如rgba的 0.5-》0.5*255
   * @param v
   * @param multiple 比例值，默认255
   */
  toMultipleInt: function toMultipleInt(v) {
    var multiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return Math.ceil(v * multiple);
  },
  /**
   * 把rgba颜色转为rgba()串型式
   * multiple倍数，如果是小数，则需要*255转到标准值
   */
  colorToString: function colorToString(color) {
    var multiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var str = "".concat(this.toMultipleInt(color.r, multiple), ",").concat(this.toMultipleInt(color.g, multiple), ",").concat(this.toMultipleInt(color.b, multiple));
    if (typeof color.a !== 'undefined') {
      str = "rgba(".concat(str, ",").concat(this.toMultipleInt(color.a, multiple), ")");
    } else {
      str = "rgb(".concat(str, ")");
    }
    return str;
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
   * 设置class样式
   * @param dom 节点
   * @param name 样式名
   * @param remove 如果true则表示删除样式
   */
  "class": function _class(dom, name) {
    var remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (Array.isArray(name)) {
      var _iterator2 = _createForOfIteratorHelper(name),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var n = _step2.value;
          this["class"](dom, n, remove);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return;
    }
    if (remove) {
      dom.classList.remove(name);
    } else {
      if (!dom.classList.contains(name)) dom.classList.add(name);
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
            if (url) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", url);
          case 2:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var img = new Image();
              img.setAttribute('crossorigin', 'anonymous');
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
          case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbnRyb2xsZXIuanMiLCJkaXN0L2luZGV4LmpzIiwiZGlzdC90eXBlcy5qcyIsImRpc3QvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVk7O0FBQUMsU0FBQSxRQUFBLENBQUEsc0NBQUEsT0FBQSx3QkFBQSxNQUFBLHVCQUFBLE1BQUEsQ0FBQSxRQUFBLGFBQUEsQ0FBQSxrQkFBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLHlCQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxLQUFBLE1BQUEsSUFBQSxDQUFBLEtBQUEsTUFBQSxDQUFBLFNBQUEscUJBQUEsQ0FBQSxLQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxRQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxxQkFBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxTQUFBLGNBQUEsQ0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLE9BQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLE1BQUEsQ0FBQSx5QkFBQSxHQUFBLE1BQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsaUJBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLFFBQUEsWUFBQSxRQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLFdBQUEsR0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxTQUFBLHlFQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGVBQUEsR0FBQSxFQUFBLENBQUEsV0FBQSxlQUFBLENBQUEsR0FBQSxLQUFBLHFCQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSwyQkFBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsZ0JBQUE7QUFBQSxTQUFBLGlCQUFBLGNBQUEsU0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLHNCQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsZ0NBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxLQUFBLENBQUEsNEJBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsaUJBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBLFFBQUEsQ0FBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLENBQUEsdUJBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsaUJBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxDQUFBLFlBQUEsQ0FBQSxlQUFBLENBQUEsR0FBQSxDQUFBLGNBQUEsTUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLDJCQUFBLENBQUEsUUFBQSxDQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxVQUFBLEdBQUE7QUFBQSxTQUFBLG9CQUFBLGtCQUNiLHFKQUFBLG1CQUFBLFlBQUEsb0JBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEtBQUEsQ0FBQSx3QkFBQSxNQUFBLEdBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxrQkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGFBQUEsdUJBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLDhCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxNQUFBLFlBQUEsTUFBQSxRQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsV0FBQSxNQUFBLG1CQUFBLENBQUEsSUFBQSxNQUFBLFlBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsZ0JBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBLGVBQUEsS0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxhQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLElBQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxjQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsR0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEscUJBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHFDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLFlBQUEsc0JBQUEsQ0FBQSxnQ0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHNCQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLDJCQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFlBQUEsS0FBQSxzQ0FBQSxDQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxtQkFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLHNCQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLHFCQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHVDQUFBLENBQUEsaUJBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHNDQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxjQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxNQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsVUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsb0JBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsYUFBQSxRQUFBLENBQUEsU0FBQSxVQUFBLE1BQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxjQUFBLEtBQUEsaUJBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsS0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLGdCQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxrQ0FBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxDQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLG1CQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxpQkFBQSw2QkFBQSxDQUFBLENBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSwwQkFBQSxLQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLGFBQUEsT0FBQSxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxpQ0FBQSxDQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlDQUFBLE1BQUEsQ0FBQSxDQUFBLDZEQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxhQUFBLEtBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsSUFBQSxXQUFBLElBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLElBQUEsWUFBQSxRQUFBLGNBQUEsTUFBQSxnQkFBQSxHQUFBLEdBQUEsQ0FBQSxPQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxJQUFBLFdBQUEsS0FBQSxTQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsS0FBQSxpQkFBQSxXQUFBLGtCQUFBLENBQUEsYUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsa0JBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxZQUFBLEtBQUEscURBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLFlBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSx3QkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsTUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLFNBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLFdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBLE1BQUEsa0JBQUEsSUFBQSx5QkFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxLQUFBLDhCQUFBLGFBQUEsV0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxRQUFBLEtBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxvQkFBQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxjQUFBLElBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsaUJBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxZQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsRUFBQSw2QkFBQSxJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsYUFBQSxPQUFBLFdBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsSUFB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TUFBTSxDQUFDO0VBQ3BHO0VBQ0EsUUFBUSxHQUFHO0lBQ1AsS0FBSyxHQUFHO01BQUU7UUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QjtNQUNKO0lBQ0EsS0FBSyxHQUFHO01BQUU7UUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QjtNQUNKO0lBQ0EsS0FBSyxHQUFHO01BQUU7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCO01BQ0o7SUFDQSxLQUFLLEdBQUc7TUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdEI7TUFDSjtJQUNBLEtBQUssSUFBSTtNQUFFO1FBQ1AsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkI7TUFDSjtJQUNBLEtBQUssSUFBSTtNQUFFO1FBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QjtNQUNKO0lBQ0EsS0FBSyxJQUFJO01BQUU7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdEI7TUFDSjtJQUNBLEtBQUssSUFBSTtNQUFF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QSxRQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsWUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxHQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUEsQ0FBQSxlQUFBLEtBQUEsRUFBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsYUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxtQkFBQSxJQUFBLFlBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsY0FBQSxDQUFBLGFBQUEsSUFBQSxXQUFBLEdBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLHFCQUFBLENBQUEsZ0JBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLFVBQUEsY0FBQSxrQkFBQSxjQUFBLDJCQUFBLFNBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxxQ0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxZQUFBLHNCQUFBLENBQUEsZ0NBQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsWUFBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxzQkFBQSxjQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxJQUFBLFdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxNQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsS0FBQSxXQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSwyQkFBQSxlQUFBLENBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSwwQkFBQSxFQUFBLDBCQUFBLElBQUEsMEJBQUEscUJBQUEsaUJBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxZQUFBLEtBQUEsc0NBQUEsQ0FBQSxLQUFBLENBQUEsb0JBQUEsQ0FBQSxRQUFBLENBQUEsV0FBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsbUJBQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxzQkFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLHVCQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxxQkFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxtQkFBQSxvQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLGtCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSx1Q0FBQSxDQUFBLGlCQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxPQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSxzQ0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsY0FBQSxhQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsTUFBQSxFQUFBLENBQUEsWUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsQ0FBQSxXQUFBLFVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxjQUFBLGNBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLG9CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLGFBQUEsUUFBQSxDQUFBLFNBQUEsVUFBQSxNQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsY0FBQSxLQUFBLGlCQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSw0QkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsT0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxZQUFBLEtBQUEsYUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxZQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxnQkFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsa0NBQUEsaUJBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxLQUFBLEVBQUEsMEJBQUEsRUFBQSxZQUFBLFNBQUEsQ0FBQSxDQUFBLDBCQUFBLG1CQUFBLEtBQUEsRUFBQSxpQkFBQSxFQUFBLFlBQUEsU0FBQSxpQkFBQSxDQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsMEJBQUEsRUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxtQkFBQSxhQUFBLENBQUEsUUFBQSxDQUFBLHdCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxXQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsaUJBQUEsNkJBQUEsQ0FBQSxDQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsMEJBQUEsS0FBQSxDQUFBLENBQUEsU0FBQSxHQUFBLDBCQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxLQUFBLGFBQUEsQ0FBQSxhQUFBLE9BQUEsRUFBQSxDQUFBLE9BQUEscUJBQUEsQ0FBQSxhQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxhQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsaUNBQUEsQ0FBQSxDQUFBLGFBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxlQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsT0FBQSxPQUFBLENBQUEsT0FBQSxhQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsV0FBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLFdBQUEscUJBQUEsQ0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQ0FBQSxNQUFBLENBQUEsQ0FBQSw2REFBQSxDQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLGdCQUFBLENBQUEsSUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsYUFBQSxLQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxXQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLGFBQUEsSUFBQSxXQUFBLElBQUEsV0FBQSxJQUFBLFFBQUEsS0FBQSxHQUFBLENBQUEsT0FBQSxJQUFBLFlBQUEsUUFBQSxjQUFBLE1BQUEsZ0JBQUEsR0FBQSxHQUFBLENBQUEsT0FBQSxVQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsSUFBQSxXQUFBLEtBQUEsU0FBQSxJQUFBLFdBQUEsQ0FBQSxRQUFBLFVBQUEsSUFBQSxVQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsY0FBQSxJQUFBLEtBQUEsaUJBQUEsV0FBQSxrQkFBQSxDQUFBLGFBQUEsSUFBQSxRQUFBLENBQUEsTUFBQSxDQUFBLGtCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsTUFBQSxTQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxhQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLHFCQUFBLENBQUEsWUFBQSxLQUFBLHFEQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxZQUFBLE1BQUEsV0FBQSxPQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsd0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGNBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLE1BQUEsZ0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUEsQ0FBQSxTQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxXQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxxQkFBQSxDQUFBLENBQUEsSUFBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxnQkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsUUFBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxNQUFBLGtCQUFBLElBQUEseUJBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsS0FBQSxDQUFBLGNBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxhQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEseUJBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxhQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsS0FBQSw4QkFBQSxhQUFBLFdBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsUUFBQSxLQUFBLFFBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsT0FBQSxFQUFBLENBQUEsb0JBQUEsTUFBQSxVQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQSxTQUFBLG1CQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsY0FBQSxJQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLE9BQUEsS0FBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLFdBQUEsS0FBQSxJQUFBLE1BQUEsQ0FBQSxLQUFBLGlCQUFBLElBQUEsQ0FBQSxJQUFBLElBQUEsT0FBQSxDQUFBLEtBQUEsWUFBQSxPQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGtCQUFBLEVBQUEsNkJBQUEsSUFBQSxTQUFBLElBQUEsR0FBQSxTQUFBLGFBQUEsT0FBQSxXQUFBLE9BQUEsRUFBQSxNQUFBLFFBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsWUFBQSxNQUFBLEtBQUEsSUFBQSxrQkFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLFVBQUEsS0FBQSxjQUFBLE9BQUEsR0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsV0FBQSxHQUFBLEtBQUEsS0FBQSxDQUFBLFNBQUE7QUFBQSxTQUFBLDJCQUFBLENBQUEsRUFBQSxjQUFBLFFBQUEsRUFBQSxVQUFBLE1BQUEsb0JBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEtBQUEsQ0FBQSxxQkFBQSxFQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLDJCQUFBLENBQUEsQ0FBQSxNQUFBLGNBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEscUJBQUEsRUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxFQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLElBQUEsbUJBQUEsSUFBQSxTQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxFQUFBLEVBQUEsVUFBQSxFQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxnQkFBQSxTQUFBLE1BQUEsVUFBQSxHQUFBLFdBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxJQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxnQkFBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxLQUFBLENBQUEsV0FBQSxFQUFBLEdBQUEsSUFBQSxNQUFBLFNBQUEsR0FBQSxHQUFBLEdBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxlQUFBLGdCQUFBLElBQUEsRUFBQSxvQkFBQSxFQUFBLDhCQUFBLE1BQUEsUUFBQSxHQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsTUFBQSxTQUFBLENB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QUFDO2NBQzdEO2NBQ0EsT0FBTyxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2tCQUFFO2tCQUN6QjtrQkFDQSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO29CQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztrQkFDOUIsQ0FBQyxNQUNJO29CQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7a0JBQ2I7Z0JBQ0o7Y0FDSixDQUFDO2NBQ0Q7Y0FDQSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7Y0FDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELENBQUMsQ0FBQztVQUFBO1VBQUE7WUFBQSxPQUFBLFNBQUEsQ0FBQSxJQUFBO1FBQUE7TUFBQSxHQUFBLFFBQUE7SUFBQTtFQUNOO0FBQ0osQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRDaGFuZ2VEYXRhID0gZXhwb3J0cy5yb3RhdGVDaGFuZ2UgPSBleHBvcnRzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24gPSBleHBvcnRzLkN1cnNvcnMgPSBleHBvcnRzLmZ1bGxDaXJjbGVSYWRpdXMgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdXRpbFwiKSk7XG5leHBvcnRzLmZ1bGxDaXJjbGVSYWRpdXMgPSBNYXRoLlBJICogMjtcbi8qKlxuICog5pON5L2c5p2g5oyH6ZKI6YWN572uXG4gKi9cbmV4cG9ydHMuQ3Vyc29ycyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgICdsJzogJycsXG4gICAgICAgICdsdCc6ICcnLFxuICAgICAgICAndCc6ICcnLFxuICAgICAgICAndHInOiAnJyxcbiAgICAgICAgJ3InOiAnJyxcbiAgICAgICAgJ3JiJzogJycsXG4gICAgICAgICdiJzogJycsXG4gICAgICAgICdsYic6ICcnLFxuICAgICAgICAncm90YXRlJzogJycsXG4gICAgICAgICdza2V3JzogJ3BvaW50ZXInXG4gICAgfSxcbiAgICAvLyDmoLnmja7op5Lluqbml4vovazmjIfpkohcbiAgICBhc3luYyBnZXQoZGlyLCByb3RhdGlvbiA9IDAsIGRhdGEgPSB0aGlzLmRhdGEpIHtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3JvdGF0ZScgfHwgZGlyID09PSAnc2tldycpXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtkaXJdIHx8ICdwb2ludGVyJztcbiAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0aW9uKSA+IGV4cG9ydHMuZnVsbENpcmNsZVJhZGl1cylcbiAgICAgICAgICAgIHJvdGF0aW9uID0gcm90YXRpb24gJSBleHBvcnRzLmZ1bGxDaXJjbGVSYWRpdXM7XG4gICAgICAgIC8vIDJQSSDkuLrkuIDkuKrlnIbvvIzmiorop5LluqbovazkuLrkuIDkuKrlnIblhoXnmoTlgLzvvIzku6XlhY3ph43lpI3nlJ/miJDlm77niYdcbiAgICAgICAgY29uc3Qgcm90YXRpb25LZXkgPSBOdW1iZXIocm90YXRpb24udG9GaXhlZCgyKSk7IC8vIOeyvuW6puWPquWPluWwj+aVsDLkvY1cbiAgICAgICAgY29uc3Qga2V5ID0gcm90YXRpb25LZXkgPT09IDAgPyBkaXIgOiBgJHtkaXJ9XyR7cm90YXRpb25LZXl9YDtcbiAgICAgICAgbGV0IGN1cnNvciA9IGRhdGFba2V5XTtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT09ICdsJyB8fCBkaXIgPT09ICdyJyB8fCBkaXIgPT09ICd0JyB8fCBkaXIgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOayoeacieaXi+i9rOinkuW6pu+8jOWImeaKim5z6L2sOTDluqbljbPlj69cbiAgICAgICAgICAgICAgICBpZiAocm90YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhWyd0J10pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICAvLyBiIHQg5ZCM5oyH6ZKIXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXIgPT09ICdiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gZGF0YVtkaXJdID0gZGF0YVsndCddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gYXdhaXQgdXRpbF8xLmRlZmF1bHQucm90YXRlSW1hZ2UoZGF0YVsndCddLCBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGFbJ2wnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhWydsJ10gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGFbJ3InXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhWydyJ10gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5peL6L2s6KeS5bqm77yM5YiZ6I635Y+W5qCH5YeG55qE5YaN6L2s5a+55bqU55qE6KeS5bqmXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGF3YWl0IHRoaXMuZ2V0KGRpciwgMCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9ybWFsIHx8IG5vcm1hbCA9PT0gJ3BvaW50ZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gYXdhaXQgdXRpbF8xLmRlZmF1bHQucm90YXRlSW1hZ2Uobm9ybWFsLCByb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXIgPT09ICd0cicgfHwgZGlyID09PSAnbGInIHx8IGRpciA9PT0gJ2x0JyB8fCBkaXIgPT09ICdyYicpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInml4vovazop5LluqbvvIzliJnmiopud3Nl6L2sOTDluqbljbPlj69cbiAgICAgICAgICAgICAgICBpZiAocm90YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhWydsdCddKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmIgbHTlkIzkuIDkuKrmjIfpkohcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpciA9PT0gJ3JiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gZGF0YVtkaXJdID0gZGF0YVsnbHQnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IGF3YWl0IHV0aWxfMS5kZWZhdWx0LnJvdGF0ZUltYWdlKGRhdGFbJ2x0J10sIE1hdGguUEkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YVsndHInXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhWyd0ciddID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhWydsYiddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJ2xiJ10gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5peL6L2s6KeS5bqm77yM5YiZ6I635Y+W5qCH5YeG55qE5YaN6L2s5a+55bqU55qE6KeS5bqmXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGF3YWl0IHRoaXMuZ2V0KGRpciwgMCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9ybWFsIHx8IG5vcm1hbCA9PT0gJ3BvaW50ZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gYXdhaXQgdXRpbF8xLmRlZmF1bHQucm90YXRlSW1hZ2Uobm9ybWFsLCByb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnNvcjtcbiAgICB9XG59O1xuLyoqXG4gKiDlm6DkuLrml4vovazlkI7lnZDmoIfopoHlm57ljp/miY3lpb3orqHnrpfmk43kvZzvvIxcbiAqIEBwYXJhbSBvZmZzZXRcbiAqIEBwYXJhbSBvbGRQb3NpdGlvblxuICogQHBhcmFtIG5ld1Bvc2l0aW9uXG4gKiBAcGFyYW0gcm90YXRpb25cbiAqIEBwYXJhbSBjZW50ZXJcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldFJvdGF0ZUV2ZW50UG9zaXRpb24gPSAob2Zmc2V0LCBvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24sIHJvdGF0aW9uLCBjZW50ZXIpID0+IHtcbiAgICAvLyDlhYjlm57ljp/lnZDmoIfvvIzlho3kuLvnrpflgY/np7vph4/vvIzov5nmoLfkv53or4Hmk43kvZzmm7TlrrnmmJPnkIbop6NcbiAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgY29uc3QgW3BvczEsIHBvczJdID0gdXRpbF8xLmRlZmF1bHQucm90YXRlUG9pbnRzKFtvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb25dLCBjZW50ZXIsIC1yb3RhdGlvbik7XG4gICAgICAgIG9mZnNldC54ID0gcG9zMi54IC0gcG9zMS54O1xuICAgICAgICBvZmZzZXQueSA9IHBvczIueSAtIHBvczEueTtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5leHBvcnRzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24gPSBnZXRSb3RhdGVFdmVudFBvc2l0aW9uO1xuLyoqXG4gKiAg5Y+R55Sf5peL6L2sLCDorqHnrpflvpfliLDnmoTml4vovazop5LluqZcbiAqL1xuY29uc3Qgcm90YXRlQ2hhbmdlID0gKG9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbiwgY2VudGVyKSA9PiB7XG4gICAgLy8g5Zug5Li6Y2VudGVy5piv55u45a+55LqO57yW6L6R5Zmo55qE77yM5omA5Lul5LqL5Lu25Z2Q5qCH5Lmf6ZyA6KaB6L2s5Yiw57yW6L6R5ZmoXG4gICAgY29uc3QgY3gxID0gb2xkUG9zaXRpb24ueCAtIGNlbnRlci54O1xuICAgIGNvbnN0IGN5MSA9IG9sZFBvc2l0aW9uLnkgLSBjZW50ZXIueTtcbiAgICBsZXQgYW5nbGUxID0gTWF0aC5hdGFuKGN5MSAvIGN4MSk7XG4gICAgY29uc3QgY3gyID0gbmV3UG9zaXRpb24ueCAtIGNlbnRlci54O1xuICAgIGNvbnN0IGN5MiA9IG5ld1Bvc2l0aW9uLnkgLSBjZW50ZXIueTtcbiAgICBsZXQgYW5nbGUyID0gTWF0aC5hdGFuKGN5MiAvIGN4Mik7XG4gICAgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA8IDApIHtcbiAgICAgICAgaWYgKGN4MSA+PSAwICYmIGN5MSA+PSAwICYmIGN4MiA8PSAwICYmIGN5MiA+PSAwKVxuICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgZWxzZSBpZiAoY3gxIDw9IDAgJiYgY3kxIDw9IDAgJiYgY3gyID49IDAgJiYgY3kyIDw9IDApXG4gICAgICAgICAgICBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgICAgICAvL2Vsc2UgaWYoY3gxIDw9IDAgJiYgY3kxIDw9MCAmJiBjeDIgPj0gMCAmJiBjeTIgPj0gMCkgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5nbGUxIDw9IDAgJiYgYW5nbGUyID49IDApIHtcbiAgICAgICAgaWYgKGN4MSA+PSAwICYmIGN5MSA8PSAwICYmIGN4MiA8IDApXG4gICAgICAgICAgICBhbmdsZTIgPSBhbmdsZTIgLSBNYXRoLlBJO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBhbmdsZTIgPSAtYW5nbGUyO1xuICAgIH1cbiAgICBlbHNlIGlmIChhbmdsZTEgPj0gMCAmJiBhbmdsZTIgPiAwKSB7XG4gICAgICAgIC8vaWYoY3kyID09PSAwKSBhbmdsZTIgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gYW5nbGUyIC0gYW5nbGUxO1xufTtcbmV4cG9ydHMucm90YXRlQ2hhbmdlID0gcm90YXRlQ2hhbmdlO1xuLyoqXG4gKiAg5qC55o2u5pON5L2c5Y+C5pWw77yM6K6h566X5L2N56e777yM5aSn5bCP5ZKM5peL6L2s6KeS5bqm562JXG4gKi9cbmNvbnN0IGdldENoYW5nZURhdGEgPSAoZGlyLCBvZmZzZXQsIG9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbiwgY2VudGVyLCByb3RhdGlvbiA9IDApID0+IHtcbiAgICAvLyDlvZPliY3np7vliqjlr7nljp/lr7nosaHnmoTmlLnlj5hcbiAgICBjb25zdCBhcmdzID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgc2tldzoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgIG9mZnNldCA9ICgwLCBleHBvcnRzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24pKG9mZnNldCwgb2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uLCByb3RhdGlvbiwgY2VudGVyKTtcbiAgICB9XG4gICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgY2FzZSAnbCc6IHtcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZnNldC54O1xuICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZzZXQueDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3QnOiB7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZzZXQueTtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncic6IHtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnbHQnOiB7XG4gICAgICAgICAgICBhcmdzLnggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZzZXQueTtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAndHInOiB7XG4gICAgICAgICAgICBhcmdzLndpZHRoID0gb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZzZXQueTtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncmInOiB7XG4gICAgICAgICAgICBhcmdzLndpZHRoID0gb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnbGInOiB7XG4gICAgICAgICAgICBhcmdzLnggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5aaC5p6c5Lit5b+D5Y+R55Sf5LqG5YGP56e777yM5YiZ5paw5Lit5b+D54K56KaB56e75Yiw57uV5Y6f5Lit5b+D54K55peL6L2s5b2T5YmN5peL6L2s6KeS5bqm55qE54K577yM5omN5Li+5L2/5Zu+5b2i56e75Yqo5LiN5q2j5bi4XG4gICAgaWYgKHJvdGF0aW9uICYmIChhcmdzLnggfHwgYXJncy55IHx8IGFyZ3Mud2lkdGggfHwgYXJncy5oZWlnaHQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0NlbnRlciA9IHtcbiAgICAgICAgICAgIHg6IGNlbnRlci54ICsgYXJncy54ICsgYXJncy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiBjZW50ZXIueSArIGFyZ3MueSArIGFyZ3MuaGVpZ2h0IC8gMlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0YXJnZXRDZW50ZXIgPSB1dGlsXzEuZGVmYXVsdC5yb3RhdGVQb2ludHMoeyAuLi5uZXdDZW50ZXIgfSwgY2VudGVyLCByb3RhdGlvbik7XG4gICAgICAgIGFyZ3MueCArPSB0YXJnZXRDZW50ZXIueCAtIG5ld0NlbnRlci54O1xuICAgICAgICBhcmdzLnkgKz0gdGFyZ2V0Q2VudGVyLnkgLSBuZXdDZW50ZXIueTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59O1xuZXhwb3J0cy5nZXRDaGFuZ2VEYXRhID0gZ2V0Q2hhbmdlRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250cm9sbGVyID0gZXhwb3J0cy51dGlsID0gdm9pZCAwO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbmNvbnN0IHV0aWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi91dGlsXCIpKTtcbmV4cG9ydHMudXRpbCA9IHV0aWxfMS5kZWZhdWx0O1xuY29uc3QgY29udHJvbGxlciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb250cm9sbGVyXCIpKTtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5leHBvcnRzLmRlZmF1bHQgPSB1dGlsXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5pWw5a2X77yM5a2X56ym5Liy5pWw5a2X5oiW6YWN6Lqr5bCx5pivbnVtYmVy6L+U5ZuedHJ1ZVxuICAgICAqIEBwYXJhbSB2IOWOn+Wtl+espuS4suaIluaVsOWtl1xuICAgICAqIEByZXR1cm5zIHRydWUvZmFsc2VcbiAgICAgKi9cbiAgICBpc051bWJlcih2KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgL15cXHMqW1xcZF0rKFxcLlxcZCspP1xccyokLy50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5bim5YOP57Sg5Y2V5L2NKHB4KeeahOWtl+espuS4slxuICAgICAqIEBwYXJhbSB2XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBpc1BYTnVtYmVyKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypweFxccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5bim6KeS5bqm5Y2V5L2NKGRlZynnmoTlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgaXNEZWdOdW1iZXIodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKmRlZ1xccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5piv5bim5byn5bqm5Y2V5L2NKHJhZCnnmoTlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgaXNSYWROdW1iZXIodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKnJhZFxccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6L2s5Li65YOP57Sg5a2X56ym5Liy5qC85byPIDogMiAtPiAycHhcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgdG9QWCh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpIHx8ICF0aGlzLmlzUFhOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdweCc7XG4gICAgICAgIHJldHVybiB2ICsgJyc7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDluKblg4/ntKDmiJblhbblroPljZXkvY3nmoTovazmjaLkuLrmlbDlrZc6IDJweCAtPiAyXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcGFyYW0gZnJhY3Rpb25EaWdpdHMg5L+d55WZ5bCP5pWw5L2NXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB0b051bWJlcih2LCBmcmFjdGlvbkRpZ2l0cykge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHYgPSBOdW1iZXIodik7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHYgPSAocGFyc2VGbG9hdCh2KSB8fCAwKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmcmFjdGlvbkRpZ2l0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHYgPSBOdW1iZXIodi50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlvKfluqbovazop5LluqY6IE1hdGguUEkgLT4gMTgwXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHJhZFRvRGVnKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDop5LluqbovazlvKfluqYgMTgwIC0+IE1hdGguUElcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZGVnVG9SYWQodikge1xuICAgICAgICByZXR1cm4gdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOi9rOS4uuinkuW6puagvOW8jyAxIC0+IDFkZWcsIDMuMTRyYWQgLT4gMTgwZGVnXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHRvRGVnKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdkZWcnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNSYWROdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RlZyh0aGlzLnJhZFRvRGVnKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHYgKyAnJztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOi9rOS4uuW8p+W6puagvOW8jywgMSAtPiAxcmFkLCAgMTgwZGVnIC0+IDMuMTRyYWRcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgdG9SYWQodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ3JhZCc7XG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgdGhpcy5pc0RlZ051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmFkKHRoaXMuZGVnVG9SYWQocGFyc2VGbG9hdCh2KSkpO1xuICAgICAgICByZXR1cm4gdiArICcnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oqK5pWw5YC85oyJ5q+U5L6L6L2s5Li655uu5qCH5pWw5YC877yM5q+U5aaCcmdiYeeahCAwLjUt44CLMC41KjI1NVxuICAgICAqIEBwYXJhbSB2XG4gICAgICogQHBhcmFtIG11bHRpcGxlIOavlOS+i+WAvO+8jOm7mOiupDI1NVxuICAgICAqL1xuICAgIHRvTXVsdGlwbGVJbnQodiwgbXVsdGlwbGUgPSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodiAqIG11bHRpcGxlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaKinJnYmHpopzoibLovazkuLpyZ2JhKCnkuLLlnovlvI9cbiAgICAgKiBtdWx0aXBsZeWAjeaVsO+8jOWmguaenOaYr+Wwj+aVsO+8jOWImemcgOimgSoyNTXovazliLDmoIflh4blgLxcbiAgICAgKi9cbiAgICBjb2xvclRvU3RyaW5nKGNvbG9yLCBtdWx0aXBsZSA9IDEpIHtcbiAgICAgICAgbGV0IHN0ciA9IGAke3RoaXMudG9NdWx0aXBsZUludChjb2xvci5yLCBtdWx0aXBsZSl9LCR7dGhpcy50b011bHRpcGxlSW50KGNvbG9yLmcsIG11bHRpcGxlKX0sJHt0aGlzLnRvTXVsdGlwbGVJbnQoY29sb3IuYiwgbXVsdGlwbGUpfWA7XG4gICAgICAgIGlmICh0eXBlb2YgY29sb3IuYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHN0ciA9IGByZ2JhKCR7c3RyfSwke3RoaXMudG9NdWx0aXBsZUludChjb2xvci5hLCBtdWx0aXBsZSl9KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBgcmdiKCR7c3RyfSlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKDnmoTnu53lr7nlrprkvY1cbiAgICAgKiBAcGFyYW0gIGVsIC0g55uu5qCH5YWD57Sg5a+56LGhXG4gICAgICogQHJldHVybnMgIOS9jee9ruWvueixoSh0b3AsbGVmdClcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50UG9zaXRpb24oZWwpIHtcbiAgICAgICAgY29uc3QgcG9zID0geyBcInlcIjogMCwgXCJ4XCI6IDAgfTtcbiAgICAgICAgaWYgKCFlbClcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwb3MueSArPSBlbC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgcG9zLnggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVsc2UgaWYgKGVsLngpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBvcy54ICs9IGVsLng7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC55KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueSArPSBlbC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKBib3VuZHNcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldEVsZW1lbnRCb3VuZGluZ1JlY3QoZWwpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHtcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgYm91bmRzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGJvdW5kcy54ICs9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICBib3VuZHMueSArPSBzY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbihlbCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHBvcy54O1xuICAgICAgICAgICAgYm91bmRzLnkgPSBwb3MueTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oqKZG9tY3VtZW505Z2Q5qCH6L2s5Li65oyH5a6a5YWD57Sg55u45a+55Z2Q5qCHXG4gICAgICogQHBhcmFtIHBvc1xuICAgICAqIEBwYXJhbSBkb21cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHRvRG9tUG9zaXRpb24ocG9zLCBkb20pIHtcbiAgICAgICAgY29uc3QgZG9tUG9zID0gdGhpcy5nZXRFbGVtZW50Qm91bmRpbmdSZWN0KGRvbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb3MueCAtIGRvbVBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnkgLSBkb21Qb3MueVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oqK5LiA5Liq5oiW5aSa5Liq54K557uV5p+Q5Liq54K55peL6L2s5LiA5a6a6KeS5bqmXG4gICAgICog5YWI5oqK5Z2Q5qCH5Y6f54K556e75Yiw5peL6L2s5Lit5b+D54K577yM6K6h566X5ZCO56e75ZueXG4gICAgICogQHBhcmFtICBwIC0g5LiA5Liq5oiW5aSa5Liq54K5XG4gICAgICogQHBhcmFtICBycCAtICDml4vovazkuK3lv4PngrlcbiAgICAgKiBAcGFyYW0gIHIgLSDml4vovazop5LluqZcbiAgICAgKi9cbiAgICByb3RhdGVQb2ludHMocCwgY2VudGVyLCByKSB7XG4gICAgICAgIGlmICghciB8fCAhcClcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICBsZXQgY29zID0gTWF0aC5jb3Mocik7XG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbihyKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghcFtpXSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgbGV0IHgxID0gcFtpXS54IC0gY2VudGVyLng7XG4gICAgICAgICAgICAgICAgbGV0IHkxID0gcFtpXS55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgcFtpXS54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHBbaV0ueSA9IHgxICogc2luICsgeTEgKiBjb3MgKyBjZW50ZXIueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4MSA9IHAueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgbGV0IHkxID0gcC55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICBwLnggPSB4MSAqIGNvcyAtIHkxICogc2luICsgY2VudGVyLng7XG4gICAgICAgICAgICBwLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDorr7nva5kb23moLflvI9cbiAgICAgKiBAcGFyYW0gZG9tXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGNzcyhkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jc3MoZG9tLCBuLCBuYW1lW25dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6K6+572u5oiW6K+75Y+WZG9t5bGe5oCnXG4gICAgICogQHBhcmFtIGRvbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhdHRyKGRvbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgKyAnJyk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog6K6+572uY2xhc3PmoLflvI9cbiAgICAgKiBAcGFyYW0gZG9tIOiKgueCuVxuICAgICAqIEBwYXJhbSBuYW1lIOagt+W8j+WQjVxuICAgICAqIEBwYXJhbSByZW1vdmUg5aaC5p6cdHJ1ZeWImeihqOekuuWIoOmZpOagt+W8j1xuICAgICAqL1xuICAgIGNsYXNzKGRvbSwgbmFtZSwgcmVtb3ZlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzcyhkb20sIG4sIHJlbW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgZG9tLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWRvbS5jbGFzc0xpc3QuY29udGFpbnMobmFtZSkpXG4gICAgICAgICAgICAgICAgZG9tLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFieagh+S9jee9rlxuICAgICAqIEBwYXJhbSBkb20g5YWD57SgIGh0bWxlbGVtZW50XG4gICAgICovXG4gICAgc2V0UmFuZ2UoZG9tLCBwb3NpdGlvbikge1xuICAgICAgICBsZXQgcmFuZ2U7XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNhcmV0UG9zaXRpb25Gcm9tUG9pbnQgPyBkb2N1bWVudC5jYXJldFBvc2l0aW9uRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpIDogZG9jdW1lbnQuY2FyZXRSYW5nZUZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaKiuWFieagh+e9ruS6juacgOWQjlxuICAgICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gZG9tLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KGxhc3QsIGxhc3QudGV4dENvbnRlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xuICAgIH0sXG4gICAgLy8g5pys5Zyw5ZSv5LiASUTvvIzov5nkuKrlj6ropoHkv53or4HlvZPliY3nur/nqIvllK/kuIDljbPlj6/vvIzpnZ7lhajnkIPllK/kuIBcbiAgICB1dWlkKCkge1xuICAgICAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApO1xuICAgICAgICByZXR1cm4gKHRpbWUgKyBybmQpLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmiorlm77niYfml4vovazkuIDlrprop5LluqbvvIzov5Tlm55iYXNlNjRcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIHJvdGF0aW9uXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhc3luYyByb3RhdGVJbWFnZSh1cmwsIHJvdGF0aW9uKSB7XG4gICAgICAgIGlmICghdXJsKVxuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICBjdnMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICAgICAgY3ZzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdnMud2lkdGgsIGN2cy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoY3ZzLndpZHRoIC8gMiwgY3ZzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUocm90YXRpb24pO1xuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLWN2cy53aWR0aCAvIDIsIC1jdnMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjdnMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0ICYmIHJlamVjdChlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOivt+axgui/nOeoi+i1hOa6kFxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gb3B0aW9uXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0KHVybCwgb3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgLy/mlrDlu7pYTUxIdHRwUmVxdWVzdOWvueixoVxuICAgICAgICAgICAgaWYgKG9wdGlvbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIG9wdGlvbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBvcHRpb24uaGVhZGVyc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gW107XG4gICAgICAgICAgICBpZiAob3B0aW9uLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gb3B0aW9uLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQob3B0aW9uLmRhdGFbbmFtZV0pfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IG9wdGlvbi5tZXRob2QgPyBvcHRpb24ubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJztcbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgdXJsICs9ICh1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JykgKyBwYXJhbXMuam9pbignJicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHsgLy/miJDlip/lrozmiJBcbiAgICAgICAgICAgICAgICAgICAgLy/liKTmlq3nm7jlupTnu5PmnpzvvJpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8v5Y+R6YCB6K+35rGC77yaXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKG1ldGhvZCA9PT0gJ1BPU1QnID8gcGFyYW1zLmpvaW4oJyYnKSA6IG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuIl19
