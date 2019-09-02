import React from 'react';
import {Grid} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {PageTitleGray} from "../../styles/components/PageTitle";
import {Button} from "./Styles";
import "./Styles/styles.scss";
import client from "./Assets/client.png";

export class OurHappyClients extends React.Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={'z-section-5'}>
                <PageTitleGray>
                    <div slot={'header'}>
                        OUR HAPPY CLIENT
                    </div>
                    <div slot={'content'}>
                        Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                    </div>
                </PageTitleGray>

                <Grid style={{width: '100%', maxWidth: '1200px', margin: '0 auto'}} justify={'center'} spacing={10} component={'div'}
                      container>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map(i =>
                        <Grid style={{textAlign: 'center'}} key={i} xs={3} component={'div'} item>
                            <img style={{filter: 'grayscale(100%)', WebkitFilter: 'grayscale(100%)'}} alt={'Client'}
                                 src={client}/>
                        </Grid>)}
                </Grid>
                <div style={{textAlign: 'center'}}>
                    <Button href={''}>
                        See all clients <ArrowForward/>
                    </Button>
                </div>
            </div>
        );
    }

}