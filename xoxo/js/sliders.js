$(document).ready((function(){$('.page-template-industries .our_industries_mob_slider').slick({slidesToShow:1,slidesToScroll:1,adaptiveHeight:true,pauseOnHover:false,arrows:true,dots:true,appendDots:'.page-template-industries .our-industries .lines_dots',appendArrows:'.page-template-industries .our-industries .case_line_dots',responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.page-template-industries .our_industries_mob_slider').on('afterChange',animateHeightMultiElemental_industries);$('.page-template-industries .our_industries_mob_slider').on('init',animateHeightMultiElemental_industries);var animateHeightMultiElemental_industries=function(event,slick,currentSlide,nextSlide){debugger;var _=slick;var targetHeight=0;var $activeSlides;if(_.options.adaptiveHeight===true&&_.options.vertical===false){$activeSlides=_.$slideTrack.find('.slick-active');$activeSlides.each(function(){var height=$(this).outerHeight(true);if(targetHeight<height){targetHeight=height;}});_.$list.animate({height:targetHeight},_.options.speed);}}
var case_slider_doted=$("#cases-slider-dots").slick({dots:true,arrows:true,appendDots:'.cases-slider-content .lines_dots',appendArrows:'.cases-slider-content #case_line_dots',slidesToShow:2,slidesToScroll:1,autoplay:true,cssEase:"linear",focusOnSelect:true,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,centerMode:true,centerPadding:false,}}]});let testimonials_slider_doted=$(".testemtionals-one-blockqoute-slider").slick({dots:true,arrows:true,appendDots:'.testemtionals .lines_dots',appendArrows:'.testemtionals .tesemotianals_line_dots',slidesToShow:1,slidesToScroll:1,autoplay:true,cssEase:"linear",focusOnSelect:true,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,centerMode:true,centerPadding:false,}}]});$(".we_offered_mobile_slider").slick({dots:true,arrows:true,appendDots:'.services_we_offer .lines_dots',appendArrows:'.services_we_offer .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})
$(".offering-approach_mobile_slider").slick({dots:true,arrows:true,appendDots:'.approach-lines',appendArrows:'.approach-dotts',infinite:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".testemotianals_industries_mobile_slider").slick({dots:true,arrows:true,appendDots:'.testemotioanals-lines',appendArrows:'.testemotioanals-dotts',infinite:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".steps_mobiles_slider").slick({dots:true,arrows:true,appendDots:'.steps .lines_dots',appendArrows:'.steps .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,adaptiveHeight:true,centerMode:false,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.steps_mobiles_slider').on('afterChange',animateHeightMultiElemental);$('.steps_mobiles_slider').on('init',animateHeightMultiElemental);var animateHeightMultiElemental=function(event,slick,currentSlide,nextSlide){debugger;var _=slick;var targetHeight=0;var $activeSlides;if(_.options.adaptiveHeight===true&&_.options.vertical===false){$activeSlides=_.$slideTrack.find('.slick-active');$activeSlides.each(function(){var height=$(this).outerHeight(true);if(targetHeight<height){targetHeight=height;}});_.$list.animate({height:targetHeight},_.options.speed);}}
$(".colaborations_mobile_slider").slick({dots:true,arrows:true,appendDots:'.our_colaborations .lines_dots',appendArrows:'.our_colaborations .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,adaptiveHeight:true,centerMode:false,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.colaborations_mobile_slider').on('afterChange',colaborations_animateHeightMultiElemental);$('.colaborations_mobile_slider').on('init',colaborations_animateHeightMultiElemental);var colaborations_animateHeightMultiElemental=function(event,slick,currentSlide,nextSlide){debugger;var _=slick;var targetHeight=0;var $activeSlides;if(_.options.adaptiveHeight===true&&_.options.vertical===false){$activeSlides=_.$slideTrack.find('.slick-active');$activeSlides.each(function(){var height=$(this).outerHeight(true);if(targetHeight<height){targetHeight=height;}});_.$list.animate({height:targetHeight},_.options.speed);}}
if($('.hero-redesign-img-bottom').length>0){$(".simply_testemotianls_mobile_slider").slick({arrows:true,dots:true,appendDots:'.simple_testemtionals .lines_dots',appendArrows:'.simple_testemtionals .case_line_dots',infinite:!0,autoplaySpeed:2e3,centerMode:false,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:5e3,dots:true,appendDots:'.simple_testemtionals .lines_dots',adaptiveHeight:false,},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,dots:true,adaptiveHeight:true,}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1,adaptiveHeight:true,dots:true,}}]});}else{$(".simply_testemotianls_mobile_slider").slick({arrows:true,appendArrows:'.simple_testemtionals .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:5,slidesToScroll:1,adaptiveHeight:true,centerMode:false,responsive:[{breakpoint:5e3,settings:"unslick",},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,adaptiveHeight:true,}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1,adaptiveHeight:true,}}]});}
$('.simply_testemotianls_mobile_slider').on('afterChange',animateHeightMultiElemental_test_emo);$('.simply_testemotianls_mobile_slider').on('init',animateHeightMultiElemental_test_emo);var animateHeightMultiElemental_test_emo=function(event,slick,currentSlide,nextSlide){debugger;var _=slick;var targetHeight=0;var $activeSlides;if(_.options.adaptiveHeight===true&&_.options.vertical===false){$activeSlides=_.$slideTrack.find('.slick-active');$activeSlides.each(function(){var height=$(this).outerHeight(true);if(targetHeight<height){targetHeight=height;}});_.$list.animate({height:targetHeight},_.options.speed);}}
$(".hire-experts-slider").slick({dots:true,arrows:true,appendDots:'.hire_experts .lines_dots',appendArrows:'.hire_experts .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.designers_content.active .designers_content_slider_mobile').slick({dots:true,arrows:true,appendDots:'.designers_content.active .lines_dots',appendArrows:'.designers_content.active .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".designers a.designers_tab").on("click",function(event){console.log('good')
var index=this.getAttribute('data-id');console.log(index);$('.designers_tab').removeClass("active");$('.designers_tab[data-id='+(index)+']').addClass("active");$('.designers_content').removeClass("active");$('.designers_content[data-id='+(index)+']').stop(false,true).hide().addClass("active").fadeIn("slow",function(){});$('.designers_content[data-id='+(index)+']').find('.designers_content_slider_mobile').slick({dots:true,arrows:true,appendDots:$('.designers_content[data-id='+(index)+']').find('.lines_dots'),appendArrows:$('.designers_content[data-id='+(index)+']').find('.case_line_dots'),infinite:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]});}).eq(0).addClass("active");$(".hire_testemotianls_mobile_slider").slick({arrows:true,appendArrows:'.hire_testemotianls_mobile .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".offering_mobile_slider").slick({dots:false,appendArrows:$(".off-arr",this),arrows:true,prevArrow:$(".off-arr").find('.slick-prev.slick-arrow'),nextArrow:$(".off-arr").find('.slick-next.slick-arrow'),infinite:!0,autoplaySpeed:2e3,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:5e3,settings:"unslick"},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".other_designers_slider").slick({dots:true,arrows:true,appendDots:'.other_designers .lines_dots',appendArrows:'.other_designers .case_line_dots',infinite:!0,autoplaySpeed:2e3,slidesToShow:3,slidesToScroll:1,adaptiveHeight:true,centerMode:false,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]});}));$(window).resize(function(){$(".expertise-slider").not('.slick-initialized').slick('resize');$(".offering_mobile_slider").not('.slick-initialized').slick('resize');$(".other_designers_slider").not('.slick-initialized').slick('resize');$(".page-template-industries .our_industries_mob_slider").not('.slick-initialized').slick('resize');$('.we_offered_mobile_slider').not('.slick-initialized').slick('resize');$('.offering-approach_mobile_slider').not('.slick-initialized').slick('resize');$('.testemotianals_industries_mobile_slider').not('.slick-initialized').slick('resize');$('.hire_testemotianls_mobile_slider').not('.slick-initialized').slick('resize');$('.simply_testemotianls_mobile_slider').not('.slick-initialized').slick('resize');$('.hire-experts-slider').not('.slick-initialized').slick('resize');$('.colaborations_mobile_slider').not('.slick-initialized').slick('resize');$('.steps_mobiles_slider').not('.slick-initialized').slick('resize');$('.designers_content.active .designers_content_slider_mobile').not('.slick-initialized').slick('resize');});$(window).on('orientationchange',function(){$(".expertise-slider").not('.slick-initialized').slick('resize');$(".offering_mobile_slider").not('.slick-initialized').slick('resize');$(".other_designers_slider").not('.slick-initialized').slick('resize');$(".page-template-industries .our_industries_mob_slider").not('.slick-initialized').slick('resize');$('.we_offered_mobile_slider').not('.slick-initialized').slick('resize');$('.offering-approach_mobile_slider').not('.slick-initialized').slick('resize');$('.testemotianals_industries_mobile_slider').not('.slick-initialized').slick('resize');$('.hire_testemotianls_mobile_slider').not('.slick-initialized').slick('resize');$('.simply_testemotianls_mobile_slider').not('.slick-initialized').slick('resize');$('.hire-experts-slider').not('.slick-initialized').slick('resize');$('.colaborations_mobile_slider').not('.slick-initialized').slick('resize');$('.steps_mobiles_slider').not('.slick-initialized').slick('resize');$('.designers_content.active .designers_content_slider_mobile').not('.slick-initialized').slick('resize');});