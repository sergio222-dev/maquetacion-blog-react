import React, {ReactChild} from 'react';
import {Typography} from "@material-ui/core";
import {AccessAlarms} from "@material-ui/icons";
import {usestyle} from "./styles";
import {GenericButton} from "../GenericButton";

type props = {
    fontSize?: number;
    title?: string;
    buttonName?: string;
    children?: ReactChild | ReactChild[],
}

export function Card({title, children, buttonName}: props) {
    const classes = usestyle();

    return (
        <>
            <div className={classes.root}>
                <div>
                    <div className={classes.container}>
                        <AccessAlarms className={classes.icon}/>
                    </div>
                </div>
                <div>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>
                    <Typography className={classes.content}>
                        {children}
                    </Typography>
                </div>
                <div>
                    <GenericButton>
                        {buttonName}
                    </GenericButton>
                </div>
            </div>
        </>
    )
}