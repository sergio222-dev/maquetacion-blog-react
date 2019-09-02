import React from 'react';
import {Grid} from "@material-ui/core";
import './Styles/styles.scss';
import {PageTitleFooter, SendMessageButton} from "./Styles";
import {SocialBar} from "../../components/SocialBar";
import {SocialBarIcon} from "../../components/SocialBarIcon";
import {CardPost} from "../../components/CardPost";
import {ZBadge} from "../../components/ZBadge";
import image from './Assets/bg.png';
import {BaseInput} from "../../components/BaseInput";
import {BaseTextArea} from "../../components/BaseTextArea";
import {CSSProperties} from "@material-ui/styles";

const gridStyle: CSSProperties = {
    textAlign: "center",
    maxWidth: '400px',
};

export class Footer extends React.Component {


    render() {
        return (
            <div id={'Contact'} className={'z-section-7'}>
                <Grid style={{width: '100%', margin: '0'}} spacing={8} justify={'center'} component={'div'} container>
                    <Grid style={gridStyle} component={'div'} item xs={4}>
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
                            <SocialBarIcon social={"dribbble"}/>
                            <SocialBarIcon social={"facebook"}/>
                            <SocialBarIcon social={"twitter"}/>
                        </SocialBar>
                    </Grid>
                    <Grid style={gridStyle} component={'div'} item xs={4}>
                        <PageTitleFooter>
                            <div slot={'header'}>
                                RECENT POSTS
                            </div>
                        </PageTitleFooter>
                        {[0, 1, 2, 3, 4].map(i => <CardPost key={i}>
                            <div slot={'image'}>
                                <img src={image} alt={'nose'}/>
                            </div>
                            <div slot={'title'}>
                                Lorem Ipsum Dolor Sit Amet.
                            </div>
                            <div slot={'content'}>
                                <ZBadge color={"green"}>
                                    magazine
                                </ZBadge>
                            </div>
                        </CardPost>)}
                    </Grid>
                    <Grid style={gridStyle} item component={'div'}>
                        <PageTitleFooter>
                            <div slot={'header'}>
                                CONTACT US
                            </div>
                            <div slot={'content'}>
                                <div>10044 West 23th Street, Suite 721</div>
                                <div>New York NY 10010</div>
                                <div>Email: Username@email.com</div>
                                <div>Phone: +1 (0) 123 4567 890</div>
                                <div>Fax: +1 (0) 321 4567 890</div>
                            </div>
                        </PageTitleFooter>
                        <div className={'z-form'}>
                            <BaseInput placeholder={'Your Name..'}/>
                            <BaseInput type={'email'} placeholder={'Your Mail..'} />
                            <BaseTextArea placeholder={'Your Message..'} />
                            <SendMessageButton >
                                Send
                            </SendMessageButton>
                        </div>
                    </Grid>
                </Grid>
                <div className={'z-footer'}>
                    <p>
                        Made with ♥ by <a target={'_blank'} href={'https://www.behance.net/krisnawij'}>Krisna</a> :)
                        -
                        Make up with React by    <a target={'_blank'} href={'https://github.com/sergio222-dev'}>Sergio</a></p>
                </div>
            </div>
        );
    }
}
