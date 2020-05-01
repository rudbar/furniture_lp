$(document).ready(function() {



    $(".mfp-gallery").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
            verticalFit: false
        },
        gallery: {
            enabled: true
        }
    });
    
    $(".mfp-certificate").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
            verticalFit: false
        },
        gallery: {
            enabled: true
        }
    });
    
    $(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-adv").offset().top
		}, 800);
	});

    $(".s-adv").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".s-adv-item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-adv-item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '70%'
	});
    
});


$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'До нас', // Set a custom before label
        after_label: 'После нас' // Set a custom after label
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function() {
        $('.menu').toggleClass('menu_active')
    });

    /* Настройка select */
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -130 + "px" });
        return false;
    });
    $('input[type="tel" ]').mask("+7 (999) 999-99-99");
});

