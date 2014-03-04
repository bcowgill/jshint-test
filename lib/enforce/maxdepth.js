
(function () {
	/*jshint maxdepth: 2 */
	function maxdepth(meaning, shuffle, tired, sleep) {
		var day = true;

		if (meaning === 42) {
			while (day) {
				shuffle();

				if (tired) { // JSHint: Blocks are nested too deeply (3).
					sleep();
				}
			}
		}
	}
	maxdepth();
})();
