
(function () {
	function loopfunc() {
		/*jshint loopfunc: false */
		var i, nums = [];

		for (i = 0; i < 10; i++) {
			nums[i] = function (j) {
				return i + j;
			}; // not relaxed
		}
	}
	function loopfuncTrue() {
		/*jshint loopfunc: true */
		var i, nums = [];

		for (i = 0; i < 10; i++) {
			nums[i] = function (j) {
				return i + j;
			}; // relaxed
		}
	}
	loopfunc();
	loopfuncTrue();
})();
