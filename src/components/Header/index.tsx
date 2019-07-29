import React from 'react';
import "./Header.scss"
import {Navbar} from "../Navbar";
import {HeaderSearch} from "../HeaderSearch";

export function Header() {
    return(
      <header className={"z-header"}>
          <Navbar/>
          <div className={"z-logo"}>
              Switch
          </div>
          <HeaderSearch/>
      </header>
    );
}