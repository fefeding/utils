var util = {
    // 是否是数字
    isNumber(v) {
        return typeof v === 'number' || /^\s*[\d\.]+\s*$/.test(v);
    },
    // 是否是带像素单位的字符串
    isPXNumber(v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    // 是否是带角度单位的字符串
    isDegNumber(v) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    // 是否是带弧度单位的字符串
    isRadNumber(v) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    // 转为像素字符串格式 
    toPX(v) {
        if (this.isNumber(v))
            return v + 'px';
        return v;
    },
    // 带像素或其它单位的转换为数字
    toNumber(v) {
        if (this.isNumber(v))
            return Number(v);
        else if (typeof v === 'string')
            return parseFloat(v) || 0;
    },
    // 弧度转角度
    radToDeg(v) {
        return v * (180 / Math.PI);
    },
    // 角度转弧度
    degToRad(v) {
        return v * (Math.PI / 180);
    },
    // 转为角度格式
    toDeg(v) {
        if (this.isNumber(v))
            return v + 'deg';
        if (typeof v === 'string' && this.isRadNumber(v))
            return this.toDeg(this.radToDeg(parseFloat(v)));
        return v;
    },
    // 转为弧度格式
    toRad(v) {
        if (this.isNumber(v))
            return v + 'rad';
        if (typeof v === 'string' && this.isDegNumber(v))
            return this.toRad(this.degToRad(parseFloat(v)));
        return v;
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
    // 获取元素bounds
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
    // 把domcument坐标转为指定元素相对坐标
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
    // 设置样式
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
    // dom属性
    attr(dom, name, value) {
        if (typeof value !== 'undefined') {
            dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return dom.getAttribute(name);
        }
    },
    // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
    uuid() {
        const time = Date.now();
        const rnd = Math.floor(Math.random() * 10000000000);
        return (time + rnd).toString();
    },
    // 把图片旋转一定角度，返回base64
    async rotateImage(url, rotation) {
        return new Promise((resolve, reject) => {
            const img = new Image();
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
    // 请求远程资源
    async request(url, option) {
        option = option || {};
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest(); //新建XMLHttpRequest对象
            if (option.headers) {
                for (const name in option.headers) {
                    request.setRequestHeader(name, option.headers[name]);
                }
            }
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
            request.send(method === 'POST' ? params.join('&') : null);
        });
    }
};

const nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
const ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';
const fullCircleRadius = Math.PI * 2;
// 操作杠指针
const Cursors = {
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
    async get(dir, rotation = 0) {
        if (dir === 'rotate' || dir === 'skew')
            return this[dir];
        if (Math.abs(rotation) > fullCircleRadius)
            rotation = rotation % fullCircleRadius;
        // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
        const rotationKey = Number(rotation.toFixed(2)); // 精度只取小数2位
        const key = rotationKey === 0 ? dir : `${dir}_${rotationKey}`;
        let cursor = this[key];
        if (!cursor) {
            if (dir === 'l' || dir === 'r' || dir === 't' || dir === 'b') {
                // 如果没有旋转角度，则把ns转90度即可
                if (rotation === 0) {
                    cursor = await util.rotateImage(ns, Math.PI / 2);
                    this['l'] = this['r'] = cursor;
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0);
                    cursor = await util.rotateImage(normal, rotation);
                    this[key] = cursor;
                }
            }
            else if (dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb') {
                // 如果没有旋转角度，则把nwse转90度即可
                if (rotation === 0) {
                    cursor = await util.rotateImage(nwse, Math.PI / 2);
                    return this['tr'] = this['lb'] = cursor;
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0);
                    cursor = await util.rotateImage(normal, rotation);
                    this[key] = cursor;
                }
            }
        }
        return cursor;
    }
};
const ItemIcons = {
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};
// 因为旋转后坐标要回原才好计算操作，
const getRotateEventPosition = (offset, oldPosition, newPosition, rotation, center) => {
    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if (rotation) {
        const [pos1, pos2] = util.rotatePoints([oldPosition, newPosition], center, -rotation);
        offset.x = pos2.x - pos1.x;
        offset.y = pos2.y - pos1.y;
    }
    return offset;
};
// 发生旋转, 计算得到的旋转角度
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
// 根据操作参数，计算位移，大小和旋转角度等
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
    ItemIcons: ItemIcons,
    fullCircleRadius: fullCircleRadius,
    getChangeData: getChangeData,
    getRotateEventPosition: getRotateEventPosition,
    ns: ns,
    nwse: nwse,
    rotateChange: rotateChange
});

export { controller, util as default, util };
