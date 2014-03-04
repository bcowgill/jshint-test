
(function () {
	function eqnull(a, console) {
		/*jshint eqnull: false */
		if (null == a) {
			console.log(a);
		}
		if (undefined == a) {
			console.log(a);
		}
	}
	function eqnullTrue(aT, console) {
		/*jshint eqnull: true */
		if (null == aT) {
			console.log(aT);
		}
		if (undefined == aT) {
			console.log(aT);
		}
	}
	eqnull();
	eqnullTrue();
})();
