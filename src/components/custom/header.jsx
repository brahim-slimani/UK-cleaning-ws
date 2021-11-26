import React from 'react';
import Utils, { INFO_UTILITY, SECTION_LINKS_UTILITY, } from 'helper';

export const Header = () => {

    Utils.navbarUtils();

    return (
        <header id="header" class="header header-1 header_tran">

            <div id="top-bar" class="top-bar-section top-bar-bg-color">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="top_loction pull-left">
                                <ul>
                                    <li>
                                        <a href="#home"><i class="fa fa-map-marker"></i> {INFO_UTILITY.COMPANY_ADDRESS} </a>
                                    </li>
                                    <li>
                                        <a href={`mailto:${INFO_UTILITY.COMPANY_EMAIL}`}><i class="fa fa-envelope"></i> {INFO_UTILITY.COMPANY_EMAIL}</a>
                                    </li>
                                    <li>
                                        <a href="tel:1234567890"><i class="fa fa-phone"></i> {INFO_UTILITY.COMPANY_PHONE}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="top-social-icon icons-hover-black">
                                <div class="icons-hover-black">
                                    <a href> <i class="fa fa-facebook"></i> </a>
                                    <a href> <i class="fa fa-twitter"></i> </a>
                                    <a href> <i class="fa fa-youtube"></i> </a>
                                    <a href> <i class="fa fa-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="nav-wrap">
                <div class="reletiv_box">
                    <div class="container">
                        <div class="row d-flex align-items-center">
                            <div class="col-md-3">
                                <div class="logo">
                                    <a href={SECTION_LINKS_UTILITY.HOME}><img src="assets/images/Colbritish_Logo.png" alt="" /></a>
                                </div>
                                {/* Phone Menu button */}
                                <button id="menu" class="menu hidden-md-up"></button>
                            </div>
                            <div class="col-md-9 nav-bg">
                                <nav class="navigation">
                                    <ul>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.HOME}>Home</a>
                                        </li>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.ABOUT}>About us</a>
                                        </li>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.OVERVIEW}>Overview</a>
                                        </li>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.SERVICES}>Services</a>
                                        </li>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.TEAM}>Team</a>
                                        </li>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.PROJECT}>Project</a>
                                        </li>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.TESTIMONIAL}>Testimonial</a>
                                        </li>
                                        <li>
                                            <a href={SECTION_LINKS_UTILITY.CONTACT}>Contact us</a>
                                        </li>
                                    </ul>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}