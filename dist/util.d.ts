import { Point, Color } from './types';
declare const _default: {
    /**
     * 是否是数字，字符串数字或配身就是number返回true
     * @param v 原字符串或数字
     * @returns true/false
     */
    isNumber(v: string | number): boolean;
    /**
     * 是否是带像素单位(px)的字符串
     * @param v
     * @returns
     */
    isPXNumber(v: string): boolean;
    /**
     * 是否是带角度单位(deg)的字符串
     * @param v
     * @returns
     */
    isDegNumber(v: string): boolean;
    /**
     * 是否是带弧度单位(rad)的字符串
     * @param v
     * @returns
     */
    isRadNumber(v: string): boolean;
    /**
     * 转为像素字符串格式 : 2 -> 2px
     * @param v
     * @returns
     */
    toPX(v: string | number): string;
    /**
     * 带像素或其它单位的转换为数字: 2px -> 2
     * @param v
     * @param fractionDigits 保留小数位
     * @returns
     */
    toNumber(v: string | number, fractionDigits?: number): number;
    /**
     * 弧度转角度: Math.PI -> 180
     * @param v
     * @returns
     */
    radToDeg(v: number): number;
    /**
     * 角度转弧度 180 -> Math.PI
     * @param v
     * @returns
     */
    degToRad(v: number): number;
    /**
     * 转为角度格式 1 -> 1deg, 3.14rad -> 180deg
     * @param v
     * @returns
     */
    toDeg(v: string | number): string;
    /**
     * 转为弧度格式, 1 -> 1rad,  180deg -> 3.14rad
     * @param v
     * @returns
     */
    toRad(v: string | number): string;
    /**
     * 把数值按比例转为目标数值，比如rgba的 0.5-》0.5*255
     * @param v
     * @param multiple 比例值，默认255
     */
    toMultipleInt(v: number, multiple?: number): number;
    /**
     * 把数值转换成指定区间的值 ，  比如-1到1之间的值转换成 0-1之间的值： toNumberRange(-1, -1,1,0,1);
     * @param v 原数值
     * @param sMin 原数值下限
     * @param sMax 原数值上限
     * @param dMin 目标区间下限
     * @param dMax 目标区间上限
     */
    toNumberRange(v: number, sMin: number, sMax: number, dMin: number, dMax: number): number;
    /**
     * 把rgba颜色转为rgba()串型式
     * multiple倍数，如果是小数，则需要*255转到标准值
     */
    colorToString(color: Color, multiple?: number): string;
    /**
     * 创建dom元素
     * @param tag 标签名
     */
    createElement(tag: any, option?: ElementCreationOptions): HTMLElement;
    /**
     * 获取元素的绝对定位
     * @param  el - 目标元素对象
     * @returns  位置对象(top,left)
     */
    getElementPosition(el: HTMLElement): {
        y: number;
        x: number;
    };
    /**
     * 获取元素bounds
     * @param el
     * @returns
     */
    getElementBoundingRect(el: HTMLElement): {
        height: number;
        width: number;
        x: number;
        y: number;
    };
    /**
     * 把domcument坐标转为指定元素相对坐标
     * @param pos
     * @param dom
     * @returns
     */
    toDomPosition(pos: {
        x: number;
        y: number;
    }, dom: HTMLElement): {
        x: number;
        y: number;
    };
    /**
     * 把一个或多个点绕某个点旋转一定角度
     * 先把坐标原点移到旋转中心点，计算后移回
     * @param  p - 一个或多个点
     * @param  rp -  旋转中心点
     * @param  r - 旋转角度
     */
    rotatePoints<T extends {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    }[]>(p: T, center: {
        x: number;
        y: number;
    }, r: number): T;
    /**
     * 设置dom样式
     * @param dom
     * @param name
     * @param value
     * @returns
     */
    css(dom: any, name: string | Object, value?: string | number): any;
    /**
     * 设置或读取dom属性
     * @param dom
     * @param name
     * @param value
     * @returns
     */
    attr(dom: any, name: string, value?: string | number): any;
    /**
     * 检测是否支持某字体
     * @param family 字体名
     */
    checkFont(family: string): boolean;
    /**
     * 设置class样式
     * @param dom 节点
     * @param name 样式名
     * @param remove 如果true则表示删除样式
     */
    class(dom: HTMLElement, name: string | Array<string>, remove?: boolean): void;
    /**
     * 设置光标位置
     * @param dom 元素 htmlelement
     */
    setRange(dom?: HTMLElement, position?: Point): void;
    uuid(): string;
    /**
     * 获取二点在标准坐标系中的的弧度, 返回值为 0 ~ Math.PI*2
     * @param start
     * @param end
     */
    getPointCoordRotation(start: Point, end: Point): number;
    /**
     * 把图片旋转一定角度，返回base64
     * @param url
     * @param rotation
     * @returns
     */
    rotateImage(url: string, rotation: number, quality?: number, type?: string): Promise<string>;
    /**
     * 把图片转为bae64
     * @param url 图片地址
     * @returns
     */
    image2Base64(url: string, quality?: number, type?: string): Promise<any>;
    /**
     * 请求远程资源
     * @param url
     * @param option
     * @returns
     */
    request(url: string, option?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        data?: {
            [key: string]: string;
        };
    }): Promise<string>;
    requestAnimationFrame(callback: Function, win: any): any;
    cancelAnimationFrame(handler: any, win: any): any;
};
export default _default;
