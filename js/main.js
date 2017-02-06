if (screen && screen.width < 991) {
	var scrolled;
	var lastScroll = 0;
	var diff = 5;
	var navHeight = $('.navbar').outerHeight();

	$(window).scroll(function(event){
		scrolled = true;
	});

	setInterval(function() {
		if (scrolled) {
			hasScrolled();
			scrolled = false;
		}
	}, 250);
}

function hasScrolled() {
	var distToTop = $(this).scrollTop();
	if(Math.abs(lastScroll - distToTop) <= diff)
		return;
	if (distToTop > lastScroll && distToTop > navHeight){
		$('.navbar').addClass('nav-up');
	} else {
		if(distToTop + $(window).height() < $(document).height()) {
			$('.navbar').removeClass('nav-up');
		}
	}
	lastScroll = distToTop;
}