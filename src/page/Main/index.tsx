import React from "react";
import {Home} from "../../containers/Home";
import {Header} from "../../components/Header";
import {WhatWeDo} from "../../containers/WhatWeDo";

export function Main() {
    return (
      <>
          <Header/>
          <Home/>
          <WhatWeDo/>
      </>
    );
}