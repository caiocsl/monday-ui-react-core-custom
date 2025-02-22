import React, { PureComponent, ReactElement } from "react";
import { Modifier } from "react-popper";
import { DialogPosition } from "../../constants/positions";
import { NOOP } from "../../utils/function-utils";
import { AnimationType, HideShowEvent } from "../../constants/dialog";
import { VibeComponentProps } from "../../types";
import * as PopperJS from "@popperjs/core";
export interface DialogProps extends VibeComponentProps {
    /**
     * A Classname to be added to <spam> element which wraps the children
     */
    referenceWrapperClassName?: string;
    /**
     * Where the dialog should be in reference to the children,
     * Top, Left, Right, Bottom ...
     */
    position?: DialogPosition;
    /**
     * PopperJS Modifiers type
     * https://popper.js.org/docs/v2/modifiers/
     */
    modifiers?: Modifier<any>[];
    startingEdge?: string;
    /**
     * How much to move the dialog in relative to children
     * main is the axis in which the position is aligned to
     * secondary is the vertical axes to the position
     */
    moveBy?: {
        main?: number;
        secondary?: number;
    };
    /**
     * how much delay should the Dialog wait until it should trigger the show in MS
     */
    showDelay?: number;
    /**
     * how much delay should the Dialog wait until it should trigger the hide in MS
     */
    hideDelay?: number;
    /**
     * an array of hide/show trigger -
     * Dialog.hideShowTriggers
     */
    showTrigger?: HideShowEvent | HideShowEvent[];
    /**
     * an array of hide/show trigger -
     * Dialog.hideShowTriggers
     */
    hideTrigger?: HideShowEvent | HideShowEvent[];
    /**
     * If true, prevents open Dialog from closing on mouseEnter and closes Dialog, when  mouse leaves it
     */
    showOnDialogEnter?: boolean;
    /**
     * Show the Dialog when the children are mounting
     */
    shouldShowOnMount?: boolean;
    /**
     * disable the opening of the dialog
     */
    disable?: boolean;
    /**
     * open is a controlled prop to open the dialog
     */
    open?: boolean;
    /**
     * used when state is derived from props
     */
    isOpen?: boolean;
    /**
     * if this class exists on the children the show trigger will be ignored
     */
    showTriggerIgnoreClass?: string | Array<string>;
    /**
     * if this class exists on the children the hide trigger will be ignored
     */
    hideTriggerIgnoreClass?: string | Array<string>;
    /**
     * Dialog animation type
     */
    animationType?: AnimationType;
    /**
     * Classname to be added to the content container
     */
    wrapperClassName?: string;
    /**
     * Prevent Animation
     */
    preventAnimationOnMount?: boolean;
    /**
     * the container selector in which to append the dialog
     * for examples: "body" , ".my-class", "#my-id"
     */
    containerSelector?: string;
    /**
     * should position the tooltip element
     * https://popper.js.org/docs/v2/modifiers/arrow/
     */
    tooltip?: boolean;
    /**
     * class name to add to the tooltip element
     */
    tooltipClassName?: string;
    /**
     * callback to be called when the dialog is shown
     */
    onDialogDidShow?: () => void;
    /**
     * callback to be called when the dialog is hidden
     */
    onDialogDidHide?: (event: DialogEvent, eventName: HideShowEvent | string) => void;
    /**
     * callback to be called when click outside is being triggered
     */
    onClickOutside?: (event: React.MouseEvent) => void;
    /**
     * callback to be called when click on the content is being triggered
     */
    onContentClick?: (event: React.MouseEvent) => void;
    /**
     * z-index to add to the dialog
     */
    zIndex?: number;
    useDerivedStateFromProps?: boolean;
    /**
     * Make the dialog disappear when the element it is attached to becomes hidden
     */
    hideWhenReferenceHidden?: boolean;
    /**
     * Backward compatibility for props naming
     * @deprecated
     */
    shoudlCallbackOnMount?: boolean;
    shouldCallbackOnMount?: boolean;
    instantShowAndHide?: boolean;
    getDynamicShowDelay?: () => {
        showDelay: number;
        preventAnimation: boolean;
    };
    content?: (() => JSX.Element) | JSX.Element;
    /**
     * The element where we will position the dialog beside.
     */
    children?: ReactElement | ReactElement[] | string;
    /**
     * Treats keyboard focus/blur events as mouse-enter/mouse-leave events
     */
    addKeyboardHideShowTriggersByDefault?: boolean;
    /**
     * If true disable the scroll for the containerSelector element.
     * If string use it as selector to prevent scroll.
     */
    disableContainerScroll?: boolean | string;
}
interface DialogState {
    isOpen?: boolean;
    shouldUseDerivedStateFromProps?: boolean;
    preventAnimation?: boolean;
}
export declare type DialogEvent = React.MouseEvent | React.KeyboardEvent | KeyboardEvent | React.FocusEvent | CustomEvent;
export default class Dialog extends PureComponent<DialogProps, DialogState> {
    static hideShowTriggers: typeof HideShowEvent;
    static positions: typeof DialogPosition;
    static animationTypes: typeof AnimationType;
    static defaultProps: {
        position: string;
        modifiers: (import("react-popper").StrictModifier<any> | Partial<PopperJS.Modifier<any, object>>)[];
        moveBy: {
            main: number;
            secondary: number;
        };
        showDelay: number;
        hideDelay: number;
        showTrigger: HideShowEvent;
        hideTrigger: HideShowEvent;
        showOnDialogEnter: boolean;
        shouldShowOnMount: boolean;
        disable: boolean;
        open: boolean;
        animationType: AnimationType;
        preventAnimationOnMount: boolean;
        containerSelector: string;
        tooltip: boolean;
        onDialogDidShow: typeof NOOP;
        onDialogDidHide: typeof NOOP;
        onClickOutside: typeof NOOP;
        onContentClick: typeof NOOP;
        useDerivedStateFromProps: boolean;
        hideWhenReferenceHidden: boolean;
        shoudlCallbackOnMount: boolean;
        shouldCallbackOnMount: boolean;
        instantShowAndHide: boolean;
        addKeyboardHideShowTriggersByDefault: boolean;
    };
    private showTimeout;
    private hideTimeout;
    constructor(props: DialogProps);
    closeDialogOnEscape(event: KeyboardEvent): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(nextProps: DialogProps, state: DialogState): DialogState;
    getContainer(): Element;
    showDialog(options?: {
        preventAnimation?: boolean;
    }): void;
    onShowDialog(): void;
    showDialogIfNeeded(options?: {}): void;
    hideDialog(event: DialogEvent, eventName: HideShowEvent | string): void;
    onHideDialog(event: DialogEvent, eventName: HideShowEvent | string): void;
    hideDialogIfNeeded(event: DialogEvent, eventName: HideShowEvent | string): void;
    handleEvent(eventName: HideShowEvent, target: EventTarget, event: DialogEvent): void;
    isShown(): boolean;
    isShowTrigger(eventName: HideShowEvent): boolean;
    isHideTrigger(eventName: HideShowEvent): boolean;
    onMouseEnter(e: React.MouseEvent): void;
    onMouseLeave(e: React.MouseEvent): void;
    onClick(e: React.MouseEvent): void;
    onKeyDown(event: React.KeyboardEvent): void;
    onMouseDown(e: React.MouseEvent): void;
    onFocus(e: React.FocusEvent): void;
    onBlur(e: React.FocusEvent): void;
    onEsc(e: React.KeyboardEvent): void;
    onContextMenu(e: React.MouseEvent): void;
    onClickOutside(event: React.MouseEvent): void;
    onDialogEnter(): void;
    onDialogLeave(event: React.MouseEvent): void;
    onContentClick(e: React.MouseEvent): void;
    render(): string | JSX.Element | React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
}
export {};
