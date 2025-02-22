import React from "react";
import { ElementColor } from "../../utils/colors-vars-map";
import { AvatarType } from "../Avatar/AvatarConstants";
import { SubIcon, VibeComponent, VibeComponentProps, ElementContent } from "../../types";
interface ChipsProps extends VibeComponentProps {
    label?: string;
    disabled?: boolean;
    readOnly?: boolean;
    dataTestId?: string;
    /**
     * A React element that is positioned to the right of the text
     */
    rightRenderer?: ElementContent;
    /**
     * A React element that is positioned to the left of the text
     */
    leftRenderer?: ElementContent;
    /** Icon to place on the right */
    rightIcon?: SubIcon;
    /** Icon to place on the left */
    leftIcon?: SubIcon;
    /** Img to place as avatar on the right */
    rightAvatar?: string;
    /** the type of right avatar */
    rightAvatarType?: AvatarType;
    /** Img to place as avatar on the left */
    leftAvatar?: string;
    /** the type of left avatar */
    leftAvatarType?: AvatarType;
    /** ClassName for left or right icon */
    iconClassName?: string;
    /** ClassName for left or right avatar */
    avatarClassName?: string;
    color?: ElementColor;
    /** size for font icon */
    iconSize?: number | string;
    onDelete?: (id: string, event: React.MouseEvent<HTMLSpanElement>) => void;
    /**
     * Disables the Chips's entry animation
     */
    noAnimation?: boolean;
    /**
     * Allow user to select text
     */
    allowTextSelection?: boolean;
    /**
     * Callback function to be called when the user clicks the component.
     */
    onMouseDown?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * Callback function to be called when the user clicks the component.
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * Applies when element has onClick or onMouseDown props
     */
    ariaLabel?: string;
    /**
     * Deprecated, there is no need to use this prop for implementing clickable chips. Please use onClick for this purpose.
     * @deprecated
     */
    clickable?: boolean;
    /**
     * Deprecated, there is no need to use this prop for implementing clickable chips. Please use onClick for this purpose.
     * @deprecated
     */
    isClickable?: boolean;
    /**
     * Disable click behaviors
     */
    disableClickableBehavior?: boolean;
    /**
     * Show border, the border color is `--text-color-on-primary`, should be when the chip is a colored background like
     * selected-color
     */
    showBorder?: boolean;
}
declare const _default: ((VibeComponent<ChipsProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    colors: {
        POSITIVE: import("../../utils/colors-vars-map").StateSelectedHoverColor.POSITIVE;
        NEGATIVE: import("../../utils/colors-vars-map").StateSelectedHoverColor.NEGATIVE;
        PRIMARY: import("../../utils/colors-vars-map").StateSelectedHoverColor.PRIMARY;
        GRASS_GREEN: import("../../utils/colors-vars-map").ContentColorByName.GRASS_GREEN;
        DONE_GREEN: import("../../utils/colors-vars-map").ContentColorByName.DONE_GREEN;
        BRIGHT_GREEN: import("../../utils/colors-vars-map").ContentColorByName.BRIGHT_GREEN;
        SALADISH: import("../../utils/colors-vars-map").ContentColorByName.SALADISH;
        EGG_YOLK: import("../../utils/colors-vars-map").ContentColorByName.EGG_YOLK;
        WORKING_ORANGE: import("../../utils/colors-vars-map").ContentColorByName.WORKING_ORANGE;
        DARK_ORANGE: import("../../utils/colors-vars-map").ContentColorByName.DARK_ORANGE;
        PEACH: import("../../utils/colors-vars-map").ContentColorByName.PEACH;
        SUNSET: import("../../utils/colors-vars-map").ContentColorByName.SUNSET;
        STUCK_RED: import("../../utils/colors-vars-map").ContentColorByName.STUCK_RED;
        DARK_RED: import("../../utils/colors-vars-map").ContentColorByName.DARK_RED;
        SOFIA_PINK: import("../../utils/colors-vars-map").ContentColorByName.SOFIA_PINK;
        LIPSTICK: import("../../utils/colors-vars-map").ContentColorByName.LIPSTICK;
        BUBBLE: import("../../utils/colors-vars-map").ContentColorByName.BUBBLE;
        PURPLE: import("../../utils/colors-vars-map").ContentColorByName.PURPLE;
        DARK_PURPLE: import("../../utils/colors-vars-map").ContentColorByName.DARK_PURPLE;
        BERRY: import("../../utils/colors-vars-map").ContentColorByName.BERRY;
        DARK_INDIGO: import("../../utils/colors-vars-map").ContentColorByName.DARK_INDIGO;
        INDIGO: import("../../utils/colors-vars-map").ContentColorByName.INDIGO;
        NAVY: import("../../utils/colors-vars-map").ContentColorByName.NAVY;
        BRIGHT_BLUE: import("../../utils/colors-vars-map").ContentColorByName.BRIGHT_BLUE;
        DARK_BLUE: import("../../utils/colors-vars-map").ContentColorByName.DARK_BLUE;
        AQUAMARINE: import("../../utils/colors-vars-map").ContentColorByName.AQUAMARINE;
        CHILI_BLUE: import("../../utils/colors-vars-map").ContentColorByName.CHILI_BLUE;
        RIVER: import("../../utils/colors-vars-map").ContentColorByName.RIVER;
        WINTER: import("../../utils/colors-vars-map").ContentColorByName.WINTER;
        EXPLOSIVE: import("../../utils/colors-vars-map").ContentColorByName.EXPLOSIVE;
        AMERICAN_GRAY: import("../../utils/colors-vars-map").ContentColorByName.AMERICAN_GRAY;
        BLACKISH: import("../../utils/colors-vars-map").ContentColorByName.BLACKISH;
        BROWN: import("../../utils/colors-vars-map").ContentColorByName.BROWN;
        ORCHID: import("../../utils/colors-vars-map").ContentColorByName.ORCHID;
        TAN: import("../../utils/colors-vars-map").ContentColorByName.TAN;
        SKY: import("../../utils/colors-vars-map").ContentColorByName.SKY;
        COFFEE: import("../../utils/colors-vars-map").ContentColorByName.COFFEE;
        ROYAL: import("../../utils/colors-vars-map").ContentColorByName.ROYAL;
        TEAL: import("../../utils/colors-vars-map").ContentColorByName.TEAL;
        LAVENDER: import("../../utils/colors-vars-map").ContentColorByName.LAVENDER;
        STEEL: import("../../utils/colors-vars-map").ContentColorByName.STEEL;
        LILAC: import("../../utils/colors-vars-map").ContentColorByName.LILAC;
        PECAN: import("../../utils/colors-vars-map").ContentColorByName.PECAN;
    };
    avatarTypes: typeof AvatarType;
}>) | (React.FC<ChipsProps & React.RefAttributes<HTMLElement>> & Partial<{
    colors: {
        POSITIVE: import("../../utils/colors-vars-map").StateSelectedHoverColor.POSITIVE;
        NEGATIVE: import("../../utils/colors-vars-map").StateSelectedHoverColor.NEGATIVE;
        PRIMARY: import("../../utils/colors-vars-map").StateSelectedHoverColor.PRIMARY;
        GRASS_GREEN: import("../../utils/colors-vars-map").ContentColorByName.GRASS_GREEN;
        DONE_GREEN: import("../../utils/colors-vars-map").ContentColorByName.DONE_GREEN;
        BRIGHT_GREEN: import("../../utils/colors-vars-map").ContentColorByName.BRIGHT_GREEN;
        SALADISH: import("../../utils/colors-vars-map").ContentColorByName.SALADISH;
        EGG_YOLK: import("../../utils/colors-vars-map").ContentColorByName.EGG_YOLK;
        WORKING_ORANGE: import("../../utils/colors-vars-map").ContentColorByName.WORKING_ORANGE;
        DARK_ORANGE: import("../../utils/colors-vars-map").ContentColorByName.DARK_ORANGE;
        PEACH: import("../../utils/colors-vars-map").ContentColorByName.PEACH;
        SUNSET: import("../../utils/colors-vars-map").ContentColorByName.SUNSET;
        STUCK_RED: import("../../utils/colors-vars-map").ContentColorByName.STUCK_RED;
        DARK_RED: import("../../utils/colors-vars-map").ContentColorByName.DARK_RED;
        SOFIA_PINK: import("../../utils/colors-vars-map").ContentColorByName.SOFIA_PINK;
        LIPSTICK: import("../../utils/colors-vars-map").ContentColorByName.LIPSTICK;
        BUBBLE: import("../../utils/colors-vars-map").ContentColorByName.BUBBLE;
        PURPLE: import("../../utils/colors-vars-map").ContentColorByName.PURPLE;
        DARK_PURPLE: import("../../utils/colors-vars-map").ContentColorByName.DARK_PURPLE;
        BERRY: import("../../utils/colors-vars-map").ContentColorByName.BERRY;
        DARK_INDIGO: import("../../utils/colors-vars-map").ContentColorByName.DARK_INDIGO;
        INDIGO: import("../../utils/colors-vars-map").ContentColorByName.INDIGO;
        NAVY: import("../../utils/colors-vars-map").ContentColorByName.NAVY;
        BRIGHT_BLUE: import("../../utils/colors-vars-map").ContentColorByName.BRIGHT_BLUE;
        DARK_BLUE: import("../../utils/colors-vars-map").ContentColorByName.DARK_BLUE;
        AQUAMARINE: import("../../utils/colors-vars-map").ContentColorByName.AQUAMARINE;
        CHILI_BLUE: import("../../utils/colors-vars-map").ContentColorByName.CHILI_BLUE;
        RIVER: import("../../utils/colors-vars-map").ContentColorByName.RIVER;
        WINTER: import("../../utils/colors-vars-map").ContentColorByName.WINTER;
        EXPLOSIVE: import("../../utils/colors-vars-map").ContentColorByName.EXPLOSIVE;
        AMERICAN_GRAY: import("../../utils/colors-vars-map").ContentColorByName.AMERICAN_GRAY;
        BLACKISH: import("../../utils/colors-vars-map").ContentColorByName.BLACKISH;
        BROWN: import("../../utils/colors-vars-map").ContentColorByName.BROWN;
        ORCHID: import("../../utils/colors-vars-map").ContentColorByName.ORCHID;
        TAN: import("../../utils/colors-vars-map").ContentColorByName.TAN;
        SKY: import("../../utils/colors-vars-map").ContentColorByName.SKY;
        COFFEE: import("../../utils/colors-vars-map").ContentColorByName.COFFEE;
        ROYAL: import("../../utils/colors-vars-map").ContentColorByName.ROYAL;
        TEAL: import("../../utils/colors-vars-map").ContentColorByName.TEAL;
        LAVENDER: import("../../utils/colors-vars-map").ContentColorByName.LAVENDER;
        STEEL: import("../../utils/colors-vars-map").ContentColorByName.STEEL;
        LILAC: import("../../utils/colors-vars-map").ContentColorByName.LILAC;
        PECAN: import("../../utils/colors-vars-map").ContentColorByName.PECAN;
    };
    avatarTypes: typeof AvatarType;
}>)) & {
    colors: {
        POSITIVE: import("../../utils/colors-vars-map").StateSelectedHoverColor.POSITIVE;
        NEGATIVE: import("../../utils/colors-vars-map").StateSelectedHoverColor.NEGATIVE;
        PRIMARY: import("../../utils/colors-vars-map").StateSelectedHoverColor.PRIMARY;
        GRASS_GREEN: import("../../utils/colors-vars-map").ContentColorByName.GRASS_GREEN;
        DONE_GREEN: import("../../utils/colors-vars-map").ContentColorByName.DONE_GREEN;
        BRIGHT_GREEN: import("../../utils/colors-vars-map").ContentColorByName.BRIGHT_GREEN;
        SALADISH: import("../../utils/colors-vars-map").ContentColorByName.SALADISH;
        EGG_YOLK: import("../../utils/colors-vars-map").ContentColorByName.EGG_YOLK;
        WORKING_ORANGE: import("../../utils/colors-vars-map").ContentColorByName.WORKING_ORANGE;
        DARK_ORANGE: import("../../utils/colors-vars-map").ContentColorByName.DARK_ORANGE;
        PEACH: import("../../utils/colors-vars-map").ContentColorByName.PEACH;
        SUNSET: import("../../utils/colors-vars-map").ContentColorByName.SUNSET;
        STUCK_RED: import("../../utils/colors-vars-map").ContentColorByName.STUCK_RED;
        DARK_RED: import("../../utils/colors-vars-map").ContentColorByName.DARK_RED;
        SOFIA_PINK: import("../../utils/colors-vars-map").ContentColorByName.SOFIA_PINK;
        LIPSTICK: import("../../utils/colors-vars-map").ContentColorByName.LIPSTICK;
        BUBBLE: import("../../utils/colors-vars-map").ContentColorByName.BUBBLE;
        PURPLE: import("../../utils/colors-vars-map").ContentColorByName.PURPLE;
        DARK_PURPLE: import("../../utils/colors-vars-map").ContentColorByName.DARK_PURPLE;
        BERRY: import("../../utils/colors-vars-map").ContentColorByName.BERRY;
        DARK_INDIGO: import("../../utils/colors-vars-map").ContentColorByName.DARK_INDIGO;
        INDIGO: import("../../utils/colors-vars-map").ContentColorByName.INDIGO;
        NAVY: import("../../utils/colors-vars-map").ContentColorByName.NAVY;
        BRIGHT_BLUE: import("../../utils/colors-vars-map").ContentColorByName.BRIGHT_BLUE;
        DARK_BLUE: import("../../utils/colors-vars-map").ContentColorByName.DARK_BLUE;
        AQUAMARINE: import("../../utils/colors-vars-map").ContentColorByName.AQUAMARINE;
        CHILI_BLUE: import("../../utils/colors-vars-map").ContentColorByName.CHILI_BLUE;
        RIVER: import("../../utils/colors-vars-map").ContentColorByName.RIVER;
        WINTER: import("../../utils/colors-vars-map").ContentColorByName.WINTER;
        EXPLOSIVE: import("../../utils/colors-vars-map").ContentColorByName.EXPLOSIVE;
        AMERICAN_GRAY: import("../../utils/colors-vars-map").ContentColorByName.AMERICAN_GRAY;
        BLACKISH: import("../../utils/colors-vars-map").ContentColorByName.BLACKISH;
        BROWN: import("../../utils/colors-vars-map").ContentColorByName.BROWN;
        ORCHID: import("../../utils/colors-vars-map").ContentColorByName.ORCHID;
        TAN: import("../../utils/colors-vars-map").ContentColorByName.TAN;
        SKY: import("../../utils/colors-vars-map").ContentColorByName.SKY;
        COFFEE: import("../../utils/colors-vars-map").ContentColorByName.COFFEE;
        ROYAL: import("../../utils/colors-vars-map").ContentColorByName.ROYAL;
        TEAL: import("../../utils/colors-vars-map").ContentColorByName.TEAL;
        LAVENDER: import("../../utils/colors-vars-map").ContentColorByName.LAVENDER;
        STEEL: import("../../utils/colors-vars-map").ContentColorByName.STEEL;
        LILAC: import("../../utils/colors-vars-map").ContentColorByName.LILAC;
        PECAN: import("../../utils/colors-vars-map").ContentColorByName.PECAN;
    };
    avatarTypes: typeof AvatarType;
};
export default _default;
