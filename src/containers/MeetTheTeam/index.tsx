import React from 'react';
import {Grid} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CardMember} from "../../components/CardMember";
import {TypoForMemberName, ButtonWorkWithUs} from "./Styles";
import {PageTitleGreen} from "../../styles/components/PageTitle";
import {SocialBar} from "../../components/SocialBar";
import {SocialBarIcon} from "../../components/SocialBarIcon";
import "./Styles/styles.scss";
import member from './Assets/member.png';

export class MeetTheTeam extends React.Component {

    render() {
        return (
            <div className={'z-section-6'}>
                <PageTitleGreen>
                    <div slot={'header'}>
                        MEET THE TEAM
                    </div>
                    <div slot={'content'}>
                        Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                    </div>
                </PageTitleGreen>
                <Grid component={'div'} spacing={6} style={{width: '100%', margin: '0'}} justify={'center'} container>
                    {[0, 1, 2, 3, 4].map(i =>
                        <Grid key={i} item component={'div'}>
                            <CardMember>
                                <div slot={'portrait'}>
                                    <img alt={'noze'} src={member}/>
                                </div>
                                <div slot={'content'}>
                                    <hr className={'hrDivisor'}/>
                                </div>
                                <div slot={'footer'}>
                                    <TypoForMemberName>
                                        Adik N.K.L
                                    </TypoForMemberName>
                                    <SocialBar>
                                        <SocialBarIcon social={"dribbble"} />
                                        <SocialBarIcon social={"behance"} />
                                        <SocialBarIcon social={"twitter"} />
                                    </SocialBar>
                                </div>
                            </CardMember>
                        </Grid>
                    )}
                </Grid>
                <div className={'footer-section'}>
                    <ButtonWorkWithUs>
                        WORK WITH US
                    </ButtonWorkWithUs>
                </div>
            </div>
        );
    }
}
