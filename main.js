$(document).ready(function(){
	$('.menu-toggler').on('click',function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click',function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	/* data sending form to google sheet*/
	 $('.submission').on('click',function(){
		alert("eshat 3leeeek");
		location.reload(true);
	});

	$('#up').click(function(){
        $('html, body').animate({scrollTop : 0},1500);
        return false;
    });

    AOS.init({
    	easing: 'ease',
    	duration : 1800,
    	once : true
    });

    /* end of sending data*/

	/*$('nav a[href*="#"]').on('click',function(){
		$('html, body').animate(keyframes:{
			scrollTop:$($(this).attr('href')).offset().top - 100
		}, options:2000);
	});


	$('#up').on('click',function(){
		$('html, body').animate(keyframes:{
			scrollTop:0
		}, options:2000);
	});*/

	/*$('.submission').on('click', function () {
    	$('.contact .container form').find('input:text').val(''); 
    	$('input:checkbox').removeAttr('checked');
	});*/

});