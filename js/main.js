window.onload = function(){
	fade_effect();

	$(window).scroll(function (){
		fade_effect();
	});

	function fade_effect(){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}
			if (scroll > elemPos - windowHeight + 900){
				$(this).removeClass('scrollin');
			}
		});
	};
};