# one liner to convert a .jshintrc JSON file into a /*jshint */ comment block
perl -pne 's/\{/\/*jshint /xms && chomp ; s{\s*\"}{}xmsg && chomp; s/\}/\n\*\//xms; s{\ +}{ }xmsg; s{,}{, }xmsg' .jshintrc-sloppy 
