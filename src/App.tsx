import React from 'react';
import {Main} from "./page/Main";
import {Theme} from "./styles/theme";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab } from '@fortawesome/free-brands-svg-icons'
import './styles/main.scss';

library.add(fab);

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
