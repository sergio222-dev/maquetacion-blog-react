import {createMuiTheme} from "@material-ui/core";
import colors from './colors';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        colors: {
            primary?: string;
            primaryDark?: string;
            primaryGrey?: string;
            primaryLighten?: string;

            primaryFontColor?: string;
            secondaryFontColor?: string;

            extraColor?: string;

            fontSize?: string;
        }
    }

    interface ThemeOptions {
        colors?: {
            primary?: string;
            primaryDark?: string;
            primaryGrey?: string;
            primaryLighten?: string;

            primaryFontColor?: string;
            secondaryFontColor?: string;

            extraColor?: string;

            fontSize?: string;
        }
    }
}

const {
    primary,
    primaryLighten,
    primaryGrey,
    primaryDark,
} = colors;

export const zTheme = createMuiTheme({
    colors: {

        primary,
        primaryDark,
        primaryGrey,
        primaryLighten,

        primaryFontColor: 'white',
        secondaryFontColor: 'black',

        extraColor: colors.extraColor,
    }
});