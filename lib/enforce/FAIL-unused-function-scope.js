/*global unusedGlobalVar: true */

(function () {
	/*jshint unused: true */
	function hideUnusedFn(hideMeUnusedArg, // FAIL should error N/6
		usedArg) {
		return usedArg;
	}
	function unusedFunctionScope(unusedArg) { // should error 1/6
		var unusedVariable;
		/* FAIL disable warning number not working with grunt-contrib-jshint */
		var hideUnused;
	}

	function unusedAfterUsedFn(usedArg,
		unusedArgAfterUsed, // should error 3/6
		anotherUnusedArg) { // should error 2/6
		return usedArg;
	}

	function unusedBeforeUsedFn(unusedArgBeforeUsed2, // DOES NOT ERROR!
		usedArg,
		anotherUnusedArg2) { // should error 4/6
		return usedArg;
	}
	/*jshint -W098 */ // FAIL does not disable unused arg warning
	function hideUnused3(hideMeUnusedArg, // FAIL should error N/6
		usedArg) {
		return usedArg;
	}
	/*jshint +W098 */

	unusedFunctionScope();
	unusedAfterUsedFn();
	unusedBeforeUsedFn();
})();
