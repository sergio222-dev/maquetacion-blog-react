import React, {Fragment} from 'react';
import {Slot} from "react-slot";
import {StyledComponent} from "../../types/components";
import {usecustomstyle} from "../hooks";
import {useStyleCardPost} from "./styles";
import {Typography} from "@material-ui/core";

interface Props extends StyledComponent<Styles> {

}

interface Styles {
    root?: string;
    title?: string;
    container?: string;
    titleContainer?: string;
    content?: string;
    image?: string;
}

export const CardPost: React.FunctionComponent<Props> = ({classes, children}) => {
    const styles: Styles = usecustomstyle(classes, useStyleCardPost());

    return (
        <div className={styles.root}>
            <Slot className={styles.image} content={children} name={'image'} />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <Typography classes={{root: styles.title}}>
                        <Slot content={children} name={'title'} as={Fragment} />
                    </Typography>
                </div>
                <Slot className={styles.content} name={'content'} content={children} as={'div'}/>
            </div>
        </div>
    );
};