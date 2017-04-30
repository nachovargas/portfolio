$(function(){

	//Rotate burguer menu on click
	$('.navbar-toggle').click(function(){
		$('.navbar-toggle').toggleClass('rotate90');
	});


	// smoothScroll function is applied from the document ready function
	function smoothScrool (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
	}
	smoothScrool(900);


	//hide menu on click menu-link
	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') ) {
	        $(this).collapse('hide');
	    }
	});


	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.navbar.navbar-fixed-top').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('.navbar.navbar-fixed-top').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.navbar.navbar-fixed-top').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}



});