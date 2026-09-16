### Finite Automata (Finite memory/states)

![[Pasted image 20260916113815.png]]

- States are switched by reading input symbols
- Initial state has the arrow pointing to it
- Final state has two circles around it

## DFSM (Deterministic Finite Automata):
- K is  a **finite** set of states
- $\Sigma$ is an alphabet
- $s \in K$ is the initial state
- $A \subseteq K$ is the set of accepting (final) states
- $\delta$ is the **transition function** from ($K \times \Sigma$) to $K$

$\delta: K \times \Sigma \rightarrow K$
$\delta(p, a) = q : p \frac{a}{\rightarrow} q$

### Accepting by a DFSM:
- Basically when you read the string w *iff* reading M ends at the final state then the string w is accepted, else it is rejected.
- The **language** accepted by M, **L(M)**, is the set of all strings **accepted** by M.

### Drawing Example
TBA

### Symbols Example
TBA

Theorem: Every DFSM M, on input s, halts in |s| steps.

Example:

![[Pasted image 20260916115502.png]]

## Regular Languages

A language is regular iff it is accepted by some FSM.

Examples:

$L = \{w \in \{a, b\}^{*} : \text{every a is immediately follow by a b}\}$
Drawing TBA

$L = \{w \in \{0, 1\}^{*} : \text{w has odd parity}\}$
Drawing TBA

$L = \{w \in \{a, b\}^{*} : \text{w contains at most b}\}$
Drawing TBA

---

**When the starting state IS the final state, then that means you are accepting $\epsilon$**

**This also means that $\epsilon$ is accepting (in the language)

So basically a iff relationship

---

$L = \{w \in \{a, b\}^{*} : \text{no two consecutive characters are the same}\}$
