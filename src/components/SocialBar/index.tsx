import React from 'react';
import {StyledComponent} from "../../types/components";
import {usecustomstyle} from "../hooks";
import {usestyle} from "./styles";
import {Slot} from "react-slot";

interface Props extends StyledComponent<Styles> {

}

interface Styles {
    root?: string;
}

export const SocialBar: React.FunctionComponent<Props> = ({classes, children}) => {
    const styles: Styles = usecustomstyle(classes, usestyle());

    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};