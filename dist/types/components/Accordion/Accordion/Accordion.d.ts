import { ReactElement } from "react";
import VibeComponentProps from "src/types/VibeComponentProps";
import { VibeComponent } from "../../../types";
interface AccordionProps extends VibeComponentProps {
    /**
     * List of AccordionItems
     */
    children?: Array<ReactElement> | ReactElement;
    /**
     * is allowed multiple opened accordion items
     */
    allowMultiple?: boolean;
    /**
     * Unique TestId - can be used as Selector for integration tests and other needs (tracking, etc.)
     */
    "data-testid"?: string;
    /**
     * Array of initial expanded indexes
     */
    defaultIndex?: Array<number>;
}
declare const Accordion: VibeComponent<AccordionProps, unknown> & object;
export default Accordion;
