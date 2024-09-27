
import { Point, Color } from './types';

export default {
    /**
     * 是否是数字，字符串数字或配身就是number返回true
     * @param v 原字符串或数字
     * @returns true/false
     */
    isNumber(v: string|number) {
        return typeof v === 'number' ||  /^\s*[\d]+(\.\d+)?\s*$/.test(v);
    },
    /**
     * 是否是带像素单位(px)的字符串
     * @param v 
     * @returns 
     */
    isPXNumber(v: string) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    /**
     * 是否是带角度单位(deg)的字符串
     * @param v 
     * @returns 
     */
    isDegNumber(v: string) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    /**
     * 是否是带弧度单位(rad)的字符串
     * @param v 
     * @returns 
     */
    isRadNumber(v: string) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    /**
     * 转为像素字符串格式 : 2 -> 2px
     * @param v 
     * @returns 
     */
    toPX(v: string|number) {
        if(this.isNumber(v) || !this.isPXNumber(v)) return v + 'px';
        return v + '';
    },
    /**
     * 带像素或其它单位的转换为数字: 2px -> 2
     * @param v 
     * @param fractionDigits 保留小数位 
     * @returns 
     */
    toNumber(v: string|number, fractionDigits?: number): number {        
        if(this.isNumber(v)) v = Number(v);
        else if(typeof v === 'string') v = (parseFloat(v) || 0);
        if(typeof fractionDigits !== 'undefined') {
            v = Number(v.toFixed(fractionDigits));
        }
        return v;
    },
    /**
     * 弧度转角度: Math.PI -> 180
     * @param v 
     * @returns 
     */
    radToDeg(v: number) {
        return v * (180 / Math.PI);
    },
    /**
     * 角度转弧度 180 -> Math.PI
     * @param v 
     * @returns 
     */
    degToRad(v: number) {
        return v * (Math.PI / 180);
    },
    /**
     * 转为角度格式 1 -> 1deg, 3.14rad -> 180deg
     * @param v 
     * @returns 
     */
    toDeg(v: string|number): string {
        if(this.isNumber(v)) return v + 'deg';
        if(typeof v === 'string' && this.isRadNumber(v)) return this.toDeg(this.radToDeg(parseFloat(v)));
        return v + '';
    },
    /**
     * 转为弧度格式, 1 -> 1rad,  180deg -> 3.14rad
     * @param v 
     * @returns 
     */
    toRad(v: string|number): string {
        if(this.isNumber(v)) return v + 'rad';
        if(typeof v === 'string' && this.isDegNumber(v)) return this.toRad(this.degToRad(parseFloat(v)));
        return v + '';
    },
    /**
     * 把数值按比例转为目标数值，比如rgba的 0.5-》0.5*255
     * @param v 
     * @param multiple 比例值，默认255
     */
    toMultipleInt(v: number, multiple: number=1) {
        return Math.ceil(v * multiple);
    },
    /**
     * 把数值转换成指定区间的值 ，  比如-1到1之间的值转换成 0-1之间的值： toNumberRange(-1, -1,1,0,1);
     * @param v 原数值
     * @param sMin 原数值下限
     * @param sMax 原数值上限
     * @param dMin 目标区间下限
     * @param dMax 目标区间上限
     */    
    toNumberRange(v: number, sMin: number, sMax: number, dMin: number, dMax: number) {
        const p = (v - sMin) / (sMax - sMin);
        const r = p * (dMax - dMin) + dMin;
        return r;
    },
    /**
     * 把rgba颜色转为rgba()串型式
     * multiple倍数，如果是小数，则需要*255转到标准值
     */
    colorToString(color: Color, multiple = 1) {
        let str = `${this.toMultipleInt(color.r, multiple)},${this.toMultipleInt(color.g, multiple)},${this.toMultipleInt(color.b, multiple)}`;
        if(typeof color.a !== 'undefined') {
            str = `rgba(${str},${color.a})`;
        }
        else {
            str = `rgb(${str})`;
        }
        return str;
    },
    /**
     * 创建dom元素
     * @param tag 标签名
     */
    createElement(tag, option?: ElementCreationOptions): HTMLElement {
        // svg标签创建
        if(['svg' , 'defs', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'g', 'path', 'polygon', 'stop', 'text', 'mask', 'linearGradient', 'radialGradient', 'filter', 'feOffset', 'feBlend'].includes(tag)) {
            return document.createElementNS("http://www.w3.org/2000/svg", tag, option) as HTMLElement; // 创建SVG元素
        }
        return document.createElement(tag, option);
    },
    /**
     * 获取元素的绝对定位
     * @param  el - 目标元素对象
     * @returns  位置对象(top,left)
     */
    getElementPosition(el: HTMLElement) {    
        const pos = {"y": 0, "x": 0};
        if(!el) return pos;
        if (el.offsetParent) {
            while (el.offsetParent) {
                pos.y += el.offsetTop;
                pos.x += el.offsetLeft;
                el = el.offsetParent as HTMLElement;
            }
        }
        // @ts-ignore
        else if(el.x) {
            // @ts-ignore
            pos.x += el.x;
        }
        // @ts-ignore
        else if(el.y){
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
    getElementBoundingRect(el: HTMLElement) {
        let bounds = {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        };
        if(el.getBoundingClientRect) {
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
    toDomPosition(pos: {x: number, y: number}, dom: HTMLElement) {
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
    rotatePoints<T extends ({x: number, y: number}|Array<{x: number, y: number}>)>(p: T, center:　{x: number, y: number}, r: number): T {
        if(!r || !p) return p;
        let cos = Math.cos(r);
        let sin = Math.sin(r);
        if(Array.isArray(p)) {
            for(let i=0;i<p.length;i++) {
                if(!p[i]) continue;
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
    css(dom: any, name: string|Object, value?: string|number) {
        if(!name) return;
        if(typeof name === 'object') {
            for(const n of Object.getOwnPropertyNames(name)) {
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
    attr(dom: any, name: string, value?: string|number) {
        if(typeof value !== 'undefined') {
            dom.setAttribute(name, value+'');
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
    checkFont(family: string) {
        if(!family) return false;
        const baseFont = 'Arial';
        if(baseFont.toLowerCase() === family.toLowerCase()) return true;
        const txt = "a";
        const fontSize = 100;
        const w = 100, h = 100;// 宽高
        const cvs = document.createElement('canvas');
        const ctx = cvs.getContext('2d', {
            willReadFrequently: true
        });
       cvs.width = w;
       cvs.height = h;
       ctx.textAlign = "center";
       ctx.fillStyle = "black";
       ctx.textBaseline = "middle";
       const check = function(ctx: CanvasRenderingContext2D, family: string, w: number, h: number) {
            ctx.clearRect(0, 0, w, h);
            ctx.font = fontSize + "px" + family + ", " + baseFont;
            ctx.fillText(txt, w/2, h/2);
            const data = ctx.getImageData(0,0,w,h).data;
            return [].slice.call(data).filter((p:number) => p != 0);
       }
       const supported = check(ctx, baseFont, w, h).join("") !== check(ctx, family, w, h).join("");
       return supported;
    },

    /**
     * 设置class样式
     * @param dom 节点
     * @param name 样式名
     * @param remove 如果true则表示删除样式
     */
    class(dom: HTMLElement, name: string|Array<string>, remove = false) {
        if(Array.isArray(name)) {
            for(const n of name) {
                this.class(dom, n, remove);
            }
            return;
        }
        if(remove) {
            dom.classList.remove(name);
        }
        else {
            if(!dom.classList.contains(name)) dom.classList.add(name);
        }
    },
    /**
     * 设置光标位置
     * @param dom 元素 htmlelement 
     */
    setRange(dom?:HTMLElement, position?: Point) {        

        let range: Range;
        if(position) {
            //@ts-ignore
            range = document.caretPositionFromPoint? document.caretPositionFromPoint(position.x, position.y) : document.caretRangeFromPoint(position.x, position.y);
        }
        else {
            // 把光标置于最后
            range = document.createRange();
            if(dom) {
                const nodes = dom.childNodes;
                if(nodes.length) {
                    const last = nodes[nodes.length-1];
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
    getPointCoordRotation(start: Point, end: Point) {
        const dy = end.y - start.y;
        const dx = end.x - start.x;
        if(dx === 0) {
            if(dy > 0) return Math.PI + Math.PI/2;
            else if(dy < 0) return Math.PI/2;
            else return 0;
        }
        else if(dy === 0) {
            if(dx > 0) return 0;
            else if(dx < 0) return Math.PI;
            else return 0;
        }
        const r = Math.atan2(dy, dx);
        return r <= 0? Math.abs(r) : (Math.PI*2 - r);
    },
    /**
     * 把图片旋转一定角度，返回base64
     * @param url 
     * @param rotation 
     * @returns 
     */
    async rotateImage(url: string, rotation: number, quality?: number, type: string = 'image/png'): Promise<string> {
        if(!url) return url;

        return new Promise((resolve, reject)=>{
            const img = new Image();
            img.setAttribute('crossorigin', 'anonymous');
            img.onload = function(e) {
                const cvs = document.createElement('canvas');
                cvs.width = img.width;
                cvs.height = img.height;
                const ctx = cvs.getContext('2d');
                ctx.clearRect(0, 0, cvs.width, cvs.height);
                // 如果角度为0，则只是转为了base64
                if(rotation) {
                    ctx.translate(cvs.width / 2, cvs.height / 2);
                    ctx.rotate(rotation);
                    ctx.translate(-cvs.width / 2, -cvs.height / 2);
                }
                ctx.drawImage(img, 0, 0);
                const data = cvs.toDataURL(type, quality);
                resolve(data);
            };
            img.onerror = function(e){
                reject && reject(e);
            }
            img.src=url;
        });
    },

    /**
     * 把图片转为bae64
     * @param url 图片地址
     * @returns 
     */
    async image2Base64(url: string, quality?: number, type: string = 'image/png') {
        const base64 = await this.rotateImage(url, 0, quality, type);
        return base64
    },

    /**
     * 请求远程资源
     * @param url 
     * @param option 
     * @returns 
     */
    async request(url: string, option?: {
        method?: string,
        headers?: {[key:string]: string},
        data?: {[key:string]: string}
    }): Promise<string> {
        option = option || {};
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();//新建XMLHttpRequest对象
            
            const params = [];
            if(option.data) {
                for(const name in option.data) {
                    params.push(`${name}=${encodeURIComponent(option.data[name])}`);
                }
            }
            const method = option.method? option.method.toUpperCase() : 'GET';
            if(method === 'GET') {
                url += (url.includes('?')?'&':'?') + params.join('&')
            }
            request.onreadystatechange = function (e) { //状态发生变化时，函数被回调
                if (this.readyState === 4) { //成功完成
                    //判断相应结果：
                    if (this.status ===200) {
                        resolve(this.responseText);
                    } else {
                        reject(e);
                    }
                }
            }
            //发送请求：
            request.open(method, url);

            if(option.headers) {
                for(const name in option.headers) {
                    request.setRequestHeader(name, option.headers[name]);
                }
            }
            
            request.send(method === 'POST'? params.join('&'): null);
        });
    },
    // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
    requestAnimationFrame(callback: Function, win: any) {
        let fun = win && win.requestAnimationFrame? win.requestAnimationFrame: (typeof window !== 'undefined' && window.requestAnimationFrame? window.requestAnimationFrame: setTimeout);        
		return fun(callback, 20);
    },
    cancelAnimationFrame(handler: any, win: any) {
        let fun = win && win.cancelAnimationFrame? win.cancelAnimationFrame: (typeof window !== 'undefined' && window.cancelAnimationFrame? window.cancelAnimationFrame: clearTimeout);        
		return fun(handler);
    }	
}