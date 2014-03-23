
(function () {
	function laxbreak() {
		/*jshint laxbreak: false */
		var String1, String2, String3,
			stringWarn = String1
			+ '#' // not relaxed
			+ String2 // not relaxed
			+ '=' // not relaxed
			+ String3; // not relaxed
		return stringWarn;
	}
	function laxbreakTrue() {
		/*jshint laxbreak: true */
		var String1, String2, String3,
			stringNoWarn = String1
			+ '#' // relaxed
			+ String2 // relaxed
			+ '=' // relaxed
			+ String3; // relaxed
		return stringNoWarn;
	}
	laxbreak();
	laxbreakTrue();
})();
