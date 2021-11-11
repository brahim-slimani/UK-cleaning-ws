import React from 'react';

export const AboutSection = (props) => {
    return (
        // About
        <section class="padding ptb-xs-40">
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
                    <div class="col-lg-3 col-md-6">
                        <div class="clean_top mb-xs-30 feature-box">
                            <div class="content">
                                <img src="assets/images/cleaning-lady.svg" alt="" height="50" width="50" />
                                <h3>Expert</h3>
                                <p>
                                    Lorem Ipsum is simply text the printing and typesetting standard industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="clean_top mb-xs-30 feature-box">
                            <div class="content">
                                <img src="assets/images/cleaner.svg" alt="" height="50" width="50" />
                                <h3>Secure Services</h3>
                                <p>
                                    Lorem Ipsum is simply text the printing and typesetting standard industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-sm-30">
                        <div class="clean_top mb-xs-30 feature-box">
                            <div class="content">
                                <img src="assets/images/clean.svg" alt="" height="50" width="50" />
                                <h3>Low Costing</h3>
                                <p>
                                    Lorem Ipsum is simply text the printing and typesetting standard industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-sm-30">
                        <div class="clean_top mb-xs-30 feature-box">
                            <div class="content">
                                <img src="assets/images/clean-1.svg" alt="" height="50" width="50" />
                                <h3>On Time</h3>
                                <p>
                                    Lorem Ipsum is simply text the printing and typesetting standard industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}