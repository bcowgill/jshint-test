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

/*jshint maxlen:90 */
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
	function moz() {
		/*jshint moz: false */
		null == (TODO_MOZ = "unsure how to demonstrate this");
		return TODO_MOZ;
	}
	function mozTrue() {
		/*jshint moz: true */

	}
	moz();
	mozTrue();
})();


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
		if (null == a) { // not relaxed
			console.log(a);
		}
		if (undefined == a) { // not relaxed
			console.log(a);
		}
	}
	function eqnullTrue(aT, console) {
		/*jshint eqnull: true */
		if (null == aT) { // not relaxed
			console.log(aT);
		}
		if (undefined == aT) { // not relaxed
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
			return xFuncScope; // not relaxed
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
			return xT; // relaxed
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


(function () {
	function lastsemic() {
		/*jshint lastsemic: false */
		var name = (function() { return 'LastSemicolon' }()); // not relaxed
		return name;
	}
	function lastsemicTrue() {
		/*jshint lastsemic: true */
		var nameNoWarn = (function() { return 'LastSemicolonTrue' }()); // relaxed
		return nameNoWarn;
	}
	lastsemic();
	lastsemicTrue();
})();


(function () {
	function laxbreak() {
		/*jshint laxbreak: false */
		var String1, String2, String3,
			stringWarn = String1
			+ '#' // not relaxed
			+ String2 // not relaxed
			+ '=' // not relaxed
			+ String3; // not relaxed
		return stringWarn;
	}
	function laxbreakTrue() {
		/*jshint laxbreak: true */
		var String1, String2, String3,
			stringNoWarn = String1
			+ '#' // relaxed
			+ String2 // relaxed
			+ '=' // relaxed
			+ String3; // relaxed
		return stringNoWarn;
	}
	laxbreak();
	laxbreakTrue();
})();


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


(function () {
	function loopfunc() {
		/*jshint loopfunc: false */
		var i, nums = [];

		for (i = 0; i < 10; i++) {
			nums[i] = function (j) {
				return i + j;
			}; // not relaxed
		}
	}
	function loopfuncTrue() {
		/*jshint loopfunc: true */
		var i, nums = [];

		for (i = 0; i < 10; i++) {
			nums[i] = function (j) {
				return i + j;
			}; // relaxed
		}
	}
	loopfunc();
	loopfuncTrue();
})();


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


(function () {
	function notypeof(a) {
		/*jshint notypeof: false */
		// 'fuction' instead of 'function'
		if (typeof a == "fuction") { // not relaxed
			/* ... */
		}
	}
	function notypeofTrue(a) {
		/*jshint notypeof: true */
		// 'fuction' instead of 'function'
		if (typeof a == "fuction") { // relaxed
			/* ... */
		}
	}
	notypeof();
	notypeofTrue();
})();


(function () {
	/*jshint esnext: true */
	function noyield() {
		// https://github.com/jshint/jshint/issues/1123
		/*jshint noyield: false */ // FAIL invalid option
		var of, run;

		run(function *() {
			return of(5); // not relaxed
		}); // not relaxed
	}
	function noyieldTrue() {
		/*jshint noyield: true */ // FAIL invalid option
		var of, run;

		run(function *() {
			return of(5); // relaxed
		}); // relaxed FAIL - still warns
	}
	noyield();
	noyieldTrue();
})();

(function () {
	function proto() {
		/*jshint proto: false */
		var protoVal = Object.prototype.__proto__; // not relaxed
		return protoVal;
	}
	function protoTrue() {
		/*jshint proto: true */
		var protoNoWarn = Object.prototype.__proto__; // relaxed
		return protoNoWarn;
	}
	proto();
	protoTrue();
})();


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


(function () {
	function shadow(passedIn) {
		/*jshint shadow: false */
		if (passedIn) {
			// shadow variable declared same as outer scope
			var passedIn = 42; // not relaxed
			return passedIn;
		}
	}
	function shadowTrue() {
		/*jshint shadow: true */
		if (passedIn) {
			// shadow variable declared same as outer scope
			var passedIn = 42; // relaxed
			return passedIn;
		}
	}
	shadow();
	shadowTrue();
})();

(function () {
	function smarttabs(fn) {
		// smart tabs
		// http://www.emacswiki.org/emacs/SmartTabs

		/*jshint smarttabs: false */
		var smartTabs = "tab and spaces" + // tab/indent space/alignment
		                " aligned";        // not relaxed
		fn = function (x, // x coord - not relaxed
		               y, // y coord - not relaxed
		               z) { return x + y + z; }; // not relaxed
		return fn(smartTabs);             // space alignment
	}
	function smarttabsTrue(fn) {
		/*jshint smarttabs: true */
		var smartTabsNoWarn = "tab and spaces" + 
		                      // tab/indent space/alignment 
		                      " aligned"; // relaxed
		fn = function (x, // x coord - relaxed
		               y, // y coord - relaxed
		               z) { return x + y + z; }; // relaxed
		return smartTabsNoWarn;           // space alignment
	}
	smarttabs();
	smarttabsTrue();
})();


(function () {
	function sub(hash) {
		/*jshint sub: false */
		return hash['key']; // not relaxed
	}
	function subTrue(hash) {
		/*jshint sub: true */
		return hash['key']; // relaxed
	}
	sub();
	subTrue();
})();


(function () {
	function supernew() {
		/*jshint supernew: false */
		// sometimes done for singletons
		return new function () { // not relaxed
			this.exists = true; return this;
		}; // not relaxed
	}
	function supernewTrue() {
		/*jshint supernew: true */
		// sometimes done for singletons
		return new function () { // relaxed
			this.exists = true; return this;
		}; // relaxed
	}
	supernew();
	supernewTrue();
})();

/* j s h i n t validthis: true */ // not allowed at global scope

(function () {
	'use strict';
	function validthis() {
		/*jshint validthis: false */
		return this.event; // not relaxed
	}
	function validthisTrue() {
		/*jshint validthis: true */
		return this.event; // relaxed
	}
	validthis();
	validthisTrue();
})();
