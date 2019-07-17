import React from "react";
import "./Home.scss";
import {GenericButton} from "../../components/GenericButton";
import {ArrowDownward} from '@material-ui/icons';
import {usestyle} from "./styles";

export function Home() {
    const classes = usestyle();

    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>
                    Art is Eternal Happiness
                </div>
                <GenericButton className={classes.button}>
                    WORK WITH US
                </GenericButton>
            </div>
            <GenericButton className={classes.scrollDown}>
                scroll down
                <ArrowDownward className={classes.arrow}/>
            </GenericButton>
        </div>
    );
}