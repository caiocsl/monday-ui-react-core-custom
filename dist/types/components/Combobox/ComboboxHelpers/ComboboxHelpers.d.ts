import React, { CSSProperties, MutableRefObject } from "react";
import { IComboboxCategory, IComboboxOption, IComboboxCategoryMap, IComboboxItem, IOptionItemRendererArgs, IComboboxOptionEvents } from "../components/ComboboxConstants";
export declare function useItemsData({ categories, options, filterValue, withCategoriesDivider, optionLineHeight }: {
    categories: IComboboxCategoryMap;
    options: IComboboxOption[];
    filterValue: string;
    withCategoriesDivider: boolean;
    optionLineHeight: number;
}): {
    items: IComboboxItem[];
    itemsMap: Map<any, any>;
    selectableItems: IComboboxOption[];
};
export declare function useKeyboardNavigation({ defaultVisualFocusFirstIndex, inputRef, onClick, isChildSelectable, options, getOptionId }: {
    defaultVisualFocusFirstIndex?: boolean;
    inputRef: MutableRefObject<HTMLElement>;
    onClick: (event: React.KeyboardEvent | React.MouseEvent, index: number) => void;
    isChildSelectable: (index: number) => boolean;
    options: IComboboxOption[];
    getOptionId: (optionId: string, index: number) => string;
}): {
    visualFocusItemIndex: number;
    visualFocusItemId: string;
    onOptionClick: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>, index: number) => void;
};
export declare function createDividerItemObject({ categoryId }: {
    categoryId: string;
}): IComboboxItem;
export declare function createCategoryItemObject({ withDivider, categoryId, categoryData, className }: {
    withDivider: boolean;
    categoryId: string;
    categoryData: IComboboxCategory;
    className: string;
}): IComboboxItem;
export declare function createOptionItemObject({ option, height, index, optionRenderer, isActive, optionLineHeight, shouldScrollToSelectedItem, categoryId }: {
    option?: IComboboxOption;
    height?: number;
    index?: number;
    optionRenderer?: (option: IComboboxOption) => JSX.Element;
    isActive?: boolean;
    optionLineHeight?: number;
    shouldScrollToSelectedItem?: boolean;
    categoryId?: string;
}): IComboboxItem;
export declare function comboboxItemRenderer({ item, style, optionEvents, optionRenderData, isVirtualized }: {
    item: IComboboxItem;
    style: CSSProperties;
    optionEvents: IComboboxOptionEvents;
    optionRenderData: any;
    isVirtualized: boolean;
}): JSX.Element;
export declare function dividerItemRenderer({ id, height }: {
    id: string;
    height: number;
}): JSX.Element;
export declare function categoryItemRenderer({ id, category, className }: {
    id: string;
    category: IComboboxCategory;
    className: string;
}): JSX.Element;
export declare function optionItemRenderer({ id, index, option, className, onOptionClick, onOptionEnter, onOptionLeave, optionLineHeight, optionRenderer, scrollRef, shouldScrollToSelectedItem, activeItemIndex, visualFocusItemIndex }: IOptionItemRendererArgs): JSX.Element;
