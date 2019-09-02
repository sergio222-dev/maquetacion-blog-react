import React, {
    Component,
    ComponentType,
    FunctionComponent, useState,
} from 'react';
import {StyledComponent} from "../../types/components";
import {usecustomstyle} from "../hooks";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import useBaseStyle from './styles';

interface Props extends StyledComponent<Styles> {
    Component: ComponentType;
    bgColor?: any;
    threshold?: number;
}

interface Styles {
    sticky?: string;
}

export const ZNavScroller: FunctionComponent<Props> = ({classes, Component, bgColor, threshold}) => {

    const styles: Styles = usecustomstyle(classes, useBaseStyle({bgColor}));
    const [isSticky, setSticky] = useState(false);
    const thr = threshold ? threshold : 70;

    useScrollPosition(({currPos }: any) => {
        if (currPos.y  < -(thr)) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    },[isSticky]);

    return (
        <div className={isSticky ? styles.sticky : ''}>
            <Component />
        </div>
    );
};
