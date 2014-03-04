
(function () {
	/*jshint maxcomplexity: 5 */
	// http://en.wikipedia.org/wiki/Cyclomatic_complexity
	function maxcomplexity(c1, f1, f2, c2, f3, f4) {
		if (c1()) {
			f1();
		}
		else {
			f2();
			if (c1()) {
				f1();
			}
			else {
				f2();
			}
		}

		if (c2()) {
			f3();
		}
		else {
			f4();
			if (c1()) {
				f1();
			}
			else {
				f2();
			}

			if (c2()) {
				f3();
			}
			else {
				f4();
			}
		}
	}
	maxcomplexity();
})();
