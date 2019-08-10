import {PageTitle} from "../../../components/PageTitle";
import {withStyles, Theme} from "@material-ui/core";

const root = {
    marginBottom: '50px',
};

export const PageTitleGreen = withStyles(
    (theme: Theme) => {
        return {
            root,
            hr: {
                width: '50px',
                border: `1px ${theme.colors.primaryDarken} solid`,
            },
            title: {
                color: theme.colors.primaryDarken,
                fontSize: '20px',
                fontFamily: '"Montserrat ", sans-serif',
                fontWeight: 400,
                letterSpacing: '10px',
            },
            subTitle: {
                color: theme.colors.primaryLighten,
                fontFamily: 'Open Sans , sans-serif',
                fontWeight: 100,
            }
        }
    }
)(PageTitle);

export const PageTitleGray = withStyles(
    (theme: Theme) => {
        return {
            root,
            hr: {
                width: '50px',
                border: `1px ${theme.colors.secondaryDarken} solid`,
            },
            title: {
                color: theme.colors.secondaryDarken,
                fontSize: '20px',
                fontFamily: '"Montserrat ", sans-serif',
                fontWeight: 400,
                letterSpacing: '5px',
            },
            subTitle: {
                color: theme.colors.secondaryLighten,
                fontFamily: 'Open Sans , sans-serif',
                fontWeight: 100,
            }
        }
    }
)(PageTitle);