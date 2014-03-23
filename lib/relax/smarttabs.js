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
