import React from 'react';
import "./Navbar.scss"
import {NavbarItemSelector} from "../NavbarItemSelector";
import {useNavItems} from "./useNavItems";

export function Navbar() {

    const navLinks = [
        "Home",
        "What we do?",
        "Testimonial",
        "Contact Us"
    ];

    const [links, currentIndex] = useNavItems(navLinks);

    return (
        <>
            <div className={"z-nav"}>
                <NavbarItemSelector currentIndex={currentIndex}/>
                {links}
            </div>
        </>

    );
}