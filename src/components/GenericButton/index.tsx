import React, {ReactChild} from 'react';
import {usestyle} from "./styles";
import {usecustomstyle} from "../hooks";
import {StyledComponent} from "../../types/components";
import {Button} from "@material-ui/core";

interface Props extends StyledComponent<styles> {
    children?: ReactChild | ReactChild[];
}

type styles = {
    root?: string;
}

export function GenericButton({classes, children}: Props) {
    const styles: styles = usecustomstyle(classes, usestyle());

    return (
        <Button href={''} classes={styles}>
            {children}
        </Button>
    )
}
