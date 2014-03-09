
(function () {
	function camelCaseFunctionScope() {
		/*jshint camelcase: true */ // FAIL function scope
		/*jshint unused: false */
		var a,
			thing,
			doyouknowthisisntcamelcase, // nope it's oblivious
			lowcase_var_not_camelcase,
			__underbar,
			underbar__,
			aCamel,
			aHumpyCamel,
			CapCamel,
			HTMLElement,
			CONST,
			HUMPY_CONST;
	}
	camelCaseFunctionScope();
})();
