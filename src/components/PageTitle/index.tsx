import React from 'react';
import {Slot} from 'react-slot';
import {usestyle} from "./styles";
import {usecustomstyle} from "../hooks";

type props = {
    classes?: style;
    children: React.ReactNode;
}

type style = {
    root?: string;
    hr?: string;
}

export function PageTitle({children, classes}: props) {
    const styles = usecustomstyle(classes, usestyle());

    return (
        <div className={styles.root}>
            <Slot name={"Header"} content={children}/>
            <hr className={styles.hr} />
            <Slot name={"Content"} content={children}/>
        </div>
    );
}