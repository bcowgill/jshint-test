
(function () {
	/*jshint noempty: true */
	function noempty(obj) {
		var key, empty, use;
		// FAIL - first empty block not reported
		for (key in obj) {}

		if (true) {}
		else {}

		empty = function () {};
		use(key, empty);
	}
	noempty();
})();
