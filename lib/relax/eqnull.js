
(function () {
	function eqnull(a, console) {
		/*jshint eqnull: false */
		if (null == a) { // not relaxed
			console.log(a);
		}
		if (undefined == a) { // not relaxed
			console.log(a);
		}
	}
	function eqnullTrue(aT, console) {
		/*jshint eqnull: true */
		if (null == aT) { // not relaxed
			console.log(aT);
		}
		if (undefined == aT) { // not relaxed
			console.log(aT);
		}
	}
	eqnull();
	eqnullTrue();
})();
