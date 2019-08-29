import React from 'react';
import {Navbar} from "../Navbar";
import {ArrowDownward} from "@material-ui/icons";
import {GenericButton, ScrollButton} from "./Styles";
import './Styles/styles.scss'

export class Home extends React.Component {

    render() {

        return (
            <div className={'z-section-1'}>
                <Navbar />
                <div>
                    <div className={"z-title"}>
                        Art is Eternal Happiness
                    </div>
                    <GenericButton>
                        WORK WITH US
                    </GenericButton>
                </div>
                <ScrollButton>
                    scroll down
                    <ArrowDownward/>
                </ScrollButton>
            </div>
        );
    }
}