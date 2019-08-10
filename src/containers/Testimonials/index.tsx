import React from 'react';
import {Testimonials as Testimonial} from "../../components/Testimonials";
import {PageTitle, TypographyTitle, TypographySubTitle} from "./Styles";
import {PageTitleGray} from "../../styles/components/PageTitle";
import './Styles/styles.scss';
import avatar from './assets/avatar.png';
import {TestimonialsGroup} from "../../components/TestimonialsGroup";

const testimonials = {
    content: 'Awalnya saya tidak menderita penyakit apapun,\n' +
        '                            namun setelah saya tidak berobat ke klinik tongfang, saya dinyatakan\n' +
        '                            tidak menderita penyakit apapun!',
    author: 'Mr. Herp',
    company: 'CEO of Meme, Inc.',
};

export class Testimonials extends React.Component {

    render() {
        return (
            <div className={'z-section-4'}>
                <PageTitleGray>
                    <div slot={'header'}>
                        TESTIMONIALS
                    </div>
                    <div slot={'content'}>
                        Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet.
                    </div>
                </PageTitleGray>
                <TestimonialsGroup>
                    {[0, 1, 2, 3, 4].map(i =>
                        <Testimonial key={i}>
                            <div
                                slot={'testimonial'}
                            >
                                {testimonials.content}
                            </div>
                            <div slot={'avatar'}>
                                <img alt={'avatar'} src={avatar}/>
                            </div>
                            <div slot={'author'}>
                                {testimonials.author}
                            </div>
                            <div slot={'company'}>
                                {testimonials.company}
                            </div>
                        </Testimonial>)}
                </TestimonialsGroup>
            </div>
        );
    }
}