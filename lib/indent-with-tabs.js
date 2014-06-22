/* indent-with-tabs.js */
/* jshint browser: true, smarttabs: true, indent: 4 */

/* The jshint tool internally assumes a tab is 4 chars.
   This config won't force the use of tabs for indentation
   but does allow the use of tabs. Use another tool to check
   that indentation starts with tabs if you want to force it.
*/
function indent_with_tabs (bTab)
{
	// This code indented with tabs .
	if (bTab)
	{
		var x, t,
		    z, g;
		console.log('bTab');
	}
	if (bTab)
	{
		console.log('bTab');
	}
	// The next if is indented with spaces.
    if (!bTab)
    {
        console.log('!bTab');
    }
	return !bTab;
}
