import React, {ReactChild} from 'react';
import {usestyle} from "./styles";
import {usecustomstyle} from "../hooks";
import {StyledComponent} from "../../types/components";

interface Props extends StyledComponent<styles> {
    children?: ReactChild | ReactChild[];
}

type styles = {
    root?: string;
}

export function GenericButton({classes, children}: Props) {
    const styles = usecustomstyle(classes, usestyle());

    return (
        <div className={styles.root}>
            {children}
        </div>
    )
}
