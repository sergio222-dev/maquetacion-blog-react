import {makeStyles,createStyles} from "@material-ui/core";

export const usestyle = makeStyles(
    () => createStyles({
        root: {
            color: 'white',
            backgroundColor: 'black',
            display: 'inline-block',
            cursor: 'pointer',
            borderRadius: '2em',
            padding: '0 0.75em',
            textAlign: 'center',
            verticalAlign: 'middle',
        }
    })
);
