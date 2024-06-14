targetdiv = document.querySelector('span');
targetdiv.addEventListener('click', function(e) {
	if (e.offsetX > targetdiv.offsetWidth) {
		console.log('clicked');
		targetdiv.className = 'target';
	}
});
