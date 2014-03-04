
(function () {
	/*jshint latedef: true */
// Javascript scoping and hoisting
// http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting
	function latedef(console) {
		console.log(NOT_YET_DEFINED);
		tooLate();
		if (true) {
			var NOT_YET_DEFINED = 32;
		}
		function tooLate() {
			return true;
		}
	}
	latedef();
})();
