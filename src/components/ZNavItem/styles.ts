import {makeStyles} from "@material-ui/core";

const styles = makeStyles({
    root: {
        color: 'white',
        fontSize: '1.5em',
        position: 'relative',
        display: 'inline-flex',
        cursor: 'pointer',
        userSelect: 'none',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selector: {
        content: '""',
        position: 'absolute',
        top: '-10px',
        left: '0',
        width: '100%',
        backgroundColor: 'red',
        height: '10px',
        transform: 'scaleX(0)'
    }
});

export default styles