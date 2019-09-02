import {makeStyles, createStyles, Theme} from "@material-ui/core";

export const usestyle = makeStyles(
    (theme: Theme) => createStyles({
        root: {
            boxShadow: 'none',
            textAlign: 'center',
            padding: '0 0',
            margin: '12px 12px'
            //maxWidth: '400px',
        },
        container: {
            display: 'inline-block',
             padding: '10px',
            // margin: '10px',
            borderRadius: '30px',
            maxWidth: '120px',
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
            height: '100%',
            width: '100%',
            minWidth: '92px',
            minHeight: '92px',
            color: 'green',
        }
    })
);