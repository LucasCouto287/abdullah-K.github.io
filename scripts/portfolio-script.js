/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 * Original script modified by: Abdullah Khan
 */
!function(a){"use strict";a("a.page-scroll").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top-50},1250,"easeInOutExpo"),b.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image %curr%...",mainClass:"mfp-img-mobile mfp-with-zoom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:"Sorry, this image could not be loaded.<br>(click to close)"},zoom:{enabled:!0,duration:300,easing:"ease-in-out"},callbacks:{change:function(){this.isOpen&&this.wrap.addClass("mfp-open")}}})}(jQuery);
