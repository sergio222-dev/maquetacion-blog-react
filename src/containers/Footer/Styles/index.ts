import {PageTitle} from "../../../components/PageTitle";
import {Button} from "@material-ui/core";
import {withStyles, Theme} from "@material-ui/core";

export const SendMessageButton = withStyles(
(theme: Theme) => {
    return {
        root: {
            color: 'white',
            fontFamily: 'Proxima Nova Regular, sens-serif',
            backgroundColor: theme.colors.primaryDarken,
            width: '100%',
            fontSize: '14px',
            margin: '0',
            lineHeight: '1',
        }
    }
}
)(Button);

export const PageTitleFooter = withStyles({
    root: {
        marginBottom: '10px',
    },
    hr: {
        width: '50px',
        border: `1px #dddddd solid`,
    },
    title: {
        color: '#dddddd',
        fontSize: '20px',
        fontFamily: '"Montserrat ", sans-serif',
        fontWeight: 400,
        letterSpacing: '10px',
    },
    subTitle: {
        color: '#dddddd',
        fontFamily: 'Open Sans , sans-serif',
        fontWeight: 100,
        textAlign: 'center',
    }
})(PageTitle);