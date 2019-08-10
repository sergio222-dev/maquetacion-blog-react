import React from 'react';
import {usecustomstyle} from "../hooks";
import {StyledComponent} from "../../types/components";
import {usestyle} from "./styles";
import {useCapitalize} from "../hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from "@fortawesome/free-brands-svg-icons";

interface Props extends StyledComponent<Styles> {
    social: Icon;
}

type Styles = {
    [index in Icon]: string;
} & {
    root?: string;
};

export type Icon = 'twitter' | 'dribbble' | 'behance' | 'facebook';
// export type IconReference = 'faTwitter' | 'faDribbble' | 'faBehance';

export const SocialBarIcon: React.FunctionComponent<Props> = ({classes, social}) => {
    const styles: Styles = usecustomstyle(classes, usestyle());
    const socialIcon = 'fa' + useCapitalize(social);

    return (
        <span className={`${styles.root} ${styles[social]}`}>
            <FontAwesomeIcon icon={fab[socialIcon]} />
        </span>
    );
};