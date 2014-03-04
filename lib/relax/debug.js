
(function () {
	function debug() {
		/*jshint debug: false */
		debugger; // not relaxed
	}
	function debugTrue() {
		/*jshint debug: true */
		debugger; // relaxed
	}
	debug();
	debugTrue();
})();
