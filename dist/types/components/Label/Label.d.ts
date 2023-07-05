import React from "react";
import { LabelColor, LabelKind } from "./LabelConstants";
import { VibeComponentProps } from "../../types";
interface LabelProps extends VibeComponentProps {
    /**
     * Backward compatibility for props naming - please use className instead
     */
    wrapperClassName?: string;
    /**
     * Class name for an inner text wrapper
     */
    labelClassName?: string;
    kind?: LabelKind;
    color?: LabelColor;
    text?: string;
    isAnimationDisabled?: boolean;
    isLegIncluded?: boolean;
}
declare const _default: ((import("../../types/VibeComponent").default<LabelProps, unknown> & Partial<{
    colors: typeof LabelColor;
    kinds: typeof LabelKind;
}>) | (React.FC<LabelProps> & Partial<{
    colors: typeof LabelColor;
    kinds: typeof LabelKind;
}>)) & {
    colors: typeof LabelColor;
    kinds: typeof LabelKind;
};
export default _default;
