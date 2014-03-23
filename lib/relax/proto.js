
(function () {
	function proto() {
		/*jshint proto: false */
		var proto1 = Object.prototype.__proto__;
		return proto1;
	}
	function protoTrue() {
		/*jshint proto: true */
		var proto1 = Object.prototype.__proto__;
		return proto1;
	}
	proto();
	protoTrue();
})();
