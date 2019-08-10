import {makeStyles, createStyles} from "@material-ui/core";
import {Props} from "./index";

const colors = {
    yellow: '#ffba00',
    blue: '#089cea',
    orange: '#f34c03',
    green: '#53d153',
};

export const useStyleZBadge = makeStyles<any, Props>(
    createStyles({
        root: {
            display: 'inline-block',
            textTransform: 'uppercase',
            fontSize: '12px',
            color: 'white',
            backgroundColor: (props) => colors[props.color],
            borderRadius: '3px',
            padding: '1px 8px',
        },
    })
);