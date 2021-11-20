import React from 'react';

export const ProjectItem = (props) => {

    const { image, title, link } = props;

    return (
        <div class="nf-item branding spacing">
            <div class="item-box">
                <a href> <img alt="1" src={image} class="item-container" /> </a>
                <div class="link-zoom">
                    <a href class="project_links same_style"> <i class="fa fa-link"> </i> </a>
                    <a href={image} class="fancylight popup-btn same_style" data-fancybox-group="light" > <i class="fa fa-search-plus"></i> </a>
                    <div class="gallery-heading">
                        <h4><a href={link}>{title}</a></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}