
(function () {
	function shadow(passedIn) {
		/*jshint shadow: false */
		if (passedIn) {
			// shadow variable declared same as outer scope
			var passedIn = 42; // not relaxed
			return passedIn;
		}
	}
	function shadowTrue() {
		/*jshint shadow: true */
		if (passedIn) {
			// shadow variable declared same as outer scope
			var passedIn = 42; // relaxed
			return passedIn;
		}
	}
	shadow();
	shadowTrue();
})();
