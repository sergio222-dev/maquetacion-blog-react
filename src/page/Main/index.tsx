import React from "react";
import {Home} from "../../containers/Home";
import {Header} from "../../components/Header";
import {WhatWeDo} from "../../containers/WhatWeDo";

import {MuiThemeProvider} from "@material-ui/core/styles";
import {zTheme} from "./theme";

export function Main() {
    return (
        <>
            <MuiThemeProvider theme={zTheme}>
                <Header/>
                <Home/>
                <WhatWeDo/>
            </MuiThemeProvider>
        </>
    );
}