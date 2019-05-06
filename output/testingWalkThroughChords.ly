\version "2.18.2"
\score {
\new Voice {
\override TextScript.fret-diagram-details.finger-code = #'in-dot
\absolute {
	\clef "treble_8"
< c'-3 e'-4 >1^\markup { \fret-diagram-terse #"x;x;x;5-3;5-4;x;" }^"C"
\bar "||"
< c'-3 e'-4 a'-1 >1^\markup { \fret-diagram-terse #"x;x;x;5-3;5-4;5-1;" }^"Am"
\bar "||"
< a,-2 c'-3 >1^\markup { \fret-diagram-terse #"5-2;x;x;5-3;x;x;" }^"F"
\bar "||"
< b,-4 b-1 >1^\markup { \fret-diagram-terse #"7-4;x;x;4-1;x;x;" }^"E"
\bar "||"
}}
\layout {}
\midi {}
}