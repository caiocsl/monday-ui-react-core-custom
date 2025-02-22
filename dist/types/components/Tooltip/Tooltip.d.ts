import { CSSProperties, PureComponent, ReactElement } from "react";
import { Modifier } from "react-popper";
import { AnimationType, BASE_SIZES_WITH_NONE, HideShowEvent, JustifyType } from "../../constants";
import { DialogPosition } from "../../constants/positions";
import VibeComponentProps from "../../types/VibeComponentProps";
import { TooltipArrowPosition, TooltipTheme } from "./TooltipConstants";
import { ElementContent } from "../../types/ElementContent";
import { MoveBy } from "../../types/MoveBy";
export interface TooltipProps extends VibeComponentProps {
    children: ReactElement | Array<ReactElement>;
    content: ElementContent;
    style?: CSSProperties;
    arrowPosition?: TooltipArrowPosition;
    /** Class name for a tooltip's arrow */
    arrowClassName?: string;
    paddingSize?: keyof typeof BASE_SIZES_WITH_NONE;
    /**
     * How much to move the dialog in relative to children
     * main is the axis in which the position is aligned to
     * secondary is the vertical axes to the position
     */
    moveBy?: MoveBy;
    theme?: TooltipTheme;
    justify?: JustifyType;
    getContainer?: () => HTMLElement;
    /**
     * how much delay should the Dialog wait until it should trigger the hide in MS
     */
    hideDelay?: number;
    /**
     * how much delay should the Dialog wait until it should trigger the show in MS
     */
    showDelay?: number;
    disableDialogSlide?: boolean;
    animationType?: AnimationType;
    withoutDialog?: boolean;
    /**
     * the container selector in which to append the dialog
     * for examples: "body" , ".my-class", "#my-id"
     */
    containerSelector?: string;
    /**
     * With which delay tooltip is going to be shown
     */
    immediateShowDelay?: number;
    /**
     * when false, the arrow of the tooltip is hidden
     */
    tip?: boolean;
    /**
     * Show the Dialog when the children is mounting
     */
    shouldShowOnMount?: boolean;
    hideWhenReferenceHidden?: boolean;
    onTooltipHide?: () => void;
    onTooltipShow?: () => void;
    /**
     * PopperJS Modifiers type
     * https://popper.js.org/docs/v2/modifiers/
     */
    modifiers?: Array<Modifier<any>>;
    /**
     * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
     */
    position?: DialogPosition;
    /**
     * an array of hide/show trigger - Tooltip.hideShowTriggers
     */
    showTrigger?: HideShowEvent | Array<HideShowEvent>;
    /**
     * an array of hide/show trigger - Tooltip.hideShowTriggers
     */
    hideTrigger?: HideShowEvent | Array<HideShowEvent>;
    /**
     * If true, prevents open Tooltip from closing on mouseEnter and closes Tooltip, when mouse leaves it
     */
    showOnDialogEnter?: boolean;
    /**
     * A Classname to be added to <spam> element which wraps the children
     */
    referenceWrapperClassName?: string;
    /**
     * Treats keyboard focus/blur events as mouse-enter/mouse-leave events
     */
    addKeyboardHideShowTriggersByDefault?: boolean;
    /**
     * set the state of the tooltip - open/close - controlled component
     */
    open?: boolean;
}
export default class Tooltip extends PureComponent<TooltipProps> {
    wasShown: boolean;
    static positions: typeof DialogPosition;
    static hideShowTriggers: typeof HideShowEvent;
    static themes: typeof TooltipTheme;
    static animationTypes: typeof AnimationType;
    static justifyTypes: typeof JustifyType;
    static arrowPositions: typeof TooltipArrowPosition;
    static defaultProps: {
        arrowPosition: TooltipArrowPosition;
        moveBy: {
            main: number;
            secondary: number;
        };
        theme: TooltipTheme;
        position: DialogPosition;
        justify: JustifyType;
        hideDelay: number;
        showDelay: number;
        disableDialogSlide: boolean;
        animationType: AnimationType;
        withoutDialog: boolean;
        containerSelector: string;
        tip: boolean;
        hideWhenReferenceHidden: boolean;
        modifiers: (import("react-popper").StrictModifier<any> | Partial<import("@popperjs/core").Modifier<any, object>>)[];
        showTrigger: HideShowEvent;
        hideTrigger: HideShowEvent;
        showOnDialogEnter: boolean;
        referenceWrapperClassName: string;
        addKeyboardHideShowTriggersByDefault: boolean;
        open: boolean;
    };
    constructor(props: TooltipProps);
    getContainer(): HTMLElement;
    renderTooltipContent(): JSX.Element;
    onTooltipShow(): void;
    onTooltipHide(): void;
    getTimeSinceLastTooltip(): number;
    getShowDelay(): {
        showDelay: number;
        preventAnimation: boolean;
    };
    render(): JSX.Element;
}
