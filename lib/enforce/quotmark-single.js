
(function () {
	/*jshint quotmark: single */
	function quotmarkSingle() {
		/*jshint quotmark: single */
		// force single quotes
		var x = 'a',
			y = "n",
			z = 'a' + "b" + 'c';
		return x + y + z;
	}
	quotmarkSingle();
})();
