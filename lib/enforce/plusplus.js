
(function () {
	/*jshint plusplus: true */
	function plusplus() {
		var x = 1, y = ++x + x--;
		return y;
	}
	plusplus();
})();
