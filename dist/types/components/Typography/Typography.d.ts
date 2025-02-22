import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { ElementContent } from "../../types";
import { TypographyColor, TypographyAlign } from "./TypographyConstants";
import { TooltipProps } from "../Tooltip/Tooltip";
export interface TypographyProps extends VibeComponentProps {
    /**
     * The element tag of the text component
     */
    element?: string;
    /**
     * The textual content
     */
    children: ElementContent;
    color?: TypographyColor;
    align?: TypographyAlign;
    /**
     * When the text is too long, cut the end of the text and display instead of it three dots (...)
     */
    ellipsis?: boolean;
    /**
     * Use this prop combined with the boolean ellipsis prop for truncate the text and add an ellipsis after a certain number of lines
     */
    maxLines?: number;
    /**
     * All props are passed to the tooltip displayed when hovering over the text. By default, the tooltip will display when text contains an ellipsis and will show the full text
     */
    tooltipProps?: TooltipProps;
    /**
     * Hide tooltip when hovering the text, by default the tooltip swill display when text contains an ellipsis
     */
    withoutTooltip?: boolean;
}
declare const Typography: VibeComponent<TypographyProps, HTMLElement>;
export default Typography;
