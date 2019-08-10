import React, {FunctionComponent} from 'react';
import {Slot} from "react-slot";
import {StyledComponent} from "../../types/components";
import {usecustomstyle} from "../hooks";
import {usestyle} from "./styles";

interface Props extends StyledComponent<Styles> {

}

interface Styles {
    root?: string;
    portrait?: string;
    content?: string;
    footer?: string
}

export const CardMember: FunctionComponent<Props> = ({children, classes}) => {
    const styles: Styles = usecustomstyle(classes, usestyle());

    return (
        <div className={styles.root}>
            <Slot name={'portrait'} content={children} className={styles.portrait} />
            <Slot name={'content'} content={children} className={styles.content} />
            <Slot content={children} name={'footer'} className={styles.footer} />
        </div>
    );
};