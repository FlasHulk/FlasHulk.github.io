$(document).ready(function() {

		//PopUp
	  $('.pop-up-open').on('click', function(event) {
	    event.preventDefault();
	    $('.pop-up').fadeIn();
	  });
	  $('.pop-up-close').on('click', function(event) {
	    event.preventDefault();
	    $('.pop-up').fadeOut();
	  });
	  //Slider
	  $('.slider-technology').slick({
	    arrows: false,
	    dots: true,
	  });
	  $('.slider-advantages').slick({
	    arrows: false,
	    dots: true,
	  });
	  $('.slider-interpreters').slick({
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 4
	  });
	  $('.slider-reviews').slick({
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 4
	  });
	  //fixed menu
	  var nav = $('.top-nav');
	  
	  $(window).scroll(function () {
	  	if ($(this).scrollTop() > 900) {
	  		nav.addClass("fixed");
	  	} else {
	  		nav.removeClass("fixed");
	  	}
	  });
	  //menu scrol
	  $('nav .nav .menu li a').click(function(){
	  	var element = $(this).attr('href');
	  	var dist = $(element).offset().top;

	  	$('html, body').animate({'scrollTop': dist}, 1000);

	  	return false;
	  });
	  //menu active
	  /*
	  $(window).scroll(function(){
	  	$('section[id]').each(function(){
	  		var id = $(this).attr('id');
	  		if($(this).offset().top-100 < $(window).scrollTop()){
	  			$('nav .nav .menu li a[href=#'+id+']').addClass('nav-active').siblings().removeClass('nav-active');
	  		}

	  		if($(window).scrollTop() < 900) {
	  			$('nav .nav .menu li a').removeClass('nav-active');
	  		}

	  	});
	  });*/
});