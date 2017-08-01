/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 * Original script modified by: Abdullah Khan
 */
!function(jQuery) {
    "use strict";
    jQuery("a.page-scroll").bind("click", function(b) {
        var c = jQuery(this);
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(c.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"),
        b.preventDefault()
    }),
    jQuery("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }),
    jQuery(".navbar-collapse ul li a").click(function() {
        jQuery(".navbar-toggle:visible").click()
    }),
    jQuery("#mainNav").affix({
        offset: {
            top: 100
        }
    }),
    window.sr = ScrollReveal(),
    sr.reveal(".sr-icons", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 200),
    sr.reveal(".sr-button", {
        duration: 1e3,
        delay: 200
    }),
    sr.reveal(".sr-contact", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 300)
}(jQuery);


//prevent page scroll and bounce effect for iOS Safari users
var scroll = function(e) {
    // compute state
    if (stopScrollX || stopScrollY) {
        e.preventDefault();
        e.stopPropagation();
        window.scroll(scrollToX, scrollToY);
    }
}

document.addEventListener('mousewheel', scroll, false);
