# fretboard-js
Fretboard-js is a javascript library for solving problems related to fretted string instruments. It can answer questions such as: “Is this hand position feasible to play?”or “What other positions could I move to easily from this position?” Later on we see how the algorithms which answer these type of questions can be re-engineered to produce generative compositions. In the final section, the rules underpinning the algorithm are generalised so as to be applicable to superhuman anatomy. What would it sound like to hear a guitarist with seventeen fingers on each hand play an instrument with over one hundred strings? A special synthesiser is developed to be able to model this type of situation.

The design of the fretboard is such that (disregarding pitch bend and any other special techniques) each string can be said to exists in one of a finite set of discrete states. It may be open, or it may be stopped by the first fret, or the second fret, or the third, etc. Likewise, the position of any finger can be described by two integers: the string number and the fret number. As such the positions of all four fingers (or all six string-states) can be taken together to describe the configuration of the hand on the fretboard.

## HandPosition class
The `HandPosition` class is used to represent the positions of a musician's fingers on a fretboard. This class consists of two pieces of information. The first is a vector of four coordinates, one for each finger. Each coordinate consists of two integers which assigns a string-number and a fret-number to its finger. Alternatively, a coordinate may hold a special null value if the finger should be disengaged from the fretboard. The second piece of information is a vector of Boolean (true or false) values, one for each string on the instrument. These determine whether each string should be played or left silent by the performer.
Built into the HandPosition class is the ability to render graphical versions of itself (either in classical notation or as a fretboard diagram) using the music type-setting program LilyPond. It can also generate a MIDI version of itself and find an appropriate jazz style chord symbol (if one exists).

Here are JSON representations of two `HandPosition` objects with their graphical equivalents rendered by LilyPond below.

```
// First bar:
{ fingers: [
    null,
    {fret: 2, string: 1},
    null,
    {fret: 4, string: 4},
  ],
  openStrings: [0, 4, 5],
 }
 
 // Second bar,
{ fingers: [
    {fret: 2, string:2},
    {fret: 2, string:1}, 
    {fret: 4, string:3}, 
    null
  ],
  openStrings: [0, 4, 5], 
}
```

![fig1](images/fig1.png)

Observations:
- Compared to the formalisation of a fretboard diagram in the previous section, the HandPosition class represents all the same information, but does so more concisely. It uses only 14 values as apposed to 72.
- Like tablature and fretboard diagrams, the HandPosition class has no pitch interpretation without also knowing the tuning of the instrument.
