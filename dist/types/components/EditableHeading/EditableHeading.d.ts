import React from "react";
import { HeadingProps } from "../Heading/Heading";
import { EditableInputProps } from "../EditableInput/EditableInput";
import { HeadingTypes } from "../Heading/HeadingConstants";
export interface EditableHeadingProps extends EditableInputProps, HeadingProps {
    displayPlaceholderInTextMode?: boolean;
    inputAriaLabel?: string;
    errorClass?: string;
    headingClassName?: string;
    inputClassName?: string;
    dataTestId?: string;
    "data-testid"?: string;
    editing?: boolean;
    disabled?: boolean;
    errorClassTimeout?: number;
    style?: React.CSSProperties;
    onStartEditing?: (event: React.KeyboardEvent) => void;
    tooltip?: string;
    insetFocus?: boolean;
    contentRenderer?: React.FC;
}
declare const _default: ((import("../../types/VibeComponent").default<EditableHeadingProps, unknown> & Partial<{
    types: typeof HeadingTypes;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>) | (React.FC<EditableHeadingProps> & Partial<{
    types: typeof HeadingTypes;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>)) & {
    types: typeof HeadingTypes;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
};
export default _default;
