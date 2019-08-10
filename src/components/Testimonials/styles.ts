import {makeStyles, createStyles} from "@material-ui/core";

export const usestyle = makeStyles(
    createStyles({
        testimonial: {
            textAlign: 'center',
        },
        footer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatar: {
            border: 'solid 2px gray',
            borderRadius: '50%',
            overflow: 'hidden',
            height: '40px',
            width: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        subtitle: {
            fontWeight: 'lighter',
            lineHeight: '1',
        },
        rightFooter: {
            paddingLeft: '5px',
        }
    })
);