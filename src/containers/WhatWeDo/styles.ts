import {makeStyles, createStyles} from "@material-ui/core";

export const usestyle = makeStyles(
    (theme) => createStyles({
        root: {
            paddingBottom: '40px',
        },
        titleContainer: {
            paddingTop: '30px',
            color: theme.colors.primaryGrey,
            textAlign: 'center',
            marginBottom: '80px',
        },
        title: {
            fontWeight: 'lighter',
            fontSize: '20px',

        },
        hr: {
            border: `1px solid ${theme.colors.primaryGrey}`,
            width: '50px',
        },
        subTitle: {
            fontSize: '15px',
            fontWeight: 'lighter',
        }
    })
);