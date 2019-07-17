import React, {ReactChild} from 'react';
import {usestyle} from "./styles";

type props = {
    className?: string;
    children?: ReactChild | ReactChild[];
}

export function GenericButton({className, children}: props) {
    const classes = usestyle();

    return (
        <div className={className ? className+' '+classes.root : classes.root }>
            {children}
        </div>
    )
}