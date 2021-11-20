import $ from 'jquery';

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
        link.rel = rel;
        link.type = type;
        link.href = url;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    importStyles = (resourceUrls) => {
        resourceUrls.forEach(url => this.appendLink(url, 'stylesheet', 'text/css'));
    }

    navbarUtils = () => {
        $(document).ready(function () {
            function navBaar() {
                var headerHeight = $('.header');
                var stricky_header_top = $('.nav-wrap');
                if (stricky_header_top.length) {
                    var stricky_header_top_Offset = headerHeight.height();
                    $(window).on('scroll', function () {
                        var top_scroll = $(window).scrollTop();
                        if (top_scroll > stricky_header_top_Offset) {
                            stricky_header_top.addClass('stricky');
                        } else {
                            stricky_header_top.removeClass('stricky');
                        }
                    });
                }
            }

            navBaar();
            $(window).on('resize', function () {
                navBaar();
            });

            var menu = $('#menu');
            var navigation = $('.navigation');
            menu.on('click', function () {
                if ($(window).width() <= 767) {
                    navigation.slideToggle('normal');
                }
                return false;
            });
            var navigationLi = $('.navigation>ul> li');
            var navigationLink = $('.navigation>ul> li >a');
            var navigationUl = $('.navigation>ul> li >ul');
            navigationLink.on('click', function () {
                if ($(window).width() <= 767) {
                    navigationLi.removeClass('on');
                    navigationUl.slideUp('normal');
                    if ($(this).next().next('ul').is(':hidden') === true) {
                        $(this).parent('li').addClass('on');
                        $(this).next().next('ul').slideDown('normal');
                    }
                }
            });
        })
    }


}
export default new Helper();
export * from './constants';