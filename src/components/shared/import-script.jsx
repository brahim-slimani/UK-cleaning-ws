import { useEffect } from 'react';

export const ImportScript = (resourceUrls) => {

    let appendScript = (url) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
    }

    useEffect(() => {
        resourceUrls.forEach(url => appendScript(url));
    }, [resourceUrls]);
}