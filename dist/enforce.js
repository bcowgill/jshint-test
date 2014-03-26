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
	function camelCaseFunctionScope() {
		/*jshint camelcase: true */ // FAIL function scope
		/*jshint unused: false */
		var a,
			thing,
			doyouknowthisisntcamelcase, // nope it's oblivious
			lowcase_var_not_camelcase,
			__underbar,
			underbar__,
			aCamel,
			aHumpyCamel,
			CapCamel,
			HTMLElement,
			CONST,
			HUMPY_CONST;
	}
	camelCaseFunctionScope();
})();


(function () {
	/*jshint noempty: true */
	function noempty(obj) {
		var key, empty, use;
		// FAIL - first empty block not reported 
		// not a fail, for loop is not a loop
		for (key in obj) {} // empty for non-block

		if (true) {} // empty if block
		else {} // empty else block

		empty = function () {}; // empty function block
		use(key, empty);

		for (key in obj) {} // empty for non-block
	} // end noempty()
	noempty();
})();


(function () {
	function undefFunctionScope() {
		/*jshint undef: true */ // FAIL function scope
		var typoError = "Hello, World";
		globalUndefFn.log(typoError, typoerror); // Oops, typoed here. JSHint with undef will complain
	}
	undefFunctionScope();
})();

/*global unusedGlobalVar: true */

(function () {
	/*jshint unused: false */ // FAIL function scope
	function unusedFunctionScope(unusedArg) {
		var unusedVariable;
		/*jshint -W098 */
		/* FAIL disable warning number not working with grunt-contrib-jshint */
		var hideUnused;
	}

	function unusedAfterUsedFn(usedArg, unusedArgAfterUsed, anotherUnusedArg) {
		return usedArg;
	}

	function unusedBeforeUsedFn(unusedArgBeforeUsed2, usedArg, anotherUnusedArg2) {
		return usedArg;
	}

	unusedFunctionScope();
})();


(function () {
	/*jshint es3: true */
	function es3() {
		null == (TODO_ES3 = "not sure how to demonstrate this");
		return TODO_ES3;
		// must support ECMA3 for older browsers IE6-9
		// TODO don't know how to test this
	}
	es3();
})();

/*jshint maxerr: 5000 */
(function () {
	/*jshint bitwise: true */
	function bitwise() {
		var a,b,c,d;
		a = b & 4; // AND bitwise
		c = b | 3; // OR bitwise
		d = c ^ 4; // XOR bitwise
		b = a << 1; // bit shift left
		a = d >> 2; // bit shift right
	}
	bitwise();
})();

/*jshint camelcase: true */ // module scope only

(function () {
	function camelCase() {
		/*jshint unused: false */
		var a,
			thing,
			doyouknowthisisntcamelcase, // nope it's oblivious
			lowcase_var_not_camelcase,
			__underbar,
			underbar__,
			aCamel,
			aHumpyCamel,
			CapCamel,
			HTMLElement,
			CONST,
			HUMPY_CONST;
	}
	camelCase();
})();


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


(function () {
	/*jshint eqeqeq: true */
	// http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/
	function eqeqeq() {
		var that, mine, result, hardError;
		result = this == that || this != mine;
		/* jshint eqeqeq: false */
		hardError = this == null || this != null;
	}
	eqeqeq();
})();


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


(function () {
	/*jshint freeze: true */
	function freeze() {
		// warn not allowed to override native prototypes
		Array.prototype.count = function (value) { return 4 * value; };
	}
	freeze();
})();


(function () {
	/*jshint immed: true */
	function immed() {
		// valid, but slightly confusing
		var x = function(){
			return this.console;
		}(); // immediate call
		x();

		// ok immediate execution function
		(function(window){ window.do(); return this.console; })();

		// also ok
		(function () {
			var x = 2;
			// some other code
			return x;
		}()); // immediate invocation
	}
	immed();
})();


(function () {
	/*jshint indent: 4 */
function indent() {
   		var x, mixedSpacesTabs;
 if(true){x=4+mixedSpacesTabs;}
} // fn indent
indent();
})();


(function () {
	/*jshint latedef: nofunc */
// Javascript scoping and hoisting
// http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting
	function latedefNoFunc(console) {
		console.log(NOT_NOW_DEFINED);
		tooLate();
		if (true) {
			var NOT_NOW_DEFINED = 32;
		}
		function tooLate() {
			return true;
		}
	}
	latedefNoFunc();
})();


(function () {
	/*jshint latedef: true */
// Javascript scoping and hoisting
// http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting
	function latedef(console) {
		console.log(NOT_YET_DEFINED);
		tooLate();
		if (true) {
			var NOT_YET_DEFINED = 32;
		}
		function tooLate() {
			return true;
		}
	}
	latedef();
})();


(function () {
	/*jshint maxcomplexity: 1 */
	function maxcomplexity() {

	}
	maxcomplexity();
})();


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

/*jshint maxlen: 82 */ // module scope only

(function () {
	function maxlen() {
		// This line length is ok
		//       1         2         3         4         5         6         7
		//345 USING TABS TO INDENT 89012345678901234567890123456789012345678901234
		// This line length is not ok
		//       1         2         3         4         5         6         7
		//345 USING TABS TO INDENT 890123456789012345678901234567890123456789012345
		//0123456789012345678901234567890123456789012345678901234567890123456789012
        //0123456789012345678901234567890123456789012345678901234567890123456789012

// This line length is ok
//       1         2         3         4         5         6         7         8
//345 NO INDENT 789012345678901234567890123456789012345678901234567890123456789012
// This line length is not ok
//       1         2         3         4         5         6         7         8
//345 NO INDENT 7890123456789012345678901234567890123456789012345678901234567890123
	}
	return true;
})();


(function () {
	/*jshint maxcomplexity: 5 */
	// http://en.wikipedia.org/wiki/Cyclomatic_complexity
	function maxcomplexity(c1, f1, f2, c2, f3, f4) {
		if (c1()) {
			f1();
		}
		else {
			f2();
			if (c1()) {
				f1();
			}
			else {
				f2();
			}
		}

		if (c2()) {
			f3();
		}
		else {
			f4();
			if (c1()) {
				f1();
			}
			else {
				f2();
			}

			if (c2()) {
				f3();
			}
			else {
				f4();
			}
		}
	}
	maxcomplexity();
})();


(function () {
	/*jshint maxparams: 1 */
	function maxparams2(one, two) {
		return one + two;
	}
	/*jshint maxparams: 3 */
	function maxparams(one, two, three, four) {
		return one + two + three + four;
	}
	maxparams();
	maxparams2();
})();


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


(function () {
	/*jshint noarg: true */
	function noarg(console) {
		function something (varbl, arguments) {
			console.log.apply(varbl, arguments);
		}
		something();
		return [
			arguments.caller,
			arguments.callee
		];
	}
	noarg();
})();


(function () {
	/*jshint nonbsp: true */ // FAIL - unknown option
	function nonbsp() {
		// there is invisible whitespace U+00A0 on the next line
		var unicodeNBSP = "nbsp -->[   ] invalid -->[�]",
			 nbspBeforeThis,
			�encodableCodePointBeforeThis;

		// option space key on Mac can accidentally do this.
		// character map on windows.
		return unicodeNBSP + nbspBeforeThis + encodableCodePointBeforeThis;
	}
	nonbsp();
})();


(function () {
	function nonew() {
		/*jshint nonew: true */
		var SomeObj = function () { return this; };
		// no new for side effects
		new SomeObj();
		// don't just call function without new
		SomeObj();
		// ok assign to a var
		var s = new SomeObj();
		return s;
	}
	nonew();
})();


(function () {
	/*jshint plusplus: true */
	function plusplus() {
		var x = 1, y = ++x + x--;
		return y;
	}
	plusplus();
})();


(function () {
	/*jshint quotmark: double */
	function quotmarkDouble() {
		/*jshint quotmark: double */
		// force double quotes
		var x = 'a',
			y = "n",
			z = 'a' + "b" + 'c';
		return x + y + z;
	}
	quotmarkDouble();
})();


(function () {
	/*jshint quotmark: single */
	function quotmarkSingle() {
		/*jshint quotmark: single */
		// force single quotes
		var x = 'a',
			y = "n",
			z = 'a' + "b" + 'c';
		return x + y + z;
	}
	quotmarkSingle();
})();


(function () {
	/*jshint quotmark: true */
	function quotmark() {
		// consistency in quote marks
		var x = 'a',
			y = "n",
			z = 'a' + "b" + 'c';
		return x + y + z;
	}
	quotmark();
})();


(function () {
	/*jshint strict: true */
	function notStrict() {
		var result, that, mine;
		result = this == that || this != mine;
		return false;
	}
	function strictFunctionScoped() {
		"use strict"; // function scoped
		var result, that, mine;
		result = this == that || this != mine;
		return true;
	}
	strictFunctionScoped();
	notStrict();
})();

"use strict"; // global scoped probibited by strict

(function () {
	/*jshint strict: true */
	function notStrict() {
		var result, that, mine;
		result = this == that || this != mine;
		return false;
	}
	function strict() {
		"use strict"; // function scoped
		var result, that, mine;
		result = this == that || this != mine;
		return true;
	}
	strict();
	notStrict();
})();


(function () {
	/*jshint trailing: true */
	function trailing() {
		// This otherwise perfectly valid string will error if
		// there is a whitespace after \
		var str = "Hello \
		World";
		// The next line should have trailing white space
		// perl -i.bak -pne 's{(m o r e";)}{$1     }xms' trailing.js
		str += " some more trailing spaces on line";     
		return str;
	}
	trailing();
})();

/*jshint undef: true */ // module scope only

(function () {
	function undef() {
		var typoError = "Hello, World";
		globalUndefFn.log(typoError, typoerror); // Oops, typoed here. JSHint with undef will complain
	}
	undef();
})();

/*jshint unused: strict */ // module scope only
/*global unusedGlobalVar: true */

(function () {
	function unusedStrict(unusedArg) {
		var unusedVariable;
	}

	function unusedAfterUsedFn(usedArg, unusedArgAfterUsed, anotherUnusedArg) {
		return usedArg;
	}

	function unusedBeforeUsedFn(unusedArgBeforeUsed2, usedArg, anotherUnusedArg2) {
		return usedArg;
	}

	unusedStrict();
})();

/*jshint unused: vars */ // module scope only
/*global unusedGlobalVar: true */

(function () {
	function unusedVars(unusedArg) {
		var unusedVariable;
	}

	function unusedAfterUsedFn(usedArg, unusedArgAfterUsed, anotherUnusedArg) {
		return usedArg;
	}

	function unusedBeforeUsedFn(unusedArgBeforeUsed2, usedArg, anotherUnusedArg2) {
		return usedArg;
	}

	unusedVars();
})();

/*jshint unused: true */ // module scope only
/*global unusedGlobalVar: true */

(function () {
	/*jshint unused: true */ // FAIL function scope
	function unused(unusedArg) {
		var unusedVariable;
		/*jshint -W098 */
		/* FAIL disable warning number not working with grunt-contrib-jshint */
		var hideUnused;
	}

	function unusedAfterUsedFn(usedArg, unusedArgAfterUsed, anotherUnusedArg) {
		return usedArg;
	}

	function unusedBeforeUsedFn(unusedArgBeforeUsed2, usedArg, anotherUnusedArg2) {
		return usedArg;
	}

	unused();
})();
