
(function () {
	/*jshint noempty: true */
	function noempty(obj) {
		var key, empty, use;
		// FAIL - first empty block not reported 
		// not a fail, for loop is not a loop
		for (key in obj) {} // empty for non-block

		if (true) {} // empty if block
		else {} // empty else block

		empty = function () {}; // empty function block
		use(key, empty);

		for (key in obj) {} // empty for non-block
	} // end noempty()
	noempty();
})();
