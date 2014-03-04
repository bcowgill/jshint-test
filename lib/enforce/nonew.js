
(function () {
	function nonew() {
		/*jshint nonew: true */
		var SomeObj = function () { return this; };
		// no new for side effects
		new SomeObj();
		// don't just call function without new
		SomeObj();
		// ok assign to a var
		var s = new SomeObj();
		return s;
	}
	nonew();
})();
