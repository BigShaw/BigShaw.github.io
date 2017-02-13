

$(document).ready(function(){


	function loadSlider(){
		$('.bxslider').bxSlider();
	}




	//fade page animation

	$(".animsition").animsition({

		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    1500,
		outDuration           :    800,
		linkElement           :   '.animsition-link', 
    	// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    	loading               :    true,
    	loadingParentElement  :   'body', //animsition wrapper element
    	loadingClass          :   'animsition-loading',
    	unSupportCss          : [ 'animation-duration',
    	'-webkit-animation-duration',
    	'-o-animation-duration'
    	],
    	//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
    	//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

    	overlay               :   false,

    	overlayClass          :   'animsition-overlay-slide',
    	overlayParentElement  :   'body'
    });



	//lang
	$('.lang .langSelect').click(function(){
		var thisValue = $(this).attr('lang-attr');
		if($(this).hasClass("active")){

		} else{
			$('.lang .langSelect').removeClass("active");
			$(this).toggleClass("active");
			$("html").attr('lang',thisValue);
		}
	});


	$('.container a').click(function(e){
		e.preventDefault();
		$("#loadContentHere").html('').load('/works/myTrends.html #loadContentFrom', function(){
			alert( "Load was performed." );
			loadSlider();
		});

});



	//back to top
	$(function() {
		$(window).scroll(function(){
			var scrolltop=$(this).scrollTop();
			if(scrolltop>=200){
				$("#elevator_item").show();
			}else{
				$("#elevator_item").hide();
			}
		});
		$("#elevator").click(function(){
			$("html,body").animate({scrollTop: 0}, 500);
		});
		$(".qr").hover(function(){
			$(".qr-popup").show();
		},function(){
			$(".qr-popup").hide();
		});
	});







	// masonry
	setTimeout(function() {
		var container = document.querySelector('#container');
		var msnry = new Masonry( container, {
  			// options
  			columnWidth: 5,
  			itemSelector: '.item'
  		});
	});









	// menu-btn
	$(".menu-toggle").click(function(){
		if($(".lines").hasClass("menu-x")){
			$(".overlay").removeClass("close-menu");
			$(".lines").removeClass("menu-x");
			$('#header').css("background-color", "transparent");
			$("#navList2").slideUp( 300 );
		} else {
			$(".overlay").addClass("close-menu");
			$(".lines").addClass("menu-x");
			$('#header').css("background-color", "rgba(0,0,0,.8)");
			$("#navList2").slideDown( 300 );

			$(".close-menu").click(function(){

				$(".overlay").removeClass("close-menu");
				$(".lines").removeClass("menu-x");
				$('#header').css("background-color", "transparent");
				$("#navList2").slideUp( 300 );

			});
		}

	});
	// menu-btn-end




	$( window ).scroll(function() {
		if($(".lines").hasClass("menu-x")){
			$("#navList2").slideUp( 300 );
			$(".lines").removeClass("menu-x");
			$(".overlay").removeClass("close-menu");
		} 
	});


	$(".close-menu").click(function(){

		$(".overlay").removeClass("close-menu");
		$(".lines").removeClass("menu-x");
		$('#header').css("background-color", "transparent");
		$("#navList2").slideUp( 300 );

	});




	// grab an element
	var myElement = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init(); 



});


//this is for header image size same as window size

var divHeight = 0;

$( window ).resize(function() {
	heightUpdate();
}); /* event listener */

$(document).ready(function(){
	heightUpdate();
}); /* event listener */

function heightUpdate(){
	divHeight = $( window ).height();
	// $("#fullscreen-cover").css("height", divHeight);
}
/* responsive dom function begins */



$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > divHeight) {
		$('#header').css("background-color", "rgba(0,0,0,.8)");
	} else {
		$('#header').css("background-color", "transparent");
	}
});





