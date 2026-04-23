## INDUCTION:

In order to prove that a certain statement holds for any natural number, it is sufficient to:

- Prove that the statement is true for 0 (the **base case**)
- Prove that, assuming the statement holds for a generic natural number $k$ (this assumption is called **inductive hypothesis**), then it ALSO holds for $k+1$ (**induction step**)

Example:

Prove that, for any natural number $n$, the sum of the natural numbers from 1 to $n$ is:

$$ 1+2+...+n=\frac{n(n+1)}{2} $$

![IMG_2147.jpeg|121](attachment:1e2f9fa3-a3cd-495a-8b0d-0312623cf035:IMG_2147.jpeg)

Prove that $2^1+2^2+...+2^n=2^{n+1}-2$

![IMG_2148.jpeg](attachment:54860ebe-f452-4798-b020-508bf0044b4c:IMG_2148.jpeg)

- it is a general rule that if you have $a^m+a^n$ where $m=n$, you can factor out $a^m$, leave you with $2\times a^m$. After that, we can apply the rule that $a^m\times a^n = a^{m+n}$

Prove that $1+3+5+...+(2n-1)=n^2$

![IMG_2149.jpeg](attachment:9c2ef527-d2fc-4b77-80b4-bb6e4f441898:IMG_2149.jpeg)

The idea behind the induction principle is the same as the idea of domino show, if we can be sure that:

- the first tile falls (base case)
    - provided the $k$th tile falls (IH), then the $(k+1)$th tile ALSO falls (inductive step)
- therefore, all tiles fall

Example:

Prove that, for any $n\geq4, n!>2^n$

![IMG_2150.jpeg](attachment:e5b88ecc-398f-469e-b963-a0e73ce5c0d3:IMG_2150.jpeg)

Prove that $1.2+2.3+3.4+...+n(n+1)=\frac{n(n+1)(n+2)}{3}$

![IMG_2151.jpeg](attachment:d52102cd-396c-431b-a9c8-e45aa273f565:IMG_2151.jpeg)

### STRONG INDUCTION:

Strong induction is a refined form of basic induction in which:

- the basis steps works the same way
- for the inductive step, we prove that the statement for a generic natural $k+1$ hold IF we assume that the statement holds for any natural $\le k$ (not just for $k$)
- so we still get to the end goal that we need to prove $k+1$, but here we are assuming $k$ AND EVERYTHING BELOW IT is true

So, in our inductive step, we assume something called $i$ is true, where $a\le i\le k$, then prove $k+1$

Example:

Given $n\in \N$, define $a_n$ recursively as follows:

$$ a_0=1, \ a_1=3,\ a_n=2a_{n-1}-a_{n-2}\text{ for }n\ge 2 $$

Prove that for all $n\ge 0,\ a_n=2n+1$

![IMG_2154.jpeg](attachment:634eb988-bd2d-42fb-9e04-bd3db3134680:IMG_2154.jpeg)