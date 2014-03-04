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
