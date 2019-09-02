import React from 'react';
import {Navbar} from "../Navbar";
import {ZNavScroller} from "../../components/ZNavScroller";
import {ArrowDownward} from "@material-ui/icons";
import {GenericButton, ScrollButton} from "./Styles";
import {Theme} from "../../styles/theme";
import './Styles/styles.scss'

export class Home extends React.Component {

    render() {

        return (
            <div id={'Home'} className={'z-section-1'}>
                <ZNavScroller bgColor={Theme.colors.primaryDarken} Component={Navbar} />
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