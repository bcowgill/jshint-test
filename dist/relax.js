// concat header, defines all module scoped jshint settings
/*jshint
	undef: true,
	unused: strict,
	globalstrict: true,
	strict: true,
	camelcase: true,
	maxlen: 82,
	maxerr: 5000
*/
/*global unusedGlobalVar: true */
"use strict";


(function () {
	/*jshint asi:true */
	// automatic semicolon insertion
	// http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
	// http://inimino.org/~inimino/blog/javascript_semicolons
	function asi() {
		null == (TODO_ASI = "quite involved demonstrating this");
		return TODO_ASI;
	}
	asi();
})();


(function () {
	/*jshint esnext: true */
	// http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts
	function esnext() {
		null == (TODO_ESNEXT = "quite involved demonstrating this");
		return TODO_ESNEXT;
	}
	esnext();
})();


(function () {
	/*jshint gcl: true */
	// google closure compiler
	function gcl() {
		null == (TODO_GCL = "quite involved demonstrating this");
		return TODO_GCL;
	}
	gcl();
})();


(function () {
	function boss(a, console, people) {
		/*jshint boss: false */
		var i, person, personS;
		// assignments where operator expected
		if (a = 10) {}

		for (i = 0, person; person = people[i]; i++) {
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
		if (aT = 10) {}

		for (i = 0, personT; personT = people[i]; i++) {
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


(function () {
	function debug() {
		/*jshint debug: false */
		debugger; // not relaxed
	}
	function debugTrue() {
		/*jshint debug: true */
		debugger; // relaxed
	}
	debug();
	debugTrue();
})();


(function () {
	function eqnull(a, console) {
		/*jshint eqnull: false */
		if (null == a) {
			console.log(a);
		}
		if (undefined == a) {
			console.log(a);
		}
	}
	function eqnullTrue(aT, console) {
		/*jshint eqnull: true */
		if (null == aT) {
			console.log(aT);
		}
		if (undefined == aT) {
			console.log(aT);
		}
	}
	eqnull();
	eqnullTrue();
})();


(function () {
	function evil() {
		/*jshint evil: false */
		eval("console.log(evil)"); // not relaxed
	}
	function evilTrue() {
		/*jshint evil: true */
		eval("console.log(!evil)"); // relaxed
	}
	evil();
	evilTrue();
})();


(function () {
	function expr(a, b) {
		/*jshint expr: false */
		for (;;) {
			a == b; // not relaxed
			"an out of place thing"; // not relaxed
		}
	}
	function exprTrue(aT, bT) {
		/*jshint expr: true */
		for (aT == bT;;) {
			aT == bT; // relaxed
			"an out of place thing"; // relaxed
		}
	}
	expr();
	exprTrue();
})();


(function () {
	function funcscope() {
		/*jshint funcscope: false */
		function test() {
			if (true) {
				var xFuncScope = 0; // not relaxed
			}
			xFuncScope += 1; // not relaxed
		}
		test();
	}
	function funcscopeTrue() {
		/*jshint funcscope: true */
		function test() {
			if (true) {
				var xT = 0; // relaxed
			}
			xT += 1; // relaxed
		}
		test();
	}
	funcscope();
	funcscopeTrue();
})();

"use strict"; // not relaxed

(function () {
	function globalstrict() {
		/*jshint globalstrict: false */

	}
	globalstrict();
})();


(function () {
	function iterator(a, console) {
		/*jshint iterator: false */
		console.log(a.__iterator__); // not relaxed
	}
	function iteratorTrue(aT, console) {
		/*jshint iterator: true */
		console.log(aT.__iterator__); // relaxed
	}
	iterator();
	iteratorTrue();
})();
