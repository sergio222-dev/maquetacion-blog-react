import React from 'react';
import {Typography, Grid} from "@material-ui/core";
import {ArrowRightAlt} from "@material-ui/icons";
import {ViewMoreButton, ZToggleButtonGroup} from "./Styles/";
import {PageTitleGreen} from "../../styles/components/PageTitle";
import './Styles/styles.scss';
import imagen from './assets/one.png';

const options = [
    {
        label: 'Photography',
        value: 1,
        isDefault: true,
    },
    {
        label: 'Design',
        value: 2,
    },
    {
        label: 'Print',
        value: 3,
    }
];

export class OurLastestWork extends React.Component {

    render() {

        return (
            <div className={'z-section-3'}>
                <PageTitleGreen>
                    <div slot={'header'}>
                        OUR LATEST WORK
                    </div>
                    <div slot={'content'}>
                            Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                    </div>
                </PageTitleGreen>
                <div style={{textAlign:'center'}}>
                    <ZToggleButtonGroup
                        options={options}
                        onChange={null}
                    />
                </div>
                <Grid container justify={'center'} spacing={5} style={{width: '100%', marginTop: '15px'}}>
                    {[0,1,2,3,4].map(v => (
                        <Grid item key={v} style={{textAlign: 'center'}}>
                            <img width={'150px'} height={'150px'} src={imagen} alt={'nose'}/>
                        </Grid>
                    ))}
                </Grid>
                <Grid container justify={'center'} spacing={5} style={{width: '100%', marginTop: '15px', marginBottom: '15px'}}>
                    {[0,1,2,3,4].map(v => (
                        <Grid item key={v} style={{textAlign: 'center'}}>
                            <img width={'150px'} height={'150px'} src={imagen} alt={'nose'}/>
                        </Grid>
                    ))}
                </Grid>
                <div style={{textAlign:'center'}}>
                    <ViewMoreButton>
                        View More Work <ArrowRightAlt/>
                    </ViewMoreButton>
                </div>
            </div>
        );
    }
}