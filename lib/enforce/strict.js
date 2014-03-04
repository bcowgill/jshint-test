"use strict"; // global scoped probibited by strict

(function () {
	/*jshint strict: true */
	function notStrict() {
		var result, that, mine;
		result = this == that || this != mine;
		return false;
	}
	function strict() {
		"use strict"; // function scoped
		var result, that, mine;
		result = this == that || this != mine;
		return true;
	}
	strict();
	notStrict();
})();
