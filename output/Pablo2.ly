\version "2.18.2"
\score {
<<
\new Voice {
\override TextScript.size = #'1.5
\override TextScript.fret-diagram-details.finger-code = #'in-dot
\absolute {
	\clef "treble_8"

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 b,-2 ees'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;2-2;x;x;4-4;o;" } \startTextSpan
< e,-0 b,-2 e-1 b-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;2-2;2-1;4-3;o;o;" }
< e,-0 b,-2 e-1 b-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;2-2;2-1;4-3;o;o;" }
< e,-0 b,-2 d-0 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"o;2-2;o;x;o;4-4;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold I }
< e,-0 b-3 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"o;x;x;4-3;o;4-4;" } \startTextSpan
< b-3 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;x;4-3;o;4-4;" }
< d-0 b-3 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;o;4-3;o;4-4;" }
< e,-0 b-3 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"o;x;x;4-3;o;4-4;" }
\break

< e,-0 b-3 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"o;x;x;4-3;o;4-4;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< e,-0 a,-0 d-0 b-3 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"o;o;o;4-3;o;4-4;" } \startTextSpan
< e,-0 des-2 b-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;4-2;x;4-3;o;o;" }
< aes,-1 aes-4 b-3 b-0 >1^\markup { \fret-diagram-terse #"4-1;x;6-4;4-3;o;x;" }
\break

< aes,-1 aes-4 b-3 b-0 aes'-2 >1^\markup { \fret-diagram-terse #"4-1;x;6-4;4-3;o;4-2;" }
< e,-0 aes-4 b-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;x;6-4;4-3;o;o;" }
< aes,-1 b-3 b-0 aes'-2 >1^\markup { \fret-diagram-terse #"4-1;x;x;4-3;o;4-2;" }
< aes,-1 aes-4 b-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"4-1;x;6-4;4-3;o;o;" }
\break

\pageBreak

< e,-0 aes-4 b-3 b-0 aes'-2 >1^\markup { \fret-diagram-terse #"o;x;6-4;4-3;o;4-2;" }
< e,-0 aes-4 b-3 b-0 aes'-2 >1^\markup { \fret-diagram-terse #"o;x;6-4;4-3;o;4-2;" }
< e,-0 a,-0 aes-4 b-3 b-0 aes'-2 >1^\markup { \fret-diagram-terse #"o;o;6-4;4-3;o;4-2;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< g,-1 d-0 b-3 b-0 >1^\markup { \fret-diagram-terse #"3-1;x;o;4-3;o;x;" } \startTextSpan \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< d-4 d-0 b-3 b-0 >1^\markup { \fret-diagram-terse #"x;5-4;o;4-3;o;x;" } \startTextSpan
< d-4 d-0 b-3 b-0 >1^\markup { \fret-diagram-terse #"x;5-4;o;4-3;o;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 e-1 g-0 g'-2 >1^\markup { \fret-diagram-terse #"o;x;2-1;o;x;3-2;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< e,-0 d-0 g-0 e'-4 g'-2 >1^\markup { \fret-diagram-terse #"o;x;o;o;5-4;3-2;" } \startTextSpan
\break

< e,-0 a,-0 g-0 e'-4 g'-2 >1^\markup { \fret-diagram-terse #"o;o;x;o;5-4;3-2;" }
< e,-0 c-1 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-1;x;x;5-4;o;" }
< e,-0 c-1 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-1;x;o;5-4;o;" }
< e,-0 c-1 f-2 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-1;3-2;o;5-4;o;" }
\break

< e,-0 c-1 d-0 c'-3 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-1;o;5-3;5-4;o;" }
< e,-0 c-1 g-2 c'-3 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-1;5-2;5-3;5-4;o;" }
< e,-0 c-1 g-2 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-1;5-2;o;5-4;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold V }
< e,-0 a,-0 d-0 c'-3 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;o;5-3;5-4;o;" } \startTextSpan \stopTextSpan
\break

\pageBreak


\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 e-1 e'-4 aes'-2 >1^\markup { \fret-diagram-terse #"o;x;2-1;x;5-4;4-2;" } \startTextSpan
< e,-0 a,-0 e-1 b-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-1;4-3;o;o;" }
< e,-0 e-1 b-0 ges'-2 >1^\markup { \fret-diagram-terse #"o;x;2-1;x;o;2-2;" }
< e,-0 e-1 b-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;x;2-1;4-4;o;o;" }
\break

< e,-0 e-1 b-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;x;2-1;4-4;o;o;" }
< aes,-3 b,-2 e-1 b-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"4-3;2-2;2-1;4-4;o;o;" }
< aes,-3 b,-2 e-1 b-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"4-3;2-2;2-1;4-4;o;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< aes,-3 d-0 b-4 b-0 >1^\markup { \fret-diagram-terse #"4-3;x;o;4-4;o;x;" } \startTextSpan \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold II }
< aes,-3 b,-1 ees'-2 >1^\markup { \fret-diagram-terse #"4-3;2-1;x;x;4-2;x;" } \startTextSpan
< b,-1 d-0 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"x;2-1;o;x;o;4-4;" }
< ges,-2 b,-1 d-0 b-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"2-2;2-1;o;4-3;o;o;" }
< ges,-2 b,-1 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"2-2;2-1;x;x;o;4-4;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold III }
< f-3 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;3-3;x;o;4-4;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 a,-0 d-0 a-1 d'-2 aes'-4 >1^\markup { \fret-diagram-terse #"o;o;o;2-1;3-2;4-4;" } \startTextSpan
< e,-0 a,-0 ges-3 a-1 e'-0 >1^\markup { \fret-diagram-terse #"o;o;4-3;2-1;x;o;" }
< e,-0 a,-0 ges-3 a-1 b-0 ges'-2 >1^\markup { \fret-diagram-terse #"o;o;4-3;2-1;o;2-2;" }
\break

\pageBreak

< e,-0 d-4 d-0 a-1 b-0 ges'-2 >1^\markup { \fret-diagram-terse #"o;5-4;o;2-1;o;2-2;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< d-4 ges-3 >1^\markup { \fret-diagram-terse #"x;5-4;4-3;x;x;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 a,-0 d-0 d'-2 ges'-1 >1^\markup { \fret-diagram-terse #"o;o;o;x;3-2;2-1;" } \startTextSpan
< e,-0 a,-0 d-0 b-4 b-0 ges'-1 >1^\markup { \fret-diagram-terse #"o;o;o;4-4;o;2-1;" }
\break

< e,-0 a,-0 e-2 ges'-1 >1^\markup { \fret-diagram-terse #"o;o;2-2;x;x;2-1;" }
< e,-0 e-2 c'-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;x;2-2;5-4;o;o;" }
< e,-0 e-2 c'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;x;2-2;5-4;x;o;" }
< e,-0 a,-0 e-2 c'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-2;5-4;x;o;" }
\break

< e,-0 e-2 c'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;x;2-2;5-4;x;o;" }
< e,-0 a,-0 e-2 c'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-2;5-4;x;o;" }
< e,-0 a,-0 e-2 c'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-2;5-4;x;o;" }
< e,-0 e-2 c'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;x;2-2;5-4;x;o;" }
\break

< g,-3 a,-0 e-2 c'-4 e'-0 >1^\markup { \fret-diagram-terse #"3-3;o;2-2;5-4;x;o;" }
< g,-3 b,-1 d-0 g-0 b-0 >1^\markup { \fret-diagram-terse #"3-3;2-1;o;o;o;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< g,-3 b-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-3;x;x;4-4;o;o;" } \startTextSpan
< g,-3 b-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-3;x;x;4-4;o;o;" }
\break

\pageBreak

< g,-3 a,-0 d-0 b-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-3;o;o;4-4;o;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< g,-3 b-4 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"3-3;x;x;4-4;1-2;o;" } \startTextSpan
< a,-0 c'-2 f'-1 >1^\markup { \fret-diagram-terse #"x;o;x;x;1-2;1-1;" }
< e,-0 a,-0 f-4 a-3 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"o;o;3-4;2-3;1-2;o;" }
\break

< e,-0 a,-0 f-4 a-3 f'-1 >1^\markup { \fret-diagram-terse #"o;o;3-4;2-3;x;1-1;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< a,-0 f-4 a-3 >1^\markup { \fret-diagram-terse #"x;o;3-4;2-3;x;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< a,-0 f-4 a-3 c'-2 f'-1 >1^\markup { \fret-diagram-terse #"x;o;3-4;2-3;1-2;1-1;" } \startTextSpan
< e,-0 a,-0 f-4 g-0 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"o;o;3-4;o;1-2;o;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold III }
< e,-0 c-3 f-4 g-0 e'-0 >1^\markup { \fret-diagram-terse #"o;3-3;3-4;o;x;o;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< f,-2 a,-0 c'-1 e'-0 >1^\markup { \fret-diagram-terse #"1-2;o;x;x;1-1;o;" } \startTextSpan
< f,-2 a,-0 e-3 g-0 b-0 e'-0 >1^\markup { \fret-diagram-terse #"1-2;o;2-3;o;o;o;" }
< f,-2 des-4 e'-0 >1^\markup { \fret-diagram-terse #"1-2;4-4;x;x;x;o;" }
\break

< f,-2 d-0 bes-3 >1^\markup { \fret-diagram-terse #"1-2;x;o;3-3;x;x;" }
< bes,-1 bes-3 aes'-4 >1^\markup { \fret-diagram-terse #"x;1-1;x;3-3;x;4-4;" }
< g,-2 bes,-1 d-0 g-0 e'-0 >1^\markup { \fret-diagram-terse #"3-2;1-1;o;o;x;o;" }
< e,-0 bes,-1 f-3 bes-4 e'-0 >1^\markup { \fret-diagram-terse #"o;1-1;3-3;3-4;x;o;" }
\break

\pageBreak

< e,-0 bes,-1 f-3 g-0 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"o;1-1;3-3;o;1-2;o;" }
< e,-0 bes,-1 f-3 bes-4 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"o;1-1;3-3;3-4;1-2;o;" }
< bes,-1 f-3 >1^\markup { \fret-diagram-terse #"x;1-1;3-3;x;x;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< e,-0 a,-0 f-3 bes-2 g'-4 >1^\markup { \fret-diagram-terse #"o;o;3-3;3-2;x;3-4;" } \startTextSpan
\break

< e,-0 c-1 bes-2 g'-4 >1^\markup { \fret-diagram-terse #"o;3-1;x;3-2;x;3-4;" }
< g,-3 c-1 d-0 g-0 g'-4 >1^\markup { \fret-diagram-terse #"3-3;3-1;o;o;x;3-4;" }
< g,-3 d-0 g-0 d'-2 >1^\markup { \fret-diagram-terse #"3-3;x;o;o;3-2;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< c-4 d-0 g-0 f'-1 >1^\markup { \fret-diagram-terse #"x;3-4;o;o;x;1-1;" } \startTextSpan
\break

< ees-2 aes-3 >1^\markup { \fret-diagram-terse #"x;x;1-2;1-3;x;x;" }
< f,-1 d-0 aes-3 f'-4 >1^\markup { \fret-diagram-terse #"1-1;x;o;1-3;x;1-4;" }
< f,-1 a,-0 c'-2 >1^\markup { \fret-diagram-terse #"1-1;o;x;x;1-2;x;" }
< f,-1 c-3 d-0 c'-2 >1^\markup { \fret-diagram-terse #"1-1;3-3;o;x;1-2;x;" }
\break

< f,-1 c-3 g-0 g'-4 >1^\markup { \fret-diagram-terse #"1-1;3-3;x;o;x;3-4;" }
< f,-1 c-3 d-0 g-0 b-0 g'-4 >1^\markup { \fret-diagram-terse #"1-1;3-3;o;o;o;3-4;" }
< f,-1 c-3 f-2 g-0 e'-0 >1^\markup { \fret-diagram-terse #"1-1;3-3;3-2;o;x;o;" }
< f,-1 a,-0 d-0 g-0 b-0 g'-4 >1^\markup { \fret-diagram-terse #"1-1;o;o;o;o;3-4;" }
\break

\pageBreak

< f,-1 c-3 e-2 g-0 g'-4 >1^\markup { \fret-diagram-terse #"1-1;3-3;2-2;o;x;3-4;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 c-3 e-2 g-0 e'-0 >1^\markup { \fret-diagram-terse #"o;3-3;2-2;o;x;o;" } \startTextSpan
< e,-0 c-3 e-2 a-1 a'-4 >1^\markup { \fret-diagram-terse #"o;3-3;2-2;2-1;x;5-4;" }
< e,-0 c-3 a-1 e'-0 >1^\markup { \fret-diagram-terse #"o;3-3;x;2-1;x;o;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold III }
< e,-0 c-3 d-0 g-0 g'-2 >1^\markup { \fret-diagram-terse #"o;3-3;o;o;x;3-2;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< a,-0 d-0 a-1 d'-4 >1^\markup { \fret-diagram-terse #"x;o;o;2-1;3-4;x;" } \startTextSpan
< e,-0 c-3 a-1 e'-0 >1^\markup { \fret-diagram-terse #"o;3-3;x;2-1;x;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< e,-0 c-3 f-2 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-3;3-2;o;5-4;o;" } \startTextSpan
\break

< e,-0 c-3 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;3-3;x;o;5-4;o;" }
< g,-1 a,-0 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"3-1;o;x;o;5-4;o;" }
< g,-1 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"3-1;x;x;o;5-4;o;" }
< g,-1 a,-0 g-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"3-1;o;x;o;5-4;o;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold V }
< e,-0 c'-3 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;x;x;5-3;5-4;o;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< c'-3 g'-1 >1^\markup { \fret-diagram-terse #"x;x;x;5-3;x;3-1;" } \startTextSpan
< e,-0 c'-3 g'-1 >1^\markup { \fret-diagram-terse #"o;x;x;5-3;x;3-1;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< e,-0 a,-0 d-0 c'-3 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;o;5-3;5-4;o;" } \startTextSpan
\break

\pageBreak

< e,-0 c'-3 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;x;x;5-3;5-4;o;" }
< c'-3 ees'-2 >1^\markup { \fret-diagram-terse #"x;x;x;5-3;4-2;x;" }
< aes-4 c'-3 >1^\markup { \fret-diagram-terse #"x;x;6-4;5-3;x;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold V }
< aes-4 c'-3 >1^\markup { \fret-diagram-terse #"x;x;6-4;5-3;x;x;" } \startTextSpan \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< aes-4 c'-3 aes'-2 >1^\markup { \fret-diagram-terse #"x;x;6-4;5-3;x;4-2;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< g,-1 aes-4 g-0 aes'-2 >1^\markup { \fret-diagram-terse #"3-1;x;6-4;o;x;4-2;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold V }
< aes-4 c'-3 >1^\markup { \fret-diagram-terse #"x;x;6-4;5-3;x;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< g,-1 des-2 g-0 >1^\markup { \fret-diagram-terse #"3-1;4-2;x;o;x;x;" } \startTextSpan
\break

< g,-1 des-2 g-0 ees'-3 >1^\markup { \fret-diagram-terse #"3-1;4-2;x;o;4-3;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< g-4 g-0 ees'-3 >1^\markup { \fret-diagram-terse #"x;x;5-4;o;4-3;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< e,-0 c-2 g-4 bes-1 e'-0 >1^\markup { \fret-diagram-terse #"o;3-2;5-4;3-1;x;o;" } \startTextSpan
< g-4 bes-1 d'-3 >1^\markup { \fret-diagram-terse #"x;x;5-4;3-1;3-3;x;" }
\break

< g,-2 a,-0 g-4 bes-1 >1^\markup { \fret-diagram-terse #"3-2;o;5-4;3-1;x;x;" }
< g,-2 bes-1 g'-3 >1^\markup { \fret-diagram-terse #"3-2;x;x;3-1;x;3-3;" }
< g,-2 d-0 bes-1 ees'-4 g'-3 >1^\markup { \fret-diagram-terse #"3-2;x;o;3-1;4-4;3-3;" }
< g,-2 bes-1 >1^\markup { \fret-diagram-terse #"3-2;x;x;3-1;x;x;" } \stopTextSpan
\break

\pageBreak


\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< ees'-3 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;x;x;4-3;4-4;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< bes-2 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;x;3-2;x;4-4;" } \startTextSpan
< d-0 bes-2 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;o;3-2;x;4-4;" }
< bes-2 b-0 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;x;3-2;o;4-4;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold III }
< d-0 bes-2 aes'-4 >1^\markup { \fret-diagram-terse #"x;x;o;3-2;x;4-4;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< des-3 ees-1 bes-2 aes'-4 >1^\markup { \fret-diagram-terse #"x;4-3;1-1;3-2;x;4-4;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< e,-0 bes-2 aes'-4 >1^\markup { \fret-diagram-terse #"o;x;x;3-2;x;4-4;" } \startTextSpan
< aes,-3 bes-2 >1^\markup { \fret-diagram-terse #"4-3;x;x;3-2;x;x;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold I }
< aes,-3 des-4 g-0 c'-1 >1^\markup { \fret-diagram-terse #"4-3;4-4;x;o;1-1;x;" } \startTextSpan
< aes,-3 des-4 bes-2 c'-1 >1^\markup { \fret-diagram-terse #"4-3;4-4;x;3-2;1-1;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< des-4 bes-2 >1^\markup { \fret-diagram-terse #"x;4-4;x;3-2;x;x;" } \startTextSpan
< aes,-3 des-4 bes-2 >1^\markup { \fret-diagram-terse #"4-3;4-4;x;3-2;x;x;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< aes,-3 des-4 g-0 >1^\markup { \fret-diagram-terse #"4-3;4-4;x;o;x;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< a,-0 f-1 ees'-2 >1^\markup { \fret-diagram-terse #"x;o;3-1;x;4-2;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold V }
< d-3 d-0 g-0 bes'-4 >1^\markup { \fret-diagram-terse #"x;5-3;o;o;x;6-4;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< g-2 g-0 d'-1 >1^\markup { \fret-diagram-terse #"x;x;5-2;o;3-1;x;" } \startTextSpan \stopTextSpan
\break

\pageBreak


\override TextSpanner.bound-details.left.text = \markup { \bold V }
< d-3 d-0 c'-4 >1^\markup { \fret-diagram-terse #"x;5-3;o;5-4;x;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< a,-2 d-3 d-0 >1^\markup { \fret-diagram-terse #"5-2;5-3;o;x;x;x;" } \startTextSpan
< g,-1 d-3 d-0 g-0 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-1;5-3;o;o;o;o;" }
< g,-1 d-3 g-4 c'-2 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-1;5-3;5-4;5-2;o;o;" }
\break

< g,-1 d-0 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"3-1;x;o;5-2;x;o;" }
< g,-1 ees-4 d-0 c'-2 >1^\markup { \fret-diagram-terse #"3-1;6-4;o;5-2;x;x;" }
< g,-1 ees-4 d-0 g-0 >1^\markup { \fret-diagram-terse #"3-1;6-4;o;o;x;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold V }
< ees-4 a'-3 >1^\markup { \fret-diagram-terse #"x;6-4;x;x;x;5-3;" } \startTextSpan \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold III }
< f-2 bes-1 >1^\markup { \fret-diagram-terse #"x;x;3-2;3-1;x;x;" } \startTextSpan
< c-3 d-0 bes-1 ees'-4 >1^\markup { \fret-diagram-terse #"x;3-3;o;3-1;4-4;x;" }
< g,-2 bes-1 ees'-4 >1^\markup { \fret-diagram-terse #"3-2;x;x;3-1;4-4;x;" }
< g,-2 bes-1 ees'-4 >1^\markup { \fret-diagram-terse #"3-2;x;x;3-1;4-4;x;" }
\break

< f-3 g-0 ees'-4 >1^\markup { \fret-diagram-terse #"x;x;3-3;o;4-4;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< f,-1 f-3 g-0 ees'-4 g'-2 >1^\markup { \fret-diagram-terse #"1-1;x;3-3;o;4-4;3-2;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< f-3 g-0 b-0 g'-2 >1^\markup { \fret-diagram-terse #"x;x;3-3;o;o;3-2;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< a,-4 a,-0 f-3 g-0 >1^\markup { \fret-diagram-terse #"5-4;o;3-3;o;x;x;" } \startTextSpan
\break

\pageBreak

< a,-4 a,-0 f-3 >1^\markup { \fret-diagram-terse #"5-4;o;3-3;x;x;x;" }
< a,-4 a,-0 f-3 g-0 >1^\markup { \fret-diagram-terse #"5-4;o;3-3;o;x;x;" }
< a,-4 a,-0 f-3 >1^\markup { \fret-diagram-terse #"5-4;o;3-3;x;x;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< a,-4 a,-0 f-3 >1^\markup { \fret-diagram-terse #"5-4;o;3-3;x;x;x;" } \startTextSpan \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold II }
< b,-1 d-0 g-0 b-0 g'-2 >1^\markup { \fret-diagram-terse #"x;2-1;o;o;o;3-2;" } \startTextSpan
< a,-4 b,-1 d-0 b-0 >1^\markup { \fret-diagram-terse #"5-4;2-1;o;x;o;x;" }
< a,-4 b,-1 g-0 ees'-3 >1^\markup { \fret-diagram-terse #"5-4;2-1;x;o;4-3;x;" }
< a,-4 b,-1 a-2 b-0 >1^\markup { \fret-diagram-terse #"5-4;2-1;x;2-2;o;x;" }
\break

< a,-4 a,-0 ges-3 a-2 b-0 >1^\markup { \fret-diagram-terse #"5-4;o;4-3;2-2;o;x;" }
< a,-4 a,-0 ges-3 b-0 ges'-1 >1^\markup { \fret-diagram-terse #"5-4;o;4-3;x;o;2-1;" }
< ges-3 b-2 b-0 ges'-1 >1^\markup { \fret-diagram-terse #"x;x;4-3;4-2;o;2-1;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
< ges-3 b-2 b-0 >1^\markup { \fret-diagram-terse #"x;x;4-3;4-2;o;x;" } \startTextSpan \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 b,-1 d-0 e'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;2-1;o;x;5-4;o;" } \startTextSpan
< a,-0 f-3 a-2 >1^\markup { \fret-diagram-terse #"x;o;3-3;2-2;x;x;" }
< b,-1 f-3 b-0 >1^\markup { \fret-diagram-terse #"x;2-1;3-3;x;o;x;" }
< b,-1 f-3 d'-4 >1^\markup { \fret-diagram-terse #"x;2-1;3-3;x;3-4;x;" }
\break

\pageBreak

< e,-0 a,-0 f-3 g-0 d'-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;3-3;o;3-4;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< a,-0 f-3 d'-4 >1^\markup { \fret-diagram-terse #"x;o;3-3;x;3-4;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< a,-0 f-3 d'-4 f'-1 >1^\markup { \fret-diagram-terse #"x;o;3-3;x;3-4;1-1;" } \startTextSpan
< e,-0 a,-0 d-0 g-0 d'-4 f'-2 >1^\markup { \fret-diagram-terse #"o;o;o;o;3-4;1-2;" }
\break

< b,-3 d-0 b-0 f'-2 >1^\markup { \fret-diagram-terse #"x;2-3;o;x;o;1-2;" }
< e,-0 b,-3 d-0 g-0 b-0 f'-2 >1^\markup { \fret-diagram-terse #"o;2-3;o;o;o;1-2;" }
< b,-3 d-0 b-0 f'-2 >1^\markup { \fret-diagram-terse #"x;2-3;o;x;o;1-2;" }
< e,-0 a,-0 a-4 c'-1 f'-2 >1^\markup { \fret-diagram-terse #"o;o;x;2-4;1-1;1-2;" }
\break

< e,-0 a,-0 a-4 c'-1 e'-0 >1^\markup { \fret-diagram-terse #"o;o;x;2-4;1-1;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 a,-0 e-3 a-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-3;2-4;o;o;" } \startTextSpan
< e,-0 b,-1 e-3 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;2-1;2-3;x;o;o;" }
< e,-0 b,-1 d-0 des'-2 e'-0 >1^\markup { \fret-diagram-terse #"o;2-1;o;x;2-2;o;" }
\break

< g,-4 a,-0 e-3 g-0 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-4;o;2-3;o;o;o;" }
< e,-0 a,-0 e-3 ges'-1 >1^\markup { \fret-diagram-terse #"o;o;2-3;x;x;2-1;" }
< e,-0 a,-0 e-3 a-2 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-3;2-2;x;o;" }
< e,-0 a,-0 e-3 a-2 b-0 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-3;2-2;o;o;" } \stopTextSpan
\break

\pageBreak


\override TextSpanner.bound-details.left.text = \markup { \bold I }
< g,-4 e-3 g-0 e'-0 >1^\markup { \fret-diagram-terse #"3-4;x;2-3;o;x;o;" } \startTextSpan
< g,-4 e-3 g-0 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-4;x;2-3;o;o;o;" }
< g,-4 e-3 g-0 e'-0 >1^\markup { \fret-diagram-terse #"3-4;x;2-3;o;x;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< g,-4 e-3 g-0 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-4;x;2-3;o;o;o;" } \startTextSpan
\break

< g,-4 a,-0 e-3 g-0 des'-1 e'-0 >1^\markup { \fret-diagram-terse #"3-4;o;2-3;o;2-1;o;" }
< g,-4 e-3 g-0 b-0 e'-0 >1^\markup { \fret-diagram-terse #"3-4;x;2-3;o;o;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< e,-0 a,-0 a-2 c'-1 e'-0 >1^\markup { \fret-diagram-terse #"o;o;x;2-2;1-1;o;" } \startTextSpan
< g,-4 a,-0 d-0 g-0 c'-1 e'-0 >1^\markup { \fret-diagram-terse #"3-4;o;o;o;1-1;o;" }
\break

< g,-4 a,-0 d-0 g-0 c'-1 e'-0 >1^\markup { \fret-diagram-terse #"3-4;o;o;o;1-1;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< b,-3 d-0 b-0 ges'-2 >1^\markup { \fret-diagram-terse #"x;2-3;o;x;o;2-2;" } \startTextSpan
< e,-0 a,-0 d-0 b-4 b-0 ges'-2 >1^\markup { \fret-diagram-terse #"o;o;o;4-4;o;2-2;" }
< e,-0 a,-0 e-3 g-0 des'-1 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-3;o;2-1;o;" }
\break

< ges,-2 a,-0 a-4 >1^\markup { \fret-diagram-terse #"2-2;o;x;2-4;x;x;" }
< ges,-2 a,-0 e-1 a-4 e'-0 >1^\markup { \fret-diagram-terse #"2-2;o;2-1;2-4;x;o;" }
< ges,-2 a,-0 d-0 a-4 >1^\markup { \fret-diagram-terse #"2-2;o;o;2-4;x;x;" }
< ges,-2 b,-1 d-0 a-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"2-2;2-1;o;2-4;o;o;" }
\break

\pageBreak

< ges,-2 b,-1 d-0 a-4 b-0 >1^\markup { \fret-diagram-terse #"2-2;2-1;o;2-4;o;x;" }
< ges,-2 b,-1 d-0 a-4 b-0 e'-0 >1^\markup { \fret-diagram-terse #"2-2;2-1;o;2-4;o;o;" }
< ges,-2 a,-0 a-4 >1^\markup { \fret-diagram-terse #"2-2;o;x;2-4;x;x;" }
< b,-1 d-0 a-4 b-0 >1^\markup { \fret-diagram-terse #"x;2-1;o;2-4;o;x;" }
\break

< e,-0 a,-0 e-2 a-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-2;2-4;x;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< f,-1 a,-0 d-0 a-4 e'-0 >1^\markup { \fret-diagram-terse #"1-1;o;o;2-4;x;o;" } \startTextSpan
< f,-1 bes,-3 d-0 a-4 e'-0 >1^\markup { \fret-diagram-terse #"1-1;1-3;o;2-4;x;o;" }
< f,-1 bes,-3 d-0 f'-2 >1^\markup { \fret-diagram-terse #"1-1;1-3;o;x;x;1-2;" }
\break

< f,-1 bes,-3 bes-4 >1^\markup { \fret-diagram-terse #"1-1;1-3;x;3-4;x;x;" }
< bes,-3 d-0 bes-4 c'-2 >1^\markup { \fret-diagram-terse #"x;1-3;o;3-4;1-2;x;" }
< f,-1 a,-0 c'-2 >1^\markup { \fret-diagram-terse #"1-1;o;x;x;1-2;x;" }
< f,-1 a,-0 d-0 g-0 c'-2 g'-4 >1^\markup { \fret-diagram-terse #"1-1;o;o;o;1-2;3-4;" }
\break

< a,-0 c'-2 f'-3 >1^\markup { \fret-diagram-terse #"x;o;x;x;1-2;1-3;" }
< a,-0 d-0 a-4 f'-3 >1^\markup { \fret-diagram-terse #"x;o;o;2-4;x;1-3;" }
< a,-0 d-0 a-4 f'-3 >1^\markup { \fret-diagram-terse #"x;o;o;2-4;x;1-3;" }
< bes,-2 d-0 g-0 f'-3 >1^\markup { \fret-diagram-terse #"x;1-2;o;o;x;1-3;" }
\break

\pageBreak

< a,-0 f-4 c'-1 >1^\markup { \fret-diagram-terse #"x;o;3-4;x;1-1;x;" }
< g,-2 a,-0 f-4 g-0 c'-1 >1^\markup { \fret-diagram-terse #"3-2;o;3-4;o;1-1;x;" }
< g,-2 a,-0 f-4 g-0 c'-1 >1^\markup { \fret-diagram-terse #"3-2;o;3-4;o;1-1;x;" }
< e,-0 a,-0 f-4 g-0 c'-1 e'-0 >1^\markup { \fret-diagram-terse #"o;o;3-4;o;1-1;o;" }
\break

< f,-2 a,-0 d-0 g-0 c'-1 f'-3 >1^\markup { \fret-diagram-terse #"1-2;o;o;o;1-1;1-3;" }
< f,-2 c-4 f'-3 >1^\markup { \fret-diagram-terse #"1-2;3-4;x;x;x;1-3;" }
< f,-2 c-4 d-0 f'-3 >1^\markup { \fret-diagram-terse #"1-2;3-4;o;x;x;1-3;" }
< f,-2 a,-0 c'-1 >1^\markup { \fret-diagram-terse #"1-2;o;x;x;1-1;x;" }
\break

< f,-2 des-4 c'-1 >1^\markup { \fret-diagram-terse #"1-2;4-4;x;x;1-1;x;" }
< f,-2 c-3 d-0 c'-1 >1^\markup { \fret-diagram-terse #"1-2;3-3;o;x;1-1;x;" }
< c-3 f-4 c'-1 >1^\markup { \fret-diagram-terse #"x;3-3;3-4;x;1-1;x;" }
< f,-2 c-3 f-4 g-0 >1^\markup { \fret-diagram-terse #"1-2;3-3;3-4;o;x;x;" }
\break

< e,-0 a,-0 f-4 g-0 c'-1 e'-0 >1^\markup { \fret-diagram-terse #"o;o;3-4;o;1-1;o;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
< c-3 f-4 g-0 >1^\markup { \fret-diagram-terse #"x;3-3;3-4;o;x;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< f,-2 a,-0 g-0 c'-1 >1^\markup { \fret-diagram-terse #"1-2;o;x;o;1-1;x;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 a,-0 e-3 a-4 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-3;2-4;x;o;" } \startTextSpan
\break

\pageBreak

< b,-1 d-0 a-4 b-0 >1^\markup { \fret-diagram-terse #"x;2-1;o;2-4;o;x;" }
< b,-2 d-0 a-4 b-0 >1^\markup { \fret-diagram-terse #"x;2-2;o;2-4;o;x;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< f,-1 a,-0 e-3 e'-0 >1^\markup { \fret-diagram-terse #"1-1;o;2-3;x;x;o;" } \startTextSpan
< e,-0 a,-0 e-3 b-4 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-3;4-4;1-2;o;" }
\break

< e,-0 a,-0 e-3 c'-2 e'-0 >1^\markup { \fret-diagram-terse #"o;o;2-3;x;1-2;o;" }
< d-0 b-4 b-0 f'-1 >1^\markup { \fret-diagram-terse #"x;x;o;4-4;o;1-1;" }
< d-0 g-0 d'-3 f'-1 >1^\markup { \fret-diagram-terse #"x;x;o;o;3-3;1-1;" }
< a,-0 d-0 g-0 d'-3 f'-1 >1^\markup { \fret-diagram-terse #"x;o;o;o;3-3;1-1;" } \stopTextSpan
\break


\override TextSpanner.bound-details.left.text = \markup { \bold II }
< e,-0 e-2 g-0 d'-3 e'-0 >1^\markup { \fret-diagram-terse #"o;x;2-2;o;3-3;o;" } \startTextSpan \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
< e,-0 a,-0 d-0 g-0 d'-3 f'-1 >1^\markup { \fret-diagram-terse #"o;o;o;o;3-3;1-1;" } \startTextSpan
< d-0 g-0 d'-3 f'-1 >1^\markup { \fret-diagram-terse #"x;x;o;o;3-3;1-1;" } \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
< b,-2 d-0 b-4 d'-3 >1^\markup { \fret-diagram-terse #"x;2-2;o;4-4;3-3;x;" } \startTextSpan
\break

< b,-2 d-0 b-0 ges'-1 >1^\markup { \fret-diagram-terse #"x;2-2;o;x;o;2-1;" }
< e,-0 d-0 b-4 b-0 ges'-1 >1^\markup { \fret-diagram-terse #"o;x;o;4-4;o;2-1;" }
< bes-3 ges'-1 >1^\markup { \fret-diagram-terse #"x;x;x;3-3;x;2-1;" }
< aes,-4 b-0 ges'-1 >1^\markup { \fret-diagram-terse #"4-4;x;x;x;o;2-1;" } \stopTextSpan
\break

\pageBreak

}}
\new Voice {
\override TextScript.size = #'1.5
\override TextScript.fret-diagram-details.finger-code = #'in-dot
\absolute {
	\clef "treble_8"
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
s1
}}
>>
\layout {}
\midi {}
}