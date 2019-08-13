import React, {TextareaHTMLAttributes} from 'react';
import {StyledComponent} from "../../types/components";
import {useStyleBaseTextArea} from "./styles";
import {usecustomstyle} from "../hooks";

interface Props extends StyledComponent<Styles>, TextareaHTMLAttributes<any> {
}

interface Styles {
    root?: string;
}



export const BaseTextArea: React.FunctionComponent<Props> = ({classes, ...props}) => {
    const styles: Styles = usecustomstyle(classes, useStyleBaseTextArea());

    return (
        <textarea className={styles.root} {...props} />
    );
};