import React from 'react';
import {StyledComponent} from "../../types/components";
import {usecustomstyle} from "../hooks";
import {useStyleZBadge} from "./styles";
import {Typography} from "@material-ui/core";

export interface Props extends StyledComponent<Styles> {
    color: Colors;
}

interface Styles {
    root?: string;
}

type Colors = 'yellow' | 'blue' | 'orange' | 'green';

export const ZBadge: React.FunctionComponent<Props> = ({children, classes, color}) => {
    const styles: Styles = usecustomstyle(classes, useStyleZBadge({color}));

    return (
        <Typography className={styles.root}>
            {children}
        </Typography>
    );
};
