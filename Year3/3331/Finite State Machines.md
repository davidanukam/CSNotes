### Finite Automata (Finite memory/states)

![[Pasted image 20260916113815.png]]

- States are switched by reading input symbols

## DFSM (Deterministic Finite Automata):
- K is  a **finite** set of states
- $\Sigma$ is an alphabet
- $s \in K$ is the initial state
- $A \subseteq K$ is the set of accepting (final) states
- $\delta$ is the **transition function** from ($K \times \Sigma$) to $K$

$\delta: K \times \Sigma \rightarrow K$
delta(p, a) = q : p -> ^{1} q