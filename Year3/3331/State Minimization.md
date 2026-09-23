To Minimize the number of states we can do two things

Step 1: Get rid of unreachable states:

3/34

- Find the reachable ones and then see which ones are not reachable

Step 2: Get rid of redundant states:

3/34

- Find the states that are equivalent. This means that by their sets of transitions, they both lead to the same state (have the same fate)
- In this example, by transition a, both q2 and q3 lead to q1 and by transition b, both q2 and q3 lead to q1 again.
- So we can merge them

## Finding a Minimal DFSM

Two problems:

1. Given a regular language, find a minimal DFSM for it
2. Given a DFSM, find a minimal DFSM equivalent to it.

Lets focus on problem1 for now

Given a language:
- Capture the notion of equivalence classes of strings with respect to that language
- Prove that we can always find a (unique up to state naming) deterministic FSM with a number of states equal to the number of equivalence classes of strings.
- Describe and algorithm for finding that DFSM

Indistinguishable (with respect to a language L):
- If, not matter what is tacked on to them on the **right**, either they will both be in L or neither will.

If $x$ and $y$ are indistinguishable, then we can merge $p$ and $q$ to get a minimized DFSM.

![[Pasted image 20260918114655.png]]

Yes, they are because the lengths of the strings will be the same so every time one is odd it is not in the language and every time |w| is even then it is in the language.

![[Pasted image 20260918114847.png]]

No, because (after adding the empty string to the end), one can be in the language while the other is not.

## Equivalence Relation

![[Pasted image 20260918115013.png]]

Because L is an equivalence relation:
- No equivalence class of L is empty
- Each string in $\Sigma^{*}$ is in exactly one equivalence class of L
- Also it defines a partition meaning that each string goes to only ONE equivalence class and no equivalence classes are empty (we just said this but whatever)
- The union of the equivalence classes is equal to $\Sigma^{*}$

E.g.

![[Pasted image 20260918115142.png]]

E.g.

![[Pasted image 20260918115326.png]]

Some equivalence classes in $\Sigma^{*}$ are $\in L$ while others are not. The ones that are in L are the **Accepting States**. The rest are the non-accepting states and the dead states.

## The Best We Can Do is also Unique

$\delta : [x] \overset{a}{\rightarrow} [x, a]$

e.g.

$[x, y] \overset{a}{\rightarrow} [xa, ya]$

because $x \approx_{L} y$

so $\therefore xa \approx_{L} ya$

> Remember: The number of states has to be at least the number of classes

![[Pasted image 20260918121117.png]]

The # of Accepting States = # of equivalence classes that have all strings $\in L$

## The Overclustering Approach

States **p** and state **q** behave the **same** for any w *iff* they do the same job by either both leading to an **accepting** state or both leading to a **rejecting** state.

Therefore, they are mergeable.

## Constructing $\equiv_{n}$ (length $n$)

