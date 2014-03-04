
(function () {
	/*jshint noarg: true */
	function noarg(console) {
		function something (varbl, arguments) {
			console.log.apply(varbl, arguments);
		}
		something();
		return [
			arguments.caller,
			arguments.callee
		];
	}
	noarg();
})();
