import { BASE_SIZES } from "../../constants";
export declare enum TextFieldAriaLabel {
    CHAR = "Input char count",
    VALIDATION_TEXT = "Additional helper text"
}
declare const OLD_TEXT_FIELD_SIZES: {
    s: "small";
    md: "medium";
    l: "large";
};
export declare type TextFieldSize = typeof BASE_SIZES[keyof typeof BASE_SIZES] | keyof typeof OLD_TEXT_FIELD_SIZES;
export declare const getActualSize: (size: TextFieldSize) => keyof typeof SIZE_MAPPER;
export declare enum TextFieldTextType {
    TEXT = "text",
    PASSWORD = "password",
    SEARCH = "search",
    DATE = "date",
    DATE_TIME = "datetime-local",
    NUMBER = "number"
}
export declare enum TextFieldFeedbackState {
    ERROR = "error",
    SUCCESS = "success"
}
export declare const FEEDBACK_CLASSES: {
    error: string;
    success: string;
};
export declare const SIZE_MAPPER: {
    small: string;
    medium: string;
    large: string;
};
export {};
