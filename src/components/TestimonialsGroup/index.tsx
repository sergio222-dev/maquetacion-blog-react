import React, {useEffect, useState, FunctionComponent} from 'react';
import {useSpring, config, animated} from "react-spring";
import {usestyle} from "./styles";
import {StyledComponent} from "../../types/components";
import {Button} from "@material-ui/core";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";

interface Props extends StyledComponent<Styles> {

}

interface Styles {
    root?: string;
    container?: string;
    slider?: string;
}

export const TestimonialsGroup: FunctionComponent<Props> = ({children}) => {
    const childrenCount = React.Children.toArray(children).length;
    const styles: Styles = usestyle();
    const [currentIndex, setIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const {x} = useSpring({x: translateX, config: config.stiff});

    useEffect(() => {
        setTranslateX(currentIndex * 100);
    }, [currentIndex]);


    return (
        <div className={styles.root}>
            <Button href={''} onClick={() => currentIndex > 0 ? setIndex(currentIndex - 1) : false}>
                <ChevronLeft />
            </Button>
            <div className={styles.container}>
                <animated.div
                    style={{
                        WebkitTransform: x.interpolate(x => `translate(-${Math.round(x*100000)/100000}%,0%)`),
                        OTransform: x.interpolate(x => `translate(-${Math.round(x*100000)/100000}%,0%)`),
                        transform: x.interpolate(x => `translate(-${Math.round(x*100000)/100000}%,0%)`),
                    }}
                >
                    <div className={styles.slider}>
                        {children}
                    </div>
                </animated.div>
            </div>
            <Button href={''} onClick={() => currentIndex < childrenCount-1 ? setIndex(currentIndex + 1) : false}>
                <ChevronRight/>
            </Button>
        </div>
    );
}