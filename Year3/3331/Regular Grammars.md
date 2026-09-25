## Grammars
- Grammars are rewriting systems (that produce strings)
- **Non-terminals** will do the work (Upper case)
- **Terminals** form the final strings (Lower case)

e.g.
$S \rightarrow Sa$
$S \rightarrow \epsilon$
Non-terminal: S
Terminal: a

R has a finite set of **rules** of the form:
X can be rewritten as y
Start with S and then apply rules (rewrite left had side by the right hand side) until you have only terminals.

$S \rightarrow^{\mathbb{R}} Sa \rightarrow^{\mathbb{R}} Saa \rightarrow^{\mathbb{R}} aaa$

---

In FSM, when $S$ (state) goes to $T$ (another state) by $a$, you have the Grammar rule: $S \rightarrow aT$

## Conversions

![[Pasted image 20260925114513.png]]

