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

**Union**: $\alpha = \beta \cup \gamma \rightarrow \ \text{NDFSM for} \ L(\alpha)$

$L(\Sigma^{*} \ \text{abcabb} \ \Sigma^{*})$ -> NFA -> DFA -> Minimize -> gets the minimal DFSM on 43

$L(\Sigma^{*} \ \text{abcabb})$ -> NFA -> DFA -> Minimize -> gets the minimal DFSM on 44

