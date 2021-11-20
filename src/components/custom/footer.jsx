import React from 'react';
import { INFO_UTILITY, SECTION_LINKS_UTILITY } from 'helper';

export const Footer = () => {
    return (
        <footer>
            <div class="top_footer_info__block ptb-20">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="single_info__block">
                                <i class="fa fa-phone"></i>
                                <h4>{INFO_UTILITY.COMPANY_PHONE} <span>Monday-Friday, 8am-7pm</span></h4>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single_info__block">
                                <i class="fa fa-envelope-o"></i>
                                <h4>{INFO_UTILITY.COMPANY_EMAIL} <span>Monday-Friday, 8am-7pm</span></h4>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single_info__block">
                                <i class="fa fa-bullhorn"></i>
                                <h4>Request a quote <span>Get all the information</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_footer__block pb-0 pt-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="footer_box__block">
                                <h4>About Us</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, architecto, asperiores. Recusandae ea a culpa eligendi, harum amet cumque quod.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sequi, fuga rem aperiam expedita ipsum.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-sm-30 mt-xs-30">
                            <div class="footer_box__block">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.HOME}>HOME</a>
                                    </li>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.ABOUT}>ABOUT</a>
                                    </li>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.OVERVIEW}>OVERVIEW</a>
                                    </li>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.SERVICES}>SERVICES</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-xs-30 mt-sm-30">
                            <div class="footer_box__block">
                                <h4>Sequel Links</h4>
                                <ul>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.TEAM}>TEAM</a>
                                    </li>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.PROJECT}>PROJECT</a>
                                    </li>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.TESTIMONIAL}>TETIMONIAL</a>
                                    </li>
                                    <li>
                                        <a href={SECTION_LINKS_UTILITY.CONTACT}>CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-sm-30 mt-xs-30">
                            <div class="footer_box__block address-box">
                                <h4>Contact info</h4>
                                <ul>
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        <p>
                                            Call Us {INFO_UTILITY.COMPANY_PHONE}
                                        </p>
                                    </li>
                                    <li>
                                        <i class="fa fa-envelope-o"></i>
                                        <p>
                                            <a href={`mailto:${INFO_UTILITY.COMPANY_EMAIL}`}>{INFO_UTILITY.COMPANY_EMAIL}</a>
                                        </p>
                                    </li>
                                    <li>
                                        <i class="fa fa-map-marker"></i>
                                        <p>
                                            {INFO_UTILITY.COMPANY_ADDRESS}
                                        </p>
                                    </li>
                                    <li>
                                        <i class="fa fa-clock-o"></i>
                                        <p>
                                            Monday-Firday, 9am-6pm;
                                            <br />
                                            Sunday Closed
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="copyriight_block ptb-20 mt-20">
                        <div class="row">
                            <div class="col-sm-6">
                                <a href class="footer__block-logo"><img src="assets/images/Colbritish_Logo.png" alt="" /></a>
                            </div>
                            <div class="col-sm-6 text-right">
                                <p>
                                    All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}