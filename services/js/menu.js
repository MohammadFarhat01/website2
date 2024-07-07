! function(n, i, a, s) {
    n.navigation = function(t, o) {
        var d = {
                responsive: !0,
                mobileBreakpoint: 768,
                showDuration: 200,
                hideDuration: 200,
                showDelayDuration: 0,
                hideDelayDuration: 0,
                submenuTrigger: "hover",
                effect: "fadeIn",
                submenuIndicator: !0,
                submenuIndicatorTrigger: !1,
                hideSubWhenGoOut: !0,
                visibleSubmenusOnMobile: !1,
                fixed: !1,
                overlay: !0,
                overlayColor: "rgba(0, 0, 0, 0.5)",
                hidden: !1,
                hiddenOnMobile: !1,
                offCanvasSide: "left",
                offCanvasCloseButton: !0,
                animationOnShow: "",
                animationOnHide: "",
                onInit: function() {},
                onLandscape: function() {},
                onPortrait: function() {},
                onShowOffCanvas: function() {},
                onHideOffCanvas: function() {}
            },
            l = this,
            r = Number.MAX_VALUE,
            u = 1,
            c = "click.nav touchstart.nav",
            f = "mouseenter focusin",
            h = "mouseleave focusout";
        l.settings = {};
        var t = (n(t), t);
        n(t).find(".nav-search").length > 0 && n(t).find(".nav-search").find("form").prepend("<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"), l.init = function() {
            l.settings = n.extend({}, d, o), l.settings.offCanvasCloseButton && n(t).find(".nav-menus-wrapper").prepend('<div class="navbar-brand navbar-head-responsive cn-d-no cn-d-fx--sm cn-ai-center">\n                            <a href="/" class="navbar-item">\n                                <img height="100%" width="100%" class="logo-web" src="/images/amazon.svg"\n                                     alt="Lime">\n                            </a>\n                           <span class=\'nav-menus-wrapper-close-button\'></span>\n                        </div>'), "right" == l.settings.offCanvasSide && n(t).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"), l.settings.hidden && (n(t).addClass("navigation-hidden"), l.settings.mobileBreakpoint = 99999), v(), l.settings.fixed && n(t).addClass("navigation-fixed"), n(t).find(".nav-toggle").on("click touchstart", function(n) {
                n.stopPropagation(), n.preventDefault(), l.showOffcanvas(), o !== s && l.callback("onShowOffCanvas"), $("html").css("overflow", "hidden")
            }), n(t).find(".nav-menus-wrapper-close-button").on("click touchstart", function() {
                l.hideOffcanvas(), o !== s && l.callback("onHideOffCanvas"), $("html").css("overflow", "auto")
            }), n(t).find(".nav-search-button, .nav-search-close-button").on("click touchstart keydown", function(i) {
                i.stopPropagation(), i.preventDefault();
                var a = i.keyCode || i.which;
                "click" === i.type || "touchstart" === i.type || "keydown" === i.type && 13 == a ? l.toggleSearch() : 9 == a && n(i.target).blur()
            }), n(t).find(".megamenu-tabs").length > 0 && O(), n(i).resize(function() {
                l.initNavigationMode(w()), y(), l.settings.hiddenOnMobile && m()
            }), l.initNavigationMode(w()), l.settings.hiddenOnMobile && m(), o !== s && l.callback("onInit")
        };
        var p = function() {
                n(t).find(".nav-submenu").hide(0), n(t).find("li")
            },
            v = function() {
                n(t).find("li").each(function() {
                    n(this).children(".nav-dropdown,.megamenu-panel").length > 0 && (n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"), l.settings.submenuIndicator && n(this).children("a").append("<span class='submenu-indicator hide'><span class='submenu-indicator-chevron fade-in'></span></span>"))
                })
            },
            m = function() {
                n(t).hasClass("navigation-portrait") ? n(t).addClass("navigation-hidden") : n(t).removeClass("navigation-hidden")
            };
        l.showSubmenu = function(i, a) {
            w() > l.settings.mobileBreakpoint && n(t).find(".nav-search").find("form").fadeOut(), "fade" == a ? n(i).children(".nav-submenu").stop(!0, !0).delay(l.settings.showDelayDuration).fadeIn(l.settings.showDuration).removeClass(l.settings.animationOnHide).addClass(l.settings.animationOnShow) : n(i).children(".nav-submenu").stop(!0, !0).delay(l.settings.showDelayDuration).slideDown(l.settings.showDuration).removeClass(l.settings.animationOnHide).addClass(l.settings.animationOnShow), $(".megamenu-list-info").addClass("relative")
        }, l.hideSubmenu = function(i, a) {
            "fade" == a ? n(i).find(".nav-submenu").stop(!0, !0).delay(l.settings.hideDelayDuration).fadeOut(l.settings.hideDuration).removeClass(l.settings.animationOnShow).addClass(l.settings.animationOnHide) : n(i).find(".nav-submenu").stop(!0, !0).delay(l.settings.hideDelayDuration).slideUp(l.settings.hideDuration).removeClass(l.settings.animationOnShow).addClass(l.settings.animationOnHide), $(".megamenu-list-info").removeClass("relative")
        };
        var g = function() {
                n("body").addClass("no-scroll"), l.settings.overlay && (n(t).append("<div class='nav-overlay-panel'></div>"), n(t).find(".nav-overlay-panel").css("background-color", l.settings.overlayColor).fadeIn(300).on("click touchstart", function(n) {
                    l.hideOffcanvas()
                }))
            },
            b = function() {
                n("body").removeClass("no-scroll"), l.settings.overlay && n(t).find(".nav-overlay-panel").fadeOut(400, function() {
                    n(this).remove()
                })
            };
        l.showOffcanvas = function() {
            g(), "left" == l.settings.offCanvasSide ? n(t).find(".nav-menus-wrapper").css("transition-property", "left").addClass("nav-menus-wrapper-open") : n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open")
        }, l.hideOffcanvas = function() {
            n(t).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function() {
                n(t).find(".nav-menus-wrapper").css("transition-property", "none").off()
            }), b()
        }, l.toggleOffcanvas = function() {
            w() <= l.settings.mobileBreakpoint && (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open") ? (l.hideOffcanvas(), o !== s && l.callback("onHideOffCanvas")) : (l.showOffcanvas(), o !== s && l.callback("onShowOffCanvas")))
        }, l.toggleSearch = function() {
            "none" == n(t).find(".nav-search").find("form").css("display") ? (n(t).find(".nav-search").find("form").fadeIn(200), n(t).find(".nav-search").find("input").focus()) : (n(t).find(".nav-search").find("form").fadeOut(200), n(t).find(".nav-search").find("input").blur())
        }, l.initNavigationMode = function(i) {
            l.settings.responsive ? (i <= l.settings.mobileBreakpoint && r > l.settings.mobileBreakpoint && (n(t).addClass("navigation-portrait").removeClass("navigation-landscape"), _(), o !== s && l.callback("onPortrait")), i > l.settings.mobileBreakpoint && u <= l.settings.mobileBreakpoint && (n(t).addClass("navigation-landscape").removeClass("navigation-portrait"), S(), b(), l.hideOffcanvas(), o !== s && l.callback("onLandscape")), r = i, u = i) : (n(t).addClass("navigation-landscape"), S(), o !== s && l.callback("onLandscape"))
        };
        var C = function() {
                n("html").on("click.body touchstart.body", function(i) {
                    0 === n(i.target).closest(".navigation").length && (n(t).find(".nav-submenu").fadeOut(), n(t).find(".nav-search").find("form").fadeOut())
                })
            },
            w = function() {
                return i.innerWidth || a.documentElement.clientWidth || a.body.clientWidth
            },
            k = function() {
                n(t).find(".nav-menu").find("li, a").off(c).off(f).off(h)
            },
            y = function() {
                if (w() > l.settings.mobileBreakpoint) {
                    var i = n(t).outerWidth(!0);
                    n(t).find(".nav-menu").children("li").children(".nav-submenu").each(function() {
                        n(this).parent().position().left + n(this).outerWidth() > i ? n(this).css("right", 0) : n(this).css("right", "auto")
                    })
                }
            },
            O = function() {
                function i(i) {
                    var a = n(i).children(".megamenu-tabs-nav").children("li"),
                        s = n(i).children(".megamenu-tabs-pane");
                    n(a).on("click.tabs touchstart.tabs", function(i) {
                        i.stopPropagation(), i.preventDefault(), n(a).removeClass("active"), n(this).addClass("active"), n(s).hide(0).removeClass("active"), n(s[n(this).index()]).show(0).addClass("active")
                    })
                }
                if (n(t).find(".megamenu-tabs").length > 0)
                    for (var a = n(t).find(".megamenu-tabs"), s = 0; s < a.length; s++) i(a[s])
            },
            S = function() {
                k(), p(), navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || "click" == l.settings.submenuTrigger ? n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(c, function(a) {
                    if (l.hideSubmenu(n(this).parent("li").siblings("li"), l.settings.effect), n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(l.settings.hideDuration), n(this).siblings(".nav-submenu").length > 0) {
                        if (a.stopPropagation(), a.preventDefault(), "none" == n(this).siblings(".nav-submenu").css("display")) return l.showSubmenu(n(this).parent("li"), l.settings.effect), y(), !1;
                        if (l.hideSubmenu(n(this).parent("li"), l.settings.effect), "_blank" === n(this).attr("target") || "blank" === n(this).attr("target")) i.open(n(this).attr("href"));
                        else {
                            if ("#" === n(this).attr("href") || "" === n(this).attr("href") || "javascript:void(0)" === n(this).attr("href")) return !1;
                            i.location.href = n(this).attr("href")
                        }
                    }
                }) : n(t).find(".nav-menu").find("li").on(f, function() {
                    l.showSubmenu(this, l.settings.effect), y()
                }).on(h, function() {
                    l.hideSubmenu(this, l.settings.effect)
                }), l.settings.hideSubWhenGoOut && C()
            },
            _ = function() {
                k(), p(), l.settings.visibleSubmenusOnMobile ? n(t).find(".nav-submenu").show(0) : (n(t).find(".submenu-indicator").removeClass("submenu-indicator-up"), l.settings.submenuIndicator && l.settings.submenuIndicatorTrigger ? n(t).find(".submenu-indicator").on(c, function(i) {
                    return i.stopPropagation(), i.preventDefault(), l.hideSubmenu(n(this).parent("a").parent("li").siblings("li"), "slide"), l.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).parent("a").siblings(".nav-submenu").css("display") ? (n(this).addClass("submenu-indicator-up"), n(this).parent("a").addClass("opened").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), l.showSubmenu(n(this).parent("a").addClass("opened").parent("li"), "slide"), !1) : (n(this).parent("a").addClass("opened").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), void l.hideSubmenu(n(this).parent("a").parent("li"), "slide"))
                }) : n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(c, function(a) {
                    if (a.stopPropagation(), a.preventDefault(), l.hideSubmenu(n(this).parent("li").siblings("li"), l.settings.effect), l.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).siblings(".nav-submenu").css("display")) return n(this).children(".submenu-indicator").addClass("submenu-indicator-up").parent().addClass("opened"), n(this).parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up").parent().removeClass("opened"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up").parent().removeClass("opened"), l.showSubmenu(n(this).parent("li"), "slide"), !1;
                    if (n(this).parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up").parent().removeClass("opened"), l.hideSubmenu(n(this).parent("li"), "slide"), "_blank" === n(this).attr("target") || "blank" === n(this).attr("target")) i.open(n(this).attr("href"));
                    else {
                        if ("#" === n(this).attr("href") || "" === n(this).attr("href") || "javascript:void(0)" === n(this).attr("href")) return !1;
                        i.location.href = n(this).attr("href")
                    }
                }))
            };
        l.callback = function(n) {
            o[n] !== s && o[n].call(t)
        }, l.init()
    }, n.fn.navigation = function(i) {
        return this.each(function() {
            if (s === n(this).data("navigation")) {
                var a = new n.navigation(this, i);
                n(this).data("navigation", a)
            }
        })
    }
}(jQuery, window, document),
function(n) {
    "use strict";
    var i = n(window);
    n.fn.navigation && (n("#navigation1").navigation(), n("#always-hidden-nav").navigation({
        hidden: !0
    })), i.on("load", function() {
        n("#preloader").fadeOut("slow", function() {
            n(this).remove()
        })
    }), n(".megamenu-panel").removeClass("hidden"), n(".megamenu-panel").removeClass("open"), n(window).outerWidth() > 768 ? (n(".navbar").addClass("navigation-landscape"), n(".navbar").removeClass("navigation-portrait"), n(".has-dropdown-flex.sub_nav_noscrolled").on("mouseenter", function(i) {
        n(this).addClass("focus"), n(this).find(".nav-submenu").addClass("open"), n(this).find(".nav-submenu").removeClass("hidden")
    }), n(".has-dropdown-flex.sub_nav_noscrolled").on("mouseleave", function(i) {
        n(this).find(".nav-submenu").removeClass("open"), n(this).find(".nav-submenu").addClass("hidden"), n(this).removeClass("focus")
    }), n(".has-dropdown-flex.sub_nav_noscrolled").on("click", function(i) {
        i.target === this && (n(this).toggleClass("focus"), n(this).find(".nav-submenu").toggleClass("open"), n(this).find(".nav-submenu").css("display", "block"), n(this).find(".nav-submenu").toggleClass("hidden"))
    })) : (n(".navbar").removeClass("navigation-landscape"), n(".navbar").addClass("navigation-portrait")), n(window).resize(function() {
        n(".megamenu-panel").removeClass("hidden"), n(".megamenu-panel").removeClass("open"), n(window).outerWidth() > 768 ? (n(".navbar").addClass("navigation-landscape"), n(".navbar").removeClass("navigation-portrait"), n(".has-dropdown-flex.sub_nav_noscrolled").on("mouseenter", function(i) {
            n(this).addClass("focus"), n(this).find(".nav-submenu").addClass("open"), n(this).find(".nav-submenu").removeClass("hidden")
        }), n(".has-dropdown-flex.sub_nav_noscrolled").on("mouseleave", function(i) {
            n(this).find(".nav-submenu").removeClass("open"), n(this).find(".nav-submenu").addClass("hidden"), n(this).removeClass("focus")
        }), n(".has-dropdown-flex.sub_nav_noscrolled").on("click", function(i) {
            e.target === this && (n(this).toggleClass("focus"), n(this).find(".nav-submenu").toggleClass("open"), n(this).find(".nav-submenu").css("display", "block"), n(this).find(".nav-submenu").toggleClass("hidden"))
        })) : (n(".navbar").removeClass("navigation-landscape"), n(".navbar").addClass("navigation-portrait"))
    }), n(window).on("orientationchange", function() {
        n(".megamenu-panel").removeClass("hidden"), n(".megamenu-panel").removeClass("open"), n(window).outerWidth() > 768 ? (n(".navbar").addClass("navigation-landscape"), n(".navbar").removeClass("navigation-portrait"), n(".has-dropdown-flex.sub_nav_noscrolled").on("mouseenter", function(i) {
            n(this).addClass("focus"), n(this).find(".nav-submenu").addClass("open"), n(this).find(".nav-submenu").removeClass("hidden")
        }), n(".has-dropdown-flex.sub_nav_noscrolled").on("mouseleave", function(i) {
            n(this).find(".nav-submenu").removeClass("open"), n(this).find(".nav-submenu").addClass("hidden"), n(this).removeClass("focus")
        }), n(".has-dropdown-flex.sub_nav_noscrolled").on("click", function(i) {
            e.target === this && (n(this).toggleClass("focus"), n(this).find(".nav-submenu").toggleClass("open"), n(this).find(".nav-submenu").css("display", "block"), n(this).find(".nav-submenu").toggleClass("hidden"))
        })) : (n(".navbar").removeClass("navigation-landscape"), n(".navbar").addClass("navigation-portrait"))
    })
}(jQuery), $(document).ready(function() {
    $(window).outerWidth() > 768 && ($(".has-dropdown-flex.sub_nav_scrolled:not(.has-dropdown-flex.sub_nav_noscrolled)").on("mouseenter", function(n) {
        $(this).toggleClass("focus"), $(this).find(".nav-submenu").toggleClass("open"), $(this).find(".nav-submenu").toggleClass("hidden")
    }), $(".has-dropdown-flex.sub_nav_scrolled:not(.has-dropdown-flex.sub_nav_noscrolled)").on("mouseleave", function(n) {
        $(this).find(".nav-submenu").toggleClass("open"), $(this).find(".nav-submenu").toggleClass("hidden"), $(this).toggleClass("focus")
    }), $(".has-dropdown-flex.sub_nav_scrolled:not(.has-dropdown-flex.sub_nav_noscrolled)").on("click", function(n) {
        e.target === this && ($(this).toggleClass("focus"), $(this).find(".nav-submenu").toggleClass("open"), $(this).find(".nav-submenu").toggleClass("hidden"))
    })), 0 === $(".hero-blog").length && AOS.init({
        once: !0
    }), $(".navigation-portrait .nav-menu > li > a").on("click", function(n) {
        $(this).addClass("bg")
    })
})