import { ItemType, ChangeData, Point } from './types';
export declare const nwse = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC";
export declare const ns = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==";
export declare const fullCircleRadius: number;
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
export declare const ItemIcons: {
    rotate: string;
    skew: string;
};
export declare const getRotateEventPosition: (offset: Point, oldPosition: Point, newPosition: Point, rotation: number, center: Point) => Point;
export declare const rotateChange: (oldPosition: Point, newPosition: Point, center: Point) => number;
export declare const getChangeData: (dir: ItemType, offset: Point, oldPosition: Point, newPosition: Point, center: Point, rotation?: number) => ChangeData;
