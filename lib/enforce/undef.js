/*jshint undef: true */ // module scope only

(function () {
	function undef() {
		var typoError = "Hello, World";
		globalUndefFn.log(typoError, typoerror); // Oops, typoed here. JSHint with undef will complain
	}
	undef();
})();
