
(function () {
	/*jshint forin: true */
	// http://javascriptweblog.wordpress.com/2011/01/04/exploring-javascript-for-in-loops/
	function forin() {
		var key, obj, objForInNotOk = [];
		for (var key2 in objForInNotOk) {
			objForInNotOk[key2] = null;
		}

		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				// We are sure that obj[key] belongs to the object and was not inherited.
				obj[key] = null;
			}
		}
	}
	forin();
})();
