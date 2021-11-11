import React, { useEffect, useState } from 'react';
import { Header, LandingPage, AboutSection } from 'components/custom/';
import { Loader } from 'components/shared'
import Helper from 'helper/index';


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
        "assets/js/custom1.js",
        'assets/js/custom.js',
        "assets/js/tether.min.js",
        "assets/js/bootstrap.min.js",
        "assets/js/jquery.easing.js"
    ];

    const styles = [
        //'assets/css/index1.css',
        'assets/css/header1.css',
        'assets/css/index.css',
        'assets/css/header.css',
        'assets/css/jquery.fancybox.css',

        'assets/css/bootstrap.min.css',
        'assets/css/style.css',
        'assets/css/owl.carousel.css',
        //'assets/css/bootstrap.min.css',
        'assets/css/layers.css',
        'assets/css/settings.css',
        'assets/css/footer1.css',
        'assets/css/footer.css',
        'assets/css/font-awesome.css',
        'assets/css/ionicons.css',
        'assets/css/theme-color/default.css',
    ]


    const [shouldbeRendred, setShouldbeRendred] = useState(false);

    useEffect(() => {
        Helper.importStyles(styles);
        Promise.resolve(Helper.importScripts(['/assets/js/jquery.min.js'])).then(() => {
            window.onload = () => {
                if (window.jQuery) {
                    // jQuery is loaded  
                    Helper.importScripts(resources);
                    setShouldbeRendred(true);
                } else {
                    // jQuery is not loaded
                    alert("Something went rong !");
                }
            }
        });
    }, []);


    return (
        <>
            {
                !shouldbeRendred ?
                    <Loader />
                    :
                    <>
                        <Header />
                        <LandingPage />
                        <AboutSection />
                    </>
            }
        </>
    );
}
