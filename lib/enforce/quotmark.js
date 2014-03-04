
(function () {
	/*jshint quotmark: true */
	function quotmark() {
		// consistency in quote marks
		var x = 'a',
			y = "n",
			z = 'a' + "b" + 'c';
		return x + y + z;
	}
	quotmark();
})();
