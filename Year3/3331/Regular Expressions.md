Regular Expressions are **strings** over an alphabet $\Sigma$ that can be obtained as follows:

1. $\emptyset$ is a regular expression
2. 2. $\epsilon$ is a regular expression
3. Every element $a \in \Sigma$ is a regular expression
4. If $\alpha, \beta$ are regular expressions, then so is $\alpha\beta$
5. If $\alpha, \beta$ are regular expressions, then so is $\alpha \cup \beta$
6. If $\alpha$ are regular expressions, then so is $\alpha^{*}$
7. $\alpha$ are regular expressions, then so is $\alpha^{+}$
8. If $\alpha$ are regular expressions, then so is $(\alpha)$

Structural Induction

$\text{L(a)*L(b)} = {a^{n}b^{m} | n, m \ge 0}$

$L = {w \in \lbrace{a, b\rbrace}^{*} | |w| \text{is even}}$

