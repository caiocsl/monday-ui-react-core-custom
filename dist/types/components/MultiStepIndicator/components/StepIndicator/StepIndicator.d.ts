export default StepIndicator;
declare function StepIndicator({ stepComponentClassName, stepNumber, status, titleText, subtitleText, type, fulfilledStepIcon, fulfilledStepIconType, isFulfilledStepDisplayNumber, onClick, isFollowedByDivider, stepDividerClassName, isVertical, id, size, "data-testid": dataTestId }: {
    stepComponentClassName: any;
    stepNumber: any;
    status: any;
    titleText: any;
    subtitleText: any;
    type: any;
    fulfilledStepIcon: any;
    fulfilledStepIconType: any;
    isFulfilledStepDisplayNumber: any;
    onClick: any;
    isFollowedByDivider: any;
    stepDividerClassName: any;
    isVertical: any;
    id: any;
    size: any;
    "data-testid": any;
}): JSX.Element;
declare namespace StepIndicator {
    namespace propTypes {
        const status: PropTypes.Validator<string>;
        const titleText: PropTypes.Validator<string>;
        const subtitleText: PropTypes.Requireable<string>;
        const stepNumber: PropTypes.Validator<number>;
        const stepComponentClassName: PropTypes.Requireable<string>;
        const type: PropTypes.Requireable<string>;
        const fulfilledStepIcon: PropTypes.Requireable<(...args: any[]) => any>;
        const fulfilledStepIconType: PropTypes.Requireable<import("../../../Icon/IconConstants").IconType>;
        const isFulfilledStepDisplayNumber: PropTypes.Requireable<boolean>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const isVertical: PropTypes.Requireable<boolean>;
        const size: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const stepComponentClassName_1: string;
        export { stepComponentClassName_1 as stepComponentClassName };
        const stepNumber_1: number;
        export { stepNumber_1 as stepNumber };
        const status_1: string;
        export { status_1 as status };
        const titleText_1: string;
        export { titleText_1 as titleText };
        const subtitleText_1: string;
        export { subtitleText_1 as subtitleText };
        const type_1: string;
        export { type_1 as type };
        export { Check as fulfilledStepIcon };
        const fulfilledStepIconType_1: import("../../../Icon/IconConstants").IconType;
        export { fulfilledStepIconType_1 as fulfilledStepIconType };
        const isFulfilledStepDisplayNumber_1: boolean;
        export { isFulfilledStepDisplayNumber_1 as isFulfilledStepDisplayNumber };
        export { NOOP as onClick };
        const isVertical_1: boolean;
        export { isVertical_1 as isVertical };
        const size_1: string;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
import Check from "../../../../components/Icon/Icons/components/Check";
import { NOOP } from "../../../../utils/function-utils";
