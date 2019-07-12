import React from 'react';
import "./Navbar.scss"
import Appbar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

export function Navbar() {
    return (
        <>
            <Appbar className={"z-toolbar"} position={'static'} >
                <Toolbar>
                    <IconButton href={"#"} edge={"start"} aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </Appbar>
            <div className={"z-nav"}>
                <div >Home</div>
                <div >What we do?</div>
                <div >Testimonial</div>
                <div >Contact Us</div>
            </div>

        </>

    );
}