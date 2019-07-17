import {makeStyles, createStyles, Theme} from "@material-ui/core";

export const usestyle = makeStyles(
    (theme: Theme) => createStyles({
        root: {
            color: theme.colors.primaryFontColor,
            background: theme.colors.primary,
            display: 'inline-block',
            cursor: 'pointer',
            borderRadius: '40px',
            fontSize: '24px',
            padding: '0 0.75em',
            paddingBottom: '2px',
        },
    })
);
