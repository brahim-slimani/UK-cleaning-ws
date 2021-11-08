import React from 'react';
import 'assets/css/header.css';


export const Header = (props) => {
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
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="index-2.html">Home Page 1</a>
                                                </li>
                                                <li>
                                                    <a href="index1.html">Home Page 2</a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#!">About us</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="about2.html">About 2</a>
                                                </li>
                                                <li>
                                                    <a href="about3.html">About 3</a>
                                                </li>
                                                <li>
                                                    <a href="history.html">history</a>
                                                </li>
                                                <li>
                                                    <a href="career.html">career</a>
                                                </li>
                                                <li>
                                                    <a href="partnerships.html">partnerships</a>
                                                </li>
                                                <li>
                                                    <a href="leadership.html">leadership</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:avoid(0);">Services</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="services.html">All Services</a>
                                                </li>
                                                <li>
                                                    <a href="services-details.html">Services Details</a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:avoid(0);">Project</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="project.html">project</a>
                                                </li>

                                                <li>
                                                    <a href="project-details.html">Projec Details</a>
                                                </li>

                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:avoid(0);">blog</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-detail.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:avoid(0);">pages</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="portfolio-masonry.html">Gallery Masonry</a>
                                                </li>
                                                <li>
                                                    <a href="portfolio-grid.html">Gallery Grid</a>
                                                </li>
                                                <li>
                                                    <a href="team.html">Team</a>
                                                </li>

                                                <li>
                                                    <a href="pricing.html">pricing</a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">Faq</a>
                                                </li>
                                                <li>
                                                    <a href="register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="testimonial.html">Testimonials</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404 Error</a>
                                                </li>
                                                <li>
                                                    <a href="blank.html">blank</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#!">Shop</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            {/* Nav Dropdown */}
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="shop.html">Shop</a>
                                                </li>
                                                <li>
                                                    <a href="shop-sidebar.html">shop sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="shop-details.html">shop details</a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">cart</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">Checkout</a>
                                                </li>
                                            </ul>
                                            {/* End Nav Dropdown */}
                                        </li>
                                        <li>
                                            <a href="#!">Contact us</a>
                                            <i class="ion-ios-plus-empty hidden-md-up"></i>
                                            <ul class="sub-nav">
                                                <li>
                                                    <a href="contact.html">contact</a>
                                                </li>
                                                <li>
                                                    <a href="contact1.html">contact 2</a>
                                                </li>
                                            </ul>
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