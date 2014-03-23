
(function () {
	function lastsemic() {
		/*jshint lastsemic: false */
		var name = (function() { return 'LastSemicolon' }()); // not relaxed
		return name;
	}
	function lastsemicTrue() {
		/*jshint lastsemic: true */
		var nameNoWarn = (function() { return 'LastSemicolonTrue' }()); // relaxed
		return nameNoWarn;
	}
	lastsemic();
	lastsemicTrue();
})();
