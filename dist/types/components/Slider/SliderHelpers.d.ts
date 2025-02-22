export declare function _calcDimension(max: number, min: number, value: number): [number, number];
export declare const bem: (element: any, modifiers?: any, extraClasses?: string) => string;
export declare function calcDimensions(max: number, min: number, ranged: boolean, value: number | number[]): {
    dimension: number;
    offset: number;
    positions: number[];
    thumbKeys: string[];
};
export declare function calculatePageStep(max: number, min: number, step: number): number;
export declare function ensureDefaultValue(defaultValue: number | number[], min: number, max: number, ranged: boolean): number | number[];
export declare function ensureValueText(valueText: string, value: number | number[], formatter: (value: number) => string): string | string[];
export declare function getNearest(newValue: number, ranged: boolean, value: number | number[]): 1 | 0;
export declare function moveToPx(offsetInPx: number, min: number, max: number, railCoords: {
    width: number;
}, step: number): number;
