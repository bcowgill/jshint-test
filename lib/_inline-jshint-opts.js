// Testing jshint options
// http://www.jshint.com/docs/options/

// Enforcing Options
/*jshint
	bitwise: true,
	camelcase: true,
	curly: true,
	eqeqeq: true,
	es3: true,
	forin: true,
	freeze: true,
	immed: true,
	indent: 4,
	latedef: true,
	newcap: true,
	noarg: true,
	noempty: true,
	nonew: true,
	plusplus: true,
	quotmark: true,
	undef: true,
	unused: strict,
	strict: true,
	trailing: true,
	maxparams: 3,
	maxdepth: 3,
	maxstatements: 7,
	maxcomplexity: 10,
	maxlen: 90,

	maxerr: 5000
*/
/* E001 Bad Option
	nonbsp: true,
*/
// latedef: false, true, nofunc ignore function declarations
// quotmark: false, true, single, double enforce consistency in quotes
// unused: false, true, vars, strict check for unused variables/function parameters
// es3 older browsers like IE6-9
// immed immediately executing functions parenthesised
// freeze no prototype changes to native objects
// newcap constructor functions must be capitalised
// nonew disallow calling constructors without new

// Relaxing Options
/*jshint
	asi: false,
	boss: false,
	debug: false,
	eqnull: false,
	esnext: false,
	evil: false,
	expr: false,
	funcscope: false,
	gcl: false,
	globalstrict: false,
	iterator: false,
	lastsemic: false,
	laxbreak: false,
	laxcomma: false,
	loopfunc: false,
	moz: false,
	multistr: false,
	notypeof: false,
	proto: false,
	scripturl: false,
	smarttabs: false,
	shadow: false,
	sub: false,
	supernew: false,

	maxerr: 5000
*/
/* E001 Bad Option
	noyield: false,
*/
// validthis: only in function scope

// Environments Options
/*jshint
	browser: false,
	couch: false,
	devel: false,
	dojo: false,
	jquery: false,
	mootools: false,
	node: false,
	nonstandard: false,
	phantom: false,
	prototypejs: false,
	rhino: false,
	worker: false,
	wsh: false,
	yui: false,

	maxerr: 5000
*/

// Deprecated Options
/*jshint
	nomen: false,
	onevar: false,
	passfail: false,
	white: false,

	maxerr: 5000
*/

(function () {})();
