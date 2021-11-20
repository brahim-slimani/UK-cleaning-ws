import React from 'react';
import { TestimonialItem } from 'components/shared';

export const TestimonialSection = () => {


    const testimonials = [
        {
            author: "Andrew Flintoff",
            image: "assets/images/testimonial/1.jpg",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text."
        },
        {
            author: "Andrew Flintoff",
            image: "assets/images/testimonial/2.jpg",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text."
        },
        {
            author: "Andrew Flintoff",
            image: "assets/images/testimonial/3.jpg",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text."
        }
    ]

    return (
        <section id="testimonial" class="padding ptb-xs-40 bg_Testimonial">
            <div class="container">
                <div class="row text-center light-color mb-40 mb-xs-30">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div class="section-title_home">
                            <h2>Our Testimonial</h2>
                            <span class="b-line"></span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="home_testimonial">
                    {
                        testimonials.map((testimonial, index) => <TestimonialItem key={index} {...testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
}