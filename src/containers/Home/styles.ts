import {makeStyles, createStyles, Theme} from "@material-ui/core";
import bg from './bg.png';

export const usestyle = makeStyles(
    (theme: Theme) => createStyles({
        root: {
            width: '100%',
            backgroundImage: `url(${bg})`,
            backgroundSize: '100% 100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            minHeight: '700px',
            textAlign: 'center',
        },
        title: {
            fontSize: '55px',
            fontWeight: 'bold',
            color: theme.colors.primaryFontColor,
            paddingBottom: '1em',
        },
        button: {
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '2.5em',
        },
        scrollDown: {
            position: 'absolute',
            bottom: '20px',
            fontSize: theme.colors.fontSize,
            color: theme.colors.secondaryFontColor,
            backgroundColor: 'rgba(255,255,255,0.5)',
        },
        arrow: {
            verticalAlign: 'bottom',
            marginLeft: '5px',
        }
    })
);
