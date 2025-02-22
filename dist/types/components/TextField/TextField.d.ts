import React from "react";
import { TextFieldFeedbackState, TextFieldSize, TextFieldTextType } from "./TextFieldConstants";
import { VibeComponentProps, VibeComponent } from "../../types";
interface TextFieldProps extends VibeComponentProps {
    placeholder?: string;
    /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for all of the available options */
    autoComplete?: string;
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: (event: React.FocusEvent) => void;
    onFocus?: (event: React.FocusEvent) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    onWheel?: (event: React.WheelEvent) => void;
    debounceRate?: number;
    autoFocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    setRef?: (node: HTMLElement) => void;
    iconName?: string | React.FunctionComponent | null;
    secondaryIconName?: string | React.FunctionComponent | null;
    title?: string;
    /** SIZES is exposed on the component itself */
    size?: TextFieldSize;
    /** Don't provide status for plain assistant text */
    validation?: {
        status?: "error" | "success";
        text?: string;
    };
    wrapperClassName?: string;
    onIconClick?: (icon: string | React.FunctionComponent | null) => void;
    clearOnIconClick?: boolean;
    labelIconName?: string | React.FunctionComponent | null;
    showCharCount?: boolean;
    inputAriaLabel?: string;
    searchResultsContainerId?: string;
    activeDescendant?: string;
    /**  Icon names labels for a11y */
    iconsNames?: {
        layout: string;
        primary: string;
        secondary: string;
    };
    /** TEXT_TYPES is exposed on the component itself */
    type?: TextFieldTextType;
    maxLength?: number;
    trim?: boolean;
    /** ARIA role for container landmark */
    role?: string;
    /** adds required to the input element */
    required?: boolean;
    /** shows loading animation */
    loading?: boolean;
    dataTestId?: string;
    secondaryDataTestId?: string;
    tabIndex?: number;
    name?: string;
    underline?: boolean;
}
declare const _default: ((VibeComponent<TextFieldProps & React.RefAttributes<unknown>, unknown> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    };
    feedbacks: typeof TextFieldFeedbackState;
    types: typeof TextFieldTextType;
}>) | (React.FC<TextFieldProps & React.RefAttributes<unknown>> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    };
    feedbacks: typeof TextFieldFeedbackState;
    types: typeof TextFieldTextType;
}>)) & {
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    };
    feedbacks: typeof TextFieldFeedbackState;
    types: typeof TextFieldTextType;
};
export default _default;
