(function () {
	function smarttabs(fn) {
		// smart tabs
		// http://www.emacswiki.org/emacs/SmartTabs

		/*jshint smarttabs: false */
		var smartTabs = "tab and spaces" +
		                " aligned";           // not relaxed tab/indent space/alignment
		fn = function (x, // x coord
		               y, // y coord
		               z) { return x + y + z; };
		return fn(smartTabs);                 // space alignment
	}
	function smarttabsTrue() {
		/*jshint smarttabs: true */
		var smartTabsNoWarn = "tab and spaces" +
		                      " aligned";       // relaxed tab/indent space/alignment
		fn = function (x, // x coord
		               y, // y coord
		               z) { return x + y + z; };
		return smartTabsNoWarn;                 // space alignment
	}
	smarttabs();
	smarttabsTrue();
})();
