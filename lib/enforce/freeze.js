
(function () {
	/*jshint freeze: true */
	function freeze() {
		// warn not allowed to override native prototypes
		Array.prototype.count = function (value) { return 4 * value; };
	}
	freeze();
})();
