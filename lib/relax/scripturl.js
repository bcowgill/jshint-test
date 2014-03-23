
(function () {
	function scripturl() {
		/*jshint scripturl: false */
		var url = 'javascript: foo()'; // not relaxed
		return url;
	}
	function scripturlTrue() {
		/*jshint scripturl: true */
		var urlNoWarn = 'javascript: foo()'; // not relaxed
		return urlNoWarn;
	}
	scripturl();
	scripturlTrue();
})();
