import {makeStyles} from "@material-ui/styles";

const styles = makeStyles({
    sticky: {
        textDecoration: (props: any) => 'none',
        '& > div': {
            background: (props: any) =>
                props.bgColor
                    ? props.bgColor
                    : 'red',
            position: () => 'fixed',
            zIndex: 999,
        },
    },
});

export default styles;