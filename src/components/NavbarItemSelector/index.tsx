import React,{useEffect, useState} from 'react';
import './Selector.scss';
import {useSpring, animated, config} from "react-spring";

type props = {currentIndex: number};

export function NavbarItemSelector({currentIndex}: props) {

    const [left, setLeft] = useState(0);

    useEffect(() => {
        setLeft(160*currentIndex);
    }, [currentIndex]);

    const props = useSpring({left, config: config.stiff});

    return (
        <animated.div className={'z-selector'} style={props}>
        </animated.div>
    );
}