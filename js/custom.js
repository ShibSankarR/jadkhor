
jQuery(document).ready(function () {

// Menu
jQuery('.stellarnav').stellarNav({
  theme: 'light',
  breakpoint: 960,
  position: 'right',
  //phoneBtn: '18009997788',
  //locationBtn: 'https://www.google.com/maps'
});





// banner Slider

$('.banner-slider').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav:true,
  autoplay: false,
  autoplayHoverPause:true,
  animateIn:"fadeIn",
  animateOut:"fadeOut",   
  slideSpeed : 8000,
  autoplaySpeed : 4000,
  navText: [
    '<i class="fas fa-angle-left" aria-hidden="true"></i>',
    '<i class="fas fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


//banner text effect
var spanWidth = $('.text span').width();
$('.text').animate( { width: '100%' }, 6000 );



// donor list Slider

$('.donor-list-slider').owlCarousel({
  loop:true,
  margin:20,
  dots: false,
  nav:false,
  autoplay: true,
  autoplayHoverPause:true,
  animateIn:"fadeIn",
  animateOut:"fadeOut",   
  slideSpeed : 8000,
  autoplaySpeed : 4000,
  navText: [
    '<i class="fas fa-angle-left" aria-hidden="true"></i>',
    '<i class="fas fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
})




// Blog Slider

$('.blog-slider').owlCarousel({
  loop:true,
  margin:20,
  dots: false,
  nav:false,
  autoplay: true,
  autoplayHoverPause:true,
  animateIn:"fadeIn",
  animateOut:"fadeOut",   
  slideSpeed : 8000,
  autoplaySpeed : 4000,
  navText: [
    '<i class="fas fa-angle-left" aria-hidden="true"></i>',
    '<i class="fas fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})








	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 100,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 100,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});



  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
  












});