import React from "react";
import { BASE_SIZES } from "../../constants";
import { ElementContent, VibeComponentProps } from "../../types";
import { IComboboxCategoryMap, IComboboxOption } from "./components/ComboboxConstants";
export interface ComboboxProps extends VibeComponentProps {
    className?: string;
    optionClassName?: string;
    searchWrapperClassName?: string;
    /**
     * Placeholder to show when no value was selected
     */
    placeholder?: string;
    /**
     * Unique element id
     */
    id?: string;
    /**
     * A message that will be displayed inside the combo box when no results are found
     */
    noResultsMessage?: string;
    disabled?: boolean;
    options?: IComboboxOption[];
    categories?: IComboboxCategoryMap;
    /**
     * Divider between categories sections
     */
    withCategoriesDivider?: boolean;
    size?: typeof BASE_SIZES[keyof typeof BASE_SIZES];
    optionLineHeight?: number;
    optionsListHeight?: number;
    autoFocus?: boolean;
    /**
     * Callback that called after clicking on the add new combo box button.
     * @param {string} _filterValue
     */
    onAddNew?: (value: string) => void;
    /**
     * The label of the button that appears at the end of the combo box when the search does not return appropriate options
     */
    addNewLabel?: ((label: string) => ElementContent) | string;
    filter?: (filterValue: string, options: IComboboxOption[]) => IComboboxOption[];
    disableFilter?: boolean;
    onFilterChanged?: (value: string) => void;
    /**
     * Display the combo box with loading state
     */
    loading?: boolean;
    /**
     * on mouse hover callback for option
     */
    onOptionHover?: () => void;
    /**
     * on mouse leave callback for option
     */
    onOptionLeave?: () => void;
    /**
     * Allowed to the following behavior: scrolling automatically to the combo box's selected option
     */
    shouldScrollToSelectedItem?: boolean;
    noResultsRenderer?: () => JSX.Element;
    stickyCategories?: boolean;
    /** By default, the first option will be selected, when focusing selecting the first option, or when changing items */
    defaultVisualFocusFirstIndex?: boolean;
    /** Clear the filter/search on selection (click or enter) */
    clearFilterOnSelection?: boolean;
    /** Replace the regular appearance of combo box option with custom renderer. */
    optionRenderer?: (option: IComboboxOption) => JSX.Element;
    /** Maximum options count without scroll */
    maxOptionsWithoutScroll?: number;
    /**
     * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
     */
    renderOnlyVisibleOptions?: boolean;
    /**
     * On option click callback
     */
    onClick?: (optionData: IComboboxOption) => void;
}
declare const _default: ((import("../../types/VibeComponent").default<ComboboxProps, unknown> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    };
    iconTypes: typeof import("./components/ComboboxConstants").ComboboxOptionIconType;
}>) | (React.FC<ComboboxProps> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    };
    iconTypes: typeof import("./components/ComboboxConstants").ComboboxOptionIconType;
}>)) & {
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    };
    iconTypes: typeof import("./components/ComboboxConstants").ComboboxOptionIconType;
};
export default _default;
