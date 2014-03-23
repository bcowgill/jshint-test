
(function () {
	function multistr() {
		/*jshint multistr: false */
		var text = "Hello // not relaxed \
		World"; // All good.

		text = "Hello // not relaxed
		World"; // Warning, no escape character above.

		text = "Hello // not relaxed \
		World"; // Warning, there is a space after \ above
		return text;
	}
	function multistrTrue() {
		/*jshint multistr: true */
		var text = "Hello // relaxed \
		World"; // All good.

		text = "Hello // relaxed
		World"; // Warning, no escape character above.

		text = "Hello // relaxed \
		World"; // Warning, there is a space after \ above
		return text;
	}
	multistr();
	multistrTrue();
})();
