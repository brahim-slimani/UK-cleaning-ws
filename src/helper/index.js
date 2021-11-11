class Helper {

    appendScript = (url) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = url.slice(10, url.length);
        document.body.appendChild(script);
    }

    importScripts = (resourceUrls) => {
        resourceUrls.forEach(url => this.appendScript(url));
    }

    appendLink = (url, rel, type) => {
        const link = document.createElement('link');
        link.rel  = rel;
        link.type = type;
        link.href = url;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    importStyles = (resourceUrls) => {
        resourceUrls.forEach(url => this.appendLink(url, 'stylesheet', 'text/css'));
    }


}
export default new Helper();