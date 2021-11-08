import React from 'react';
import { Header, LandingPage } from 'components/custom/';
import 'assets/css/index.css';
import 'assets/css/jquery.fancybox.css';
import 'assets/css/theme-color/default.css';
import 'assets/css/style.css';
import 'assets/css/owl.carousel.css';
//import 'assets/css/ionicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/layers.css';
import 'assets/css/settings.css';
import 'assets/css/footer.css';


export const MasterPage = (props) => {
    return (
        <div>
            <Header />
            <LandingPage />
        </div>
    );
}