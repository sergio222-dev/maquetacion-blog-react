import {makeStyles, createStyles} from "@material-ui/core";

export const useStyleCardPost = makeStyles(
    createStyles({
        root: {
            display: 'flex',
            margin: '8px',
        },
        title: {
            fontFamily: '"Montserrat ", sans-serif',
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
            // https://stackoverflow.com/questions/51447317/image-height-same-as-width
            position: 'relative',
            width: '20%',
            overflow: 'hidden',
            borderRadius: '5px',
            '&:after': {
                content: '',
                display: 'block',
                paddingBottom: '100%',
            },
            '& img': {
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
            },
        }
    })
);