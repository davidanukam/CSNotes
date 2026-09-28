## Grammars
- Grammars are rewriting systems (that produce strings)
- **Non-terminals** will do the work (Upper case)
- **Terminals** form the final strings (Lower case)

E.g.

$S \rightarrow Sa$
$S \rightarrow \epsilon$

1. Non-terminal: S
2. Terminal: a

A Grammar G is a quadruple of the form (V, $\Sigma$, R, S)
- **V** is the rule alphabet (it contains the Non-terminals and Terminals)
- $\Sigma$ is the set of terminals which is a subset of **V**
- **R** has a finite set of **rules** of the form: $X \rightarrow Y, X Y \in V^{*}$ where **X** can be rewritten as **y**
- $S \in V - \Sigma$ which just means that it is the **start symbol**.

## How to Derive Strings

Start with **S** and then apply rules (rewrite left hand side with the right hand side) until you have ONLY **terminals**.

$S \overset{1}{\Rightarrow} Sa \overset{1}{\Rightarrow} Saa \overset{1}{\Rightarrow} Saaa \overset{2}{\Rightarrow} aaa$

---

In **FSM**, when $S$ (state) goes to $T$ (another state) by $a$, you have the Grammar rule: $S \rightarrow aT$

---

In a Regular Grammar, all rules in **R** must:
- Have a left hand side that is a **single nonterminal**
- Have a right hand side that is:
	- $\epsilon$ or
	- a single terminal or
	- a single terminal followed by a single nonterminal

Legal: $S \rightarrow a, S \rightarrow \epsilon, and $

## Conversions

![CompleteConversionMap](assets/CompleteConversionMap.png)

