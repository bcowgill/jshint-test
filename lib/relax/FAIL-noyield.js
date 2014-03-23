
(function () {
	/*jshint esnext: true */
	function noyield() {
		// https://github.com/jshint/jshint/issues/1123
		/*jshint noyield: false */ // FAIL invalid option
		var of, run;

		run(function *() {
			return of(5); // not relaxed
		}); // not relaxed
	}
	function noyieldTrue() {
		/*jshint noyield: true */ // FAIL invalid option
		var of, run;

		run(function *() {
			return of(5); // relaxed
		}); // relaxed FAIL - still warns
	}
	noyield();
	noyieldTrue();
})();
