
(function () {
	/*jshint quotmark: double */
	function quotmarkDouble() {
		/*jshint quotmark: double */
		// force double quotes
		var x = 'a',
			y = "n",
			z = 'a' + "b" + 'c';
		return x + y + z;
	}
	quotmarkDouble();
})();
