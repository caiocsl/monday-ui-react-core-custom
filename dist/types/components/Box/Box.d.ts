import React, { ReactElement } from "react";
import { BACKGROUND_COLORS, BORDER, BORDER_COLOR, COLORS, MARGIN, MARGIN_BOTTOM, MARGIN_END, MARGIN_START, MARGIN_TOP, MARGIN_X, MARGIN_Y, PADDING, PADDING_BOTTOM, PADDING_END, PADDING_START, PADDING_TOP, PADDING_X, PADDING_Y, ROUNDED, SHADOW } from "./BoxConstants";
import { VibeComponentProps } from "../../types";
import VibeComponent from "../../types/VibeComponent";
interface BoxProps extends VibeComponentProps {
    elementType?: keyof JSX.IntrinsicElements | string;
    children?: ReactElement | ReactElement[];
    disabled?: boolean;
    border?: typeof BORDER;
    borderColor?: typeof BORDER_COLOR;
    rounded?: typeof ROUNDED;
    shadow?: typeof SHADOW;
    margin?: typeof MARGIN;
    marginX?: typeof MARGIN_X;
    marginY?: typeof MARGIN_Y;
    marginTop?: typeof MARGIN_TOP;
    marginEnd?: typeof MARGIN_END;
    marginBottom?: typeof MARGIN_BOTTOM;
    marginStart?: typeof MARGIN_START;
    padding?: typeof PADDING;
    paddingX?: typeof PADDING_X;
    paddingY?: typeof PADDING_Y;
    paddingTop?: typeof PADDING_TOP;
    paddingEnd?: typeof PADDING_END;
    paddingBottom?: typeof PADDING_BOTTOM;
    paddingStart?: typeof PADDING_START;
    backgroundColor?: typeof BACKGROUND_COLORS;
    textColor?: typeof COLORS;
}
declare const _default: ((VibeComponent<BoxProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    borders: Readonly<{
        DEFAULT: string;
    }>;
    borderColors: Readonly<{
        UI_BORDER_COLOR: string;
        LAYOUT_BORDER_COLOR: string;
    }>;
    roundeds: Readonly<{
        SMALL: string;
        MEDIUM: string;
        BIG: string;
    }>;
    shadows: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
    }>;
    margins: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginXs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginYs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginTops: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginEnds: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginBottoms: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginStarts: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddings: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingXs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingYs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingTops: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingEnds: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingBottoms: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingStarts: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    backgroundColors: Readonly<{
        PRIMARY_BACKGROUND_COLOR: string;
        SECONDARY_BACKGROUND_COLOR: string;
        GREY_BACKGROUND_COLOR: string;
        ALL_GREY_BACKGROUND_COLOR: string;
        INVERTED_COLOR_BACKGROUND: string;
    }>;
    textColors: Readonly<{
        PRIMARY_TEXT_COLOR: string;
        TEXT_COLOR_ON_INVERTED: string;
        SECONDARY_TEXT_COLOR: string;
    }>;
}>) | (React.FC<BoxProps & React.RefAttributes<HTMLElement>> & Partial<{
    borders: Readonly<{
        DEFAULT: string;
    }>;
    borderColors: Readonly<{
        UI_BORDER_COLOR: string;
        LAYOUT_BORDER_COLOR: string;
    }>;
    roundeds: Readonly<{
        SMALL: string;
        MEDIUM: string;
        BIG: string;
    }>;
    shadows: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
    }>;
    margins: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginXs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginYs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginTops: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginEnds: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginBottoms: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginStarts: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddings: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingXs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingYs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingTops: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingEnds: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingBottoms: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingStarts: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    backgroundColors: Readonly<{
        PRIMARY_BACKGROUND_COLOR: string;
        SECONDARY_BACKGROUND_COLOR: string;
        GREY_BACKGROUND_COLOR: string;
        ALL_GREY_BACKGROUND_COLOR: string;
        INVERTED_COLOR_BACKGROUND: string;
    }>;
    textColors: Readonly<{
        PRIMARY_TEXT_COLOR: string;
        TEXT_COLOR_ON_INVERTED: string;
        SECONDARY_TEXT_COLOR: string;
    }>;
}>)) & {
    borders: Readonly<{
        DEFAULT: string;
    }>;
    borderColors: Readonly<{
        UI_BORDER_COLOR: string;
        LAYOUT_BORDER_COLOR: string;
    }>;
    roundeds: Readonly<{
        SMALL: string;
        MEDIUM: string;
        BIG: string;
    }>;
    shadows: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
    }>;
    margins: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginXs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginYs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginTops: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginEnds: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginBottoms: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginStarts: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddings: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingXs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingYs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingTops: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingEnds: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingBottoms: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingStarts: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    backgroundColors: Readonly<{
        PRIMARY_BACKGROUND_COLOR: string;
        SECONDARY_BACKGROUND_COLOR: string;
        GREY_BACKGROUND_COLOR: string;
        ALL_GREY_BACKGROUND_COLOR: string;
        INVERTED_COLOR_BACKGROUND: string;
    }>;
    textColors: Readonly<{
        PRIMARY_TEXT_COLOR: string;
        TEXT_COLOR_ON_INVERTED: string;
        SECONDARY_TEXT_COLOR: string;
    }>;
};
export default _default;
