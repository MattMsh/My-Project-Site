
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


$('.menu__item').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top+1 // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});

$('.footer__nav-link').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top+1 // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});



