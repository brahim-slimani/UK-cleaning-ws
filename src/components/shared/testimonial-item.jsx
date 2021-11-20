import React from 'react';

export const TestimonialItem = (props) => {

    let { image, author, content } = props;

    return (
        <div class="testimonial_blog">
            <div class="author_detail">
                <div class="author_pic">
                    <img src={image} alt="" />
                </div>
                <h3>{author}</h3>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}