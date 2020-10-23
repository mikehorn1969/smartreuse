
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*	navigation	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	/* toggle "navbar-no-bg" class */
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
	/* add padding top to show content behind navbar */
	$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

	/* detect scroll top or down */
	if ($('.smart-scroll').length > 0) { // check if element exists
		var last_scroll_top = 0;
		$(window).on('scroll', function() {
			scroll_top = $(this).scrollTop();
			if(scroll_top < last_scroll_top) {
				$('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
			}
			else {
				$('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
			}
			last_scroll_top = scroll_top;
		});
	}

    /* Background slideshow */
    $('.top-content').backstretch("assets/img/backgrounds/chair1.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/chair1.jpg");
    $('.testimonials-container').backstretch("assets/img/backgrounds/chair1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
	
});


jQuery(window).load(function() {
	
	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

