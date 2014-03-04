
(function () {
	/*jshint eqeqeq: true */
	// http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/
	function eqeqeq() {
		var that, mine, result, hardError;
		result = this == that || this != mine;
		/* jshint eqeqeq: false */
		hardError = this == null || this != null;
	}
	eqeqeq();
})();
