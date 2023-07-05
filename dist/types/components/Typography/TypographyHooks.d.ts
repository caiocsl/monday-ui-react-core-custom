import { MutableRefObject } from "react";
import { ElementContent } from "../../types";
import { TooltipProps } from "../Tooltip/Tooltip";
export declare function useEllipsisClass(ref: (node: HTMLElement) => void, ellipsis: boolean, maxLines: number): {
    ref: (node: HTMLElement) => void;
    class: string;
};
export declare function useTooltipProps(ref: MutableRefObject<any>, withoutTooltip: boolean, ellipsis: boolean, tooltipProps: TooltipProps, children: ElementContent): {};
