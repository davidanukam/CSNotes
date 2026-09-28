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

In a Regular Grammar, all rules in **R** must:
- Have a left hand side that is a **single nonterminal**
- Have a right hand side that is:
	- $\epsilon$ or
	- a **single terminal** or
	- a **single terminal** followed by a **single nonterminal**

Legal: $S \rightarrow a, S \rightarrow \epsilon, \ \text{and} \ T \rightarrow aS$

Not Legal: $S \rightarrow aSa \ \text{and} \ aSa \rightarrow T$

The **language** defined by a grammar: all terminal strings that can be obtained starting from S and applying the rules.

## Regular Grammar Example

![RegularGrammarExample](assets/RegularGrammarExample.png)

> Note $S \rightarrow \epsilon$ is a part of the Grammar because the empty string has a length of 0, which is even.

Also notice that in **FSA**, when $S$ (state) goes to $T$ (another state) by $a$, you have the Grammar rule: $S \rightarrow aT$

The reason $T \rightarrow a$ and $T \rightarrow b$ is because from State $T$ (a string of odd length) to successfully end the string (go to an accepting state), you need to add either an $a$ or a $b$ to make it even.

However when at State $S$, the accepting state, if you add just an $a$ or a $b$, then you won't be at an accepting state (you would have a string of odd length). That's why $S \rightarrow a$ and $S \rightarrow b$ and not a part of the Grammar.

## Some More Examples

![StringsThatEndWithAAAA](assets/StringsThatEndWithAAAA.png)

![OneCharacterMissingExample](assets/OneCharacterMissingExample.png)
## Conversions

![CompleteConversionMap](assets/CompleteConversionMap.png)

This is arguably the **most important part** of this chapter or unit or section, or whatever. So summary time!

## Summary

Given a **Regular Grammar** you can kind of see exactly what the NDFSM will look like.

Given a **Regular Expression**, you can make the NDFSM by using Thompson Construction (Take the expression, break it down into sets: L(a) = $\lbrace{a\rbrace}$, L(a*) = $\lbrace{a\rbrace}^{*}$, etc. and then use the building blocks). 

Now, to make the DFSM you need to first create the **Epsilon Closure** of every state (eps($q_i$) = $\lbrace{q_{i}\rbrace} \ \cup \ \lbrace{p_{1} : p_{1} \ \text{is a state that can be reached by} \ \epsilon \ \text{from} \ q_{i} \rbrace} \ \cup \ \lbrace{p_{2} : p_{2} \ \text{is a state that can be reached by} \ \epsilon \ \text{from} \ p_{1} \rbrace}$, and so on)

From there you can start from the first state, add it to a set, and then add all the states in its epsilon closure to the same set. Then by once character in the alphabet (e.g. by $a$), you see where each state in the set goes to. For each one, you add it and its epsilon closure to the new set. Then you connect the sets with an arrow with a transition function equal to the character used to get there (e.g. $\lbrace{0, 1, 2, 3\rbrace} \overset{a}{\rightarrow} \lbrace{4, 5, 6\rbrace}$).

Now we need to minimize the DFSM. To do so, we need to create two sets and use **Subset Construction**. Create one set for the **Accepting States** and one for the **Rejecting States**. Then you want to try and see which transition functions lead elements from one set to a different set:
- {{1, 2, 3, 4, 5}, {6}} ({1, 2, 3, 4, 5} are Rejecting and {6} is Accepting)
- By $a$, 1 and 2 go to 6 but the others don't. So split: {{1, 2}, {3, 4, 5}, {6}}
- Repeat this until each element in a subset behaves the same as the other elements in its subset (So 1 and 2 should behave the same, 3, 4, and 5 should behave the same and 6 should behave the same)

After, you can use the **equivalence classes** (basically the subsets used to make the Minimial DFSM) to create $\approx_{L}$ which is the **Regular Language**.