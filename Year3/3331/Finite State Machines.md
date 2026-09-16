### Finite Automata (Finite memory/states)

![[Pasted image 20260916113815.png]]

- States are switched by reading input symbols
- Initial state has the arrow pointing to it
- Final state has two circles around it

## DFSM (Deterministic Finite Automata):
- K is  a **finite** set of **states**
- $\Sigma$ is an **alphabet**
- $s \in K$ is the **initial state**
- $A \subseteq K$ is the set of **accepting (final) states**
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
Drawing TBA

$L = \{w \in \{a, b\}^{*} : \text{every a region in w is of even length}\}$
Drawing TBA

$L = \{w \in \{a, b\}^{*} : \text{every b in w is surrounded by a's}\}$
Drawing TBA

---

Therefore, DFSMs are complete since their transition functions are always complete (So any missing transitions lead to the "dead" state - even if it is not shown for clarity)

## Programming FSMs

In this example we want to cluster strings that share a "future"

$L = \{w \in \{a, b\}^{*} : \text{w contains an even number of a's and an odd number of b's}\}$
Drawing TBA

$L = \{w \in \{a - z\}^{*} : \text{all five vowels, a, e, i, o, and u, occur in w in alphabetical order}\}$
Drawing TBA

$L = \{w \in \{a, b\}^{*} : \text{w does not contain the substring aab}\}$
- It is easier to construct the DFA for $L = \{w \in \{a, b\}^{*} : \text{w contains aab}\}$
- So start with $\not L$ and complement it

$\not L$:
Drawing TBA
### How to complement:
Just flip the **accepting** and **rejecting** states

L:
Drawing TBA

### The Missing Letter Language
Let $\Sigma = \{a, b, c, d\}$
Let $L_{\text{Missing}} = \{w : \text{there is a symbol} \ a_{i} \ \in \Sigma \ \text{not appearing in} \ w\}$

Trying to make a DFSM for $L_{\text{Misisng}}$ is super difficult but apparently making a [NDFSM](#NDFSM%20(Non-Deterministic%20Finite%20State%20Machine)) (Non-deterministic FSM) is easier.

## NDFSM (Non-Deterministic Finite State Machine)

- K is  a **finite** set of **states**
- $\Sigma$ is an **alphabet**
- $s \in K$ is the **initial state**
- $A \subseteq K$ is the set of **accepting states**
- $\Delta$ is the **transition relation**. It is a **finite subset** of $(K \times (\Sigma \cup \{\epsilon\})) \times K$

### Accepting by an NDFSM:
- Basically M **accepts** a string w *iff* there exists some path along which w drives M to some element of A.
	- In English, w is accepted if it moves the initial state to literally any of the possible accepting states? (fact check)
- The **language** accepted by M, **L(M)**, is the set of all strings **accepted** by M.

