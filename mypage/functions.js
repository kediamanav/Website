jQuery(document).ready(function () {

	//project show
	$(".project a").click(function() {
	  $('.showcase').fadeOut();
	  $(this.hash).show();
	});
	
	$(".hide").click(function() {
	  $('.showcase').delay(400).fadeOut();
	});
	
	// work hover
	$('.project').mouseover(function(){
		//show the box
	    $(this).children('.hover-text').stop().animate({opacity:1},300);
	});
	
	$('.project').mouseleave(function(){
	    //hide the box
	    $(this).children('.hover-text').stop().animate({opacity:0},300);
	});
	
	//active class
	$('nav a').click(function(){  
		$('nav a').addClass("active").not(this).removeClass("active");
	});
	
	
	$("img.lazy").lazyload({
	    effect : "fadeIn"
	});
		
	$('.toggle-menu').jPushMenu();

	
});


$(window).on('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#header-bkg').css('top',(0-(scrolled*.25))+'px');
    
    if ($(window).width() == 1024) {
    	$('#header-bkg').css('top',(0-(scrolled*0))+'px');
    }
    
    if ($(window).width() == 768) {
    	$('#header-bkg').css('top',(0-(scrolled*0))+'px');
    }
    
    if ($(window).width() <= 568) {
    	$('#header-bkg').css('top',(0-(scrolled*0))+'px');
    }
    
}


$(function() {
    var header = $(".toggle-menu span, 	#header .circle");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 435) {
            header.removeClass('light').addClass("dark");
        } else {
            header.removeClass("dark").addClass('light');
        }
    });
});

//For the skills window
$(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1100) {
            $(".skill li span.one").addClass("cplusplus");
            $(".skill li span.two").addClass("java");
            $(".skill li span.three").addClass("sql");
            $(".skill li span.four").addClass("htmlcss");
            $(".skill li span.five").addClass("scrum");
            $(".skill li span.six").addClass("android");
            $(".skill li span.seven").addClass("angularjs");
            $(".skill li span.eight").addClass("eiffel");
        }
    });
});

//scrollto
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').delay(170).animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	