import React, { ReactElement } from "react";
import { SIZES } from "../../constants/sizes";
import { VibeComponentProps } from "../../types";
export interface ListItemProps extends VibeComponentProps {
    /**
     * The textual content of the list item
     */
    children?: string | ReactElement;
    /**
     * A class name to be passed to the list item wrapper
     */
    className?: string;
    /**
     * An id to be passed to the list item wrapper
     */
    id?: string;
    /**
     * A callback function which is being called when the item is being clicked
     * It will be called with the following params
     * event (DomEvent)
     * id (the id which is being passed)
     * onClick(event, id)
     */
    onClick?: (event: React.MouseEvent | React.KeyboardEvent, id: string) => void;
    /**
     * A callback function which is being called when the item is being hovered
     * It will be called with the following params
     * event (DomEvent)
     * id (the id which is being passed)
     * onHover(event, id)
     */
    onHover?: (event: React.MouseEvent | React.FocusEvent, id: string) => void;
    /**
     * disabled state - callback will not be called and navigation will be skipped
     */
    disabled?: boolean;
    /**
     * Selected indication
     */
    selected?: boolean;
    /**
     * The size of the list item
     */
    size?: typeof SIZES[keyof typeof SIZES];
    /**
     Tabindex is used for keyboard navigation - if you want to skip "Tab navigation" please pass -1.
     */
    tabIndex?: number;
    "data-testid"?: string;
}
declare const _default: ((import("../../types/VibeComponent").default<ListItemProps, unknown> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>) | (React.FC<ListItemProps> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>)) & {
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
};
export default _default;
