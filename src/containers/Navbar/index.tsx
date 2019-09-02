import React from 'react';
import {NavItem, Title} from "./Styles";
import {HeaderSearch} from "../../components/HeaderSearch";
import './Styles/styles.scss';

const links = [
    {
        label: 'Home',
        link: '#Home',
    },
    {
        label: 'What we do?',
        link: '#What'
    },
    {
        label: 'Testimonials',
        link: '#Testimonials',
    },
    {
        label: 'Contact Us',
        link: '#Contact'
    }
];

export class Navbar extends React.Component {
    render() {
        return (
            <div className={'z-navbar z-grid'}>
                <div className={'z-navlinks'}>
                    {links.map(l =>
                        <NavItem  href={l.link}>
                            {l.label}
                        </NavItem>
                    )}
                </div>
                <div className={'z-logo'}>
                    <Title>Switch</Title>
                </div>
                <div className={'z-searchbar'}>
                    <HeaderSearch/>
                </div>
            </div>
        );
    }
}