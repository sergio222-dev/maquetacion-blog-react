import {makeStyles, createStyles, Theme} from "@material-ui/core";

export const usestyle = makeStyles(
    createStyles({
        root: {
            maxWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        portrait: {
            width: '120px',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: 'white',
            '&img': {
                transform: 'translateY(40px)',
            }
        },
        content: {
            textAlign: 'center',
        },
        footer: {
            textAlign: 'center',
        }
    })
);
