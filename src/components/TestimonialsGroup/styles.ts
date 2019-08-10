import {makeStyles, createStyles} from "@material-ui/core";

export const usestyle = makeStyles(
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            overflow: 'hidden',
            width: '100%',
        },
        slider: {
            display: 'flex',
            'transform': 'translateX(0%)',
            '& > *': {
                width: '100%',
                flexShrink: 0,
            }
        }
    })
);