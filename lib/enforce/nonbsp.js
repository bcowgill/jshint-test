
(function () {
	/*jshint nonbsp: true */ // FAIL - unknown option
	function nonbsp() {
		// there is invisible whitespace U+00A0 on the next line
		var unicodeNBSP = "nbsp -->[   ] invalid -->[�]",
			 nbspBeforeThis,
			�encodableCodePointBeforeThis;

		// option space key on Mac can accidentally do this.
		// character map on windows.
		return unicodeNBSP + nbspBeforeThis + encodableCodePointBeforeThis;
	}
	nonbsp();
})();
