 $(function(){
	 

    // Global Vriable

    var shapers = $(window);
    var page = $('html, body');

   	 
	 //====================================================================//
    // menu fix on scroll
	 
    shapers.on('scroll',function(){
        if (shapers.scrollTop() > 150) {
             $('.menu_part').addClass('animated slideInDown fix')
          } else {
              $('.menu_part').removeClass('animated slideInDown fix')
          }
    });
	 
	 	  //    type_js

    var typed = new Typed('.type', {
        strings: ['Creative Designer'],
        loop: true,
        startDelay: 300,
		backDelay: 1500,
        typeSpeed: 105,
        backSpeed: 85,
        cursorChar: '|',

    });
	 
//	 veno box plugin
	 
	 $('.venobox').venobox({
		  border: '5px',
        bgcolor: '#27b3f0',
        closeBackground: '#000',
        overlayColor: 'rgba(97, 191, 232, 0.69)',
        arrowsColor: '#000',
        spinner: 'wave',
        spinColor: '#0707be',
        titleColor: '#fff',
	 });
	 
//	 owlcarosoul slider  
	 
	 $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        dots: false,
        nav: false,
		items: 2,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            }
        }
    });
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 //back to top 
	 
	 if ($('#back-to-top').length) {
    var scrollTrigger = 300, // px
        backToTop = function () {
            var scrollTop = shapers.scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
				$('#back-to-top').addClass('animated slideInUp');
            } else {
                $('#back-to-top').removeClass('show');
				$('#back-to-top').removeClass('animated slideInUp');
            }
        };
    backToTop();
   shapers.on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 'show');
    });
}
	 
	 
	 
	 
	 
	 

 });