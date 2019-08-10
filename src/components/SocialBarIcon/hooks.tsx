import React from 'react';
import {Icon} from "./index";
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const useSocial = (social: Icon, classes: string) => {
    return <FontAwesomeIcon  icon={fab['dribbble']} />;
};