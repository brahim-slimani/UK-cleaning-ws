import { ServiceBox } from 'components/shared';
import React from 'react';

export const ServicesSection = () => {
    return (
        <section id="services" class="padding ptb-xs-40 gray-bg service_sec">
            <div class="container">
                <div class="row text-center mb-xs-30">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div class="section-title_home">
                            <h2>Quality Services</h2>
                            <span class="b-line"></span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="service_slider_home next_btn_style">
                            <ServiceBox image="assets/images/service/img_1.jpg" title="House Cleaning" link="#" />
                            <ServiceBox image="assets/images/service/img_2.jpg" title="Apartment Cleaning" link="#" />
                            <ServiceBox image="assets/images/service/img_3.jpg" title="Carpet Cleaning" link="#" />
                            <ServiceBox image="assets/images/service/img_4.jpg" title="Commercial Cleaning" link="#" />
                            <ServiceBox image="assets/images/service/img_5.jpg" title="Residential Cleaning" link="#" />
                            <ServiceBox image="assets/images/service/img_6.jpg" title="After Renovation" link="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}