import React from 'react';

export const LandingPageCarouselItem = (props) => {

    const { image, title, content, dataIndex, slideId } = props;

    return (
        <li data-index={dataIndex}  >
            <img src={image} alt="" class="rev-slidebg" />

            <div class="tp-caption Newspaper-Title tp-resizeme "
                id={slideId}
                data-x="['left','left','left','left']" data-hoffset="['100','50','50','30']"
                data-y="['top','top','top','center']" data-voffset="['230','135','50','0']"
                data-fontsize="['50','50','50','30']"
                data-lineheight="['55','55','55','35']"
                data-width="['700','700','700','720']"
                data-height="none"
                data-whitespace="normal"
                data-transform_idle="o:1;"
                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on" >
                <div class="banner-text">
                    <span class="sub-text">we are here to help you</span>
                    <h2>{title}</h2>
                    <p>
                        {content}
                    </p>
                    <a class="btn-text" href style={{ padding: "17px" }}> Read More</a>
                </div>
            </div>
        </li>
    );
}