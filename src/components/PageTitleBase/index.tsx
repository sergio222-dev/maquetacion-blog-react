import React from 'react';
import {Slot} from 'react-slot';
import {usestyle} from "./styles";
import {usecustomstyle} from "../hooks";

type props = {
    classes?: style;
}

type style = {
    root?: string;
    hr?: string;
}

export const PageTitleBase: React.FunctionComponent<props> = ({children, classes}) => {
    const styles = usecustomstyle(classes, usestyle());

    return (
        <div className={styles.root}>
            <Slot name={"Header"} content={children}/>
            <hr className={styles.hr} />
            <Slot name={"Content"} content={children}/>
        </div>
    );
}