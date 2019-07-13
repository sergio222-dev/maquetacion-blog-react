import React, {CSSProperties, ReactChild} from 'react';
import './GenericButton.scss';

type props = {
    size?: number,
    color?: 'white' | 'green',
    children?: ReactChild | ReactChild[],
    className?: string;
    width?: string;
    height?: string
};

export function GenericButton({color, size, children, width, height, className}: props) {

    const styles: CSSProperties[] = [
        {
            color: 'white',
            backgroundColor: "rgb(85,209,85)",
        },
        {
            color: 'black',
            backgroundColor: "rgba(255,255,255,0.5)",
        }
    ];

    let currentColor;

    if (color) {
        switch (color) {
            case "green":
                currentColor = styles[0];
                break;
            case "white":
                currentColor = styles[1];
                break;
        }
    } else {
        currentColor = styles[0];
    }

    const style: CSSProperties = {
        ...currentColor,
        height: size ? size + 'px' : height ? height : 'auto',
        fontSize: size ? (size / 2) + 'px' : '20px',
        width: size ? (size / 2) * 10 + 'px' : width ? width : 'auto'
    };

    return (
        <div className={className ? 'z-button ' + className : 'z-button'} style={style}>
            {children}
        </div>
    )
}