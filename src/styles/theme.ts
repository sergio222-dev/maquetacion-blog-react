import styles from './variables.module.scss';
import {createMuiTheme, Theme as AugmentedTheme} from "@material-ui/core";

// extended types from Mui
declare module '@material-ui/core/styles/createMuiTheme' {

    interface Theme {
        colors: {
            primary?: string;
            primaryDarken?: string;
            primaryLighten?: string;

            secondary?: string;
            secondaryDarken?: string;
            secondaryLighten?: string;

            titleColor?: string;

        },
        font: {
            fontSize?: string;
        }
    }

    interface ThemeOptions {
        // @ts-ignore
        colors: {
            primary?: string;
            primaryDarken?: string;
            primaryLighten?: string;

            secondary?: string;
            secondaryDarken?: string;
            secondaryLighten?: string;

            titleColor?: string;
        },
        font: {
            fontSize?: string;
        }
    }
}

// import from module theme
const {
    primary,
    primaryDarken,
    primaryLighten,
    secondary,
    secondaryDarken,
    secondaryLighten,
    fontSize,
    titleColor,
} = styles;

// Main theme
export const Theme: AugmentedTheme = createMuiTheme({
    colors: {
        primary,
        primaryDarken,
        primaryLighten,
        secondary,
        secondaryDarken,
        secondaryLighten,
        titleColor
    },
    font: {
        fontSize,
    }
});