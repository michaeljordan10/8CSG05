var $;
jQuery(document).ready(function() {
    jQuery("#small").click(function(e) {
        e.preventDefault(), jQuery("h1,h2,h3,p").animate({
            "font-size": "90%"
        })
    }), jQuery("#medium").click(function(e) {
        e.preventDefault(), jQuery("h1").animate({
            "font-size": "26px"
        }), jQuery("h2").animate({
            "font-size": "20px"
        }), jQuery("h3").animate({
            "font-size": "18px"
        }), jQuery("p").animate({
            "font-size": "14px"
        }), jQuery("p.fs-16").animate({
            "font-size": "16px"
        })
    }), jQuery("#large").click(function(e) {
        e.preventDefault(), jQuery("h1,h2,h3").animate({
            "font-size": "140%"
        }), jQuery("p").animate({
            "font-size": "120%"
        })
    }), jQuery(".font-resizer a").click(function() {
        jQuery(".font-resizer a").removeClass("selected"), jQuery(this).addClass("selected")
    }), jQuery(".thumb").click(function() {
        jQuery.noConflict(), jQuery(".modal-body").empty();
        var e = jQuery(this).parent("a").attr("title");
        jQuery(".modal-title").html(e), jQuery(jQuery(this).parents("div").html()).appendTo(".modal-body"), jQuery("#photo-gallery-modal").modal({
            show: !0
        })
    }), jQuery(".accordion_head").click(function() {
        jQuery(".accordion_body").is(":visible") && (jQuery(".accordion_body").slideUp(300), jQuery(".plusminus").text("keyboard_arrow_down")), jQuery(this).next(".accordion_body").is(":visible") ? (jQuery(this).next(".accordion_body").slideUp(300), jQuery(this).children(".plusminus").text("keyboard_arrow_down")) : (jQuery(this).next(".accordion_body").slideDown(300), jQuery(this).children(".plusminus").text("keyboard_arrow_up"))
    })
}), setInterval(function() {
    jQuery("#next333").click()
}, 4e3), jQuery, jQuery(document).ready(function() {
    jQuery(".owl-carousel").owlCarousel({
        loop: 0,
        margin: 10,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 2
            }
        }
    })
}), jQuery(".fields_title mb-5").removeAttr("lang"), jQuery(".icon-gradient-yellow").removeAttr("style"), window.innerWidth <= 767 ? jQuery("#langselect").slice(0).remove() : jQuery("#langselect:not(:last-child)").slice(1).remove(), navigator.userAgent.match(/iPhone/i) && (jQuery(".item-2549 a").attr("href", "https://apps.apple.com/in/app/maadhaar/id1435469474"), jQuery("#tjmod-280 .text-center a").attr("href", "https://apps.apple.com/in/app/maadhaar/id1435469474")), jQuery(document).ready(function() {
    jQuery("#popup").hide().fadeIn(1e3), jQuery(".close").on("click", function(e) {
        e.preventDefault(), jQuery("#popup").fadeOut(1e3), jQuery("#popupdisable").css("display", "none")
    })
}), jQuery("#footer-1 .icon-gradient-yellow:first").html("<img src='/images/call.png' alt='phone' width='18px' height='18'/>"), jQuery("#footer-1 .icon-gradient-yellow:last").html("<img src='/images/email.png' alt='phone' width='18px' height='18'/>");