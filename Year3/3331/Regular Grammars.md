## Grammars
- Grammars are rewriting systems (that produce strings)
- **Non-terminals** will do the work (Upper case)
- **Terminals** form the final strings (Lower case)

E.g.

$S \rightarrow Sa$
$S \rightarrow \epsilon$

1. Non-terminal: S
2. Terminal: a

**R** has a finite set of **rules** of the form:

**X** can be rewritten as **y**

Start with **S** and then apply rules (rewrite left had side by the right hand side) until you have ONLY **terminals**.

$S \overset{\mathbb{1}}{\rightarrow} Sa \overset{\mathbb{1}}{\rightarrow} Saa \overset{\mathbb{1}}{\rightarrow} Saaa \overset{\mathbb{2}}{\rightarrow} aaa$

---

In FSM, when $S$ (state) goes to $T$ (another state) by $a$, you have the Grammar rule: $S \rightarrow aT$

## Conversions

![CompleteConversionMap](assets/CompleteConversionMap.png)

