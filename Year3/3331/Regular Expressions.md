## Regular Expressions

Regular Expressions are **strings** over an alphabet $\Sigma$ that can be obtained as follows:

1. $\emptyset$ is a regular expression
2. $\epsilon$ is a regular expression
3. Every element $a \in \Sigma$ is a regular expression
4. If $\alpha, \beta$ are regular expressions, then so is $\alpha\beta$
5. If $\alpha, \beta$ are regular expressions, then so is $\alpha \cup \beta$
6. If $\alpha$ are regular expressions, then so is $\alpha^{*}$
7. $\alpha$ are regular expressions, then so is $\alpha^{+}$
8. If $\alpha$ are regular expressions, then so is $(\alpha)$

Example:

If $\Sigma = \lbrace{a, b\rbrace}$, the following are regular expressions:
- $\emptyset$
- $\epsilon$
- $a$
- $(a \cup b)^{*}$
- $abba \cup \epsilon$

## Regular Expressions Define Languages

Semantic interpretation: the **language L($\alpha$)** expressed by a regular expression $\alpha$:
1. $L(\emptyset) = \emptyset$
2. $L(\epsilon) = \lbrace{\epsilon\rbrace}$
3. $L(c) = \lbrace{c\rbrace},\ \text{where} \ c \in \Sigma$
4. $L(\alpha \beta) = L(\alpha) L(\beta)$
5. $L(\alpha \cup \beta) = L(\alpha) \cup L(\beta)$
6. $L(\alpha^{*}) = L(\alpha)^{*}$
7. $L(\alpha^{+})$
	- If $L(a)$ is equal to $\emptyset$, then $L(a+)$ is also equal to $\emptyset$. Otherwise $L(a+)$ is the language that is formed by concatenating together one or more strings drawn from $L(a)$
8. $L((\alpha)) = L(\alpha)$

This is the way we create the **set representations** (the **Regular Language**) of the **Regular Expression**.

Examples:

$L(a^{*}b^{*}) = L(a^{*})L(b^{*}) = L(a)^{*}L(b)^{*} = \lbrace{a\rbrace}^{*}\lbrace{b\rbrace}^{*} = \lbrace{a^{n}b^{m} | n, m \ge 0\rbrace}$

$L = \lbrace{w \in \lbrace{a, b\rbrace}^{*} \ : \  |w| \ \text{is even}\rbrace} = \lbrace{\lbrace{aa\rbrace} \cup \lbrace{ab\rbrace} \cup \lbrace{ba\rbrace} \cup \lbrace{bb\rbrace}\rbrace}^{*}$

## Operator Precedence in Regular Expressions

![OperatorPrecedenceInRegularExpressions](assets/OperatorPrecedenceInRegularExpressions.png)

> So $a^{*} \cup b^{*} \neq (a \cup b)^{*}$ and $(ab)^{*} \neq a^{*}b^{*}$

Sometimes it **ISN'T** possible to make a **Regular Expression** to represent a **Language**:

![ImpossibleLanguageToRegularExpression](assets/ImpossibleLanguageToRegularExpression.png)

## Structural Induction

**Finite State Machines** and **Regular Expressions** define the same class of languages. This means that the class of languages that can be defined with regular expressions is **EXACTLY** the class of regular languages.

So by something called **Thompson's Construction** we can build and NDFSM.

> Every NDFSM that we can build using Thompson's Construction has a **starting state** with no incoming edges and **ONE** **accepting state** that has no outgoing edges

### Building Blocks

Here are the Building Blocks that we can use to build the NDFSM

**Basic** : $L(\emptyset) \ \text{and} \ L(a) \ \text{where} \ a \in \Sigma$

![BasicBlock1](assets/BasicBlock1.png)

**Concatenation**: $\alpha = \beta \gamma \rightarrow \ \text{NDFSM for} \ L(\alpha)$

![ConcatenationBlock](assets/ConcatenationBlock.png)

**Union (Or)**: $\alpha = \beta \cup \gamma \rightarrow \ \text{NDFSM for} \ L(\alpha)$

![UnionBlock](assets/UnionBlock.png)

**Kleene * (Star)**: $\alpha = \beta^{*} \rightarrow \ \text{NDFSM for} \ L(\alpha)$

![KleeneStarBlock](assets/KleeneStarBlock.png)

Example of Regular Expression to NDFSM using Thompson's Construction:

![RegularExpressionToNDFSM](assets/RegularExpressionToNDFSM.png)

## FSM To Regular Expression

Basically, take any state, and remove it from the FSM. Then you update the **transition function/relation** from the state on the left to the state on the right so that it is a regular expression

Example:

![RipOutStateExample](assets/RipOutStateExample.png)

Formal Steps:

1. Create a new initial state and a new, unique accepting state, neither of which is part of a loop.

| Before                               | After                              |
| ------------------------------------ | ---------------------------------- |
| ![FSMBefore1](assets/FSMBefore1.png) | ![FSMAfter1](assets/FSMAfter1.png) |

2. Remove states and arcs and replace with arcs labelled with larger and larger regular expressions.

- Remove State 3

| Before                               | After                              |
| ------------------------------------ | ---------------------------------- |
| ![FSMBefore2](assets/FSMBefore2.png) | ![FSMAfter2](assets/FSMAfter2.png) |

Explanation:

![RemoveState3Explanation](assets/RemoveState3Explanation.png)

- Remove State 2

| Before                               | After                              |
| ------------------------------------ | ---------------------------------- |
| ![FSMBefore3](assets/FSMBefore3.png) | ![FSMAfter3](assets/FSMAfter3.png) |

Explanation:

![RemoveState2Explanation](assets/RemoveState2Explanation.png)

- Remove State 1

| Before                               | After                              |
| ------------------------------------ | ---------------------------------- |
| ![FSMBefore4](assets/FSMBefore4.png) | ![FSMAfter4](assets/FSMAfter4.png) |

## Some Extra/Real World Regular Expressions

| Syntax            | Name          | Description                                                            |
| ----------------- | ------------- | ---------------------------------------------------------------------- |
| $abc$             | Concatenation | Matches $a$, then $b$, then $c$ where $a$, $b$, and $c$ are any regexs |
| $a \| b \| c$     | Union (Or)    | Matches $a$ or $b$ or $c$ where $a$, $b$, and $c$ are any regexs       |
| $a^{\star}$       | Kleene Star   | Matches 0 or more $a's$ where $a$ is any regex                         |
| Finish this later |               |                                                                        |

## Simplifying Regular Expressions

Regex's describe sets:
- Union is **commutative**: $\alpha \cup \beta = \beta \cup \alpha$
- Union is **associative**: $(\alpha \cup \beta) \cup \gamma = \alpha \cup (\beta \cup \gamma)$
- $\emptyset$ is the **identity** for Union: $\alpha \cup \emptyset = \emptyset \cup \alpha = \alpha$
- Union is **idempotent**: $\alpha \cup \alpha = \alpha$

Concatenation:
- Concatenation is **associative**: $(\alpha\beta)\gamma = \alpha(\beta\gamma)$
- $\epsilon$ is the **identity** for Concatenation: $\alpha \epsilon = \epsilon \alpha = \alpha$
- $\emptyset$ is the **zero** for concatenation: $\alpha \emptyset = \emptyset \alpha = \emptyset$

Concatenation **distributes** over Union:
- $(\alpha \cup \beta) \gamma = (\alpha \gamma) \cup (\beta \gamma)$
- $\gamma(\alpha \cup \beta) = (\gamma\alpha) \cup (\gamma\beta)$

Kleene Star:
- $\emptyset^{\star} = \epsilon$
- $\epsilon^{\star} = \epsilon$
- $(\alpha^{\star})^{\star} = \alpha^{\star}$
- $\alpha^{\star}\alpha^{\star} = \alpha^{\star}$
- $(\alpha \cup \beta)^{\star} = (\alpha^{\star}\beta^{\star})^{\star}$
## Pattern Matching

Any file that **contains** the pattern

$L(\Sigma^{\star} \ \text{abcabb} \ \Sigma^{\star})$ -> NFA -> DFA -> Minimize -> gets the minimal DFSM on 43

## Pattern Searching

Any file that **ends with** the pattern

$L(\Sigma^{\star} \ \text{abcabb})$ -> NFA -> DFA -> Minimize -> gets the minimal DFSM on 44
