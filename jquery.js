$('.targetdiv').click(function(e) {
	if (e.offsetX > $(this).width() || e.offsetY > $(this).height()) {
		$(this).addClass('target');
		console.log('clicked');
		console.log(e.offsetX > $(this).width() || e.offsetY > $(this).height();)
	}
});
