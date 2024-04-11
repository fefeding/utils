var util = {
    /**
     * 是否是数字，字符串数字或配身就是number返回true
     * @param v 原字符串或数字
     * @returns true/false
     */
    isNumber(v) {
        return typeof v === 'number' || /^\s*[\d]+(\.\d+)?\s*$/.test(v);
    },
    /**
     * 是否是带像素单位(px)的字符串
     * @param v
     * @returns
     */
    isPXNumber(v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    /**
     * 是否是带角度单位(deg)的字符串
     * @param v
     * @returns
     */
    isDegNumber(v) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    /**
     * 是否是带弧度单位(rad)的字符串
     * @param v
     * @returns
     */
    isRadNumber(v) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    /**
     * 转为像素字符串格式 : 2 -> 2px
     * @param v
     * @returns
     */
    toPX(v) {
        if (this.isNumber(v) || !this.isPXNumber(v))
            return v + 'px';
        return v + '';
    },
    /**
     * 带像素或其它单位的转换为数字: 2px -> 2
     * @param v
     * @param fractionDigits 保留小数位
     * @returns
     */
    toNumber(v, fractionDigits) {
        if (this.isNumber(v))
            v = Number(v);
        else if (typeof v === 'string')
            v = (parseFloat(v) || 0);
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
    radToDeg(v) {
        return v * (180 / Math.PI);
    },
    /**
     * 角度转弧度 180 -> Math.PI
     * @param v
     * @returns
     */
    degToRad(v) {
        return v * (Math.PI / 180);
    },
    /**
     * 转为角度格式 1 -> 1deg, 3.14rad -> 180deg
     * @param v
     * @returns
     */
    toDeg(v) {
        if (this.isNumber(v))
            return v + 'deg';
        if (typeof v === 'string' && this.isRadNumber(v))
            return this.toDeg(this.radToDeg(parseFloat(v)));
        return v + '';
    },
    /**
     * 转为弧度格式, 1 -> 1rad,  180deg -> 3.14rad
     * @param v
     * @returns
     */
    toRad(v) {
        if (this.isNumber(v))
            return v + 'rad';
        if (typeof v === 'string' && this.isDegNumber(v))
            return this.toRad(this.degToRad(parseFloat(v)));
        return v + '';
    },
    /**
     * 把数值按比例转为目标数值，比如rgba的 0.5-》0.5*255
     * @param v
     * @param multiple 比例值，默认255
     */
    toMultipleInt(v, multiple = 1) {
        return Math.ceil(v * multiple);
    },
    /**
     * 把rgba颜色转为rgba()串型式
     * multiple倍数，如果是小数，则需要*255转到标准值
     */
    colorToString(color, multiple = 1) {
        let str = `${this.toMultipleInt(color.r, multiple)},${this.toMultipleInt(color.g, multiple)},${this.toMultipleInt(color.b, multiple)}`;
        if (typeof color.a !== 'undefined') {
            str = `rgba(${str},${color.a})`;
        }
        else {
            str = `rgb(${str})`;
        }
        return str;
    },
    /**
     * 获取元素的绝对定位
     * @param  el - 目标元素对象
     * @returns  位置对象(top,left)
     */
    getElementPosition(el) {
        const pos = { "y": 0, "x": 0 };
        if (!el)
            return pos;
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
    getElementBoundingRect(el) {
        let bounds = {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        };
        if (el.getBoundingClientRect) {
            bounds = el.getBoundingClientRect();
            const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            bounds.x += scrollLeft;
            bounds.y += scrollTop;
        }
        else {
            const pos = this.getElementPosition(el);
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
    toDomPosition(pos, dom) {
        const domPos = this.getElementBoundingRect(dom);
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
    rotatePoints(p, center, r) {
        if (!r || !p)
            return p;
        let cos = Math.cos(r);
        let sin = Math.sin(r);
        if (Array.isArray(p)) {
            for (let i = 0; i < p.length; i++) {
                if (!p[i])
                    continue;
                let x1 = p[i].x - center.x;
                let y1 = p[i].y - center.y;
                p[i].x = x1 * cos - y1 * sin + center.x;
                p[i].y = x1 * sin + y1 * cos + center.y;
            }
        }
        else {
            let x1 = p.x - center.x;
            let y1 = p.y - center.y;
            p.x = x1 * cos - y1 * sin + center.x;
            p.y = x1 * sin + y1 * cos + center.y;
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
    css(dom, name, value) {
        if (!name)
            return;
        if (typeof name === 'object') {
            for (const n of Object.getOwnPropertyNames(name)) {
                this.css(dom, n, name[n]);
            }
        }
        else {
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
    attr(dom, name, value) {
        if (typeof value !== 'undefined') {
            dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return dom.getAttribute(name);
        }
    },
    /**
     * 检测是否支持某字体
     * @param family 字体名
     */
    checkFont(family) {
        if (!family)
            return false;
        const baseFont = 'Arial';
        if (baseFont.toLowerCase() === family.toLowerCase())
            return true;
        const txt = "a";
        const fontSize = 100;
        const w = 100, h = 100; // 宽高
        const cvs = document.createElement('canvas');
        const ctx = cvs.getContext('2d', {
            willReadFrequently: true
        });
        cvs.width = w;
        cvs.height = h;
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.textBaseline = "middle";
        const check = function (ctx, family, w, h) {
            ctx.clearRect(0, 0, w, h);
            ctx.font = fontSize + "px" + family + ", " + baseFont;
            ctx.fillText(txt, w / 2, h / 2);
            const data = ctx.getImageData(0, 0, w, h).data;
            return [].slice.call(data).filter((p) => p != 0);
        };
        const supported = check(ctx, baseFont, w, h).join("") !== check(ctx, family, w, h).join("");
        return supported;
    },
    /**
     * 设置class样式
     * @param dom 节点
     * @param name 样式名
     * @param remove 如果true则表示删除样式
     */
    class(dom, name, remove = false) {
        if (Array.isArray(name)) {
            for (const n of name) {
                this.class(dom, n, remove);
            }
            return;
        }
        if (remove) {
            dom.classList.remove(name);
        }
        else {
            if (!dom.classList.contains(name))
                dom.classList.add(name);
        }
    },
    /**
     * 设置光标位置
     * @param dom 元素 htmlelement
     */
    setRange(dom, position) {
        let range;
        if (position) {
            //@ts-ignore
            range = document.caretPositionFromPoint ? document.caretPositionFromPoint(position.x, position.y) : document.caretRangeFromPoint(position.x, position.y);
        }
        else {
            // 把光标置于最后
            range = document.createRange();
            if (dom) {
                const nodes = dom.childNodes;
                if (nodes.length) {
                    const last = nodes[nodes.length - 1];
                    range.setStart(last, last.textContent.length);
                }
            }
        }
        const sel = window.getSelection();
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    },
    // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
    uuid() {
        const time = Date.now();
        const rnd = Math.floor(Math.random() * 10000000000);
        return (time + rnd).toString();
    },
    /**
     * 获取二点在标准坐标系中的的弧度, 返回值为 0 ~ Math.PI*2
     * @param start
     * @param end
     */
    getPointCoordRotation(start, end) {
        const dy = end.y - start.y;
        const dx = end.x - start.x;
        if (dx === 0) {
            if (dy > 0)
                return Math.PI + Math.PI / 2;
            else if (dy < 0)
                return Math.PI / 2;
            else
                return 0;
        }
        else if (dy === 0) {
            if (dx > 0)
                return 0;
            else if (dx < 0)
                return Math.PI;
            else
                return 0;
        }
        const r = Math.atan2(dy, dx);
        return r <= 0 ? Math.abs(r) : (Math.PI * 2 - r);
    },
    /**
     * 把图片旋转一定角度，返回base64
     * @param url
     * @param rotation
     * @returns
     */
    async rotateImage(url, rotation) {
        if (!url)
            return url;
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.setAttribute('crossorigin', 'anonymous');
            img.onload = function (e) {
                const cvs = document.createElement('canvas');
                cvs.width = img.width;
                cvs.height = img.height;
                const ctx = cvs.getContext('2d');
                ctx.clearRect(0, 0, cvs.width, cvs.height);
                ctx.translate(cvs.width / 2, cvs.height / 2);
                ctx.rotate(rotation);
                ctx.translate(-cvs.width / 2, -cvs.height / 2);
                ctx.drawImage(img, 0, 0);
                const data = cvs.toDataURL();
                resolve(data);
            };
            img.onerror = function (e) {
                reject && reject(e);
            };
            img.src = url;
        });
    },
    /**
     * 请求远程资源
     * @param url
     * @param option
     * @returns
     */
    async request(url, option) {
        option = option || {};
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest(); //新建XMLHttpRequest对象
            const params = [];
            if (option.data) {
                for (const name in option.data) {
                    params.push(`${name}=${encodeURIComponent(option.data[name])}`);
                }
            }
            const method = option.method ? option.method.toUpperCase() : 'GET';
            if (method === 'GET') {
                url += (url.includes('?') ? '&' : '?') + params.join('&');
            }
            request.onreadystatechange = function (e) {
                if (this.readyState === 4) { //成功完成
                    //判断相应结果：
                    if (this.status === 200) {
                        resolve(this.responseText);
                    }
                    else {
                        reject(e);
                    }
                }
            };
            //发送请求：
            request.open(method, url);
            if (option.headers) {
                for (const name in option.headers) {
                    request.setRequestHeader(name, option.headers[name]);
                }
            }
            request.send(method === 'POST' ? params.join('&') : null);
        });
    }
};

const fullCircleRadius = Math.PI * 2;
/**
 * 操作杠指针配置
 */
const Cursors = {
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
    async get(dir, rotation = 0, data = this.data) {
        if (dir === 'rotate' || dir === 'skew')
            return data[dir] || 'pointer';
        if (Math.abs(rotation) > fullCircleRadius)
            rotation = rotation % fullCircleRadius;
        // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
        const rotationKey = Number(rotation.toFixed(2)); // 精度只取小数2位
        const key = rotationKey === 0 ? dir : `${dir}_${rotationKey}`;
        let cursor = data[key];
        if (!cursor) {
            if (dir === 'l' || dir === 'r' || dir === 't' || dir === 'b') {
                // 如果没有旋转角度，则把ns转90度即可
                if (rotation === 0) {
                    if (!data['t'])
                        return 'pointer';
                    // b t 同指针
                    if (dir === 'b') {
                        cursor = data[dir] = data['t'];
                    }
                    else {
                        cursor = await util.rotateImage(data['t'], Math.PI / 2);
                        if (!data['l'])
                            data['l'] = cursor;
                        if (!data['r'])
                            data['r'] = cursor;
                    }
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0, data);
                    if (!normal || normal === 'pointer')
                        return 'pointer';
                    cursor = await util.rotateImage(normal, rotation);
                    data[key] = cursor;
                }
            }
            else if (dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb') {
                // 如果没有旋转角度，则把nwse转90度即可
                if (rotation === 0) {
                    if (!data['lt'])
                        return 'pointer';
                    // rb lt同一个指针
                    if (dir === 'rb') {
                        cursor = data[dir] = data['lt'];
                    }
                    else {
                        cursor = await util.rotateImage(data['lt'], Math.PI / 2);
                        if (!data['tr'])
                            data['tr'] = cursor;
                        if (!data['lb'])
                            data['lb'] = cursor;
                    }
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0, data);
                    if (!normal || normal === 'pointer')
                        return 'pointer';
                    cursor = await util.rotateImage(normal, rotation);
                    data[key] = cursor;
                }
            }
        }
        return cursor;
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
const getRotateEventPosition = (offset, oldPosition, newPosition, rotation, center) => {
    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if (rotation) {
        const [pos1, pos2] = util.rotatePoints([oldPosition, newPosition], center, -rotation);
        offset.x = pos2.x - pos1.x;
        offset.y = pos2.y - pos1.y;
    }
    return offset;
};
/**
 *  发生旋转, 计算得到的旋转角度
 */
const rotateChange = (oldPosition, newPosition, center) => {
    // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
    const cx1 = oldPosition.x - center.x;
    const cy1 = oldPosition.y - center.y;
    let angle1 = Math.atan(cy1 / cx1);
    const cx2 = newPosition.x - center.x;
    const cy2 = newPosition.y - center.y;
    let angle2 = Math.atan(cy2 / cx2);
    if (angle1 >= 0 && angle2 < 0) {
        if (cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0)
            angle2 = Math.PI + angle2;
        else if (cx1 <= 0 && cy1 <= 0 && cx2 >= 0 && cy2 <= 0)
            angle2 = Math.PI + angle2;
        //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
    }
    else if (angle1 <= 0 && angle2 >= 0) {
        if (cx1 >= 0 && cy1 <= 0 && cx2 < 0)
            angle2 = angle2 - Math.PI;
        else
            angle2 = -angle2;
    }
    else ;
    return angle2 - angle1;
};
/**
 *  根据操作参数，计算位移，大小和旋转角度等
 */
const getChangeData = (dir, offset, oldPosition, newPosition, center, rotation = 0) => {
    // 当前移动对原对象的改变
    const args = {
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
        case 'l': {
            args.x = offset.x;
            args.width = -offset.x;
            break;
        }
        case 't': {
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'r': {
            args.width = offset.x;
            break;
        }
        case 'b': {
            args.height = offset.y;
            break;
        }
        case 'lt': {
            args.x = offset.x;
            args.width = -offset.x;
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'tr': {
            args.width = offset.x;
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'rb': {
            args.width = offset.x;
            args.height = offset.y;
            break;
        }
        case 'lb': {
            args.x = offset.x;
            args.width = -offset.x;
            args.height = offset.y;
            break;
        }
    }
    // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
    if (rotation && (args.x || args.y || args.width || args.height)) {
        const newCenter = {
            x: center.x + args.x + args.width / 2,
            y: center.y + args.y + args.height / 2
        };
        const targetCenter = util.rotatePoints({ ...newCenter }, center, rotation);
        args.x += targetCenter.x - newCenter.x;
        args.y += targetCenter.y - newCenter.y;
    }
    return args;
};

var controller = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Cursors: Cursors,
    fullCircleRadius: fullCircleRadius,
    getChangeData: getChangeData,
    getRotateEventPosition: getRotateEventPosition,
    rotateChange: rotateChange
});

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	} 
} (eventemitter3));

var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

/**
 * EventEmitter 类，继承自 'eventemitter3' 模块的 EventEmiter 类。
 * 用于进行事件的发布与订阅。
 * @public
 */
class JEventEmitter extends EventEmitter {
    /**
     * 私有方法，用于规范化事件名
     * @param name - 可以是字符串、符号或字符串数组
     * @returns 返回符号或字符串数组
     */
    normalizeEventNames(name) {
        if (!name) {
            return [];
        }
        if (typeof name === 'string') {
            return name.split(' ');
        }
        return Array.isArray(name) ? name : [name];
    }
    /**
     * 为给定的事件添加一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @returns 返回 EventEmitter 实例
     */
    on(event, fn, context) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.on(name, fn, context);
        }
        return this;
    }
    /**
     * 移除给定的事件的一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 可选，监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @param once - 可选，是否只执行一次
     * @returns 返回 EventEmitter 实例
     */
    off(event, fn, context, once) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.off(name, fn, context);
        }
        return this;
    }
}

class JFontData {
    constructor(family, url, font) {
        this.family = family;
        this.url = url;
        this.font = font;
    }
    family;
    url;
    // 中文名
    label;
    font;
    get status() {
        if (this.font)
            return this.font.status;
        return 'unloaded';
    }
    async load(url = this.url) {
        this.url = url || this.url;
        if (!this.font)
            this.font = new FontFace(this.family, `url("${this.url}")`);
        const f = await this.font.load();
        document.fonts.add(f); // 生效
        return this;
    }
    toHtml() {
        return `@font-face {font-family: "${this.family}"; src: url("${this.url}")}`;
    }
}
class JFonts extends JEventEmitter {
    constructor(fonts) {
        super();
        // 初始化默认支持的字体
        if (Array.isArray(fonts)) {
            this.registry(fonts);
        }
        else if (fonts) {
            for (const name in fonts) {
                if (fonts[name] && typeof fonts[name] === 'object')
                    this.registry(fonts[name]);
            }
        }
        this.init();
    }
    fontConfigs = new Map();
    fonts = new Map();
    init() {
        if (document.fonts) {
            const fonts = document.fonts.values();
            let font = fonts.next();
            while (font && font.done && font.value) {
                if (font.value) {
                    const f = new JFontData(font.value.family);
                    f.font = font.value;
                    this.fonts.set(f.family, f);
                }
                font = fonts.next();
            }
        }
        // 系统默认的一些字体支持
        this.fonts.set('arial', new JFontData('Arial', '', new FontFace('Arial', '')));
    }
    /**
     * 注入字体配置
     * @param font 字体
     */
    registry(font) {
        // 初始化默认支持的字体
        if (Array.isArray(font)) {
            for (const f of font) {
                this.registry(f);
            }
        }
        else if (font) {
            this.fontConfigs.set(font.family.toLocaleLowerCase(), font);
        }
    }
    // 加载字体
    async load(name, url) {
        let font = this.get(name);
        if (font) {
            if (font.url && (font.status === 'unloaded' || font.status === 'error'))
                return font.load();
            return font;
        }
        if (!url) {
            const config = this.fontConfigs.get(name.toLocaleLowerCase());
            // 没有配置支持的字体，则报错
            if (!config) {
                //console.warn(`没有支持的 ${name} 字体配置`);
                return null;
            }
            url = config.url;
        }
        font = new JFontData(name, url);
        this.fonts.set(name.toLocaleLowerCase(), font);
        const f = await font.load();
        this.emit('load', f); // 加载字本事件
        return f;
    }
    // 获取已加载的字体
    get(name) {
        if (this.fonts) {
            name = name.toLocaleLowerCase();
            if (this.fonts.has(name))
                return this.fonts.get(name);
        }
        return null;
    }
    // 检查加载的字体是否存在，存在则返回字体对象
    check(name) {
        const font = this.get(name);
        if (font)
            return true;
        else {
            const exist = util.checkFont(name); // 如果系统已经支持，则加到配置中
            if (exist) {
                this.registry(new JFontData(name, '', new FontFace(name, '')));
            }
            return exist;
        }
    }
}

export { controller, util as default, JFonts as fonts, util };
