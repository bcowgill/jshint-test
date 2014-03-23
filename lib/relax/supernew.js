
(function () {
	function supernew() {
		/*jshint supernew: false */
		// sometimes done for singletons
		return new function () { // not relaxed
			this.exists = true; return this;
		}; // not relaxed
	}
	function supernewTrue() {
		/*jshint supernew: true */
		// sometimes done for singletons
		return new function () { // relaxed
			this.exists = true; return this;
		}; // relaxed
	}
	supernew();
	supernewTrue();
})();
