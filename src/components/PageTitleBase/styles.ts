import {makeStyles, createStyles, Theme} from "@material-ui/core";

export const usestyle = makeStyles(
    (theme: Theme) => createStyles({
        root: {
            textAlign: 'center',
        }
    })
);