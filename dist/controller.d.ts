import { ItemType, ChangeData, Point } from './types';
export declare const nwse = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC";
export declare const ns = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==";
export declare const rotate = "data:image/png;base64,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";
export declare const fullCircleRadius: number;
/**
 * 操作杠指针配置
 */
export declare const Cursors: {
    l: string;
    lt: string;
    t: string;
    tr: string;
    r: string;
    rb: string;
    b: string;
    lb: string;
    rotate: string;
    skew: string;
    get(dir: ItemType | 'rotate' | 'skew', rotation?: number): Promise<any>;
};
/**
 * 图标配置
 */
export declare const ItemIcons: {
    rotate: string;
    skew: string;
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
export declare const getRotateEventPosition: (offset: Point, oldPosition: Point, newPosition: Point, rotation: number, center: Point) => Point;
/**
 *  发生旋转, 计算得到的旋转角度
 */
export declare const rotateChange: (oldPosition: Point, newPosition: Point, center: Point) => number;
/**
 *  根据操作参数，计算位移，大小和旋转角度等
 */
export declare const getChangeData: (dir: ItemType, offset: Point, oldPosition: Point, newPosition: Point, center: Point, rotation?: number) => ChangeData;
