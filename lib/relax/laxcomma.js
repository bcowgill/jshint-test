
(function () {
	function laxcomma() {
		/*jshint laxcomma: false */
		var obj = {
			name: 'Anton' // not relaxed
			, handle: 'valueof' // not relaxed
			, role: 'SW Engineer' // not relaxed
		};
		return obj;
	}
	function laxcommaTrue() {
		/*jshint laxcomma: true */
		var objNoWarn = {
			name: 'Anton' // relaxed
			, handle: 'valueof' // relaxed
			, role: 'SW Engineer' // relaxed
		};
		return objNoWarn;
	}
	laxcomma();
	laxcommaTrue();
})();
