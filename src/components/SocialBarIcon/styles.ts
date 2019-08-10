import {makeStyles, createStyles} from "@material-ui/core";

export const usestyle = makeStyles(
    createStyles({
        root: {
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: '50%',
            fontSize: '14px',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            '&:hover': {
              cursor: 'pointer',
            },
        },
        twitter: {
            color: 'white',
            backgroundColor: '#00abed',
        },
        behance: {
            color: 'white',
            backgroundColor: '#0061ff',
        },
        facebook: {
            color: 'white',
            backgroundColor: '#1d52aa',
        },
        dribbble: {
            color: 'red',
            fontSize: '23px',
        }
    })
);
