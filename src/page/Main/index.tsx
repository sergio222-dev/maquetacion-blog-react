import React from "react";
import './main.scss';
import {OurLastestWork as Section3} from "../../containers/OurLastestWork";
import {WhatWeDo as Section2} from "../../containers/WhatWeDo";
import {Home as Section1} from '../../containers/Home';


export function Main() {

    return (
        <>
            {/*TODO: Header is not a reusable component, make it static or reusable*/}
            {/*<Header/>*/}
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    );
}