import { IJFonts, IJFontFace, IJFontData } from './types';
import EventEmiter from 'j-eventemitter';
export declare class JFontData implements IJFontFace {
    constructor(family: string, url?: string, font?: FontFace);
    family: string;
    url: string;
    label: string;
    font?: FontFace;
    get status(): FontFaceLoadStatus;
    load(url?: string): Promise<IJFontFace>;
    toHtml(): string;
}
export declare class JFonts extends EventEmiter implements IJFonts {
    constructor(fonts?: Array<IJFontData> | {
        [key: string]: IJFontData;
    });
    protected fontConfigs: Map<string, IJFontData>;
    fonts: Map<string, IJFontFace>;
    init(): void;
    /**
     * 注入字体配置
     * @param font 字体
     */
    registry(font: IJFontData | Array<IJFontData>): void;
    load(name: string, url?: string): Promise<IJFontFace | null>;
    get(name: string): IJFontFace | null;
    check(name: string): boolean;
}
export default JFonts;
