
(function () {
	function funcscope() {
		/*jshint funcscope: false */
		function test() {
			if (true) {
				var xFuncScope = 0; // not relaxed
			}
			xFuncScope += 1; // not relaxed
		}
		test();
	}
	function funcscopeTrue() {
		/*jshint funcscope: true */
		function test() {
			if (true) {
				var xT = 0; // relaxed
			}
			xT += 1; // relaxed
		}
		test();
	}
	funcscope();
	funcscopeTrue();
})();
