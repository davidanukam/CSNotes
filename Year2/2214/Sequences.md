## SEQUENCE:

A **sequence** is a function from a subset of integers to a set $S$. We use the notation $a_n$ to denote the image of the integer $n$. We call $a_n$ a **term of sequence**

Doing an example will help

Examples:

If $a_n=2n$, find $\lbrace a_n \rbrace$

- We typically start from $n=0$, so we would get:
    
    - $a_0=2(0)=0$
    - $a_1=2(1)=2$
    - $a_2=2(2)=4$
    - $a_3=2(3)=6$
- So, since we are asked to find the set of values that create the sequence, we would get
    
    $a_n=\lbrace 0,2,4,6,\dots \rbrace$
    

Consider the sequence $\lbrace a_n \rbrace$ where $a_n=n^2+n+41$, Find the first five elements of this sequence

- $a_n$ goes on to infinity and starts at zero, we denote this by $\lbrace a_n \rbrace^{\infty}_{n=0}$.
- The first 5 elements, starting from zero would be:
    - $a_0=(0)^2+0+41=41$
    - $a_1=43; \ a_2=47; \ a_3=54;\ a_4=61$
    - So, our sequence would look something like $a_n=\lbrace 41,43,47,54,61,\dots \rbrace$

Sequences of the form $a_1,a_2,...,a_n$ are often used in cs. These finite sequences are what we call **strings**

### ARITHMETIC PROGRESSION:

An arithmetic progression is a sequence of the form

$$ a,a+d,a+2d,a+3d,\dots,a+nd $$

where the initial term $a$ and the common difference $d$ are **REAL NUMBERS.**

So, $a_n=a+(n-1)d$

Example:

If we are given $a_5=10$ and $a_{10}=20$, what is the value of $a_{20}$?

![IMG_1916.jpeg](attachment:97726b5d-0b48-49fa-9d3e-9dbd48448cab:IMG_1916.jpeg)

### GEOMETRIC PROGRESSION:

A geometric progression is a sequence of the form

$$ a,ar,ar^2,...,ar^n $$

where the initial term $a$ and the common ratio $r$ are **REAL NUMBERS**

So, $a_n=ar^{n-1}$

Example:

$\lbrace a_n \rbrace$ is a geometric progression. If we are given that $a_2=8,\ a_5=64$, find $a_{10}$

![IMG_1917.jpeg](attachment:acc0e4fd-ec5e-42fd-b6cd-79f8341e6084:IMG_1917.jpeg)

### RECURSIVELY DEFINED SEQUENCES:

A recurrence relation for the sequence $\lbrace a_n \rbrace$ is an equation that expresses $a_n$ in terms of one or more of the previous terms of the sequence, namely $a_0,a_1,\dots,a_{n-1}$, for all integers $n,n\ge n_0$, and $n_0$ is a nonnegative number. In simpler terms, a recursive sequence is a sequence in which terms are defined using one or more previous terms along with the initial condition.

The most common recurrence formula is the **Fibonacci sequence.** The Fibonacci sequence, $f_0,f_1,f_2,\dots$ is defined by the initial conditions (or base cases) $f_0=0$ and $f_1=1$ and the recurrence relation

$$ f_n=f_{n-1}+f_{n-2} $$

So, for example, if we wanted to find $f_7$, it would look something like this:

![IMG_1918.jpeg](attachment:a4aeebe8-d1ba-4fbd-87d7-d8c469ab2666:IMG_1918.jpeg)

### CLOSED FORMULA:

While recursive formulas can come in handy, sometimes they can be a pain in the ass. So, if we take the Fibonacci sequence again, what if we wanted to find $f_{100}$? That is gonna be ridiculous to find, because they requires us to find all the terms before the 100th term, which is a LOT of work.

So, we want to find a non-recursive formula to calculate $a_n$ is called solving the recurrence relation. The solution is called a **closed formula**

Example:

Let $\lbrace a_n \rbrace$ be a sequence such that $a_1=1$ and $a_n=a_{n-1}+n$. Find the closed formula for $a_n$

![IMG_1920.jpeg](attachment:a3d7d280-e7c8-41ab-adc4-3999bacf3c4e:IMG_1920.jpeg)

It is important to note that not all recursive methods have closed formulas

## SUMMATION:

Instead of writing $a_1+a_2+...+a_n$, we can write $\sum_{i=1}^{n} a_i$, so this starts from $a_1$ all the way to $a_n$, adding them all together

We also have if you recursively multiply numbers together, there is a symbol for this:

$\prod_{i=1}^{n}a_i=a_1\times a_2\times...\times a_n$

Example:

1. Find $\sum_{i=1}^{5}i$

This is just 1+2+3+4+5=15

1. Find $\sum_{i=1}^{5}(i^2+i+1)$

This is equal to:

$(1^2+1+1)+(2^2+2+1)+(3^2+3+1)+(4^2+4+1)+(5^2+5+1)=75$, do the math you can figure it out

1. Write $2^5+2^6+...+2^{2023}$ as a sigma notation

$\sum_{i=5}^{2023}2^i$. Which can also be written as $\sum_{i=0}^{2018}2^{i+5}$

The most important ones you should know would be these:

![image.png](attachment:c8afb56b-00c1-48ad-a26e-29f2ef200986:image.png)

first column is sum the second column is closed formula