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
- $\Gamma$ is the **tape alphabet**, which must contain $\Box$ and have $\Sigma$ as a subset.
- s 