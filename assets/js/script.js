
$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('active');
	$('.menu__box').toggleClass('active');
})


$('.reviews__content').slick({
		slidesToShow: 2,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        dots: true,
	        arrows: false
	      }
	    } 
]
	}); 
