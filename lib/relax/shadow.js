
(function () {
	function shadow(passedIn) {
		/*jshint shadow: false */
		if (passedIn) {
			var passedIn = 42; // not relaxed
			return passedIn;
		}
	}
	function shadowTrue() {
		/*jshint shadow: true */
		if (passedIn) {
			var passedIn = 42; // relaxed
			return passedIn;
		}
	}
	shadow();
	shadowTrue();
})();
