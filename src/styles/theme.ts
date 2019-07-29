import styles from './variables.module.scss';
import {createMuiTheme, Theme as AugmentedTheme} from "@material-ui/core";

// extended types from Mui
declare module '@material-ui/core/styles/createMuiTheme' {

    interface Theme {
        colors: {
            primary?: string;
            primaryDarken?: string;
            primaryLighten?: string;
            primaryGray?: string;
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
            primaryGray?: string;
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
    primaryGray,
    fontSize,
} = styles;

// Main theme
export const Theme: AugmentedTheme = createMuiTheme({
    colors: {
        primary,
        primaryDarken,
        primaryGray,
        primaryLighten,
    },
    font: {
        fontSize,
    }
});