
(function () {
	/*jshint maxparams: 1 */
	function maxparams2(one, two) {
		return one + two;
	}
	/*jshint maxparams: 3 */
	function maxparams(one, two, three, four) {
		return one + two + three + four;
	}
	maxparams();
	maxparams2();
})();
