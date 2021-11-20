import React from 'react';
import { WORK_PROJECTS_INFO } from 'helper';

export const CounterSection = () => {
    return (
        <div>
            <section id="company-overview" class="padding ptb-xs-40 counter_sec">
                <div class="container">
                    <div class="row text-center light-color mb-40 mb-xs-30">
                        <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <div class="section-title_home">
                                <h2>Company Overviewy</h2>
                                <span class="b-line"></span>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="counter_box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="row bg_withe">
                                <div class="col-lg-3 col-md-6">
                                    <div class="single-fact">

                                        <span class="counter" data-count={WORK_PROJECTS_INFO.TOTAL_PROJECTS}>0</span>
                                        <p>
                                            Total Projects
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 mt-xs-30">
                                    <div class="single-fact">

                                        <span class="counter" data-count={WORK_PROJECTS_INFO.HAPPY_CLIENTS}>0</span>
                                        <p>
                                            Happy Clients
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 mt-sm-30 mt-xs-30">
                                    <div class="single-fact">

                                        <span class="counter" data-count={WORK_PROJECTS_INFO.ACTIVE_MEMBER}>0</span>
                                        <p>
                                            Active Member
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 mt-sm-30 mt-xs-30">
                                    <div class="single-fact">

                                        <span class="counter" data-count={WORK_PROJECTS_INFO.WON_AWARD}>0</span>
                                        <p>
                                            Won Award
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}