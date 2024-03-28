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