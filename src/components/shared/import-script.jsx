import { useEffect } from 'react';

export const ImportScript = (resourceUrls) => {

    let appendScript = (url) => {
        const script = document.createElement('script');
        script.src = url;
        //script.async = true;
        script.id = url.slice(10, url.length);
        document.body.appendChild(script);
    }

    useEffect(() => {
        resourceUrls.forEach(url => appendScript(url));
    }, [resourceUrls]);
}