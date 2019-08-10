import React from 'react';
import {Grid} from "@material-ui/core";
import './Styles/styles.scss';
import {PageTitleFooter} from "./Styles";
import {SocialBar} from "../../components/SocialBar";
import {SocialBarIcon} from "../../components/SocialBarIcon";
import {CardPost} from "../../components/CardPost";
import {ZBadge} from "../../components/ZBadge";
import image from './Assets/bg.png';

export class Footer extends React.Component {


    render() {
        return (
            <div className={'z-section-7'}>
                <Grid justify={'center'} component={'div'} container>
                    <Grid style={{textAlign: 'center', maxWidth: '300px'}} component={'div'} item xs={4}>
                        <PageTitleFooter>
                            <div slot={'header'}>
                                ABOUT US
                            </div>
                            <div slot={'content'}>
                                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
                                accumsan ipsum velit. Ut aliquam massa nisl quis neque. Suspendisse in orci enim.Aenean
                                sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus.
                            </div>
                        </PageTitleFooter>
                        <SocialBar>
                            <SocialBarIcon social={"dribbble"} />
                            <SocialBarIcon social={"facebook"} />
                            <SocialBarIcon social={"twitter"} />
                        </SocialBar>
                    </Grid>
                    <Grid style={{textAlign: 'center', maxWidth: '300px'}} component={'div'} item xs={4}>
                        <PageTitleFooter>
                            <div slot={'header'}>
                                RECENT POSTS
                            </div>
                            <div slot={'content'}>
                                {[0,1,2,3,4].map(i => <CardPost key={i}>
                                    <div slot={'image'}>
                                        <img src={image} alt={'nose'} />
                                    </div>
                                    <div slot={'title'}>
                                        Lorem Ipsum Dolor Sit Amet.
                                    </div>
                                    <div slot={'content'}>
                                        <ZBadge color={"green"} >
                                            magazine
                                        </ZBadge>
                                    </div>
                                </CardPost>)}
                            </div>
                        </PageTitleFooter>

                    </Grid>
                </Grid>
            </div>
        );
    }
}
