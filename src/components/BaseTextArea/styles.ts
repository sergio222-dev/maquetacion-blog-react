import {makeStyles, createStyles} from "@material-ui/core";

export const useStyleBaseTextArea = makeStyles({
    root: {
        backgroundColor: '#444444',
        maxWidth: '100%',
        width: '100%',
        border: 'none',
        minHeight: '100px',
        padding: '0',
        paddingLeft: '8px',
        boxSizing: 'border-box',
        fontFamily: 'Proxima Nova Regular, sans-serif',
        color: '#777777',
        margin: '1px auto',
        resize: 'none',
    }
});