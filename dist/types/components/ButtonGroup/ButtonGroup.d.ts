import React from "react";
import { ButtonValue } from "./ButtonGroupConstants";
import { DialogPosition } from "../../constants";
import { ButtonType, Size } from "../Button/ButtonConstants";
import { SubIcon, VibeComponentProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
declare type ButtonGroupOption = {
    icon?: SubIcon;
    leftIcon?: SubIcon;
    ariaLabel?: string;
    subText?: string;
    value: ButtonValue;
    text: string;
    disabled?: boolean;
    tooltipContent?: string;
};
interface ButtonGroupProps extends VibeComponentProps {
    /**
     * Backward compatibility for props naming - please use className instead
     */
    componentClassName?: string;
    options: Array<ButtonGroupOption>;
    value?: ButtonValue;
    onSelect?: (value: ButtonValue, name: string) => void;
    size?: Size;
    kind?: ButtonType.SECONDARY | ButtonType.TERTIARY;
    name?: string;
    disabled?: boolean;
    groupAriaLabel?: string;
    /**
     * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
     */
    tooltipPosition?: DialogPosition;
    tooltipHideDelay?: number;
    tooltipShowDelay?: number;
    tooltipContainerSelector?: string;
    tooltipMoveBy?: MoveBy;
}
declare const _default: ((import("../../types/VibeComponent").default<ButtonGroupProps & {
    children?: React.ReactNode;
}, unknown> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    kinds: typeof ButtonType;
}>) | (React.FC<ButtonGroupProps & {
    children?: React.ReactNode;
}> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    kinds: typeof ButtonType;
}>)) & {
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    kinds: typeof ButtonType;
};
export default _default;
