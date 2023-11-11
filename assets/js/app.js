//header(navigation)
$(function () {
	var header = $('#header'),
		introHeight = $('#intro').innerHeight(),
		scrollIndent = $(window).scrollTop()

	/* header (navigation bar) */

	checkScroll(scrollIndent)

	$(window).on('scroll', function () {
		scrollIndent = $(this).scrollTop()
		checkScroll(scrollIndent)
	})

	function checkScroll(scrollIndent) {
		if (scrollIndent >= introHeight) {
			header.addClass('header--fixed')
		} else {
			header.removeClass('header--fixed')
		}
	}

	/* scroll */
	$('[data-scroll]').on('click', function (e) {
		e.preventDefault()

		var $this = $(this),
			elementId = $this.data('scroll'),
			elemPosition = $(elementId).offset().top

		$('#header a').removeClass('header--active')
		$this.addClass('header--active')

		$('html, body').animate(
			{
				scrollTop: elemPosition,
			},
			550
		)
		$('#header__elems').removeClass('active')
		$('#header-toggle').removeClass('header-toggle--active')
	})

	/* navigation menu toggle */

	$('#header-toggle').on('click', function (e) {
		e.preventDefault()

		$('#header__elems').toggleClass('active')
		$('#header-toggle').toggleClass('header-toggle--active')
	})

	/* accrodion hiding */

	$('[data-hiding]').on('click', function (e) {
		e.preventDefault()

		$('accordion__content').removeClass('active')
		var $this = $(this),
			elementId = $this.data('hiding')

		$(elementId).slideToggle()
		$this.toggleClass('active')
	})

	/* slider */

	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	})
})
