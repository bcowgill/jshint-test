
(function () {
	function sub(hash) {
		/*jshint sub: false */
		return hash['key'];
	}
	function subTrue(hash) {
		/*jshint sub: true */
		return hash['key'];
	}
	sub();
	subTrue();
})();
