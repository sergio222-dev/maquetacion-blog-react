import {Theme, Typography, withStyles} from "@material-ui/core";
import {PageTitleBase as BasePageTitle} from "../../../components/PageTitleBase";

export const PageTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                marginBottom: '50px',
            },
            hr: {
                width: '50px',
                border: `1px ${theme.colors.secondaryDarken} solid`,
            }
        }
    }
)(BasePageTitle);

export const TypographyTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: '1.3em',
                fontWeight: 400,
                color: theme.colors.secondaryDarken,
            }
        }
    }
)(Typography);

export const TypographySubTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                fontFamily: 'Open sans , sans-serif',
                fontStyle: 'italic',
                fontSize: '0.98em',
                fontWeight: 200,
                color: theme.colors.secondaryLighten,
            }
        }
    }
)(Typography);