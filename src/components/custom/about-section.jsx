import React from 'react';
import { FeatureItem } from 'components/shared';

export const AboutSection = () => {

    const features = [
        {
            icon: "assets/images/cleaning-lady.svg",
            title: "Expert"
        },
        {
            icon: "assets/images/cleaner.svg",
            title: "Secure Services"
        },
        {
            icon: "assets/images/clean.svg",
            title: "Low Costing"
        },
        {
            icon: "assets/images/clean-1.svg",
            title: "On time"
        }
    ]

    return (
        // About
        <section id="about" class="padding ptb-xs-40">
            <div class="container">
                <div class="row pb-30">
                    <div class="col-md-4 d-flex align-items-center">
                        <div class="section_tit">
                            <h2>About Us</h2>
                            <span class="b-line l-left sm-l-center"></span>
                        </div>
                    </div>

                    <div class="col-md-8 mt-xs-30 text-center text-md-left">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.
                        </p>
                    </div>
                </div>

                <div class="row mt-30 mt-xs-0">
                    {
                        features.map((feature, index) => <FeatureItem key={index} {...feature} />)
                    }
                </div>
            </div>
        </section>
    );
}