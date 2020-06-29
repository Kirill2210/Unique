$(function(){


	$('.slick__slide').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: false,
	  nextArrow: false
	});

	$('.header__list').on('click', function(){
  	$('.navbar').slideToggle();
  	})


});