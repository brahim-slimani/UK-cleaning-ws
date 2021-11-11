import React from 'react';
import $ from 'jquery';

export const Header = (props) => {

    $(document).ready(function () {
        function navBaar() {
            var headerHeight = $('.header');
            var stricky_header_top = $('.nav-wrap');
            if (stricky_header_top.length) {
                var stricky_header_top_Offset = headerHeight.height();
                $(window).on('scroll', function () {
                    var top_scroll = $(window).scrollTop();
                    if (top_scroll > stricky_header_top_Offset) {
                        stricky_header_top.addClass('stricky');
                    } else {
                        stricky_header_top.removeClass('stricky');
                    }
                });
            }
        }
        //navBaar();
    })

    return (
        <header id="header" class="header header-1 header_tran">
            <div id="top-bar" class="top-bar-section top-bar-bg-color">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="top_loction pull-left">
                                <ul>
                                    <li>
                                        <a href="#!"><i class="fa fa-map-marker"></i> 123 Main Street, St. NW Ste </a>
                                    </li>
                                    <li>
                                        <a href="mailto:Support@Domain.Com"><i class="fa fa-envelope"></i> Support@Domain.Com</a>
                                    </li>
                                    <li>
                                        <a href="tel:1234567890"><i class="fa fa-phone"></i> +91 123 456 7890</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="top-social-icon icons-hover-black">
                                <div class="icons-hover-black">
                                    <a href="javascript:avoid(0);"> <i class="fa fa-facebook"></i> </a>
                                    <a href="javascript:avoid(0);"> <i class="fa fa-twitter"></i> </a>
                                    <a href="javascript:avoid(0);"> <i class="fa fa-youtube"></i> </a>
                                    <a href="javascript:avoid(0);"> <i class="fa fa-dribbble"></i> </a>
                                    <a href="javascript:avoid(0);"> <i class="fa fa-linkedin"></i> </a>
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
                                    <a href="index-2.html"><img src="assets/images/logo.png" alt="" /></a>
                                </div>
                                {/* Phone Menu button */}
                                <button id="menu" class="menu hidden-md-up"></button>
                            </div>
                            <div class="col-md-9 nav-bg">
                                <nav class="navigation">
                                    <ul>
                                        <li>
                                            <a href="#!">Home</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>

                                        </li>
                                        <li>
                                            <a href="#!">About us</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>

                                        </li>
                                        <li>
                                            <a href="javascript:avoid(0);">Services</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>

                                        </li>
                                        <li>
                                            <a href="javascript:avoid(0);">Project</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>

                                        </li>

                                        <li>
                                            <a href="javascript:avoid(0);">blog</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>

                                        </li>

                                        <li>
                                            <a href="javascript:avoid(0);">pages</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>

                                        </li>
                                        <li>
                                            <a href="#!">Shop</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            {/* Nav Dropdown */}

                                            {/* End Nav Dropdown */}
                                        </li>
                                        <li>
                                            <a href="#!">Contact us</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>

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