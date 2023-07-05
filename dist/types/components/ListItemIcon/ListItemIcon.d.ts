import React from "react";
import { ListItemIconMargin } from "./ListItemIconConstants";
import { SubIcon, VibeComponentProps } from "../../types";
export interface ListItemIconProps extends VibeComponentProps {
    icon?: SubIcon;
    /**
     * the position of the icon inside the list item (this sets the margins of the icon)
     */
    margin?: ListItemIconMargin;
}
declare const _default: ((import("../../types/VibeComponent").default<ListItemIconProps, unknown> & Partial<{
    margin: typeof ListItemIconMargin;
}>) | (React.FC<ListItemIconProps> & Partial<{
    margin: typeof ListItemIconMargin;
}>)) & {
    margin: typeof ListItemIconMargin;
};
export default _default;
