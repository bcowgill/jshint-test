
(function () {
	/*jshint maxstatements: 4 */
	function maxstatements() {
		var i = 0,
			j = 0; // single var statement

		j += i;

		// Function declarations count as one statement. Their bodies
		// don't get taken into account for the outer function.
		function inner() {
			var i2 = 1,
				j2 = 1;

			return i2 + j2;
		}

		j = i + j + inner();
		return j; // JSHint: Too many statements per function. (5)
	}
	maxstatements();
})();
