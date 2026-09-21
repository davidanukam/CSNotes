### Finite Automata (Finite memory/states)

![FSMExampleForAVendingMachine](assets/FSMExampleForAVendingMachine.png)

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
- Also no $\epsilon$ transitions and no choice

### Drawing Example
TBA from prof example notes

### Symbols Example
TBA from prof example notes

**Theorem**: Every DFSM M, on input s, halts in $|s|$ steps.

Example:

![FSMToAcceptOddIntegers](assets/FSMToAcceptOddIntegers.png)

## Regular Languages

A **language** is **regular** *iff* it is accepted by some **FSM**.

Examples:

$L = \{w \in \{a, b\}^{*} : \text{every a is immediately follow by a b}\}$

![FSMExample1](assets/FSMExample1.png)

$L = \{w \in \{0, 1\}^{*} : \text{w has odd parity}\}$

![FSMExample2](assets/FSMExample2.png)

$L = \{w \in \{a, b\}^{*} : \text{w contains at most b}\}$

![FSMExample3](assets/FSMExample3.png)

---

**When the starting state IS the final state, then that means you are accepting $\epsilon$**

**This also means that $\epsilon$ is accepting (in the language)

So basically a *iff* relationship

---

$L = \{w \in \{a, b\}^{*} : \text{no two consecutive characters are the same}\}$

![FSMExample4](assets/FSMExample4.png)

$L = \{w \in \{a, b\}^{*} : \text{every a region in w is of even length}\}$

![FSMExample5](assets/FSMExample5.png)

$L = \{w \in \{a, b\}^{*} : \text{every b in w is surrounded by a's}\}$

![FSMExample6](assets/FSMExample6.png)

---

Therefore, DFSMs are complete since their transition functions are always complete (So any missing transitions lead to the "dead" state - even if it is not shown for clarity)

## Programming FSMs

In this example we want to cluster strings that share a "future"

$L = \{w \in \{a, b\}^{*} : \text{w contains an even number of a's and an odd number of b's}\}$

![EvenAsAndOddBsFSMExample](assets/EvenAsAndOddBsFSMExample.png)

$L = \{w \in \{a - z\}^{*} : \text{all five vowels, a, e, i, o, and u, occur in w in alphabetical order}\}$

![VowelsInAlphaOrderFSMExample](assets/VowelsInAlphaOrderFSMExample.png)

$L = \{w \in \{a, b\}^{*} : \text{w does not contain the substring aab}\}$
- It is easier to construct the DFA for $L = \{w \in \{a, b\}^{*} : \text{w contains aab}\}$
- So start with $\neg L$ and complement it

$\neg L$:

![ComplementFSMExample](assets/ComplementFSMExample.png)
### How to complement:
Just flip the **accepting** and **rejecting** states

L:

![ComplementFlippedFSMExample](assets/ComplementFlippedFSMExample.png)

### The Missing Letter Language
Let $\Sigma = \{a, b, c, d\}$
Let $L_{\text{Missing}} = \{w : \text{there is a symbol} \ a_{i} \ \in \Sigma \ \text{not appearing in} \ w\}$

Trying to make a DFSM for $L_{\text{Misisng}}$ is super difficult but apparently making a [NDFSM](#NDFSM%20(Non-Deterministic%20Finite%20State%20Machine)) (Non-deterministic FSM) is easier.

See [The Missing Letter Language NDFSM](#The%20Missing%20Letter%20Language%20NDFSM)

## NDFSM (Non-Deterministic Finite State Machine)

- K is  a **finite** set of **states**
- $\Sigma$ is an **alphabet**
- $s \in K$ is the **initial state**
- $A \subseteq K$ is the set of **accepting states**
- $\Delta$ is the **transition relation**. It is a **finite subset** of $(K \times (\Sigma \cup \{\epsilon\})) \times K$
	- No longer a function because from the same state the same input, you can get to different states

![NDFSMExample](assets/NDFSMExample.png)

### Accepting by an NDFSM:
- Basically M **accepts** a string w *iff* there exists some path along which w drives M to some element of A.
	- In English, w is accepted if it moves the initial state to literally any of the possible accepting states
	- So if all are rejecting then you reject w (w is NOT in L(M))
- The **language** accepted by M, **L(M)**, is the set of all strings **accepted** by M.

### Optional Substrings

$L = \{w \in \{a, b\}^{*} : \text{w is made up of an optional a followed by aa followed by zero or more b's}\}$

![NFSMOptionalSubstringsExample](assets/NFSMOptionalSubstringsExample.png)

$L = \{w \in \{a, b\}^{*} : \text{w = aba or |w| is even}\}$

> For **or**, split the branch/path and use $\epsilon$ as the transition symbol on both paths as the **or** is the **inclusive or**.

![NFSMMultipleSublanguagesExample](assets/NFSMMultipleSublanguagesExample.png)

### The Missing Letter Language NDFSM
Let $\Sigma = \{a, b, c, d\}$
Let $L_{\text{Missing}} = \{w : \text{there is a symbol} \ a_{i} \ \in \Sigma \ \text{not appearing in} \ w\}$

Now it is easier:

![TheMissingLetterLanguageNDFSMExample](assets/TheMissingLetterLanguageNDFSMExample.png)

$L = \{w \in \{a, b, c\}^{*} : \exists x, y \in \{a, b, c\}^{*} \ (\text{w = x abcabb y})\}$

Pattern Matching using a DFSM:

![DFSMPatternMatchingExample](assets/DFSMPatternMatchingExample.png)

Pattern Matching Using an NDFSM:

![NDFSMPatternMatchingExample](assets/NDFSMPatternMatchingExample.png)

## Analyzing Nondeterministic FSMs

You can do this in 2 ways:

- Explore a search tree
- Follow all paths in parallel
	- You can use sets of states instead of just states which makes it **DETERMINISTIC**

![AnalyzingNondeterministicFSMSExample](assets/AnalyzingNondeterministicFSMSExample.png)

## Dealing with Epsilon Transitions

Slides 59 - 61

## Simulating a NDFSM

![SimulatingANDFSMFormula](assets/SimulatingANDFSMFormula.png)

Example:

![SimulatingANDFSMExample](assets/SimulatingANDFSMExample.png)

## NDFSM and DFSM

So clearly: $\{\text{Languages accepted by a DFSM}\} \subseteq \{\text{Languages accepted by a NDFSM}\}$

> Theorem 5.3:
> For each NDFSM, there is an **equivalent** DFSM

- NFA are Easy to Build while
- DFA are Easy to Use

**So build an NFA FIRST, and then make it an DFA**

![ProofThatNDFSMCanBeMadeIntoDFSM](assets/ProofThatNDFSMCanBeMadeIntoDFSM.png)

Finally, we can use this algorithm to Construct a DFSM from a NDFSM:

1. Compute the $\text{eps(q)'s}$
2. Compute $\text{s' = eps(s)}$
3. Compute $\delta'$
4. Compute $\text{K' = a subset of \mathcal{P}{K{$
5. 