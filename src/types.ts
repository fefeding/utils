import type EventEmitter from 'j-eventemitter';

// 操作点key
export type ItemType = 'l'|'lt'|'t'|'tr'|'r'|'rb'|'b'|'lb'|'rotate'|'skew';

export type Point = {
    x: number;
    y: number;
}

/** An RGBA color */
export declare type Color = {
    /** Red channel value, between 0 and 1 */
    r: number;
    /** Green channel value, between 0 and 1 */
    g: number;
    /** Blue channel value, between 0 and 1 */
    b: number;
    /** Alpha channel value, between 0 and 1 */
    a?: number;
};

export type BoundRect = {
    left: number;
    top: number;
    width: number;
    height: number;
}

export type ChangeData =  Point & {
    width: number;
    height: number;
    rotation: number;
    skew: Point;
};

export type ControllerCursorData = {
    'l'?: string,
    'lt'?: string,
    't'?: string,
    'tr'?: string,
    'r'?: string,
    'rb'?: string,
    'b'?: string,
    'lb'?: string,
    'rotate'?: string,
    'skew'?: string,
}
/**
 * 定义字体的数据接口
 * @public
 */
export interface IJFontData {
    /** 字体的标签名 */
    label: string;

    /** 字体的名称 */
    family: string;

    /** 字体的链接地址 */
    url: string;
}
/**
 * 字体对象接口
 * @public
 */
export interface IJFontFace extends IJFontData {
    /**
     * 获取字体状态
     */
    get status(): FontFaceLoadStatus;

    /**
     * 加载字体
     * @returns - Promise，表示加载字体的操作
     */
    load(): Promise<IJFontFace>;

    /**
     * 将字体转换为HTML字符串
     * @returns - 字体的HTML表示
     */
    toHtml(): string;
}

/**
 * 字体管理接口
 * @public
 */
export interface IJFonts extends EventEmitter {
    /**
     * 所有的字体，按名称存储
     */
    fonts: Map<string, IJFontFace>;

    /**
     * 注入字体配置
     * @param font 字体
     */
    registry(font: IJFontData | Array<IJFontData>);

    /**
     * 检查指定的字体是否已加载
     * @param name - 字体名称
     * @returns - 如果字体已经加载，返回true，否则返回false
     */
    check(name: string): boolean;

    /**
     * 加载指定的字体
     * @param name - 字体名称
     * @param url - 字体的URL
     * @returns - Promise，表示加载字体的操作
     */
    load(name: string, url?: string): Promise<IJFontFace>;
    
}