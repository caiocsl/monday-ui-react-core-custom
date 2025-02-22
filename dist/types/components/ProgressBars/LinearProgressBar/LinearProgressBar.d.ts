import { SIZES } from "../../../constants/sizes";
import React from "react";
import { ProgressBarStyle, ProgressBarType } from "./LinearProgressBarConstants";
import { VibeComponent, VibeComponentProps } from "../../../types";
interface LinearProgressBarProps extends VibeComponentProps {
    /**
     * Determine the progress bar style (Supported options exposed through `LinearProgressBar.styles`).
     */
    barStyle?: ProgressBarStyle;
    /**
     * The progress bar starting value.
     */
    min?: number;
    /**
     * The progress bar ending value.
     */
    max?: number;
    /**
     * The progress bar current value.
     */
    value?: number;
    /**
     * The progress bar secondary value.
     */
    valueSecondary?: number;
    /**
     * If set to *true*, animations are used.
     */
    animated?: boolean;
    /**
     * Set external styling to the progress bar.
     */
    className?: string;
    /**
     * Determine the progress bar height (Supported options exposed through `LinearProgressBar.sizes`)
     */
    size?: typeof SIZES;
    /**
     * Show progress bar progression in percentages
     */
    indicateProgress?: boolean;
    /**
     * Use multiple bars.
     * ***Note:*** `value`, `valueSecondary` & `barStyle` won't be used
     */
    multi?: boolean;
    /**
     * Array of bar value objects {
     * `value` - The progress value,
     * `color` - hex [`#000000` ~ `#ffffff`] of the current bar
     * }
     */
    multiValues?: {
        /**
         * The progress bar current value.
         */
        value?: number;
        /**
         * The bar color in hex - #000000 ~ #ffffff
         */
        color?: string;
    }[];
    /** ARIA description for the progress bar */
    ariaLabel?: string;
    /** Is the progress bar spread across the entire container width (width: 100%) */
    fullWidth?: boolean;
}
declare const _default: ((VibeComponent<LinearProgressBarProps & React.RefAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{
    styles: typeof ProgressBarStyle;
    barStyles: typeof ProgressBarStyle;
    types: typeof ProgressBarType;
    barTypes: typeof ProgressBarType;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>) | (React.FC<LinearProgressBarProps & React.RefAttributes<HTMLDivElement>> & Partial<{
    styles: typeof ProgressBarStyle;
    barStyles: typeof ProgressBarStyle;
    types: typeof ProgressBarType;
    barTypes: typeof ProgressBarType;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>)) & {
    styles: typeof ProgressBarStyle;
    barStyles: typeof ProgressBarStyle;
    types: typeof ProgressBarType;
    barTypes: typeof ProgressBarType;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
};
export default _default;
