import React from 'react';
import {Grid} from "@material-ui/core";
import {Card} from "./Styles";
import {PageTitleGray} from "../../styles/components/PageTitle";
import './Styles/setyles.scss';

export class WhatWeDo extends React.Component {
    render() {
        return (
            <div id={'What'} className={'z-section-2'}>
                <PageTitleGray>
                    <div slot={'header'}>
                        WHAT WE DO
                    </div>
                    <div slot={'content'}>
                        Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                    </div>
                </PageTitleGray>
                <Grid container justify={"center"}>
                    <Grid xs={2} item>
                        <Card title={"Lorem Ipsum"} buttonName={"Learn More"}>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor,
                        </Card>
                    </Grid>
                    <Grid xs={2} item>
                        <Card title={"Lorem Ipsum"} buttonName={"Learn More"}>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor,
                        </Card>
                    </Grid>
                    <Grid xs={2} item>
                        <Card title={"Lorem Ipsum"} buttonName={"Learn More"}>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor,
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}