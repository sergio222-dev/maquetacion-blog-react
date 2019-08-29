import React from 'react';
import {NavItem, Title} from "./Styles";
import {HeaderSearch} from "../../components/HeaderSearch";
import {Grid} from "@material-ui/core";
import './Styles/styles.scss';


const links = [
    {
        label: 'Home'
    },
    {
        label: 'What we do?'
    },
    {
        label: 'Testimonials',
    },
    {
        label: 'Contact Us',
    }
];

export class Navbar extends React.Component {
    render() {
        return (
            <Grid justify={'center'} alignItems={'center'} container component={'div'} className={'z-navbar'}>
                <Grid xs={4} component={'div'} item>
                    {links.map(l =>
                        <NavItem>
                            {l.label}
                        </NavItem>
                    )}
                </Grid>
                <Grid xs={4} item component={'div'}>
                    <Title>
                        Switch
                    </Title>
                </Grid>
                <Grid xs={4} component={'div'} item>
                    <HeaderSearch />
                </Grid>
            </Grid>
        );
    }
}