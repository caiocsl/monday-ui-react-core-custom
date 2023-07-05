import React, { FC } from "react";
import Button from "../../Button/Button";
import { DialogPosition } from "../../../constants/positions";
import { SubIcon, VibeComponentProps, ElementContent } from "../../../types";
interface MenuItemButtonProps extends VibeComponentProps {
    /** Backward compatibility for props naming **/
    classname?: string;
    menuId?: string;
    kind?: typeof MenuItemButton.kinds[keyof typeof MenuItemButton.kinds];
    leftIcon?: SubIcon;
    rightIcon?: SubIcon;
    index?: number;
    activeItemIndex?: number;
    disabled?: boolean;
    disableReason?: string;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    tooltipPosition?: DialogPosition;
    tooltipShowDelay?: number;
    resetOpenSubMenuIndex?: () => void;
    setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
    setActiveItemIndex?: (index: number) => void;
    menuRef?: React.RefObject<HTMLElement>;
    closeMenu?: () => void;
    useDocumentEventListeners?: boolean;
    children?: ElementContent | ElementContent[];
}
declare const MenuItemButton: FC<MenuItemButtonProps> & {
    kinds?: typeof Button.kinds;
    tooltipPositions?: typeof DialogPosition;
    isSelectable?: boolean;
    isMenuChild?: boolean;
};
declare const _default: ((import("../../../types/VibeComponent").default<MenuItemButtonProps, unknown> & Partial<{
    kinds: typeof import("../../Button/ButtonConstants").ButtonType;
    tooltipPositions: typeof DialogPosition;
}>) | (React.FC<MenuItemButtonProps> & Partial<{
    kinds: typeof import("../../Button/ButtonConstants").ButtonType;
    tooltipPositions: typeof DialogPosition;
}>)) & {
    kinds: typeof import("../../Button/ButtonConstants").ButtonType;
    tooltipPositions: typeof DialogPosition;
};
export default _default;
