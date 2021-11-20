import React from 'react';

export const ServiceBox = (props) => {
    let { title, image, content, link } = props;
    content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quos aperiam ipsam modi dolor suscipit asperiores perspiciatis."
    return (
        <div class="service_box">
            <figure>
                <img src={image} alt="" />
            </figure>
            <h3><a href={link}>{title}</a></h3>
            <p>
                {content}
            </p>
        </div>
    );
}