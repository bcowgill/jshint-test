
(function () {
	/*jshint curly: true */
	function curly(day, shuffle, stuff, diet, party) {
		var idx, fat;
		while (day)
			shuffle();
		for (idx = 0; idx < 12; idx += 1)
			stuff();
		if (fat) diet(); else party();
	}
	curly();
})();
