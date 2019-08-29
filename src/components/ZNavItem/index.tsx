import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyledComponent} from "../../types/components";
import useStyleBase from './styles';
import {usecustomstyle} from "../hooks";
import {useSpring, animated, config} from "react-spring";

interface Props extends StyledComponent<Styles> {
    href: string;
}

interface Styles {
    root?: string;
    selector?: string;
}

export const ZNavItem: FunctionComponent<Props> = ({children, classes, href}) => {
    const styles: Styles = usecustomstyle(classes, useStyleBase());
    const [hover, setHover] = useState(0);

    const {widthEffect} = useSpring({
        widthEffect: hover,
        config: config.stiff
    });

    return (
        <div
            style={{color: 'white'}}
            className={styles.root}
            onMouseOver={() => setHover(1)}
            onMouseOut={() => setHover(0)}
            onClick={() => window.location.href = href}
        >
            {children}

            <animated.div
                className={styles.selector}
                style={{
                    transform: widthEffect.interpolate(w => `scaleX(${w})`)
                }}
            />
        </div>
    )
};

