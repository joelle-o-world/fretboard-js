\version "2.18.2"
\score {
<<
\new Voice {
\override TextScript.size = #'1.5
\override TextScript.fret-diagram-details.finger-code = #'in-dot
\absolute {
	\clef "treble_8"
\set TabStaff.minimumFret = #4
< ges-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< g,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< c'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< b,-2 >16
\set TabStaff.minimumFret = #2
< a-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a,-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
\set TabStaff.minimumFret = #2
< des'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #4
< b-2 >16
\set TabStaff.minimumFret = #4
< des-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< e'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< aes,-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #5
< c'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< bes,-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< g'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
\set TabStaff.minimumFret = #3
< bes-1 >16 \startTextSpan
\set TabStaff.minimumFret = #3
< g,-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< des-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
\set TabStaff.minimumFret = #2
< des'-1 >16 \startTextSpan
\set TabStaff.minimumFret = #2
< a-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< c-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< ees-3 >16
\set TabStaff.minimumFret = #1
< c'-4 >16
\set TabStaff.minimumFret = #1
< ees-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< g,-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< ees-3 >16
\set TabStaff.minimumFret = #1
< ees-3 >16
\set TabStaff.minimumFret = #1
< f,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< b,-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< ees-2 >16
\set TabStaff.minimumFret = #1
< c'-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< aes'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< bes,-1 >16 \startTextSpan
\set TabStaff.minimumFret = #1
< f,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< des-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< c'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #3
< bes-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< f'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a'-2 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< ges-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #6
< bes'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< c-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VII }
\set TabStaff.minimumFret = #7
< d'-1 >16 \startTextSpan
\set TabStaff.minimumFret = #7
< a-2 >16
\set TabStaff.minimumFret = #7
< b,-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #10
< g-4 >16
\set TabStaff.minimumFret = #10
< d-2 >16
\set TabStaff.minimumFret = #10
< f'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VII }
\set TabStaff.minimumFret = #7
< b'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #10
< d-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #9
< b-2 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VIII }
\set TabStaff.minimumFret = #8
< ees'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #10
< d-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #9
< aes'-3 >16
\set TabStaff.minimumFret = #9
< aes'-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VIII }
\set TabStaff.minimumFret = #8
< f-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #10
< d-2 >16
\set TabStaff.minimumFret = #10
< d''-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VII }
\set TabStaff.minimumFret = #7
< a-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #9
< e'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VIII }
\set TabStaff.minimumFret = #8
< f-1 >16 \startTextSpan \stopTextSpan
\break

\set TabStaff.minimumFret = #10
< f'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< f-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VI }
\set TabStaff.minimumFret = #6
< aes-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #8
< f-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< des'-2 >16
\set TabStaff.minimumFret = #6
< aes-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< aes'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #5
< a,-2 >16
\set TabStaff.minimumFret = #5
< e'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< aes-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
\set TabStaff.minimumFret = #3
< bes-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-4 >16
\set TabStaff.minimumFret = #4
< ees'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< bes,-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #2
< ges,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< f-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< a-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< f,-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #2
< ges'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< f,-2 >16
\set TabStaff.minimumFret = #1
< bes,-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< d'-3 >16
\set TabStaff.minimumFret = #3
< bes-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ges-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< ees-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< aes'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #5
< e'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< bes-2 >16
\set TabStaff.minimumFret = #3
< c-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< b-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< f'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< f-2 >16
\set TabStaff.minimumFret = #3
< c-3 >16
\set TabStaff.minimumFret = #3
< g'-1 >16
\set TabStaff.minimumFret = #3
< g'-1 >16
\set TabStaff.minimumFret = #3
< f-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< f,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< des'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< bes-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< e-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< d'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< f'-3 >16
\set TabStaff.minimumFret = #1
< c'-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< des-3 >16
\set TabStaff.minimumFret = #4
< aes,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< c'-4 >16
\set TabStaff.minimumFret = #5
< a,-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< f-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #7
< d'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #10
< d-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #7
< ges'-2 >16
\set TabStaff.minimumFret = #7
< d'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< c-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold V }
\set TabStaff.minimumFret = #5
< d-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #7
< d'-2 >16
\set TabStaff.minimumFret = #7
< b,-1 >16
\set TabStaff.minimumFret = #7
< a-3 >16
\set TabStaff.minimumFret = #7
< b'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< e'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< c''-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< des'-3 >16
\set TabStaff.minimumFret = #6
< bes'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< g-2 >16 \stopTextSpan
\break

}}
\new TabStaff {
\override TextScript.size = #'1.5
\override TextScript.fret-diagram-details.finger-code = #'in-dot
\absolute {
\set TabStaff.minimumFret = #4
< ges-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< g,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< c'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< b,-2 >16
\set TabStaff.minimumFret = #2
< a-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a,-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
\set TabStaff.minimumFret = #2
< des'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #4
< b-2 >16
\set TabStaff.minimumFret = #4
< des-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< e'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< aes,-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #5
< c'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< bes,-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< g'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
\set TabStaff.minimumFret = #3
< bes-1 >16 \startTextSpan
\set TabStaff.minimumFret = #3
< g,-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< des-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold II }
\set TabStaff.minimumFret = #2
< des'-1 >16 \startTextSpan
\set TabStaff.minimumFret = #2
< a-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< c-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< ees-3 >16
\set TabStaff.minimumFret = #1
< c'-4 >16
\set TabStaff.minimumFret = #1
< ees-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< g,-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< ees-3 >16
\set TabStaff.minimumFret = #1
< ees-3 >16
\set TabStaff.minimumFret = #1
< f,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< b,-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< ees-2 >16
\set TabStaff.minimumFret = #1
< c'-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< aes'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< bes,-1 >16 \startTextSpan
\set TabStaff.minimumFret = #1
< f,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< des-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< c'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #3
< bes-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< f'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a'-2 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< ges-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #6
< bes'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< c-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VII }
\set TabStaff.minimumFret = #7
< d'-1 >16 \startTextSpan
\set TabStaff.minimumFret = #7
< a-2 >16
\set TabStaff.minimumFret = #7
< b,-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #10
< g-4 >16
\set TabStaff.minimumFret = #10
< d-2 >16
\set TabStaff.minimumFret = #10
< f'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VII }
\set TabStaff.minimumFret = #7
< b'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #10
< d-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #9
< b-2 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VIII }
\set TabStaff.minimumFret = #8
< ees'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #10
< d-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #9
< aes'-3 >16
\set TabStaff.minimumFret = #9
< aes'-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VIII }
\set TabStaff.minimumFret = #8
< f-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #10
< d-2 >16
\set TabStaff.minimumFret = #10
< d''-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VII }
\set TabStaff.minimumFret = #7
< a-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #9
< e'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VIII }
\set TabStaff.minimumFret = #8
< f-1 >16 \startTextSpan \stopTextSpan
\break

\set TabStaff.minimumFret = #10
< f'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< f-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold VI }
\set TabStaff.minimumFret = #6
< aes-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #8
< f-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< des'-2 >16
\set TabStaff.minimumFret = #6
< aes-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< aes'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #5
< a,-2 >16
\set TabStaff.minimumFret = #5
< e'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< aes-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold III }
\set TabStaff.minimumFret = #3
< bes-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #4
< ees'-4 >16
\set TabStaff.minimumFret = #4
< ees'-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< bes,-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #2
< ges,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< f-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< a-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold I }
\set TabStaff.minimumFret = #1
< f,-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #2
< ges'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< f,-2 >16
\set TabStaff.minimumFret = #1
< bes,-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< d'-3 >16
\set TabStaff.minimumFret = #3
< bes-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< ges-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< ees-3 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold IV }
\set TabStaff.minimumFret = #4
< aes'-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #5
< e'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< bes-2 >16
\set TabStaff.minimumFret = #3
< c-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< a'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< b-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< f'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< f-2 >16
\set TabStaff.minimumFret = #3
< c-3 >16
\set TabStaff.minimumFret = #3
< g'-1 >16
\set TabStaff.minimumFret = #3
< g'-1 >16
\set TabStaff.minimumFret = #3
< f-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< f,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< des'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< bes-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #2
< e-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #3
< d'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #1
< f'-3 >16
\set TabStaff.minimumFret = #1
< c'-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #4
< des-3 >16
\set TabStaff.minimumFret = #4
< aes,-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< c'-4 >16
\set TabStaff.minimumFret = #5
< a,-1 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< f-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #7
< d'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #10
< d-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #7
< ges'-2 >16
\set TabStaff.minimumFret = #7
< d'-3 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< c-4 >16 \stopTextSpan

\override TextSpanner.bound-details.left.text = \markup { \bold V }
\set TabStaff.minimumFret = #5
< d-1 >16 \startTextSpan \stopTextSpan
\set TabStaff.minimumFret = #7
< d'-2 >16
\set TabStaff.minimumFret = #7
< b,-1 >16
\set TabStaff.minimumFret = #7
< a-3 >16
\set TabStaff.minimumFret = #7
< b'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< e'-2 >16 \stopTextSpan
\set TabStaff.minimumFret = #8
< c''-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #6
< des'-3 >16
\set TabStaff.minimumFret = #6
< bes'-4 >16 \stopTextSpan
\set TabStaff.minimumFret = #5
< g-2 >16 \stopTextSpan
\break

}}
>>
\layout {}
\midi {}
}