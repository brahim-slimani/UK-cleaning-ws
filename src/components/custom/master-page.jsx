import React, { useEffect, useState } from 'react';
import { Header, LandingPage } from 'components/custom/';
import { ImportScript, ImportLink } from 'components/shared';
import $ from 'jquery';


let appendScript = (url) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    //script.async = true;
    script.id = url.slice(10, url.length);
    document.body.appendChild(script);
}

const importScripts = (resourceUrls) => {
    resourceUrls.forEach(url => appendScript(url));
}

export const MasterPage = () => {

    const resources = [
        //"assets/js/jquery.min.js",
        // fancybox Js 
        "assets/js/jquery.mousewheel-3.0.6.pack.js",
        "assets/js/jquery.fancybox.pack.js",
        // popup 
        "assets/js/jquery.magnific-popup.min.js",
        //  carousel Js
        "assets/js/owl.carousel.js",
        // imagesloaded Js
        "assets/js/imagesloaded.pkgd.min.js",
        // masonry,isotope Effect Js 
        "assets/js/isotope.pkgd.min.js",
        // Mail Function Js
        "assets/js/mail.js",
        // revolution Js
        "assets/js/jquery.themepunch.tools.min.js",
        "assets/js/jquery.themepunch.revolution.min.js",
        "assets/js/jquery.revolution.js",
        // custom Js
        "assets/js/custom1.js"
    ];

    const styles = [
        'assets/css/index1.css',
        'assets/css/header1.css',
        'assets/css/jquery.fancybox.css',
        'assets/css/theme-color/default.css',
        'assets/css/style.css',
        'assets/css/owl.carousel.css',
        'bootstrap/dist/css/bootstrap.min.css',
        'assets/css/layers.css',
        'assets/css/settings.css',
        'assets/css/footer1.css',
        'jquery/dist/jquery.slim',
        'assets/css/bootstrap.min.css',
        'assets/css/font-awesome.css',
    ]

    //ImportScript(resources);
    ImportLink(styles);

    const [shouldbeRendred, setShouldbeRendred] = useState(false);

    const importJquery = () => {
        var script = document.createElement('script');
        script.src = '/assets/js/jquery.min.js';//"http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";//'https://code.jquery.com/jquery-3.4.1.min.js';
        script.type = 'text/javascript';
        script.id = 'jquery-lib'
        document.body.appendChild(script);
    }


    useEffect(() => {
        Promise.resolve(importJquery()).then(() => {
            window.onload = function () {
                if (window.jQuery) {
                    // jQuery is loaded  
                    importScripts(resources);
                    setShouldbeRendred(true);
                } else {
                    // jQuery is not loaded
                    alert("Doesn't Work");
                }
            }
        });
    }, [])


    return (
        <>
            {
                !shouldbeRendred ?
                    <div div id="preloader">
                        <div class="sk-circle">
                            <div class="sk-circle1 sk-child"></div>
                            <div class="sk-circle2 sk-child"></div>
                            <div class="sk-circle3 sk-child"></div>
                            <div class="sk-circle4 sk-child"></div>
                            <div class="sk-circle5 sk-child"></div>
                            <div class="sk-circle6 sk-child"></div>
                            <div class="sk-circle7 sk-child"></div>
                            <div class="sk-circle8 sk-child"></div>
                            <div class="sk-circle9 sk-child"></div>
                            <div class="sk-circle10 sk-child"></div>
                            <div class="sk-circle11 sk-child"></div>
                            <div class="sk-circle12 sk-child"></div>
                        </div>
                    </div>

                    :
                    <>
                        <Header />
                        <LandingPage />
                    </>
            }
        </>
    );
}
