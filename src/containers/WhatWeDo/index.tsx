import React from 'react';
import {Grid} from "@material-ui/core";
import {PageTitle, Card, TypographyTitle, TypographySubTitle} from "./Styles";
import './Styles/setyles.scss';

export class WhatWeDo extends React.Component {
    render() {
        return (
            <div className={'z-section-2'}>
                <PageTitle>
                    <div slot={'Header'}>
                        <TypographyTitle>
                            WHAT WE DO
                        </TypographyTitle>
                    </div>
                    <div slot={'Content'}>
                        <TypographySubTitle>
                            Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                        </TypographySubTitle>
                    </div>
                </PageTitle>
                <Grid container justify={"space-around"}>
                    <Grid item>
                        <Card title={"Lorem Ipsum"} buttonName={"Learn More"}>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor,
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card title={"Lorem Ipsum"} buttonName={"Learn More"}>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor,
                        </Card>
                    </Grid>
                    <Grid item>
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