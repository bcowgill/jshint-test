
(function () {
	function notypeof(a) {
		/*jshint notypeof: false */
		// 'fuction' instead of 'function'
		if (typeof a == "fuction") { // not relaxed
			/* ... */
		}
	}
	function notypeofTrue(a) {
		/*jshint notypeof: true */
		// 'fuction' instead of 'function'
		if (typeof a == "fuction") { // relaxed
			/* ... */
		}
	}
	notypeof();
	notypeofTrue();
})();
