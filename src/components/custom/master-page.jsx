import React, { useEffect } from 'react';
import { Header, LandingPage } from 'components/custom/';
import { ImportScript, ImportLink } from 'components/shared';


export const MasterPage = (props) => {

    const resources = [
        'assets/js/jquery.min.js',
        'assets/js/jquery.mousewheel-3.0.6.pack.js',
        'assets/js/jquery.fancybox.pack.js',
        'assets/js/jquery.magnific-popup.min.js',
        'assets/js/imagesloaded.pkgd.min.js',
        'assets/js/isotope.pkgd.min.js',
        'assets/js/jquery.themepunch.revolution.min.js',
        'assets/js/jquery.revolution.js',
        'assets/js/custom1.js',
        'assets/js/owl.carousel.js',
        'assets/js/jquery.themepunch.tools.min.js'
    ];

    const styles = [
        'assets/css/index.css',
        'assets/css/jquery.fancybox.css',
        'assets/css/theme-color/default.css',
        'assets/css/style.css',
        'assets/css/owl.carousel.css',
        'bootstrap/dist/css/bootstrap.min.css',
        'assets/css/layers.css',
        'assets/css/settings.css',
        'assets/css/footer.css',
        'jquery/dist/jquery.slim',
        'assets/css/bootstrap.min.css',
        'assets/css/font-awesome.css',
    ]

    ImportScript(resources);
    ImportLink(styles);

    return (
        <div>
            <Header />
            <LandingPage />
        </div>
    );
}