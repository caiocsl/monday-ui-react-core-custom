import React, { CSSProperties, ReactElement, Ref } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/AvatarConstants";
import { AvatarProps } from "../Avatar/Avatar";
export declare type AvatarItem = {
    value: AvatarProps & {
        tooltipContent: string | ReactElement | ReactElement[];
    };
};
interface AvatarGroupCounterTooltipContentVirtualizedListProps extends VibeComponentProps {
    /**
     * Array of Avatar components
     */
    avatarItems?: AvatarItem[];
    avatarRenderer?: (item: AvatarItem, index: number, style: CSSProperties, type: AvatarType, displayAsGrid: boolean) => ReactElement;
    tooltipContainerAriaLabel?: string;
    tooltipContentContainerRef?: Ref<HTMLDivElement>;
    type?: AvatarType;
}
declare const AvatarGroupCounterTooltipContentVirtualizedList: React.FC<AvatarGroupCounterTooltipContentVirtualizedListProps>;
export default AvatarGroupCounterTooltipContentVirtualizedList;
