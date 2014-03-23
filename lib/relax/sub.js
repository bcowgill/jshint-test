
(function () {
	function sub(hash) {
		/*jshint sub: false */
		return hash['key']; // not relaxed
	}
	function subTrue(hash) {
		/*jshint sub: true */
		return hash['key']; // relaxed
	}
	sub();
	subTrue();
})();
