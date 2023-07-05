import React, { ReactElement } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import { BreadcrumbsBarType } from "./BreadcrumbsConstants";
import { BreadcrumbItemProps } from "./BreadcrumbItem/BreadcrumbItem";
export interface BreadcrumbBarProps extends VibeComponentProps {
    /** The type of the bar is responsible for whether it will be navigational or for indication only  */
    type: typeof BreadcrumbsBarType;
    children: ReactElement<BreadcrumbItemProps> | ReactElement<BreadcrumbItemProps>[];
}
declare const _default: ((import("../../types/VibeComponent").default<BreadcrumbBarProps, unknown> & Partial<{
    types: typeof BreadcrumbsBarType;
}>) | (React.FC<BreadcrumbBarProps> & Partial<{
    types: typeof BreadcrumbsBarType;
}>)) & {
    types: typeof BreadcrumbsBarType;
};
export default _default;
