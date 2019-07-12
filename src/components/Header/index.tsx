import React from 'react';
import "./Header.scss"
import {Navbar} from "../Navbar";

export function Header() {
    return(
      <header className={"z-header"}>
          <Navbar/>
      </header>
    );
}