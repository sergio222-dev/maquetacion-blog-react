import {makeStyles, createStyles, Theme} from "@material-ui/core";

export const usestyle = makeStyles(
    (theme: Theme) => createStyles({
        root: {
            boxShadow: 'none',
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '400px',
        },
        container: {
            display: 'inline-block',
            padding: '40px',
            margin: '10px',
            backgroundColor: theme.colors.primaryLighten,
            borderRadius: '50px',
        },
        title: {
            margin: '10px 0',
            fontSize: '24px',
        },
        content: {
            fontWeight: 'lighter',
            fontSize: '15px',
            margin: '10px 0',
        },
        icon: {
            height: '160px',
            width: '160px',
            color: 'green',
        }
    })
);