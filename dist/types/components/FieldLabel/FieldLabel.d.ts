import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
interface FieldLabelProps extends VibeComponentProps {
    icon?: string | React.FunctionComponent | null;
    iconLabel?: string;
    labelText?: string;
    labelFor?: string;
    iconClassName?: string;
    labelClassName?: string;
}
declare const FieldLabel: FC<FieldLabelProps>;
export default FieldLabel;
