import React from 'react';

export const WorkSection = (props) => {
    return (
        <section id="work" class="padding ptb-xs-40">
            <div class="container">
                <div class="row text-center mb-40 mb-xs-30">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div class="section-title_home">
                            <h2>Our Project</h2>
                            <span class="b-line"></span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text.
                            </p>
                        </div>
                    </div>
                </div>
                {/* work Filter */}
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <ul class="container-filter categories-filter">
                            <li>
                                <a href class="categories active" data-filter="*">All</a>
                            </li>
                            <li>
                                <a href class="categories" data-filter=".branding">Branding</a>
                            </li>
                            <li>
                                <a href class="categories" data-filter=".design">Design</a>
                            </li>
                            <li>
                                <a href class="categories" data-filter=".photo">Photo</a>
                            </li>
                            <li>
                                <a href class="categories" data-filter=".coffee">coffee</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* End work Filter */}
                <div class="row container-grid nf-col-3">

                    <div class="nf-item branding coffee spacing">
                        <div class="item-box">
                            <a href> <img alt="1" src="assets/images/project/project_1.jpg" class="item-container" /> </a>
                            <div class="link-zoom">
                                <a href="project-details.html" class="project_links same_style"> <i class="fa fa-link"> </i> </a>
                                <a href="assets/images/project/project_1.jpg" class="fancylight popup-btn same_style" data-fancybox-group="light" > <i class="fa fa-search-plus"></i> </a>
                                <div class="gallery-heading">
                                    <h4><a href>Cleaning Services</a></h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="nf-item photo spacing">
                        <div class="item-box">
                            <a> <img alt="1" src="assets/images/project/project_2.jpg" class="item-container" /> </a>
                            <div class="link-zoom">
                                <a href="project-details.html" class="project_links same_style"> <i class="fa fa-link"> </i> </a>
                                <a href="assets/images/project/project_2.jpg" class="fancylight popup-btn same_style" data-fancybox-group="light" > <i class="fa fa-search-plus"></i> </a>
                                <div class="gallery-heading">
                                    <h4><a href="#">Cleaning Services</a></h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="nf-item branding coffee spacing">
                        <div class="item-box">
                            <a> <img alt="1" src="assets/images/project/project_3.jpg" class="item-container" /> </a>
                            <div class="link-zoom">
                                <a href="project-details.html" class="project_links same_style"> <i class="fa fa-link"> </i> </a>
                                <a href="assets/images/project/project_3.jpg" class="fancylight popup-btn same_style" data-fancybox-group="light" > <i class="fa fa-search-plus"></i> </a>
                                <div class="gallery-heading">
                                    <h4><a href="#">Cleaning Services</a></h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="nf-item design spacing">
                        <div class="item-box">
                            <a> <img alt="1" src="assets/images/project/project_4.jpg" class="item-container" /> </a>
                            <div class="link-zoom">
                                <a href="project-details.html" class="project_links same_style"> <i class="fa fa-link"> </i> </a>
                                <a href="assets/images/project/project_4.jpg" class="fancylight popup-btn same_style" data-fancybox-group="light" > <i class="fa fa-search-plus"></i> </a>
                                <div class="gallery-heading">
                                    <h4><a href="#">Cleaning Services</a></h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="nf-item branding spacing">
                        <div class="item-box">
                            <a> <img alt="1" src="assets/images/project/project_5.jpg" class="item-container" /> </a>
                            <div class="link-zoom">
                                <a href="project-details.html" class="project_links same_style"> <i class="fa fa-link"> </i> </a>
                                <a href="assets/images/project/project_5.jpg" class="fancylight popup-btn same_style" data-fancybox-group="light" > <i class="fa fa-search-plus"></i> </a>
                                <div class="gallery-heading">
                                    <h4><a href="#">Cleaning Services</a></h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="nf-item photo spacing">
                        <div class="item-box">
                            <a> <img alt="1" src="assets/images/project/project_6.jpg" class="item-container" /> </a>
                            <div class="link-zoom">
                                <a href="project-details.html" class="project_links same_style"> <i class="fa fa-link"> </i> </a>
                                <a href="assets/images/project/project_6.jpg" class="fancylight popup-btn same_style" data-fancybox-group="light" > <i class="fa fa-search-plus"></i> </a>
                                <div class="gallery-heading">
                                    <h4><a href="#">Cleaning Services</a></h4>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}