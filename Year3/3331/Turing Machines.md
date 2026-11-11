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

lets say M