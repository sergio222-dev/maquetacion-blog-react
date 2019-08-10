import {PageTitle} from "../../../components/PageTitle";
import {withStyles, Theme} from "@material-ui/core";


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