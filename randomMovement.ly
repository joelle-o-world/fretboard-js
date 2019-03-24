\version "2.18.2"
\score {
\new Voice {
\override TextScript.fret-diagram-details.finger-code = #'in-dot
\absolute {
	\clef "treble_8"
< c-4 f-2 g-1 c'-3 >1^\markup { \fret-diagram-terse #"x;8-4;x;8-2;5-1;5-3;" }^"F7b9"
\bar "||"
< c-4 d-1 g-3 >1^\markup { \fret-diagram-terse #"x;8-4;x;x;5-1;5-3;" }^"Fmaj7"
\bar "||"
< a,-2 d-3 >1^\markup { \fret-diagram-terse #"5-2;x;x;x;x;5-3;" }^"D"
\bar "||"
< aes,-1 ees-4 >1^\markup { \fret-diagram-terse #"x;x;x;x;4-1;6-4;" }^"D#"
\bar "||"
< aes,-2 ees-3 ges-1 des'-4 >1^\markup { \fret-diagram-terse #"x;4-2;x;6-3;4-1;6-4;" }^"F#6"
\bar "||"
< aes,-2 ees-3 ges-1 >1^\markup { \fret-diagram-terse #"x;4-2;x;6-3;4-1;x;" }^"F#6"
\bar "||"
< bes,-4 ees-3 >1^\markup { \fret-diagram-terse #"x;6-4;x;6-3;x;x;" }^"F#6"
\bar "||"
< bes,-3 des-1 >1^\markup { \fret-diagram-terse #"x;x;x;6-3;4-1;x;" }^"F#6"
\bar "||"
< b,-4 des-1 >1^\markup { \fret-diagram-terse #"x;x;x;7-4;4-1;x;" }^"D#maj7"
\bar "||"
< bes,-2 ees-3 >1^\markup { \fret-diagram-terse #"x;6-2;x;6-3;x;x;" }^"F#6"
\bar "||"
< aes,-1 ees-2 aes-4 >1^\markup { \fret-diagram-terse #"4-1;6-2;6-4;x;x;x;" }^"G#"
\bar "||"
< aes,-1 ees-3 >1^\markup { \fret-diagram-terse #"4-1;x;x;x;x;6-3;" }^"C#6"
\bar "||"
< aes,-1 d-2 aes-4 des'-3 >1^\markup { \fret-diagram-terse #"4-1;5-2;x;x;6-4;6-3;" }^"A#7"
\bar "||"
< a,-2 >1^\markup { \fret-diagram-terse #"x;5-2;x;x;x;x;" }^"D"
\bar "||"
< a,-3 c-1 aes-4 >1^\markup { \fret-diagram-terse #"x;5-3;3-1;x;x;6-4;" }^"A#"
\bar "||"
}}
\layout {}
\midi {}
}