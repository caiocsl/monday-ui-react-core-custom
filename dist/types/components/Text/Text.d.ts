import VibeComponent from "../../types/VibeComponent";
import { TextSize, TextWeight } from "./TextConstants";
import { TypographyProps } from "../Typography/Typography";
export interface TextProps extends TypographyProps {
    size?: TextSize;
    weight?: TextWeight;
}
declare const Text: VibeComponent<TextProps, HTMLElement>;
export default Text;
