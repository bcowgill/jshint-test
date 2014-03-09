
(function () {
	/*jshint latedef: nofunc */
// Javascript scoping and hoisting
// http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting
	function latedefNoFunc(console) {
		console.log(NOT_NOW_DEFINED);
		tooLate();
		if (true) {
			var NOT_NOW_DEFINED = 32;
		}
		function tooLate() {
			return true;
		}
	}
	latedefNoFunc();
})();
