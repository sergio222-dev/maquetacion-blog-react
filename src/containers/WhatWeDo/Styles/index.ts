import {Theme, withStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {PageTitleBase as BasePageTitle} from "../../../components/PageTitleBase";
import {Card as BaseCard} from "../../../components/Card";
import {light} from "@material-ui/core/styles/createPalette";

export const PageTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                marginBottom: '40px',
            },
            hr: {
                width: '40px',
                color: theme.colors.secondaryDarken,
                border: 'solid 1px ',
            }
        }
    }
)(BasePageTitle);

export const Card = withStyles(
    (theme: Theme) => {
        return {
            title: {
                fontFamily: 'Proxima Nova Bold, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: theme.colors.secondaryDarken,
            },
            content: {
                fontFamily: 'Montserrat ,sans-serif',
                fontSize: '15px',
                fontWeight: 'lighter',
                color: theme.colors.secondaryLighten,
            },
            button: {
                backgroundColor: theme.colors.primary,
                fontFamily: 'Proxima Nova Bold, sans-serif',
                fontWeight: 'bold',
                padding: '6px 18px',
            }
        }
    }
)(BaseCard);

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