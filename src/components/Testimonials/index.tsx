import React, {ReactChild, useState} from 'react';
import {Typography} from "@material-ui/core";
import {Slot} from "react-slot";
import {usestyle} from "./styles";
import {StyledComponent} from "../../types/components";
import {usecustomstyle} from "../hooks";

interface Props extends StyledComponent<Styles> {
    children?: ReactChild | ReactChild[];
}

interface Styles {
    testimonial?: string;
    footer?: string;
    avatar?: string;
    subtitle?: string;
    rightFooter?: string;
}

export function Testimonials({children, classes}: Props) {
    const styles: Styles = usecustomstyle(classes, usestyle());

    return (
        <div>
            <Slot className={styles.testimonial} as={Typography} name={'testimonial'} content={children} />
            <div className={styles.footer}>
                <Slot className={styles.avatar} name={'avatar'} content={children} />
                <div className={styles.rightFooter}>
                    <Slot name={'author'} as={Typography} content={children} />
                    <Slot className={styles.subtitle} name={'company'} as={Typography} content={children} />
                </div>
            </div>
        </div>
    );
}