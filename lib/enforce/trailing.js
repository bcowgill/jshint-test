
(function () {
	/*jshint trailing: true */
	function trailing() {
		// This otherwise perfectly valid string will error if
		// there is a whitespace after \
		var str = "Hello \
		World";
		// The next line should have trailing white space
		// perl -i.bak -pne 's{(m o r e";)}{$1     }xms' trailing.js
		str += " some more";     
		return str;
	}
	trailing();
})();
