(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateChange = exports.nwse = exports.ns = exports.getRotateEventPosition = exports.getChangeData = exports.fullCircleRadius = exports.ItemIcons = exports.Cursors = void 0;
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
var nwse = exports.nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
var ns = exports.ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';
var fullCircleRadius = exports.fullCircleRadius = Math.PI * 2;
/**
 * 操作杠指针配置
 */
var Cursors = exports.Cursors = {
  'l': '',
  'lt': nwse,
  't': ns,
  'tr': '',
  'r': '',
  'rb': nwse,
  'b': ns,
  'lb': '',
  'rotate': 'pointer',
  'skew': 'pointer',
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
            return _util["default"].rotateImage(ns, Math.PI / 2);
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
            return _util["default"].rotateImage(nwse, Math.PI / 2);
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
 * 图标配置
 */
var ItemIcons = exports.ItemIcons = {
  'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
  'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbnRyb2xsZXIuanMiLCJkaXN0L2luZGV4LmpzIiwiZGlzdC91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUEwQixTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUEsY0FBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsT0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsTUFBQSxDQUFBLHlCQUFBLEdBQUEsTUFBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsa0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLFNBQUEseUVBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZUFBQSxHQUFBLEVBQUEsQ0FBQSxXQUFBLGVBQUEsQ0FBQSxHQUFBLEtBQUEscUJBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxLQUFBLDJCQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxnQkFBQTtBQUFBLFNBQUEsaUJBQUEsY0FBQSxTQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsTUFBQSxTQUFBLENBQUEscUJBQUEsQ0FBQSxzQkFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsbUJBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSwrREFBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGtCQUFBLEdBQUEsRUFBQSxHQUFBLFFBQUEsR0FBQSxZQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsTUFBQSxJQUFBLE9BQUEsS0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQTtBQUFBLFNBQUEsc0JBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxnQ0FBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEtBQUEsQ0FBQSw0QkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxpQkFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsUUFBQSxDQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSx1QkFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLHlCQUFBLENBQUEsWUFBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBLENBQUEsY0FBQSxNQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsMkJBQUEsQ0FBQSxRQUFBLENBQUEsYUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQTtBQUFBLFNBQUEsb0JBQUEsa0JBQzFCLHFKQUFBLG1CQUFBLFlBQUEsb0JBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEtBQUEsQ0FBQSx3QkFBQSxNQUFBLEdBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxrQkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGFBQUEsdUJBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLDhCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxNQUFBLFlBQUEsTUFBQSxRQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsV0FBQSxNQUFBLG1CQUFBLENBQUEsSUFBQSxNQUFBLFlBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsZ0JBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBLGVBQUEsS0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxhQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLElBQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxjQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsR0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEscUJBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHFDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLFlBQUEsc0JBQUEsQ0FBQSxnQ0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHNCQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLDJCQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFlBQUEsS0FBQSxzQ0FBQSxDQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxtQkFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLHNCQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLHFCQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHVDQUFBLENBQUEsaUJBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHNDQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxjQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxNQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsVUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsb0JBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsYUFBQSxRQUFBLENBQUEsU0FBQSxVQUFBLE1BQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxjQUFBLEtBQUEsaUJBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsS0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLGdCQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxrQ0FBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxDQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLG1CQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxpQkFBQSw2QkFBQSxDQUFBLENBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSwwQkFBQSxLQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLGFBQUEsT0FBQSxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxpQ0FBQSxDQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlDQUFBLE1BQUEsQ0FBQSxDQUFBLDZEQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxhQUFBLEtBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsSUFBQSxXQUFBLElBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLElBQUEsWUFBQSxRQUFBLGNBQUEsTUFBQSxnQkFBQSxHQUFBLEdBQUEsQ0FBQSxPQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxJQUFBLFdBQUEsS0FBQSxTQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsS0FBQSxpQkFBQSxXQUFBLGtCQUFBLENBQUEsYUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsa0JBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxZQUFBLEtBQUEscURBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLFlBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSx3QkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsTUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLFNBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLFdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBLE1BQUEsa0JBQUEsSUFBQSx5QkFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxLQUFBLDhCQUFBLGFBQUEsV0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxRQUFBLEtBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxvQkFBQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxjQUFBLElBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsaUJBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxZQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsRUFBQSw2QkFBQSxJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsYUFBQSxPQUFBLFdBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxZQUFBLE1BQUEsS0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsVUFBQSxLQUFBLGNBQUEsT0FBQSxHQUFBLElBQUEsa0JBQUEsQ0FB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LEtBQUEsS0FBQSxDQUFBLHdCQUFBLE1BQUEsR0FBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLGtCQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsYUFBQSx1QkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsOEJBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE1BQUEsWUFBQSxNQUFBLFFBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLE1BQUEsbUJBQUEsQ0FBQSxJQUFBLE1BQUEsWUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxnQkFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLFlBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLE9BQUEsT0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBLENBQUEsZUFBQSxLQUFBLEVBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQSxDQUFBLGFBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsSUFBQSxZQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGNBQUEsQ0FBQSxhQUFBLElBQUEsV0FBQSxHQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEscUJBQUEsQ0FBQSxxQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsQ0FBQSxnQkFBQSxVQUFBLGNBQUEsa0JBQUEsY0FBQSwyQkFBQSxTQUFBLENBQUEsT0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEscUNBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsWUFBQSxzQkFBQSxDQUFBLGdDQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsc0JBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxXQUFBLENBQUEsSUFBQSxNQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLENBQUEsSUFBQSxNQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsSUFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsMkJBQUEsZUFBQSxDQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsMEJBQUEsRUFBQSwwQkFBQSxJQUFBLDBCQUFBLHFCQUFBLGlCQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsWUFBQSxLQUFBLHNDQUFBLENBQUEsS0FBQSxDQUFBLG9CQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLG1CQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsc0JBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSx1QkFBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxLQUFBLENBQUEscUJBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsb0JBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxrQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFNBQUEsdUNBQUEsQ0FBQSxpQkFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsT0FBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFNBQUEsc0NBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLGNBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLE1BQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsQ0FBQSxXQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxVQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsY0FBQSxjQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxvQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxhQUFBLFFBQUEsQ0FBQSxTQUFBLFVBQUEsTUFBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxZQUFBLGNBQUEsS0FBQSxpQkFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLE9BQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxLQUFBLGFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsU0FBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsWUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsZ0JBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLGtDQUFBLGlCQUFBLENBQUEsU0FBQSxHQUFBLDBCQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsS0FBQSxFQUFBLDBCQUFBLEVBQUEsWUFBQSxTQUFBLENBQUEsQ0FBQSwwQkFBQSxtQkFBQSxLQUFBLEVBQUEsaUJBQUEsRUFBQSxZQUFBLFNBQUEsaUJBQUEsQ0FBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLDBCQUFBLEVBQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsbUJBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSx3QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLGlCQUFBLDZCQUFBLENBQUEsQ0FBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLDBCQUFBLEtBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsYUFBQSxPQUFBLEVBQUEsQ0FBQSxPQUFBLHFCQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLGlDQUFBLENBQUEsQ0FBQSxhQUFBLEdBQUEsYUFBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLE9BQUEsT0FBQSxDQUFBLE9BQUEsYUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxJQUFBLFdBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxXQUFBLHFCQUFBLENBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsaUNBQUEsTUFBQSxDQUFBLENBQUEsNkRBQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLGFBQUEsS0FBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsV0FBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxHQUFBLE1BQUEsRUFBQSxPQUFBLENBQUEsU0FBQSxLQUFBLFdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxXQUFBLE1BQUEsQ0FBQSxhQUFBLElBQUEsV0FBQSxJQUFBLFdBQUEsSUFBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLE9BQUEsSUFBQSxZQUFBLFFBQUEsY0FBQSxNQUFBLGdCQUFBLEdBQUEsR0FBQSxDQUFBLE9BQUEsVUFBQSxDQUFBLE9BQUEsQ0FBQSxhQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsTUFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEtBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLElBQUEsV0FBQSxLQUFBLFNBQUEsSUFBQSxXQUFBLENBQUEsUUFBQSxVQUFBLElBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGNBQUEsSUFBQSxLQUFBLGlCQUFBLFdBQUEsa0JBQUEsQ0FBQSxhQUFBLElBQUEsUUFBQSxDQUFBLE1BQUEsQ0FBQSxrQkFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLElBQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxlQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsZ0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLGNBQUEsQ0FBQSxhQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxxQkFBQSxDQUFBLFlBQUEsS0FBQSxxREFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsWUFBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsS0FBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxNQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxFQUFBLENBQUEsU0FBQSxRQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsV0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEscUJBQUEsQ0FBQSxDQUFBLElBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxJQUFBLFFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsTUFBQSxrQkFBQSxJQUFBLHlCQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxVQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLE1BQUEsV0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLHlCQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsYUFBQSxDQUFBLENBQUEsWUFBQSxDQUFBLGdCQUFBLEtBQUEsOEJBQUEsYUFBQSxXQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFFBQUEsS0FBQSxRQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxDQUFBLG9CQUFBLE1BQUEsVUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxDQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLGNBQUEsSUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxPQUFBLEtBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxXQUFBLEtBQUEsSUFBQSxNQUFBLENBQUEsS0FBQSxpQkFBQSxJQUFBLENBQUEsSUFBQSxJQUFBLE9BQUEsQ0FBQSxLQUFBLFlBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxFQUFBLDZCQUFBLElBQUEsU0FBQSxJQUFBLEdBQUEsU0FBQSxhQUFBLE9BQUEsV0FBQSxPQUFBLEVBQUEsTUFBQSxRQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLFlBQUEsTUFBQSxLQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxVQUFBLEtBQUEsY0FBQSxPQUFBLEdBQUEsSUFBQSxrQkFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLFdBQUEsR0FBQSxLQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQUEsU0FBQSwyQkFBQSxDQUFBLEVBQUEsY0FBQSxRQUFBLEVBQUEsVUFBQSxNQUFBLG9CQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxLQUFBLENBQUEscUJBQUEsRUFBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSwyQkFBQSxDQUFBLENBQUEsTUFBQSxjQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLHFCQUFBLEVBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxJQUFBLG1CQUFBLElBQUEsU0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsZ0JBQUEsU0FBQSxNQUFBLFVBQUEsR0FBQSxXQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsZ0JBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLElBQUEsTUFBQSxTQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsZUFBQSxnQkFBQSxJQUFBLEVBQUEsb0JBQUEsRUFBQSw4QkFBQSxNQUFBLFFBQUEsR0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxzQ0FBQSxPQUFBLHdCQUFBLE1BQUEsdUJBQUEsTUFBQSxDQUFBLFFBQUEsYUFBQSxDQUFBLGtCQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEseUJBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxxQkFBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLENBQUE7QUFBQSxJQUFBLFFBQUEsR0FBQSxPQUFBLGNBRGU7RUFDWDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksUUFBUSxXQUFBLFNBQUMsQ0FBQyxFQUFFO0lBQ1IsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNuRSxDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLFVBQVUsV0FBQSxXQUFDLENBQUMsRUFBRTtJQUNWLE9BQU8sc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN6QyxDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLFdBQVcsV0FBQSxZQUFDLENBQUMsRUFBRTtJQUNYLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUMxQyxDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLFdBQVcsV0FBQSxZQUFDLENBQUMsRUFBRTtJQUNYLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUMxQyxDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLElBQUksV0FBQSxLQUFDLENBQUMsRUFBRTtJQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFDaEIsT0FBTyxDQUFDLEdBQUcsSUFBSTtJQUNuQixPQUFPLENBQUM7RUFDWixDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLFFBQVEsV0FBQSxTQUFDLENBQUMsRUFBRTtJQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFDaEIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FDaEIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQzFCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDakMsQ0FBQztFQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxRQUFRLFdBQUEsU0FBQyxDQUFDLEVBQUU7SUFDUixPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUM5QixDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLFFBQVEsV0FBQSxTQUFDLENBQUMsRUFBRTtJQUNSLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0VBQzlCLENBQUM7RUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksS0FBSyxXQUFBLE1BQUMsQ0FBQyxFQUFFO0lBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNoQixPQUFPLENBQUMsR0FBRyxLQUFLO0lBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQzVDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQztFQUNaLENBQUM7RUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksS0FBSyxXQUFBLE1BQUMsQ0FBQyxFQUFFO0lBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNoQixPQUFPLENBQUMsR0FBRyxLQUFLO0lBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQzVDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQztFQUNaLENBQUM7RUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksa0JBQWtCLFdBQUEsbUJBQUMsRUFBRSxFQUFFO0lBQ25CLElBQU0sR0FBRyxHQUFHO01BQUUsR0FBRyxFQUFFLENBQUM7TUFBRSxHQUFHLEVBQUU7SUFBRSxDQUFDO0lBQzlCLElBQUksQ0FBQyxFQUFFLEVBQ0gsT0FBTyxHQUFHO0lBQ2QsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFO01BQ2pCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRTtRQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTO1FBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVU7UUFDdEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZO01BQ3hCO0lBQ0o7SUFDQTtJQUFBLEtBQ0ssSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO01BQ1g7TUFDQSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCO0lBQ0E7SUFBQSxLQUNLLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtNQUNYO01BQ0EsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqQjtJQUNBLE9BQU8sR0FBRztFQUNkLENBQUM7RUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksc0JBQXNCLFdBQUEsdUJBQUMsRUFBRSxFQUFFO0lBQ3ZCLElBQUksTUFBTSxHQUFHO01BQ1QsTUFBTSxFQUFFLENBQUM7TUFDVCxLQUFLLEVBQUUsQ0FBQztNQUNSLENBQUMsRUFBRSxDQUFDO01BQ0osQ0FBQyxFQUFFO0lBQ1AsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLHFCQUFxQixFQUFFO01BQzFCLE1BQU0sR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQztNQUNuQyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVU7TUFDbEYsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTO01BQy9FLE1BQU0sQ0FBQyxDQUFDLElBQUksVUFBVTtNQUN0QixNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVM7SUFDekIsQ0FBQyxNQUNJO01BQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztNQUN2QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO01BQ2hCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7TUFDaEIsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVztNQUM3QixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZO0lBQ25DO0lBQ0EsT0FBTyxNQUFNO0VBQ2pCLENBQUM7RUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxhQUFhLFdBQUEsY0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUM7SUFDL0MsT0FBTztNQUNILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQ25CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0VBQ0wsQ0FBQztFQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksWUFBWSxXQUFBLGFBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDUixPQUFPLENBQUM7SUFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDTDtRQUNKLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUMzQztJQUNKLENBQUMsTUFDSTtNQUNELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDdkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUN2QixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUNwQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN4QztJQUNBLE9BQU8sQ0FBQztFQUNaLENBQUM7RUFDRDtB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b24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcbmV4cG9ydCBjb25zdCBud3NlID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBTUFBQURYcWMzS0FBQUFlMUJNVkVVQUFBRC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rYW5xYWVvcXFqcHE3ZTMrTGk0dVJwYlhoaVozTmphSFJmWkhGWlgydEFSMWMvUmxVN1FWSC8vLy85L2YzLy8vLy8vLy85L2YzLy8vLzkvZjMvLy84UEZ5ci8vLy9VWWphYkFBQUFKM1JTVGxNQUJBVU1EUkFSRWhja0tTNHdNalUyTjZqQXdNREh5TXJNek0zUDJ0dmQ1T2pvNmV2cjdQb3dnSG95QUFBQUFXSkxSMFFvdmJDMXNnQUFBSlZKUkVGVUtNKzkwZHNTZ2lBUWdHSElEa0JVb3FhVkdSWEU3dnMvWVNnejVRRFgvcGQ4SEdZV1FwWnFMUTgrV1NUcmI1eXlMSUk5MWpkZmk4Y0lKUFlBVUtFaU9iZ2FKM0p3Z2NGb25rTDF1Y1BqT1VySjVvK2YwUVVSQ2kzOVFXRlJDVDJKODNzMi95UHNSQWdQMHZSem1PTGFETkJCQ2tRNDAwRU9GRGFRZ3hMYmNUQjFBc3lHVWI1b2ZCWGRqVzFYaS8zMkYzVTNFVTZwbnUvekFBQUFBRWxGVGtTdVFtQ0MnO1xuZXhwb3J0IGNvbnN0IG5zID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBTUFBQURYcWMzS0FBQUFtVkJNVkVVQUFBRC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rb3E3S3VzTGV2c3JpWm02V2RvYW1pcGEyanBxNlRsNkNOa1pxSWpKWC8vLzk4Z1l2Ly8vLy8vLy8vLy8vLy8vOFBGeXIvLy84aXBkcE1BQUFBTVhSU1RsTUFBUUlEQkFVSENWcGNYVjVmYUdsM2dJS0RoSVdJbUp5ZG5wK21xYXF4dUx1L3Y3L0F3TURBd2NMRHhNWDcvUDMrdFYrTFl3QUFBQUZpUzBkRU1rRFNUTWdBQUFDL1NVUkJWQ2pQZlpMWkVvSXdERVdoQ2xoQXhRVkZWRFlWRjF4SS92L2pKQmJSVnZBOGRKZ2N5TDB6UmRNYW1Pc3lyUVY5Z1JpeTFubVd0eGdXWUFhUTQwb3hiSWs3QURLQmJBWmlEbkJFTGdtT0ZRQjBPbkkwOXdzU2hXL3JhcnhId3BQZkhoTUppZVQxeU1WWE50YUlETUp1ZHNqVUd6dEY1NnFxS2xIWEpiait2eTVoRHQ5MVI2WWtacCtNdVNRbTk0c29kTDFOSldIRjVaN201MGRzS1NGUmVRQTRsWkdweGhzYlRGUGNHcitYM2dzUjEvMjIzNFE1enRlMVBnRWkrU2VtVEpHMXZ3QUFBQUJKUlU1RXJrSmdnZz09JztcbmV4cG9ydCBjb25zdCBmdWxsQ2lyY2xlUmFkaXVzID0gTWF0aC5QSSAqIDI7XG4vKipcbiAqIOaTjeS9nOadoOaMh+mSiOmFjee9rlxuICovXG5leHBvcnQgY29uc3QgQ3Vyc29ycyA9IHtcbiAgICAnbCc6ICcnLFxuICAgICdsdCc6IG53c2UsXG4gICAgJ3QnOiBucyxcbiAgICAndHInOiAnJyxcbiAgICAncic6ICcnLFxuICAgICdyYic6IG53c2UsXG4gICAgJ2InOiBucyxcbiAgICAnbGInOiAnJyxcbiAgICAncm90YXRlJzogJ3BvaW50ZXInLFxuICAgICdza2V3JzogJ3BvaW50ZXInLFxuICAgIC8vIOagueaNruinkuW6puaXi+i9rOaMh+mSiFxuICAgIGFzeW5jIGdldChkaXIsIHJvdGF0aW9uID0gMCkge1xuICAgICAgICBpZiAoZGlyID09PSAncm90YXRlJyB8fCBkaXIgPT09ICdza2V3JylcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2Rpcl07XG4gICAgICAgIGlmIChNYXRoLmFicyhyb3RhdGlvbikgPiBmdWxsQ2lyY2xlUmFkaXVzKVxuICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbiAlIGZ1bGxDaXJjbGVSYWRpdXM7XG4gICAgICAgIC8vIDJQSSDkuLrkuIDkuKrlnIbvvIzmiorop5LluqbovazkuLrkuIDkuKrlnIblhoXnmoTlgLzvvIzku6XlhY3ph43lpI3nlJ/miJDlm77niYdcbiAgICAgICAgY29uc3Qgcm90YXRpb25LZXkgPSBOdW1iZXIocm90YXRpb24udG9GaXhlZCgyKSk7IC8vIOeyvuW6puWPquWPluWwj+aVsDLkvY1cbiAgICAgICAgY29uc3Qga2V5ID0gcm90YXRpb25LZXkgPT09IDAgPyBkaXIgOiBgJHtkaXJ9XyR7cm90YXRpb25LZXl9YDtcbiAgICAgICAgbGV0IGN1cnNvciA9IHRoaXNba2V5XTtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT09ICdsJyB8fCBkaXIgPT09ICdyJyB8fCBkaXIgPT09ICd0JyB8fCBkaXIgPT09ICdiJykge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOayoeacieaXi+i9rOinkuW6pu+8jOWImeaKim5z6L2sOTDluqbljbPlj69cbiAgICAgICAgICAgICAgICBpZiAocm90YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gYXdhaXQgdXRpbC5yb3RhdGVJbWFnZShucywgTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzWydsJ10gPSB0aGlzWydyJ10gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWmguaenOacieaXi+i9rOinkuW6pu+8jOWImeiOt+WPluagh+WHhueahOWGjei9rOWvueW6lOeahOinkuW6plxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWwgPSBhd2FpdCB0aGlzLmdldChkaXIsIDApO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBhd2FpdCB1dGlsLnJvdGF0ZUltYWdlKG5vcm1hbCwgcm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyID09PSAndHInIHx8IGRpciA9PT0gJ2xiJyB8fCBkaXIgPT09ICdsdCcgfHwgZGlyID09PSAncmInKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5peL6L2s6KeS5bqm77yM5YiZ5oqKbndzZei9rDkw5bqm5Y2z5Y+vXG4gICAgICAgICAgICAgICAgaWYgKHJvdGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IGF3YWl0IHV0aWwucm90YXRlSW1hZ2UobndzZSwgTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1sndHInXSA9IHRoaXNbJ2xiJ10gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWmguaenOacieaXi+i9rOinkuW6pu+8jOWImeiOt+WPluagh+WHhueahOWGjei9rOWvueW6lOeahOinkuW6plxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWwgPSBhd2FpdCB0aGlzLmdldChkaXIsIDApO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBhd2FpdCB1dGlsLnJvdGF0ZUltYWdlKG5vcm1hbCwgcm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJzb3I7XG4gICAgfVxufTtcbi8qKlxuICog5Zu+5qCH6YWN572uXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtSWNvbnMgPSB7XG4gICAgJ3JvdGF0ZSc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQU1BQUFCZzNBbTFBQUFBZ1ZCTVZFVUFBQUFpSzlNaktkVWZLTllqS2RVaUtOWWlLZFVlSHVBaktOWWpLTllpS05ZeU1zd2lLTllpS05ZaUtOWWlLTlloS05ZaUtkVWlLTllpS05ZaktkVWpLTllnSjljakpkWWlLTllpS05ZaUtkVWhKOWNqS05ZaUtkVWRMTk1ySzlNaUtOWWlLTllpS2RVaUtOWWpLTllqS2RVaktkVWpLTllqS2RVaktkVWpLZGFVVzdlVkFBQUFLblJTVGxNQUZkTVkxL3Y0Q1BYbzR3WHV5TGg2UmZLUmpXcEFKeHlrYjF0U1RqQVJDOE9zbFlWZ09pdlFycWV5N2NhcUFBQUJNMGxFUVZSSXgrMlU2VzZETUJDRURkU0UrMndnOTUwZTMvcy9ZR09CUUkwaE1mK3FLdk9ESFlzWmU5ZGVyWGpoMzJDMlBzVStCSWN5Q3cza1ZoblJJVWozei9UdkVjVHAxUkdpenM0MkJKdkgra3FTYlB0bEZrUDUyTEZjMzUzb3NoQ1RNTThwSnpwY2h1dXdyTEVzOGZkRGVzOXpSaHdIMGdHOURiWTFraFIrT0tRZmQ5aGt1djROYnAvaHJGSUtYZStBTmViSWlIVzlnSmJvZDJmaE43elRxK1NocGIvM1V1c1EyZkdldU13NnJ0QnYxdnhyYVg5VWdOTndQVjFsME5PTm1iZE1kN2pVZW5rRnFSaHp5S0VyMy9EWkVOTkhEU091S3BxM3pabEVCZlBHM0VWY1ZEUnYvUlg1Vmt6Q0F2OWpraUZNeU8rR3dIYjFlT2d0NEt2cTEwNGh2ZXJKSU1zaGVhL0NHNjFYM3k2eWVEYjduSk1IeUNod1ZUaWExTFM3SEFNSitNbXlOcC9nTzJjbVh2akQrQUhwcmhwb0pLaVlZQUFBQUFCSlJVNUVya0pnZ2c9PScsXG4gICAgJ3NrZXcnOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQWRWQk1WRVVBQUFCbFkvOTdlLzlrWXY5a1kvOW5aLzlsWS85a1l2OWtZLzlrWXY5a1kvOWxZLzlrWXY5a1kvOXBZUDlvWVA5a1l2OWtZdjlrWS85a1l2OWlZdjluWS85a1l2OWxZdjlrWXY5bFl2OWxZLzlrWXY5bFl2OWtZLzlrWXY5bFpmOWxZLzlrWXY5a1l2OWxZdjlrWXY5bFkvOWxZLytrdFFOUkFBQUFKblJTVGxNQS9BVHYzeEhtVy9WMFR0TzNraGNOeThYQlVoOFU2dGkrcHB0NWJrc25HVHF5Z21ORVowY3RwZFVBQUFFbVNVUkJWRWpIN1ZQYmxvSXdES1Nsb0FVcUY2a2dkMTIzLy8rSmEralNTcEdxRDc0eGJ5bkp5Y3hrY0RacytCSU9BYTJ5Z3JnSXVhUW9LeG9jYk4wM0Zvb0ZRblo3M3UxUklsWlFVRy9adnpzSkM5ekdhT2Vaa0VBSmE5b3U5ekQyOHE1dFdJS0VSRFpiMGt2dSszTVFtNXZqNEx5WFdoN2s0MlJjZS9WVzFGMWQrSjVnOWZJTGRkbXYyOWVYMFBHajZ2UmVSZGhtT0k3dUxha3FnV1RuV05HQlJGV0JvN2w5SUFlUnFnS0dGenVsQ3ppcmp5WkF4R1JiNi90SE0yR1JFcTFWQzdlV3R2cENvTjNNMW5xME5YM2d3QXQ5T0JpQUNmTndaS2FTUnlvYVZTVDB4SkJOMFVqTk16VkcrTkNvZzB6aG8wdFA0bm9lYndLUC8yenErTGw1QXd1TkFZcEV5SVpYditoSlUzSTRkMTdpaUtUb042RnMvV0RnZzM0ZGpRMGJ2bzQvbmFZdmdzOHhtdndBQUFBQVNVVk9SSzVDWUlJPSdcbn07XG4vKipcbiAqIOWboOS4uuaXi+i9rOWQjuWdkOagh+imgeWbnuWOn+aJjeWlveiuoeeul+aTjeS9nO+8jFxuICogQHBhcmFtIG9mZnNldFxuICogQHBhcmFtIG9sZFBvc2l0aW9uXG4gKiBAcGFyYW0gbmV3UG9zaXRpb25cbiAqIEBwYXJhbSByb3RhdGlvblxuICogQHBhcmFtIGNlbnRlclxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJvdGF0ZUV2ZW50UG9zaXRpb24gPSAob2Zmc2V0LCBvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24sIHJvdGF0aW9uLCBjZW50ZXIpID0+IHtcbiAgICAvLyDlhYjlm57ljp/lnZDmoIfvvIzlho3kuLvnrpflgY/np7vph4/vvIzov5nmoLfkv53or4Hmk43kvZzmm7TlrrnmmJPnkIbop6NcbiAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgY29uc3QgW3BvczEsIHBvczJdID0gdXRpbC5yb3RhdGVQb2ludHMoW29sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbl0sIGNlbnRlciwgLXJvdGF0aW9uKTtcbiAgICAgICAgb2Zmc2V0LnggPSBwb3MyLnggLSBwb3MxLng7XG4gICAgICAgIG9mZnNldC55ID0gcG9zMi55IC0gcG9zMS55O1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcbi8qKlxuICogIOWPkeeUn+aXi+i9rCwg6K6h566X5b6X5Yiw55qE5peL6L2s6KeS5bqmXG4gKi9cbmV4cG9ydCBjb25zdCByb3RhdGVDaGFuZ2UgPSAob2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uLCBjZW50ZXIpID0+IHtcbiAgICAvLyDlm6DkuLpjZW50ZXLmmK/nm7jlr7nkuo7nvJbovpHlmajnmoTvvIzmiYDku6Xkuovku7blnZDmoIfkuZ/pnIDopoHovazliLDnvJbovpHlmahcbiAgICBjb25zdCBjeDEgPSBvbGRQb3NpdGlvbi54IC0gY2VudGVyLng7XG4gICAgY29uc3QgY3kxID0gb2xkUG9zaXRpb24ueSAtIGNlbnRlci55O1xuICAgIGxldCBhbmdsZTEgPSBNYXRoLmF0YW4oY3kxIC8gY3gxKTtcbiAgICBjb25zdCBjeDIgPSBuZXdQb3NpdGlvbi54IC0gY2VudGVyLng7XG4gICAgY29uc3QgY3kyID0gbmV3UG9zaXRpb24ueSAtIGNlbnRlci55O1xuICAgIGxldCBhbmdsZTIgPSBNYXRoLmF0YW4oY3kyIC8gY3gyKTtcbiAgICBpZiAoYW5nbGUxID49IDAgJiYgYW5nbGUyIDwgMCkge1xuICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxID49IDAgJiYgY3gyIDw9IDAgJiYgY3kyID49IDApXG4gICAgICAgICAgICBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgICAgICBlbHNlIGlmIChjeDEgPD0gMCAmJiBjeTEgPD0gMCAmJiBjeDIgPj0gMCAmJiBjeTIgPD0gMClcbiAgICAgICAgICAgIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgIC8vZWxzZSBpZihjeDEgPD0gMCAmJiBjeTEgPD0wICYmIGN4MiA+PSAwICYmIGN5MiA+PSAwKSBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgIH1cbiAgICBlbHNlIGlmIChhbmdsZTEgPD0gMCAmJiBhbmdsZTIgPj0gMCkge1xuICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxIDw9IDAgJiYgY3gyIDwgMClcbiAgICAgICAgICAgIGFuZ2xlMiA9IGFuZ2xlMiAtIE1hdGguUEk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGFuZ2xlMiA9IC1hbmdsZTI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA+IDApIHtcbiAgICAgICAgLy9pZihjeTIgPT09IDApIGFuZ2xlMiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBhbmdsZTIgLSBhbmdsZTE7XG59O1xuLyoqXG4gKiAg5qC55o2u5pON5L2c5Y+C5pWw77yM6K6h566X5L2N56e777yM5aSn5bCP5ZKM5peL6L2s6KeS5bqm562JXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaGFuZ2VEYXRhID0gKGRpciwgb2Zmc2V0LCBvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24sIGNlbnRlciwgcm90YXRpb24gPSAwKSA9PiB7XG4gICAgLy8g5b2T5YmN56e75Yqo5a+55Y6f5a+56LGh55qE5pS55Y+YXG4gICAgY29uc3QgYXJncyA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgIHNrZXc6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOWFiOWbnuWOn+WdkOagh++8jOWGjeS4u+eul+WBj+enu+mHj++8jOi/meagt+S/neivgeaTjeS9nOabtOWuueaYk+eQhuino1xuICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICBvZmZzZXQgPSBnZXRSb3RhdGVFdmVudFBvc2l0aW9uKG9mZnNldCwgb2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uLCByb3RhdGlvbiwgY2VudGVyKTtcbiAgICB9XG4gICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgY2FzZSAnbCc6IHtcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZnNldC54O1xuICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZzZXQueDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3QnOiB7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZzZXQueTtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncic6IHtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnbHQnOiB7XG4gICAgICAgICAgICBhcmdzLnggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZzZXQueTtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAndHInOiB7XG4gICAgICAgICAgICBhcmdzLndpZHRoID0gb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZzZXQueTtcbiAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncmInOiB7XG4gICAgICAgICAgICBhcmdzLndpZHRoID0gb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnbGInOiB7XG4gICAgICAgICAgICBhcmdzLnggPSBvZmZzZXQueDtcbiAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2Zmc2V0Lng7XG4gICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZnNldC55O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5aaC5p6c5Lit5b+D5Y+R55Sf5LqG5YGP56e777yM5YiZ5paw5Lit5b+D54K56KaB56e75Yiw57uV5Y6f5Lit5b+D54K55peL6L2s5b2T5YmN5peL6L2s6KeS5bqm55qE54K577yM5omN5Li+5L2/5Zu+5b2i56e75Yqo5LiN5q2j5bi4XG4gICAgaWYgKHJvdGF0aW9uICYmIChhcmdzLnggfHwgYXJncy55IHx8IGFyZ3Mud2lkdGggfHwgYXJncy5oZWlnaHQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0NlbnRlciA9IHtcbiAgICAgICAgICAgIHg6IGNlbnRlci54ICsgYXJncy54ICsgYXJncy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiBjZW50ZXIueSArIGFyZ3MueSArIGFyZ3MuaGVpZ2h0IC8gMlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0YXJnZXRDZW50ZXIgPSB1dGlsLnJvdGF0ZVBvaW50cyh7IC4uLm5ld0NlbnRlciB9LCBjZW50ZXIsIHJvdGF0aW9uKTtcbiAgICAgICAgYXJncy54ICs9IHRhcmdldENlbnRlci54IC0gbmV3Q2VudGVyLng7XG4gICAgICAgIGFyZ3MueSArPSB0YXJnZXRDZW50ZXIueSAtIG5ld0NlbnRlci55O1xuICAgIH1cbiAgICByZXR1cm4gYXJncztcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5leHBvcnQgeyB1dGlsLCBjb250cm9sbGVyIH07XG5leHBvcnQgZGVmYXVsdCB1dGlsO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYr+aVsOWtl++8jOWtl+espuS4suaVsOWtl+aIlumFjei6q+WwseaYr251bWJlcui/lOWbnnRydWVcbiAgICAgKiBAcGFyYW0gdiDljp/lrZfnrKbkuLLmiJbmlbDlrZdcbiAgICAgKiBAcmV0dXJucyB0cnVlL2ZhbHNlXG4gICAgICovXG4gICAgaXNOdW1iZXIodikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IC9eXFxzKltcXGRdKyhcXC5cXGQrKT9cXHMqJC8udGVzdCh2KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYr+W4puWDj+e0oOWNleS9jShweCnnmoTlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgaXNQWE51bWJlcih2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcHhcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYr+W4puinkuW6puWNleS9jShkZWcp55qE5a2X56ym5LiyXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGlzRGVnTnVtYmVyKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypkZWdcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYr+W4puW8p+W6puWNleS9jShyYWQp55qE5a2X56ym5LiyXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGlzUmFkTnVtYmVyKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypyYWRcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOi9rOS4uuWDj+e0oOWtl+espuS4suagvOW8jyA6IDIgLT4gMnB4XG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHRvUFgodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ3B4JztcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDluKblg4/ntKDmiJblhbblroPljZXkvY3nmoTovazmjaLkuLrmlbDlrZc6IDJweCAtPiAyXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHRvTnVtYmVyKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHYpO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KSB8fCAwO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5byn5bqm6L2s6KeS5bqmOiBNYXRoLlBJIC0+IDE4MFxuICAgICAqIEBwYXJhbSB2XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICByYWRUb0RlZyh2KSB7XG4gICAgICAgIHJldHVybiB2ICogKDE4MCAvIE1hdGguUEkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6KeS5bqm6L2s5byn5bqmIDE4MCAtPiBNYXRoLlBJXG4gICAgICogQHBhcmFtIHZcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGRlZ1RvUmFkKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDovazkuLrop5LluqbmoLzlvI8gMSAtPiAxZGVnLCAzLjE0cmFkIC0+IDE4MGRlZ1xuICAgICAqIEBwYXJhbSB2XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB0b0RlZyh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHYgKyAnZGVnJztcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB0aGlzLmlzUmFkTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EZWcodGhpcy5yYWRUb0RlZyhwYXJzZUZsb2F0KHYpKSk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6L2s5Li65byn5bqm5qC85byPLCAxIC0+IDFyYWQsICAxODBkZWcgLT4gMy4xNHJhZFxuICAgICAqIEBwYXJhbSB2XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB0b1JhZCh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHYgKyAncmFkJztcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB0aGlzLmlzRGVnTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9SYWQodGhpcy5kZWdUb1JhZChwYXJzZUZsb2F0KHYpKSk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5YWD57Sg55qE57ud5a+55a6a5L2NXG4gICAgICogQHBhcmFtICBlbCAtIOebruagh+WFg+e0oOWvueixoVxuICAgICAqIEByZXR1cm5zICDkvY3nva7lr7nosaEodG9wLGxlZnQpXG4gICAgICovXG4gICAgZ2V0RWxlbWVudFBvc2l0aW9uKGVsKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHsgXCJ5XCI6IDAsIFwieFwiOiAwIH07XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICBpZiAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gZWwub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IGVsLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC54KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueCArPSBlbC54O1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWxzZSBpZiAoZWwueSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcG9zLnkgKz0gZWwueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5YWD57SgYm91bmRzXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50Qm91bmRpbmdSZWN0KGVsKSB7XG4gICAgICAgIGxldCBib3VuZHMgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmIChlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGJvdW5kcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgICAgICBib3VuZHMueCArPSBzY3JvbGxMZWZ0O1xuICAgICAgICAgICAgYm91bmRzLnkgKz0gc2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRFbGVtZW50UG9zaXRpb24oZWwpO1xuICAgICAgICAgICAgYm91bmRzLnggPSBwb3MueDtcbiAgICAgICAgICAgIGJvdW5kcy55ID0gcG9zLnk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSBlbC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaKimRvbWN1bWVudOWdkOagh+i9rOS4uuaMh+WumuWFg+e0oOebuOWvueWdkOagh1xuICAgICAqIEBwYXJhbSBwb3NcbiAgICAgKiBAcGFyYW0gZG9tXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB0b0RvbVBvc2l0aW9uKHBvcywgZG9tKSB7XG4gICAgICAgIGNvbnN0IGRvbVBvcyA9IHRoaXMuZ2V0RWxlbWVudEJvdW5kaW5nUmVjdChkb20pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcG9zLnggLSBkb21Qb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55IC0gZG9tUG9zLnlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaKiuS4gOS4quaIluWkmuS4queCuee7leafkOS4queCueaXi+i9rOS4gOWumuinkuW6plxuICAgICAqIOWFiOaKiuWdkOagh+WOn+eCueenu+WIsOaXi+i9rOS4reW/g+eCue+8jOiuoeeul+WQjuenu+WbnlxuICAgICAqIEBwYXJhbSAgcCAtIOS4gOS4quaIluWkmuS4queCuVxuICAgICAqIEBwYXJhbSAgcnAgLSAg5peL6L2s5Lit5b+D54K5XG4gICAgICogQHBhcmFtICByIC0g5peL6L2s6KeS5bqmXG4gICAgICovXG4gICAgcm90YXRlUG9pbnRzKHAsIGNlbnRlciwgcikge1xuICAgICAgICBpZiAoIXIgfHwgIXApXG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgbGV0IGNvcyA9IE1hdGguY29zKHIpO1xuICAgICAgICBsZXQgc2luID0gTWF0aC5zaW4ocik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHApKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGxldCB4MSA9IHBbaV0ueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIGxldCB5MSA9IHBbaV0ueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHBbaV0ueCA9IHgxICogY29zIC0geTEgKiBzaW4gKyBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICBwW2ldLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeDEgPSBwLnggLSBjZW50ZXIueDtcbiAgICAgICAgICAgIGxldCB5MSA9IHAueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgcC54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgcC55ID0geDEgKiBzaW4gKyB5MSAqIGNvcyArIGNlbnRlci55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6K6+572uZG9t5qC35byPXG4gICAgICogQHBhcmFtIGRvbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBjc3MoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3NzKGRvbSwgbiwgbmFtZVtuXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiuvue9ruaIluivu+WPlmRvbeWxnuaAp1xuICAgICAqIEBwYXJhbSBkb21cbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgYXR0cihkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlICsgJycpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvbS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFieagh+S9jee9rlxuICAgICAqIEBwYXJhbSBkb20g5YWD57SgIGh0bWxlbGVtZW50XG4gICAgICovXG4gICAgc2V0UmFuZ2UoZG9tLCBwb3NpdGlvbikge1xuICAgICAgICBsZXQgcmFuZ2U7XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNhcmV0UG9zaXRpb25Gcm9tUG9pbnQgPyBkb2N1bWVudC5jYXJldFBvc2l0aW9uRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpIDogZG9jdW1lbnQuY2FyZXRSYW5nZUZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaKiuWFieagh+e9ruS6juacgOWQjlxuICAgICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gZG9tLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KGxhc3QsIGxhc3QudGV4dENvbnRlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xuICAgIH0sXG4gICAgLy8g5pys5Zyw5ZSv5LiASUTvvIzov5nkuKrlj6ropoHkv53or4HlvZPliY3nur/nqIvllK/kuIDljbPlj6/vvIzpnZ7lhajnkIPllK/kuIBcbiAgICB1dWlkKCkge1xuICAgICAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApO1xuICAgICAgICByZXR1cm4gKHRpbWUgKyBybmQpLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmiorlm77niYfml4vovazkuIDlrprop5LluqbvvIzov5Tlm55iYXNlNjRcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIHJvdGF0aW9uXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhc3luYyByb3RhdGVJbWFnZSh1cmwsIHJvdGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGN2cy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgICAgICBjdnMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN2cy53aWR0aCwgY3ZzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjdnMud2lkdGggLyAyLCBjdnMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtY3ZzLndpZHRoIC8gMiwgLWN2cy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGN2cy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6K+35rGC6L+c56iL6LWE5rqQXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBvcHRpb25cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3QodXJsLCBvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvL+aWsOW7ulhNTEh0dHBSZXF1ZXN05a+56LGhXG4gICAgICAgICAgICBpZiAob3B0aW9uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gb3B0aW9uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIG9wdGlvbi5oZWFkZXJzW25hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBbXTtcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChvcHRpb24uZGF0YVtuYW1lXSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gb3B0aW9uLm1ldGhvZCA/IG9wdGlvbi5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICB1cmwgKz0gKHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nKSArIHBhcmFtcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkgeyAvL+aIkOWKn+WujOaIkFxuICAgICAgICAgICAgICAgICAgICAvL+WIpOaWreebuOW6lOe7k+aenO+8mlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy/lj5HpgIHor7fmsYLvvJpcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQobWV0aG9kID09PSAnUE9TVCcgPyBwYXJhbXMuam9pbignJicpIDogbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iXX0=
