import React from 'react';
import {Main} from "./page/Main";
import {Theme} from "./styles/theme";
import {MuiThemeProvider} from "@material-ui/core/styles";
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <div >
        <MuiThemeProvider theme={Theme}>
            <Main/>
        </MuiThemeProvider>
    </div>
  );
};

export default App;
