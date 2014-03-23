
(function () {
	/*jshint esnext: true */
	function noyield() {
		// https://github.com/jshint/jshint/issues/1123
		/*jshint noyield: false */
		var of, run;

		run(function *() {
			return of(5); // not relaxed
		});
	}
	function noyieldTrue() {
		/*jshint noyield: true */
		var of, run;

		run(function *() {
			return of(5); // relaxed
		});
	}
	noyield();
	noyieldTrue();
})();
