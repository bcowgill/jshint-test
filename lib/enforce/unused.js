/*jshint unused: true */ // module scope only
/*global unusedGlobalVar: true */

(function () {
	/*jshint unused: true */ // FAIL function scope
	function unused(unusedArg) {
		var unusedVariable;
		/*jshint -W098 */
		/* FAIL disable warning number not working with grunt-contrib-jshint */
		var hideUnused;
	}

	function unusedAfterUsedFn(usedArg, unusedArgAfterUsed, anotherUnusedArg) {
		return usedArg;
	}

	function unusedBeforeUsedFn(unusedArgBeforeUsed2, usedArg, anotherUnusedArg2) {
		return usedArg;
	}

	unused();
})();
