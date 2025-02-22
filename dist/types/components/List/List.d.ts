import { CSSProperties, FC, ReactElement } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ListItemProps } from "../ListItem/ListItem";
import { ListTitleProps } from "../ListTitle/ListTitle";
import { ListWrapperComponentType } from "./ListConstants";
export interface ListProps extends VibeComponentProps {
    /**
     * the wrapping component to wrap the List Items [div, nav, ul, ol]
     */
    component?: ListWrapperComponentType;
    /**
     * ARIA label string to describe to list
     */
    ariaLabel?: string;
    /**
     * ARIA described by string to reference an id to describe by
     */
    ariaDescribedBy?: string;
    children?: ReactElement<ListItemProps | ListTitleProps> | ReactElement<ListItemProps | ListTitleProps>[];
    /**
     * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
     */
    renderOnlyVisibleItems?: boolean;
    style?: CSSProperties;
}
declare const List: FC<ListProps>;
export default List;
