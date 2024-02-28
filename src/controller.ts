import { ItemType, ChangeData, Point, BoundRect } from './types';
import util from './util';

export const nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
export const ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';
export const rotate = 'data:image/png;base64,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';
export const fullCircleRadius = Math.PI * 2;

/**
 * 操作杠指针配置
 */
export const Cursors = {
    'l': '',
    'lt': nwse,
    't': ns,
    'tr': '',
    'r': '',
    'rb': nwse,
    'b': ns,
    'lb': '',
    'rotate': rotate,
    'skew': 'pointer',
    // 根据角度旋转指针
    async get(dir: ItemType|'rotate'|'skew', rotation: number=0) {
        if(dir === 'rotate' || dir === 'skew') return this[dir];
        if(Math.abs(rotation) > fullCircleRadius) rotation = rotation % fullCircleRadius;
        // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
        const rotationKey = Number(rotation.toFixed(2));// 精度只取小数2位
        const key = rotationKey===0 ? dir: `${dir}_${rotationKey}`;
        let cursor = this[key];
        if(!cursor) {
            if(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b') {
                // 如果没有旋转角度，则把ns转90度即可
                if(rotation === 0) {
                    cursor = await util.rotateImage(ns, Math.PI/2);
                    this['l'] = this['r'] = cursor;
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0);
                    cursor = await util.rotateImage(normal, rotation);
                    this[key] = cursor;
                }
            }
            else if(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb') {
                // 如果没有旋转角度，则把nwse转90度即可
                if(rotation === 0) {
                    cursor = await util.rotateImage(nwse, Math.PI/2);
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

/**
 * 图标配置
 */
export const ItemIcons = {    
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
}

/**
 * 因为旋转后坐标要回原才好计算操作，
 * @param offset 
 * @param oldPosition 
 * @param newPosition 
 * @param rotation 
 * @param center 
 * @returns 
 */
export const getRotateEventPosition = (offset: Point, oldPosition: Point, newPosition: Point, rotation: number, center: Point) => {

    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if(rotation) {
        const [pos1, pos2] = util.rotatePoints([oldPosition, newPosition], center, -rotation);
        offset.x = pos2.x - pos1.x;
        offset.y = pos2.y - pos1.y;
    }
    return offset;
}

/**
 *  发生旋转, 计算得到的旋转角度
 */
export const rotateChange = (oldPosition: Point, newPosition: Point, center: Point) => {
    
    // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
    const cx1 = oldPosition.x - center.x;
    const cy1 = oldPosition.y - center.y;
    let angle1 = Math.atan(cy1 / cx1);
    const cx2 = newPosition.x - center.x;
    const cy2 = newPosition.y - center.y;
    let angle2 = Math.atan(cy2 / cx2);


    if(angle1 >= 0 && angle2 < 0) {
        if(cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
        else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 <= 0) angle2 = Math.PI + angle2;
        //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
    }
    else if(angle1 <= 0 && angle2 >= 0) {
        if(cx1 >= 0 && cy1 <= 0 && cx2 < 0) angle2 = angle2 - Math.PI;
        else angle2 = -angle2;
    }
    else if(angle1 >= 0 && angle2 > 0) {
        //if(cy2 === 0) angle2 = 0;
    }
    return angle2 - angle1;
}

/**
 *  根据操作参数，计算位移，大小和旋转角度等
 */
export const getChangeData = (dir: ItemType, offset: Point, oldPosition: Point, newPosition: Point, center: Point, rotation: number=0) => {
    // 当前移动对原对象的改变
    const args: ChangeData = {
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
    if(rotation) {
        offset = getRotateEventPosition(offset, oldPosition, newPosition, rotation, center);
    }
    
    switch(dir) {                
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
        case 'lt':{   
            args.x = offset.x;
            args.width = -offset.x; 
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'tr':{   
            args.width = offset.x; 
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'rb':{   
            args.width = offset.x; 
            args.height = offset.y;
            break;
        }
        case 'lb':{   
            args.x = offset.x;
            args.width = -offset.x; 
            args.height = offset.y;
            break;
        }   
    }

    // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
    if(rotation && (args.x || args.y || args.width || args.height)) {
        const newCenter = {
            x: center.x + args.x + args.width/2,
            y: center.y + args.y + args.height/2
        };
        const targetCenter = util.rotatePoints({...newCenter}, center, rotation);
        args.x += targetCenter.x - newCenter.x;
        args.y += targetCenter.y - newCenter.y;
    }
    return args;
}
