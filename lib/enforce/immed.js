
(function () {
	/*jshint immed: true */
	function immed() {
		// valid, but slightly confusing
		var x = function(){
			return this.console;
		}(); // immediate call
		x();

		// ok immediate execution function
		(function(window){ window.do(); return this.console; })();

		// also ok
		(function () {
			var x = 2;
			// some other code
			return x;
		}()); // immediate invocation
	}
	immed();
})();
