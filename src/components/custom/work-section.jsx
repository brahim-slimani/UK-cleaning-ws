import React from 'react';
import { ProjectItem } from 'components/shared';

export const WorkSection = () => {

    const projects = [
        {
            title: 'Cleaning Services',
            image: "assets/images/project/project_1.jpg"
        },
        {
            title: 'Cleaning Services',
            image: "assets/images/project/project_2.jpg"
        },
        {
            title: 'Cleaning Services',
            image: "assets/images/project/project_3.jpg"
        },
        {
            title: 'Cleaning Services',
            image: "assets/images/project/project_4.jpg"
        },
        {
            title: 'Cleaning Services',
            image: "assets/images/project/project_5.jpg"
        },
        {
            title: 'Cleaning Services',
            image: "assets/images/project/project_6.jpg"
        }
    ];

    return (
        <section id="project" class="padding ptb-xs-40">
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
                        {/* <ul class="container-filter categories-filter">
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
                        </ul> */}
                    </div>
                </div>
                {/* End work Filter */}
                <div class="row container-grid nf-col-3">
                   {
                       projects.map((project, index) => <ProjectItem key={index} {...project} />)
                   }
                </div>
            </div>
        </section>
    );
}