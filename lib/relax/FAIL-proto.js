
(function () {
	function proto() {
		/*jshint proto: false */
		var protoVal = Object.prototype.__proto__; // not relaxed
		return protoVal;
	}
	function protoTrue() {
		/*jshint proto: true */
		var protoNoWarn = Object.prototype.__proto__; // relaxed FAIL - still makes a warning
		return protoNoWarn;
	}
	proto();
	protoTrue();
})();
