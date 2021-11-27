import React from 'react';
import { LandingPageCarouselItem } from 'components/shared';

export const LandingPage = () => {

    const landingItems = [
        {
            dataIndex: "rs-129",
            slideId: "slide-129-layer-1",
            image: "assets/images/banner/slider1.jpg",
            title: "The best cleaning company in the country",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever.            "
        },
        {
            dataIndex: "rs-130",
            slideId: "slide-130-layer-1",
            image: "assets/images/banner/slider2.jpg",
            title: "Professional Cleaning Services Provider",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever.            "
        },
        {
            dataIndex: "rs-131",
            slideId: "slide-131-layer-1",
            image: "assets/images/banner/slider3.jpg",
            title: "We Are Cleaning Manager Always at Your Service",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever.            "
        }
    ]

    return (
        <section id="home" class="main-banner banner_up">
            <div id="rev_slider_34_1_wrapper" class="rev_slider_wrapper" data-alias="news-gallery34">
                {/* START REVOLUTION SLIDER 5.0.7 fullwidth mode  */}
                <div id="rev_slider_34_1" class="rev_slider" data-version="5.0.7">
                    <ul>
                        {
                            landingItems.map((item, index) => <LandingPageCarouselItem key={index} {...item} />)
                        }
                    </ul>
                    <div class="tp-bannertimer tp-bottom"></div>
                </div>
            </div>
            {/* Main Banner End Here */}
        </section>
    );
}