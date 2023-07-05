import React, { ReactElement } from "react";
import { DialogPosition } from "../../../constants/positions";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
import { IconType } from "../../Icon/IconConstants";
import { TooltipPosition } from "./MenuItemConstants";
import { CloseMenuOption } from "../Menu/MenuConstants";
export interface MenuItemProps extends VibeComponentProps {
    title?: string;
    label?: string;
    icon?: SubIcon;
    iconType?: IconType;
    iconBackgroundColor?: string;
    disabled?: boolean;
    disableReason?: string;
    selected?: boolean;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    activeItemIndex?: number;
    setActiveItemIndex?: (index: number) => void;
    index?: number;
    key?: string;
    isParentMenuVisible?: boolean;
    resetOpenSubMenuIndex?: () => void;
    hasOpenSubMenu?: boolean;
    setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
    useDocumentEventListeners?: boolean;
    tooltipContent?: string;
    tooltipPosition?: TooltipPosition;
    tooltipShowDelay?: number;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onMouseEnter?: (event: React.MouseEvent) => void;
    /** Backward compatibility for props naming **/
    classname?: string;
    /**
     * Class name which is added to div which wraps an Icon
     */
    iconWrapperClassName?: string;
    menuId?: string;
    isInitialSelectedState?: boolean;
    shouldScrollMenu?: boolean;
    closeMenu?: (option: CloseMenuOption) => void;
    menuRef?: React.RefObject<HTMLElement>;
    children?: ReactElement | ReactElement[];
}
declare const _default: ((VibeComponent<MenuItemProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    iconType: typeof IconType;
    tooltipPositions: typeof DialogPosition;
}>) | (React.FC<MenuItemProps & React.RefAttributes<HTMLElement>> & Partial<{
    iconType: typeof IconType;
    tooltipPositions: typeof DialogPosition;
}>)) & {
    iconType: typeof IconType;
    tooltipPositions: typeof DialogPosition;
};
export default _default;
