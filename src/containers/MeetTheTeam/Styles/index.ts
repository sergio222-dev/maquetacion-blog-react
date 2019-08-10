import {withStyles, Typography, Theme, Button as ButtonBase} from "@material-ui/core";
import {PageTitleBase as PageTitleBase} from "../../../components/PageTitleBase";
import {CardMember as CardMemberBase} from "../../../components/CardMember";

export const PageTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                marginBottom: '50px',
            },
            hr: {
                width: '50px',
                border: `1px ${theme.colors.primaryDarken} solid`,
            }
        }
    }
)(PageTitleBase);

export const TypographyTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: '1.3em',
                fontWeight: 400,
                color: theme.colors.primaryDarken,
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
                color: theme.colors.primaryDarken,
            }
        }
    }
)(Typography);

export const TypoForMemberName = withStyles(
(theme: Theme) => {
    return {
        root: {
            fontFamily: 'Proxima Nova Regular, sans-serif',
            color: 'white',
        }
    }
})(Typography);

export const CardMember = withStyles({
})(CardMemberBase);

export const ButtonWorkWithUs = withStyles({
    root: {
        fontFamily: 'Proxima Nova Light, sans-serif',
        backgroundColor: '#53d153',
        color: 'white',
        borderRadius: '40px',
        padding: '2px 22px',
        fontSize: '19px',
    }
})(ButtonBase);


