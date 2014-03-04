
(function () {
	function iterator(a, console) {
		/*jshint iterator: false */
		console.log(a.__iterator__); // not relaxed
	}
	function iteratorTrue(aT, console) {
		/*jshint iterator: true */
		console.log(aT.__iterator__); // relaxed
	}
	iterator();
	iteratorTrue();
})();
