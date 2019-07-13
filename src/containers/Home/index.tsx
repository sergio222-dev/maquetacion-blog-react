import React from "react";
import "./Home.scss";
import {GenericButton} from "../../components/GenericButton";
import {ArrowDownward} from '@material-ui/icons';

export function Home() {
    return (
        <div className={'page-1'}>
            <div className={"z-title"}>
                Art is Eternal Happiness
                <GenericButton
                    size={60}
                    className={'z-central-button'}
                >
                    WORK WITH US
                </GenericButton>
            </div>
            <GenericButton
                className={'z-scroll-down-button'}
                color={"white"}
            >
                scroll down
                <ArrowDownward/>
            </GenericButton>
        </div>
    );
}