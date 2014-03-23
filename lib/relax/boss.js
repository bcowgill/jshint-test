
(function () {
	function boss(a, console, people) {
		/*jshint boss: false */
		var i, person, personS;
		// assignments where operator expected
		if (a = 10) {} // not relaxed

		for (i = 0, person; person = people[i]; i++) { // not relaxed
			console.log(person);
		}

		// can manually suppress the warning with parenthesis
		for (i = 0, personS; (personS = people[i]); i++) {
			console.log(personS);
		}
	}
	function bossTrue(aT, console, people) {
		/*jshint boss: true */
		var i, personT, personTS;
		// assignments where operator expected
		if (aT = 10) {} // relaxed 

		for (i = 0, personT; personT = people[i]; i++) { // relaxed
			console.log(personT);
		}

		// can manually suppress the warning with parenthesis
		for (i = 0, personTS; (personTS = people[i]); i++) {
			console.log(personTS);
		}
	}
	boss();
	bossTrue();
})();
