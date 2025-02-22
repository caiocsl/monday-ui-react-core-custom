import { CSSProperties, ForwardedRef, ReactElement } from "react";
import { Layout, ScrollDirection } from "react-window";
import VibeComponentProps from "src/types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
export declare type VirtualizedListItem = {
    value?: string | Record<string, unknown>;
    height?: number;
    width?: number;
    id?: string;
    offsetTop?: number;
};
interface VirtualizedListProps extends VibeComponentProps {
    /**
     * class name to add to the component scrollable container
     */
    scrollableClassName?: string;
    /**
     * Layout/orientation of the list.
     * Acceptable values are:
     * - "vertical" (default) - Up/down scrolling.
     * - "horizontal" - Left/right scrolling.
     */
    layout?: Layout;
    /**
     * A list of items to be rendered
     */
    items: VirtualizedListItem[];
    /**
     * Will return the element which represent an item in the virtualized list.
     * Returns `JSX.Element`
     * @param item - item data
     * @param _index - item index
     * @param style - item style, must be injected to the item element wrapper for correct presentation of the item
     */
    itemRenderer: (item: VirtualizedListItem, index: number, style: CSSProperties) => ReactElement | JSX.Element;
    /**
     * Deprecated - use getItemSize
     * in order to calculate the number of items to render, the component needs the height of the items
     * return `number`
     */
    getItemHeight?: (item: VirtualizedListItem, index: number) => number;
    /**
     * in order to calculate the number of items to render, the component needs the width/height of the items (according to layout)
     * return `number`
     */
    getItemSize?: (item: VirtualizedListItem, index: number) => number;
    /**
     * returns Id of an items
     * returns `string`
     */
    getItemId?: (item: VirtualizedListItem, index: number) => string;
    /**
     * callback to be called when the scroll is finished
     */
    onScrollToFinished?: () => void;
    /**
     * number of items to render (below/above the fold)
     */
    overscanCount?: number;
    /**
     * the speed of the scroll (in ms)
     */
    scrollDuration?: number;
    /**
     * a callback that is being called when the items are rendered
     */
    onItemsRendered?: ({ firstItemId, secondItemId, lastItemId, centerItemId, firstItemOffsetEnd, currentOffsetTop }: {
        firstItemId: string;
        secondItemId: string;
        lastItemId: string;
        centerItemId: string;
        firstItemOffsetEnd: number;
        currentOffsetTop: number;
    }) => void;
    onItemsRenderedThrottleMs?: number;
    /**
     * when the list size changes - `=> (width, height)`
     */
    onSizeUpdate?: (width: number, height: number) => void;
    /**
     * Deprecated - use onLayoutDirectionScrollbarVisibilityChange
     */
    onVerticalScrollbarVisiblityChange?: (value: boolean) => void;
    /**
     * Callback - called when the vertical/horizontal (depends on layout) scrollbar visibility changed
     */
    onLayoutDirectionScrollbarVisibilityChange?: (value: boolean) => void;
    role?: string;
    /** Custom style to pass to the component */
    style?: CSSProperties;
    /**
     * index of the item to scroll to
     */
    scrollToId?: string;
    virtualListRef?: ForwardedRef<HTMLElement>;
    onScroll?: (horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void;
}
declare const VirtualizedList: VibeComponent<VirtualizedListProps>;
export default VirtualizedList;
