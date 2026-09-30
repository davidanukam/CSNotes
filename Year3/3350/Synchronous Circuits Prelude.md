## Synchronous Circuits: Prelude

## Radix Representations

**Radix** is the **base number** in some numbering system.

In a **radix**, $r$ representation digits $(d_{i})$ are from the set $\lbrace{0, 1, \dots, r - 1\rbrace}$ 

$$
x = d_{n-1} \times r^{n-1} + d_{n-2} \times r^{n-2} + \cdots + d_{1} \times r^{1} + d_{0}
$$

- $r = 10 \Rightarrow$ decimal, $\lbrace{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\rbrace}$
- $r = 2 \Rightarrow$ binary, $\lbrace{0, 1\rbrace}$
- $r = 8 \Rightarrow$ octal, $\lbrace{0, 1, 2, 3, 4, 5, 6, 7\rbrace}$
- $r = 16 \Rightarrow$ hexadecimal, $\lbrace{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f\rbrace}$

Decimal vs Binary:

- $(13)_{10} = (1 \times 10^{1}) + (3 \times 10^{0})$
- $(1101)_{2} = (1 \times 2^{3}) + (1 \times 2^{2}) + (0 \times 2^{1}) + (1 \times 2^{0}) = 8 + 4 + 0 + 1 = (13)_{10}$

> Going from Decimal to Binary:

## Unsigned Binary Integers

**Unsigned Integers** $$