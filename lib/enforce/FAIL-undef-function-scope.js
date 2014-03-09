
(function () {
	function undefFunctionScope() {
		/*jshint undef: true */ // FAIL function scope
		var typoError = "Hello, World";
		globalUndefFn.log(typoError, typoerror); // Oops, typoed here. JSHint with undef will complain
	}
	undefFunctionScope();
})();
