export declare const colorsMap: {
    color: string;
    description: string;
}[];
export declare const colorsHashMap: Map<any, any>;
export declare const contentColors: readonly ["grass_green", "done-green", "bright-green", "saladish", "egg_yolk", "working_orange", "dark-orange", "peach", "sunset", "stuck-red", "dark-red", "sofia_pink", "lipstick", "bubble", "purple", "dark_purple", "berry", "dark_indigo", "indigo", "navy", "bright-blue", "dark-blue", "aquamarine", "chili-blue", "river", "winter", "explosive", "american_gray", "blackish", "brown", "orchid", "tan", "sky", "coffee", "royal", "teal", "lavender", "steel", "lilac", "pecan"];
export declare type CONTENT_COLORS_VALUES = typeof contentColors[number];
export declare enum ColorStyle {
    REGULAR = "regular",
    HOVER = "hover",
    SELECTED = "selected"
}
export declare enum ContentColorByName {
    GRASS_GREEN = "grass_green",
    DONE_GREEN = "done-green",
    BRIGHT_GREEN = "bright-green",
    SALADISH = "saladish",
    EGG_YOLK = "egg_yolk",
    WORKING_ORANGE = "working_orange",
    DARK_ORANGE = "dark-orange",
    PEACH = "peach",
    SUNSET = "sunset",
    STUCK_RED = "stuck-red",
    DARK_RED = "dark-red",
    SOFIA_PINK = "sofia_pink",
    LIPSTICK = "lipstick",
    BUBBLE = "bubble",
    PURPLE = "purple",
    DARK_PURPLE = "dark_purple",
    BERRY = "berry",
    DARK_INDIGO = "dark_indigo",
    INDIGO = "indigo",
    NAVY = "navy",
    BRIGHT_BLUE = "bright-blue",
    DARK_BLUE = "dark-blue",
    AQUAMARINE = "aquamarine",
    CHILI_BLUE = "chili-blue",
    RIVER = "river",
    WINTER = "winter",
    EXPLOSIVE = "explosive",
    AMERICAN_GRAY = "american_gray",
    BLACKISH = "blackish",
    BROWN = "brown",
    ORCHID = "orchid",
    TAN = "tan",
    SKY = "sky",
    COFFEE = "coffee",
    ROYAL = "royal",
    TEAL = "teal",
    LAVENDER = "lavender",
    STEEL = "steel",
    LILAC = "lilac",
    PECAN = "pecan"
}
export declare enum StateSelectedColor {
    POSITIVE = "--positive-color-selected",
    NEGATIVE = "--negative-color-selected",
    PRIMARY = "--primary-selected-color"
}
export declare enum StateSelectedHoverColor {
    POSITIVE = "--positive-color-selected-hover",
    NEGATIVE = "--negative-color-selected-hover",
    PRIMARY = "--primary-selected-hover-color"
}
export declare const ElementAllowedColor: {
    POSITIVE: StateSelectedHoverColor.POSITIVE;
    NEGATIVE: StateSelectedHoverColor.NEGATIVE;
    PRIMARY: StateSelectedHoverColor.PRIMARY;
    GRASS_GREEN: ContentColorByName.GRASS_GREEN;
    DONE_GREEN: ContentColorByName.DONE_GREEN;
    BRIGHT_GREEN: ContentColorByName.BRIGHT_GREEN;
    SALADISH: ContentColorByName.SALADISH;
    EGG_YOLK: ContentColorByName.EGG_YOLK;
    WORKING_ORANGE: ContentColorByName.WORKING_ORANGE;
    DARK_ORANGE: ContentColorByName.DARK_ORANGE;
    PEACH: ContentColorByName.PEACH;
    SUNSET: ContentColorByName.SUNSET;
    STUCK_RED: ContentColorByName.STUCK_RED;
    DARK_RED: ContentColorByName.DARK_RED;
    SOFIA_PINK: ContentColorByName.SOFIA_PINK;
    LIPSTICK: ContentColorByName.LIPSTICK;
    BUBBLE: ContentColorByName.BUBBLE;
    PURPLE: ContentColorByName.PURPLE;
    DARK_PURPLE: ContentColorByName.DARK_PURPLE;
    BERRY: ContentColorByName.BERRY;
    DARK_INDIGO: ContentColorByName.DARK_INDIGO;
    INDIGO: ContentColorByName.INDIGO;
    NAVY: ContentColorByName.NAVY;
    BRIGHT_BLUE: ContentColorByName.BRIGHT_BLUE;
    DARK_BLUE: ContentColorByName.DARK_BLUE;
    AQUAMARINE: ContentColorByName.AQUAMARINE;
    CHILI_BLUE: ContentColorByName.CHILI_BLUE;
    RIVER: ContentColorByName.RIVER;
    WINTER: ContentColorByName.WINTER;
    EXPLOSIVE: ContentColorByName.EXPLOSIVE;
    AMERICAN_GRAY: ContentColorByName.AMERICAN_GRAY;
    BLACKISH: ContentColorByName.BLACKISH;
    BROWN: ContentColorByName.BROWN;
    ORCHID: ContentColorByName.ORCHID;
    TAN: ContentColorByName.TAN;
    SKY: ContentColorByName.SKY;
    COFFEE: ContentColorByName.COFFEE;
    ROYAL: ContentColorByName.ROYAL;
    TEAL: ContentColorByName.TEAL;
    LAVENDER: ContentColorByName.LAVENDER;
    STEEL: ContentColorByName.STEEL;
    LILAC: ContentColorByName.LILAC;
    PECAN: ContentColorByName.PECAN;
};
export declare type ElementColor = typeof ElementAllowedColor[keyof typeof ElementAllowedColor] | string;
export declare function getElementColor(colorValue: keyof typeof ElementAllowedColor | string, isSelectedPalette?: boolean, isSelectedHoverPalette?: boolean): string;
