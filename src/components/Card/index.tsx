import React, {ReactChild} from 'react';
import {Typography} from "@material-ui/core";
import {AccessAlarms} from "@material-ui/icons";
import {usestyle} from "./styles";
import {usecustomstyle} from "../hooks";
import {GenericButton} from "../GenericButton";
import {StyledComponent} from "../../types/components";

interface Props extends StyledComponent<Styles> {
    fontSize?: number;
    title?: string;
    buttonName?: string;
    children?: ReactChild | ReactChild[];
}

interface Styles {
    root?: string;
    container?: string;
    icon?: string;
    title?: string;
    content?: string;
    button?: string;
}

export function Card({classes, title, children, buttonName}: Props) {
    const styles = usecustomstyle(classes, usestyle());

    return (
        <>
            <div className={styles.root}>
                <div>
                    <div className={styles.container}>
                        <AccessAlarms className={styles.icon}/>
                    </div>
                </div>
                <div>
                    <Typography className={styles.title}>
                        {title}
                    </Typography>
                    <Typography className={styles.content}>
                        {children}
                    </Typography>
                </div>
                <div>
                    <GenericButton classes={{root: styles.button}}>
                        {buttonName}
                    </GenericButton>
                </div>
            </div>
        </>
    )
}