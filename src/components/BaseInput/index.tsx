import React, {InputHTMLAttributes} from 'react';
import {StyledComponent} from "../../types/components";
import {useStyleBaseInput} from "./styles";
import {usecustomstyle} from "../hooks";

interface Props extends StyledComponent<Styles>, InputHTMLAttributes<any> {
}


interface Styles {
    root?: string;
}



export const BaseInput: React.FunctionComponent<Props> = ({classes, type, ...props}) => {
    const styles: Styles = usecustomstyle(classes, useStyleBaseInput());

    return (
        <input type={type? type : 'text'} className={styles.root} {...props} />
        );
};