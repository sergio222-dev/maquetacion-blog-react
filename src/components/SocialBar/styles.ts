import {makeStyles, createStyles} from "@material-ui/core";

export const usestyle = makeStyles(
    createStyles({
        root: {
            display: 'inline-flex',
            backgroundColor: 'white',
            padding: '4px 8px',
            borderRadius: '20px',
            fontSize: '24px',
            justifyContent: 'center',
            '& span': {
                margin: 'auto 5px',
                '&:first-child': {
                    marginLeft: '0',
                },
                '&:last-child': {
                    marginRight: '0',
                },
            },
        }
    })
);
