import { useEffect } from 'react';

export const ImportLink = (resourceUrls) => {

    let appendLink = (url) => {
        const link = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        //link.media = 'all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    useEffect(() => {
        resourceUrls.forEach(url => appendLink(url));
    }, [resourceUrls]);
}