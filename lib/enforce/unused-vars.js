/*jshint unused: vars */ // module scope only
/*global unusedGlobalVar: true */

(function () {
	function unusedVars(unusedArg) {
		var unusedVariable;
	}

	function unusedAfterUsedFn(usedArg, unusedArgAfterUsed, anotherUnusedArg) {
		return usedArg;
	}

	function unusedBeforeUsedFn(unusedArgBeforeUsed2, usedArg, anotherUnusedArg2) {
		return usedArg;
	}

	unusedVars();
})();
