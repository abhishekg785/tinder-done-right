(function(d) {

	// reduce the time for fast swipe, if you want :P
	let timeInterval = 500; // time is in milli seconds

	setInterval(() => {
		document.getElementsByClassName('recsGamepad__button--like')[0].click();
	}, timeInterval);

})(document);
