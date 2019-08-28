import React from 'react';
import {PageTitleBase} from "../PageTitleBase";
import {usecustomstyle} from "../hooks";
import {Typography} from "@material-ui/core";
import {Slot} from "react-slot";
import {StyledComponent} from "../../types/components";

interface Props extends StyledComponent<Styles> {

}

interface Styles {
    root?: string;
    hr?: string;
    title?: string;
    subTitle?: string;
}

export const PageTitle: React.FunctionComponent<Props> = ({classes, children}) => {

    const styles: Styles = usecustomstyle(classes, {});

    return (
        <>
            <PageTitleBase classes={styles}>
                <div slot={'Header'}>
                    <Typography component={'div'} classes={{root: styles.title}}>
                        <Slot content={children} as={'div'} name={'header'}/>
                    </Typography>
                </div>
                <div slot={'Content'}>
                    <Typography component={'div'} classes={{root: styles.subTitle}}>
                        <Slot content={children} as={'div'} name={'content'}/>
                    </Typography>
                </div>
            </PageTitleBase>
        </>
    );
};

