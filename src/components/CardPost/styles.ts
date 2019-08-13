import {makeStyles, createStyles} from "@material-ui/core";

export const useStyleCardPost = makeStyles(
    createStyles({
        root: {
            display: 'flex',
            margin: '8px',
        },
        title: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 200,
            color: 'white',
        },
        container: {
            paddingTop: '3px',
            paddingBottom: '3px',
            paddingLeft: '8px',
            textAlign: 'left',
        },
        titleContainer: {
            marginBottom: '2px',
        },
        image: {
            '& img': {
                width: '55px',
                height: '55px',
                borderRadius: '5px',
            }
        }
    })
);