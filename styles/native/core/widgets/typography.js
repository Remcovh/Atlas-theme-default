import { brand, contrast, font, spacing } from '../variables';
import { Platform } from 'react-native';

/* ==========================================================================
    Text

    Default Class For Mendix Text Widget
========================================================================== */

export const Text = {
    container: {
        // All ViewStyle properties are allowed
    },
    text: {
        // All TextStyle properties are allowed
        color: font.color,
        fontSize: font.size,
        lineHeight: font.size + 2,
    },
};

export const TextHeading1 = {
    container: {
        marginBottom: spacing.small,
    },
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH1,
        lineHeight: font.sizeH1,
    },
};
export const TextHeading2 = {
    container: {
        marginBottom: spacing.smaller,
    },
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH2,
        lineHeight: font.sizeH2,
    },
};
export const TextHeading3 = {
    container: {
        marginBottom: spacing.smaller,
    },
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH3,
        lineHeight: font.sizeH3,
    },
};
export const TextHeading4 = {
    container: {
        marginBottom: spacing.smallest,
    },
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH4,
        lineHeight: font.sizeH4,
    },
};
export const TextHeading5 = {
    container: {
        marginBottom: spacing.smallest,
    },
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH5,
        lineHeight: font.sizeH5,
    },
};
export const TextHeading6 = {
    container: {
        marginBottom: spacing.smallest,
    },
    text: {
        fontWeight: font.weightSemiBold,
        fontSize: font.sizeH6,
        lineHeight: font.sizeH6,
    },
};

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Text Colors

export const textPrimary = {
    text: {
        color: brand.primary,
    },
};
export const textSuccess = {
    text: {
        color: brand.success,
    },
};
export const textWarning = {
    text: {
        color: brand.warning,
    },
};
export const textDanger = {
    text: {
        color: brand.danger,
    },
};
export const textWhite = {
    text: {
        color: '#FFF',
    },
};

export const textContrastLowest = {
    text: {
        color: contrast.lowest,
    },
};
export const textContrastLower = {
    text: {
        color: contrast.lower,
    },
};
export const textContrastLow = {
    text: {
        color: contrast.low,
    },
};
export const textContrastDefault = {
    text: {
        color: contrast.regular,
    },
};
export const textContrastHigh = {
    text: {
        color: contrast.high,
    },
};
export const textContrastHigher = {
    text: {
        color: contrast.higher,
    },
};
export const textContrastHighest = {
    text: {
        color: contrast.highest,
    },
};

// Text Alignment
export const textLeft = {
    text: {
        textAlign: 'left',
    },
};
export const textCenter = {
    text: {
        textAlign: 'center',
    },
};
export const textRight = {
    text: {
        textAlign: 'right',
    },
};

// Text Weights
export const textLight = {
    text: {
        fontWeight: font.weightLight,
    },
};
export const textNormal = {
    text: {
        fontWeight: font.weightNormal,
    },
};
export const textSemiBold = {
    text: {
        fontWeight: font.weightSemiBold,
    },
};
export const textBold = {
    text: {
        fontWeight: font.weightBold,
    },
};

//== Extra Classes
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Text Sizes
export const textSmall = {
    text: {
        fontSize: font.sizeSmall,
        lineHeight: font.sizeSmall,
    },
};
export const textLarge = {
    text: {
        fontSize: font.sizeLarge,
        lineHeight: font.sizeLarge,
    },
};

// Text Transformations
export const textLowercase = {
    text: {
        textTransform: 'lowercase',
    },
};
export const textUppercase = {
    text: {
        textTransform: 'uppercase',
    },
};
export const textCapitalize = {
    text: {
        textTransform: 'capitalize',
    },
};
