import React from "react";
import './main.scss';
import {OurLastestWork as Section3} from "../../containers/OurLastestWork";
import {WhatWeDo as Section2} from "../../containers/WhatWeDo";
import {Home as Section1} from '../../containers/Home';
import {Testimonials as Section4} from "../../containers/Testimonials";
import {OurHappyClients as Section5} from "../../containers/OurHappyClients";
import {MeetTheTeam as Section6} from "../../containers/MeetTheTeam";
import {Footer as Section7} from "../../containers/Footer";


export function Main() {

    return (
        <>
            {/*TODO: Header is not a reusable component, make it static or reusable*/}
            {/*<Header/>*/}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />

        </>
    );
}