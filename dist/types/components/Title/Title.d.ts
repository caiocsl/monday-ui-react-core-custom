import VibeComponent from "../../types/VibeComponent";
import { TitleType, TitleWeight } from "./TitleConstants";
import { TypographyProps } from "../Typography/Typography";
export interface TitleProps extends TypographyProps {
    type?: TitleType;
    weight?: TitleWeight;
}
declare const Title: VibeComponent<TitleProps, HTMLElement>;
export default Title;
