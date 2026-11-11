Honestly, this is cooked but I'll try to add only the important parts.

So we know that **Regular Languages** (FSMs, Regular Expressions) $\subseteq$ **Context-Free Languages** (CFGs, PDAs). 

Well, guess what? **Turing Machines** now cover everything. So now we have, **Regular Languages** (FSMs, Regular Expressions) $\subseteq$ **Context-Free Languages** (CFGs, PDAs) $\subseteq$ **Turing Machines** (Unrestricted Grammars, D, SD).

![[Pasted image 20261111144032.png]]

Review:
- FSMs = Finite State Machines
- CFGs = Context-Free Grammars
- PDAs = Push-Down Automata

Turing Machines span two sets, those being **Decidable** (D) and **Semi-Decidable** (SD). (We'll get into the differences later!)

## Formal Definition

A Turing Machine M is a sextuple (K, $\Sigma$, $\Gamma$, $\delta$, s, H):
- K is a finite set of **states**
- $\Sigma$ is the **input alphabet**, which does not contain $\Box$ (Blank)
- $\Gamma$ is the **tape alphabet**, which must contain $\Box$ and have $\Sigma$ as a subset
- s $\in$ K is the **initial state**
- H $\subseteq$ K is the set of **halting states**
- $\delta$ is the **transition function**

![[Pasted image 20261111145118.png]]

Some things to note:
- The input tape is infinite in both directions
- $\delta$ is a function NOT A RELATION, so this definition is for deterministic Turing machines.
- $\delta$ must be defined for all (state, input) pair unless the state is a halting state.
- IMPORTANT: Turing machines do not necessarily halt (unlike FSMs and PDAs). WHY? Because to halt, they must enter a halting state, otherwise they loop.
- Turing machines generate output so they can compute functions. (We'll see some examples later)

Example:

lets say M takes as input a string in the language $\{a^{i}b^{j}, 0 \le j \le i\}$...

and adds `b`'s as required to make the number of `b`'s equal the number of `a`'s.

Well, the input to M would look something like this:

![[Pasted image 20261111145923.png]]

And the output should be:

![[Pasted image 20261111145929.png]]

Well, hold your breath, cause this is gonna hurt.

Here is a Turing machine M that will do what we said above:

![[Pasted image 20261111150106.png]]

Kind of like PDAs, we have the transition format `a`/`b`/`c` where we **read** `a` from the tape, then **write** `b` on the tape before **moving** the `tape head` (the $\uparrow$ in the two pictures above) in direction `c`.

For example, take the first transition from state 1 to state 2. We **read** $\Box$ (Blank) from the tape, then we **write** $\Box$ (Blank) to the tape (at the same position we just read from), then lastly, we **move** the `tape head` $\rightarrow$ (right, duh). In proper notation, it would be:

$$\delta(1, \Box) = (2, \Box, \rightarrow)$$

## Halting

Okay so to make this a one liner: "Haling means that a machine finishes its computation and stops running, rather than looping infinitely."

Basically, think of a FSM, with an **final accepting state**. It obviously halts once an input string is read and reaches that final accepting state.

However, what about if we reach a trap state? Well then we are looping infinitely, right? WRONG! Well, yes, but NO!

When we say looping infinitely, we mean that there is an **epsilon loop** (so no input is being consumed).

In a FSM, when we have a trap state, we are saying that once we reach this state, any other characters being read from our input string should remain on this state. However, no matter