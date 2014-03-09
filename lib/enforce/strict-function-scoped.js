
(function () {
	/*jshint strict: true */
	function notStrict() {
		var result, that, mine;
		result = this == that || this != mine;
		return false;
	}
	function strictFunctionScoped() {
		"use strict"; // function scoped
		var result, that, mine;
		result = this == that || this != mine;
		return true;
	}
	strictFunctionScoped();
	notStrict();
})();
