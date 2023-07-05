import { SIZES } from "../../../constants/sizes";
import React, { ReactElement } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { CloseMenuOption } from "./MenuConstants";
interface MenuProps extends VibeComponentProps {
    /** Backward compatibility for props naming **/
    classname?: string;
    size?: typeof SIZES[keyof typeof SIZES];
    tabIndex?: number;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    focusOnMount?: boolean;
    isVisible?: boolean;
    onClose?: (option: CloseMenuOption) => void;
    focusItemIndex?: number;
    isSubMenu?: boolean;
    useDocumentEventListeners?: boolean;
    focusItemIndexOnMount?: number;
    shouldScrollMenu?: boolean;
    children?: ReactElement | ReactElement[];
}
declare const _default: ((VibeComponent<MenuProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>) | (React.FC<MenuProps & React.RefAttributes<HTMLElement>> & Partial<{
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
