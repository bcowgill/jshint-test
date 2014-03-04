
(function () {
	/*jshint newcap: true */
	function newcap() {
		var someobject = function () { return this; },
			SomeObj = function () { return this; };
		return [
			new someobject(),
			new SomeObj()
		];
	}
	newcap();
})();
