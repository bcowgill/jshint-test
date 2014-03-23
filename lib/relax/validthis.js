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
