
(function () {
	function supernew() {
		/*jshint supernew: false */
		// sometimes done for singletons
		return new function () { this.exists = true; return this; }; // not relaxed
	}
	function supernewTrue() {
		/*jshint supernew: true */
		// sometimes done for singletons
		return new function () { this.exists = true; return this; }; // relaxed
	}
	supernew();
	supernewTrue();
})();
