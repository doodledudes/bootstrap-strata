var Main = (function () {
	// variables
	var ctr = 0;

	// object
	return {
		init: function () {

			$('body').on('click', '.mobile-menu', function() {
				$('aside.menu').toggleClass("visible mobile");
				$(this).toggleClass('aside-open');
			});
			$(window).on('resize', function() {
				if( $(this).width() > 1023 ) {
					$('aside.menu').removeClass("visible mobile");
				}
			});

		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);
