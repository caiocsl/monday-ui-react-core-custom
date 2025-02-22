import { ComponentType, CSSProperties } from "react";
import { GridChildComponentProps, ScrollDirection } from "react-window";
import VibeComponentProps from "src/types/VibeComponentProps";
import { VibeComponent } from "../../types";
declare type ItemType = {
    value: string;
    height: number;
    width: number;
    id: string;
};
interface VirtualizedGridProps extends VibeComponentProps {
    /**
     * A list of items to be rendered
     * {
     *      item: ItemType,
     *     index: number,
     *     style: CSSProperties
     * }[]
     */
    items: ItemType[];
    /**
     * item render function
     * returns `JSX.Element`
     */
    itemRenderer: (item: ItemType, index: number, style: CSSProperties) => ItemType | ComponentType<GridChildComponentProps<ItemType>>;
    /**
     * in order to calculate the number of rows to render in the grid, the component needs the height of the row
     * return `number`
     */
    getRowHeight: () => number;
    /**
     * in order to calculate the number of columns to render in the grid, the component needs the width of the column
     * return `number`
     */
    getColumnWidth: () => number;
    /**
     * returns Id of an items
     * returns `string`
     */
    getItemId?: (item: ItemType, index: number) => string;
    /**
     * index of the item to scroll to
     */
    scrollToId?: number;
    onScroll?: (horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void;
    /**
     * callback to be called when the scroll is finished
     */
    onScrollToFinished?: () => void;
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
     * when the grid size changes
     */
    onSizeUpdate?: (width: number, height: number) => void;
    onVerticalScrollbarVisiblityChange?: (value: boolean) => void;
    /**
     * class name to add to the component scrollable container
     */
    scrollableClassName: string;
}
declare const VirtualizedGrid: VibeComponent<VirtualizedGridProps>;
export default VirtualizedGrid;
