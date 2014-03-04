
(function () {
	function evil() {
		/*jshint evil: false */
		eval("console.log(evil)"); // not relaxed
	}
	function evilTrue() {
		/*jshint evil: true */
		eval("console.log(!evil)"); // relaxed
	}
	evil();
	evilTrue();
})();
