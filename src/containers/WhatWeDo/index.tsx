import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {Card} from "../../components/Card";
import {usestyle} from "./styles";

export function WhatWeDo() {

    const classes = usestyle();

    return (
        <div className={classes.root}>

            <div className={classes.titleContainer}>
                <Typography className={classes.title}>
                    WHAT WE DO
                </Typography>
                <hr className={classes.hr}/>
                <Typography className={classes.subTitle}>
                    Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                </Typography>
            </div>

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