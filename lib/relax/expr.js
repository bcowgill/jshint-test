
(function () {
	function expr(a, b) {
		/*jshint expr: false */
		for (;;) {
			a == b; // not relaxed
			"an out of place thing"; // not relaxed
		}
	}
	function exprTrue(aT, bT) {
		/*jshint expr: true */
		for (aT == bT;;) {
			aT == bT; // relaxed
			"an out of place thing"; // relaxed
		}
	}
	expr();
	exprTrue();
})();
