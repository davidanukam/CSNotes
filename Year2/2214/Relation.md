## RELATIONS:

A relation from set $A$ to set $B$ is a subset $R\subset A\times B$

So, a small example: if $A \times B = \lbrace{(0,0),(0,1), (0,2)\rbrace}$, then $R = \lbrace{(0,0),(0,1)\rbrace}$ or $\lbrace{(0,1),(0,2)\rbrace}$ or some variation thereof

These relations can also be constructed through certain conditions:

Examples:

If $A=\lbrace{-2,-1,0,1,2,3\rbrace}$ and $B=\lbrace{0,1,2,3\rbrace}$, let $R=\lbrace{(a,b)\in A\times B\ | \ a > b\rbrace}$

This is basically saying let $R$ be a relation in the form of $(a,b),$ where $R\subset A\times B$, such that $a>b$. So, this would basically be all elements of $a\in A$ that you can pair with $b\in B$ such that $a>b$ (this has to be ORDERED)

So, $R=\lbrace{(1,0), (2,0), (2,1), (3,0), (3,1), (3,2)\rbrace}$

If $A=\lbrace{-2,-1,0,1,2,3\rbrace}$ and $B=\lbrace{0,1,2,3\rbrace}$, let $R=\lbrace{(a,b)\in A\times B\ | \ b=a^2\rbrace}$

So, $R=\lbrace{(-1,1), (0,0), (1,1)\rbrace}$

There can be a lot of conditions, you get the point

### BINARY RELATIONS:

A binary relation on a set $A$ such that $R\subset A\times A$

Example:

If $A=\lbrace{0,1,2,3\rbrace}$, let $R=\lbrace{(a,b)\in A\times A\ | \ a\text{ is a multiple of }b\rbrace}$, so:

$R=\lbrace{(0,0), (0,1), (0,2), (0,3), (1,1), (1,2), (1,3), (2,1), (2,2), (3,1), (3,3)\rbrace}$

Can we have an infinite set? Yes!

$A=\mathbb{N}$, define $R=\lbrace{(a,b)\in A\times A \ | \ a = b\rbrace}$, well… there are infinite amount of numbers such that a = b in the set of natural numbers. $R=\lbrace{(0,0), (1,1),(2,2)...\rbrace}$ this is going to lead to an infinite set. Naturally, when your original set is something like all natural numbers or all integers, you naturally are going to end up with an infinite relation

**NOTATION NOTES:**

If $R\subset A\times B$ is a binary relation, there are several ways to denote its elements:

- $(a,b)\in R$
- $R(a,b)$, this is a logical notation
- $aRb$ can be used to logical infix notation such that a = b

In this course, we will stick to the first one

If $A$ is a finite set with $|A| = n$, then how many distinct binary relations are there on $A\times A$?

- If $R\subset A\times A$, that means $|A\times A|=n^2$, therefore, we would have $2^{n^2}$ distinct binary relations

### REFLEXIVE:

A relation $R\subset A\times A$ is reflexive if $\forall a(a\in A\rightarrow(a,a)\in R)$.

In other words, a relation $R$ on a set $A$ is reflexive if for every element $a\in A$ the pair $(a,a)$ is in the relation. In other words, for a reflexive relation, **every element must be related to itself**.

Example:

Is this relation reflexive?

- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x = y\rbrace}$
    - this is the most obvious example of a reflexive relation. This means that for each pair in the relation, the two elements x and y are equal. It satisfies the condition that for every $a\in \mathbb{Z}$, the pair $(a,a)$ is in the relation
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x \le y\rbrace}$
    - For any $x\in \mathbb{Z}$, we know that $x\le x$ (any number is going to be less than or equal to itself), therefore, for every $x\in \mathbb{Z}$, the pair $(x,x)$ will be in the relation because $x\le x$
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x < y\rbrace}$
    - this ISN’T reflexive, because for example, 1 is not less than itself, so it cannot be reflexive

Here are more concrete examples:

![image.png](attachment:a03781bf-fbb4-4802-8f94-758af4ef93ae:image.png)

These two will always be true:

$R=\mathbb{Z} \times \mathbb{Z}$, this is always going to be reflexive, and $R=\emptyset$ is NEVER going to be reflexive

On the other hand, a relation is NOT reflexive (also called irreflexive) if A relation $R\subset A\times A$ is reflexive if $\forall a(a\in A\rightarrow(a,a)\notin R)$.

- this is different from being non-reflexive, let me explain why

### **NON-REFLEXIVE VS IRREFLEXIVE:**

A relation is NOT reflexive if it fails to be reflexive. Meaning, there exists AT LEAST ONE ELEMENT $a\in A$ for which the pair $(a,a)$ is NOT in the relation. This means that the relation could be reflexive for some elements but not for others

- Example: Consider $A=\lbrace{1,2,3\rbrace}$ and $R=\lbrace{(1,1),(2,2)\rbrace}$, the relation is not reflexive because $(3,3)$ is missing, even though the other two elements are related to each other

A relation is irreflexive if NO ELEMENT $a\in A$ is related to itself. In other words, for every $a\in A$, the pair $(a,a)$ is NEVER in the relation

- Consider $A=\lbrace{1,2,3\rbrace}$ and $R=\lbrace{(1,2),(2,3)\rbrace}$, the relation is irreflexive because no element is related to itself, all the pairs are missing

Let me give another example, let us look at this relation:

$$ R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ |\text{ x and y are coprime, i.e. } \gcd(x,y) = 1\rbrace}

$$

We have that $\gcd(1,1)=1$, therefore, we can determine that this relation is not irreflexive. However, if we were to do something like $\gcd(2,2)=2$, we can also determine that this relation is not reflexive.

### SYMMETRY:

A relation $R\subset A\times A$ is symmetric if $\forall a,b\in A((a,b)\in R\rightarrow(b,a)\in R)$

These will make more sense with an example:

- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x = y\rbrace}$ is symmetric since $x=y \rightarrow y=x$
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x \leq y\rbrace}$ is non-symmetric which can be proven by counterexample, if $x=2$ and $y=3$, then it is true that $x\leq y$ (because $2\le 3$) but $y\le x$ is obviously false (because $3\not\le2$)

Once again, two things that will always be true:

$R=\mathbb{Z} \times \mathbb{Z}$ and $R=\emptyset$ will always be symmetric

- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x + y < 2\rbrace}$, this is symmetric because if $x+y<2$, then obviously $y+x<2$

More concrete examples:

![image.png](attachment:18933c33-a5f5-471c-835e-3297ea12723c:image.png)

**ANTISYMMETRY:**

Let $R$ be a relation on set $A$. We say that $R$ is **antisymmetric** IFF $x$ relates to $y$ and $y$ relates to $x$ ONLY when $x=y$. In other words, if both $(a,b)$ and $(b,a)$ are in the relation, then the only way this is allowed to be happen is if $a$ and $b$ are the same

Example:

- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x \le y\rbrace}$, this is antisymmetric because in order for this relation to happen, $x$ and $y$ MUST be the same value
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ |x|=|y|\rbrace}$, this is not antisymmetric because you can let this relation be true for something like $x=3$ and $y=-3$
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x + y < 2\rbrace}$ is not antisymmetric because x and y do not have to be the same for this to be true, x can be 0 and y can be 1

Take these as true:

- $R=\mathbb{Z} \times \mathbb{Z}$ is not antisymmetric and $R=\emptyset$ is antisymmetric

**ASYMMETRY:**

A relation $R\subset A\times A$ is asymmetric if $\forall a,b\in A((a,b)\in R\rightarrow (b,a)\notin R)$. In other words, if $(a,b)$ is in the relation, then $(b,a)$ CANNOT be in the relation at the same time

Example:

- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x = y\rbrace}$ is NOT asymmetric, because in order for this relation to hold true, $(y,x)$ must be in the relation
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x \le y\rbrace}$ is NOT asymmetric for the same reason as above
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x < y \rbrace}$ IS asymmetric, because if $x<y$, then there is no way for $y<x$, so it is asymmetric
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x + y < 2\rbrace}$ is NOT asymmetric, because $y+x$ is in the relation as well

Take these as true:

- $R=\mathbb{Z} \times \mathbb{Z}$ is NOT asymmetric, and $R=\emptyset$ is asymmetric

More concrete examples:

![image.png](attachment:e124c43b-491d-406d-8fcc-ef06cbcf608a:image.png)

### TRANSITIVITY:

A relation $R\subset A\times A$ is transitive if $\forall a,b,c\in A((a,b)\in R\land (b,c)\in R \rightarrow(a,c)\in R)$

Examples:

- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x = y\rbrace}$, this is transitive because by definition, $(x,y)\in R$ means that $x=y$. Similarly, $(y,z)\in R$ means that $y=z$. Since both of these are true, therefore, $x=z$, which means $(x,z)\in R$
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x < y\rbrace}$, this is transitive because by definition, $(x,y)\in R$ means $x<y$, similarly, $(y,z)\in R$ means that $y<z$. Therefore, $x<z$, so $(x,z)\in R$
- $R=\lbrace{(x,y)\in \mathbb{Z} \times \mathbb{Z} \ | \ x + y < 2\rbrace}$, this is NOT transitive, because you can have $(x,y)=(1,0)$, which will give you $1+0=1<2$, and then you can have $(y,z)=(0,1)$, which will give you $0+1=1<2$, but then if you do $(x,z)=(1,1)$, you end up getting $1+1=2\not<2$. Therefore, it is not transitive

Take these as true:

- $R=\mathbb{Z} \times \mathbb{Z}$ AND $R=\emptyset$ are transitive

More concrete examples:

![image.png](attachment:c3a0be9e-af19-492c-a221-c84a36c414b0:image.png)

## SET-THEORETIC OPERATIONS:

Relations are sets, therefore they can be combined using the set operations $\cup, \cap,^C, -$

So, you can say if $R_1$ and $R_2$ are reflexive (or even symmetric), then $R_1\cap R_2$ is reflexive (or even symmetric)

- So, if $(a,a)\in R_1$ and $(a,a)\in R_2$, then $(a,a)\in R_1\cap R_2$

Example:

On $S=\lbrace{0,1,2,3\rbrace}$, let

$R_1=\lbrace{(0,0), (1,1), (2,1), (2,2), (3,1), (3,3)\rbrace}$ and

$R_2=\lbrace{(1,1),(1,2),(1,3)\rbrace}$. Find $R_1\cap R_2, R_1\cup R_2, R_2-R_1, R_1^C$

$R_1\cap R_2$ are common elements between the two relations, so it’s just going to be $(1,1)$

$R_1\cup R_2$ is everything, I’m not writing it down but its just all of them

$R_2-R_1$ is everything in $R_2$ that is NOT in $R_1$, so that would be $\lbrace{(1,2), (1,3)\rbrace}$

$R_1^C$ is just everything not in $R_1$, if you are wondering how many elements that would be:

$|R_1^C|=S\times S-R_1 = 2^4-R_1 = 16 - 6 = 10$

### INVERSE:

The inverse of a relation $R\subset A\times B$ is the relation:

$$ R^{-1}=\lbrace{(b,a)\in B\times A\ | \ (a,b)\in R\rbrace} \subset A\times B $$

So, basically, if $R=\lbrace{(1,2), (2,3)\rbrace}$, then its inverse is: $R^{-1}=\lbrace{(2,1), (3,2)\rbrace}$

Theorem:

- If $R$ is symmetric, therefore $R^{-1}$ is symmetric.

Proof:

By definition, a relation is symmetric if $\forall a,b\in A$, whenever $(a,b)\in R$, then it must be true that $(b,a)\in R$

The inverse relation $R^{-1}$ of a relation $R$ on a set is defined as $R^{-1}=\lbrace{(b,a)\ | \ (a,b)\in R\rbrace}$

If $(a,b)\in R^{-1}$, by definition of inverse, that means $(b,a)\in R$

Since $R$ is symmetric, since $(b,a)\in R$, then it must be true that $(a,b)\in R$

Therefore, if $(a,b)\in R^{-1}$, then $(b,a)\in R^{-1}$ as well

### COMPOSITION:

The composition of a relation $R_2\subset B\times C$ with a relation $R_1\subset A\times B$ is the relation $R_2\circ R_1\subset A\times C$ defined as:

$$ R_2\circ R_1=\lbrace{(a,c)\in A\times C\ | \ \exists b \in B((a,b)\in R_1\land (b,c)\in R_2)\rbrace} $$

If you want to know what this nonsense means, let us do an example:

![image.png](attachment:2d79923b-2370-4d1c-b320-6062bd030b3f:image.png)

![IMG_2180.jpeg](attachment:c6481c74-df9d-4d13-bd1c-d08346b8ee67:IMG_2180.jpeg)

### POWERS OF RELATIONS:

A binary relation $R\subset S\times S$ can be composed with itself

Meaning: $R^2=R\circ R$

or even $R^3=R\circ R\circ R$

and even.. $R^{-2}=(R^2)^{-1}=R^{-1}\circ R^{-1}$

## REPRESENTATION:

Listing all the tuples in a relation can definitely be annoying, so we have many ways of representing them!

### MATRICES:

One of the ways to represent relations with finite sets is with a matrix of 0s and 1s.

If $R\subset A\times B$ with $A=\lbrace{a_1,...,a_n\rbrace}$ and $B=\lbrace{b_1,...,b_k\rbrace}$, then the matrix of $R$ is the $n\times k$ matrix $M_R=[m_{ij}]$ with:

$$ m_{ij}=1\text{ if }(a_i,b_j)\in R\\m_{ij}=0\text{ if }(a_i,b_j)\not\in R $$

To make more sense of this, let me give an example:

- Let $A=\lbrace{a,b,c\rbrace}$ and $B=\lbrace{\text{'vowel', 'consonant'}\rbrace}$
- Let $R=\lbrace{(a,\text{'vowel')}, (b,\text{'consonant'}), (c,\text{'consonant'})\rbrace}$, the matrix is going to be:

![IMG_2156.jpeg](attachment:59b8ba76-ad68-46e7-a6b3-809a66c5123b:IMG_2156.jpeg)

What if you were given a matrix and asked to represent the relation?

![image.png](attachment:f085535e-3fd5-428b-9b15-516c49c1a016:image.png)

you just look to see where the matrices has one in it, so you do:

$R=\lbrace{(a,0), (a,2), (b,1), (b,2)\rbrace}$

### GRAPHS:

We can represent relations as directed graphs, consisting of a set $V$ of vertices and a set $E\subset V\times V$ of edges

- For any edge $(a,b)\in E$, $a$ is the initial vertex and $b$ is the terminal vertex
- An edge of the form $(a,a)$ is a loop
- Edges are drawn as arrows from their initial to their terminal vertex

To make more sense of this, let us do an example:

The graph $G=(V,E)$ with $V=\lbrace{0,1,2\rbrace}$ and $E=\lbrace{(0,0), (0,1), (1,0)\rbrace}$ is:

![IMG_2157.jpeg](attachment:992dfaa8-fc08-4163-8f5f-e19b8693fd9f:IMG_2157.jpeg)

pretty straight forward… 0 is connected to itself to form a loop since we have the edge $(0,0)$. 0 is also connected to 1 since we have the edge $(0,1)$, and so on

A relation $R\subset A\times B$ can be represented as a graph with vertex set $V=A\cup B$ and the edge set $R$. If $A\neq B$, then the elements of $A$ are kept “separate” from the elements of $B$

So, for example:

If $A=\lbrace{a,b,c\rbrace}$ and $B=\lbrace{0,1\rbrace}$, the relation $R=\lbrace{(a,0), (b,1), (c,1)\rbrace} \subset A\times B$ can be represented as:

![image.png](attachment:6a8c41ec-9f88-466b-ada7-3d4dc927908c:image.png)

the whole point here is that you keep the elements of $A$ and $B$ on opposite ends, not together

Example:

If $A=\lbrace{0,1,2,3\rbrace}$, the relation $R=\lbrace{(a,b)\in A\times A\ | \ a \text{ is a multiple of }b\rbrace}$ can be represented by the graph:

![IMG_2158.jpeg](attachment:2a9872d4-aa01-4e31-98a1-0708e57f71ab:IMG_2158.jpeg)

**PROPERTIES:**

- A relation is reflexive iff all vertices have a loop (meaning all vertices circle back on itself)
- A relation is irreflexive iff NO vertex has a loop
- A relation is symmetric iff whenever $(x,y)$ is an edge, then so is $(y,x)$
- A relation is antisymmetric iff whenever $(x,y)$ is an edge with $x\neq y$, then $(y,x)$ is not an edge
- A relation is transitive iff whenever $(x,y)$ and $(y,z)$ are edges, then so is $(x,z)$

A more concrete example for the antisymmetric one cause I hate it:

![image.png](attachment:94998a91-d952-40ff-86d6-9eca7a3ab67f:image.png)

If $(2,1)$ was in that edge, then the relation would NOT be antisymmetric

So, from the above graph example, we can determine the following now knowing these properties:

- Each vertex has a loop, therefore it is reflexive
- $(0,1)$ is an edge, but $(1,0)$ is not (the same can be said about the other vertices), therefore it is not symmetric
- Whenever $(a,b)$ is an edge with $a\neq b$, then $(b,a)$ is not an edge. So, you would have to check:
    - $(0,1)\ vs. \ (1,0), (0,2)\ vs. (2,0)...$,
- So, in this case, $R$ is symmetric
- $R$ is transitive because for example, you have $(0,3)\land(3,1)\rightarrow (0,3)$

## EQUIVALENCE RELATIONS:

A relation $R\subset A\times A$ is called an equivalence relation if it is reflexive, symmetric, AND transitive

If $R$ is an equivalence relation, two elements $a$ and $b$ such that $aRb$ are called equivalent. We use the notation `a~b`

Example:

The most trivial example of all because forbid we get actual good examples:

For any set $A$, the identity relation:

$I_A=\lbrace{(a,b)\in A\times A\ | \ a=b\rbrace}= \lbrace{(a,a)\ | \ a\in A\rbrace}$ is an equivalence relation. It is:

- Reflexive, because any $a\in A$ is equal to itself
- Symmetric, because if $a=b$, then $b=a$
- Transitive, because if $a=b$ and $b=c$, then $a=c$

Example:

Let $R\subset \mathbb{Z} \times \mathbb{Z}$ defined by $R=\lbrace{(a,b)\ | \ a-b \text{ is even}\rbrace}$

- $R$ is reflexive, because you can have $(a,a)\in R$, and any number minus itself is going to be 0, which is even. Therefore, it is reflexive
- Suppose $(a,b)\in R$, by definition, $a-b$ is even, then obviously $b-a$ is going to be even, therefore $(b,a)\in R$, so this relation is symmetric
- Suppose $(a,b)\in R$ and $(b,c)\in R$, by definition, this means that $a-b$ and $b-c$ are even. Adding these two together:
    - $a-b+b-c=a-c$ which is even.
- Therefore, $(a,c)\in R$, so the relation is transitive

### EQUIVALENCE CLASSES:

Equivalence class is the name given to a subset of some equivalence relation $R$ which includes all elements that are equivalent to each other.

Let $R$ be an equivalence relation on a set $A$. The set of all elements which are related (aka make the relation true) to an element $x$ of set $A$ is called the **equivalence class** of $x$

$$ [x]=\lbrace{y \ | \ (x,y)\in R\rbrace} $$

Example:

Let $A=\lbrace{1,2,3,4,5\rbrace}$ and the relation on this set $R=\lbrace{(a,b)\ | \ a+b \text{ is even}\rbrace}$

First, in order to find equivalence classes, we need to see if this relation is an equivalence relation or not

- It is reflexive, because we know that $a+a=2a$, so it will always be even
- It is symmetric, because if we assume $a+b$ is even, then obviously $b+a$ is even (for example, 1 + 3 = 4, and 3 + 1 = 4)
- It is transitive, because if $a+b$ and $b+c$ is even → $a+c$ is even
    - Both $a$ and $b$ can be either even or odd

Therefore, this is an equivalence relation, let us find the equivalence classes for each element

So, basically, we need to find for each element in the set, what makes the relation true

- $[1]=\{1,3,5\}$ because 1 + 1 = 2 (even), 1 + 3 = 4 (even), and 5 + 1 = 6 (even)
- $[2]=\{2,4\}$
- $[3]=\{1,3,5\}$
- $[4]=\{2,4\}$
- $[5]=\{1,3,5\}$

Since we have elements 1, 3, and 5 have the same equivalence class and elements 2 and 4 have the same equivalence class, so we can say that the representative of equivalence class $\{1,3,5\}$ is element 1 and the representative of equivalence class $\{2,4\}$ is 2

### PARTITIONS:

A partition of a set $S$ is a collection $\{A_j\ | \ j\in J\}$ (where $J$ is a set of indices) of subsets of $S$ which are:

- mutually disjoint (for all $j,k\in J$ with $j\neq k$, $A_j\cap A_k=\emptyset$)
- nonempty (for all $k\in J, A_k\neq\emptyset$)
- whose union is $S$ ($\cup_{j\in J}A_j=S$)

To put this in simpler terms:

1. Each subset is nonempty: Every group must have at least one element.
2. The subsets do not overlap: If an element is in one subset, it cannot be in another.
3. The subsets cover the whole set: Every element of $S$ must be in exactly one of the subsets.

So, if you had a set $A=\{1,2,3,4,5\}$, you can have partitions like:

$A_1=\{1,2\}, A_2=\{3\},A_3=\{4,5\}$ or any combo of the sort

If on a set $S$ there is an equivalence relation, the equivalence classes form a partition of $S$ (look at the example above, the two partitions come from the equivalence classes)

Viceversa, if a set $S$ has a partition, then the relation $R=\{(x,y)\in S\times S\ | \ x\text{ and }y\text{ belong to the same }A_k(k\in J)\}$ is an equivalence relation with $A_j(j\in J)$ as the equivalence class

- So, basically, if you are going from partition (from an equivalence class) → equivalence relation, all the elements in one partition are going to be related to one another, so they would form their own “bundle”

Example:

Assume we have the partition $A_1=\{1,2\}, A_2=\{3\},A_3=\{4,5\}$, and let us assume we got this partitions from an equivalence class. That means, the elements in $A_1$ are related in a sense, and since this comes from an equivalence class, it must be symmetric, reflexive, and transitive. Same can be said for the other set, so we end up with:

$$ R=\{(1,1),(1,2),(2,1),(2,2),(3,3),(4,4),(4,5),(5,4),(5,5)\} $$

## PARTIAL ORDERING:

A relation $R\subset S\times S$ (same set) is called a partial ordering, or partial order, if it is reflexive, ANTISYMMETRIC, and transitive

A set $S$ together with a partial ordering $R$ is called a partially ordered set, or a POSET, and is denoted by $(S,R)$

Example:

Let $S=\{1,2,3\}$ and define the relation $R$ as $R=\{(1,1),(2,2),(3,3), (1,2), (1,3), (2,3)\}$

Let us check if it is POSET:

- This is reflexive, since every element in $S$ is related to itself
- This is antisymmetric, because there is no pair in $R$ where $(a,b)\in R$ and $(b,a)\in R$ unless $a=b$. For example, we have $(1,2)\in R$ but not $(2,1)\in R$
- This is transitive, because we have $(1,2)\land (2,3)\rightarrow (1,3)$

Therefore, this is a partially ordered set

### STRICT ORDERINGS:

A relation $R\subset S\times S$ (same set) is called a strict ordering (or order) if it is asymmetric and transitive

A set $S$ together with partial order $R$ is called a strict partially ordered set, or strict POSET, and is denoted by $(S,R)$

Example:

Let $S=\{1,2,3\}$ and define the relation $R$ as $R=\{(1,2),(1,3),(2,3)\}$

- It is asymmetric, because if $(1,2)\in R$, then $(2,1)\not\in R$ (the same can be said about the rest of the sets)
- It is transitive, because $(1,2)\land (2,3)\rightarrow (1,3)$

Therefore, this is a strict ordering on the set $S$

### POWER SET POSET:

Let $A$ be a set. The power set $P(A)$ together with the inclusion relation $\subset$ is a POSET

For example, if we had the set $A=\{1,2,3\}$ and the power set defined as:

$P(A)=\{\emptyset, \{1\}, \{2\},\{3\},\{1,2\}, \{1,3\},\{2,3\},\{1,2,3\}\}$

- It is reflexive, since it is a well known fact that every set is a subset of itself
- It is antisymmetric, because the rule states if $A\subset B$ and $B\subset A$, then $A=B$. For example, if we have $\{1,2\}\subset \{1,2,3\}$ and $\{1,2,3\}\subset \{1,2\}$, then it must be that the two sets are equal, but clearly they aren't equal, therefore, it is antisymmetric
- It is transitive because we have (for example) that $\{1\}\subset \{1,2\}$ and we also have $\{1,2\}\subset \{1,2,3\}$. THEN, we have that $\{1\}\subset \{1,2,3\}$. Therefore it is transitive

So, power sets are always a POSET

### HASSE DIAGRAMS:

Hasse diagrams are another type of graph representation specific for partial orders.

- Suppose you have a partial order $R$ on set $S$
- Rearrange the vertices in such a way that, if vertices $a$ and $b$ satisfy $aRb$, then $b$ is higher up on the page than $a$ (if they aren’t related, then their height does not matter). So, arrange each vertex such that the initial vertex is BELOW its terminal vertex
- Remove the edges due to reflexivity (the loops) and those implied by transitivity
- Remove the arrow tips
- HASSE DIAGRAM!

Example cause WHAT DID I JUST READ!

![IMG_2159.jpeg](attachment:4cb776e5-1f01-4c88-beec-568e60924d2d:481ac417-2655-4f43-9dcc-d7359dffe6b4.png)

If you had one that was connected to two different elements, you would write them on the same level. For example:

Consider the set $A=\{x,y\}$ and the power set of $A$. $P(A)=\{\emptyset, \{x\}, \{y\}, \{x,y\}\}$. Draw the Hasse diagram for this

![IMG_2160.jpeg](attachment:771a88f7-54e6-4deb-85ad-481eef2865c4:IMG_2160.jpeg)

### TOTAL ORDERS:

Let $(A,R)$ be a poset. Two elements $a,b$ of $A$ are said to be comparable IF $aRb$ OR $bRa$. The elements are called incomparable if NEITHER $aRb$ nor $bRa$

A POSET in which elements are comparable is said to be a totally ordered set and $R$ is called a total order.

A totally ordered set such that every nonempty subset has a minimum is call a well-ordered set

Examples cause AHHH these make no sense:

The set of real numbers $(\mathbb{R},\leq)$ with the usual less than or equal to relation is a total order because for any 2 real numbers $a,b\in \mathbb{R}$, we ALWAYS have either $a\leq b$ OR $b\leq a$

- So, you have have $a=3.5$ and $b=-2$, since you have $a\geq b$, this is totally ordered

However, it is not **well-ordered** because there exists a subset without a smallest element

- for example, in the subset $\{0,1\}$, although you might think 0 is the smallest element, remember this is real numbers, meaning we have decimals. Suppose we pick $0.1$, there is always going to be an element smaller than it (like $0.01$)

The set of natural numbers $(\mathbb{N},\leq)$ is well ordered because:

- It is a total order (any two natural numbers are comparable)
- It is well ordered, because every nonempty set has a smallest element $\{3,5,7\}$ is well-ordered because 3 is the smallest element in the set. You cannot get any smaller

The power set $(P(\{x,y\},\subset)$ is NOT totally ordered because $\{x\}$ and $\{y\}$ are incomparable

- this is because $\{x\}\not \subset \{y\}$ and vice versa. Therefore, it is incomparable, making it not a total order

### MAXIMAL AND MINIMAL ELEMENTS:

Lets say we have a poset $(S,R)$ where $S$ is some set and a relation $R$ is a partial order relation defined on the set

**Minimal elements:**

An element $x$ of a set $S$ is called a **minimal element** if there is no $y\in S$ such that $yRx$ and $y\neq x$. So, basically $(y,x)\not\in R$

**Maximal elements:**

An element $x$ of set $S$ is called a maximal element if there is no $y$ such that $xRy$ and $x\neq y$. So, basically, $(x,y)\not\in R$

Examples!

![image.png](attachment:9e14e4b9-617f-4e37-a44b-959a0f1bf40c:image.png)

In the above Hasse Diagram, we want to find the minimal and maximal element. Typically, the maximal is at the “top” of the diagram and minimal is at the “bottom”

But formally:

- b and c are not minimal elements because $aRb$ and $aRc$
- d and e are not minimal elements because $bRd$ and $cRd$, as well as $cRe$ and $bRe$
- f is not a minimal element because $dRf$ and $eRf$.
- Therefore, we have that $a$ is the minimal element because we have no $y$ such that $yRx$

What about maximal?

- a is not a maximal element because $aRb$ and $aRc$
- Similarly, b, c, d, and e are not maximal elements because:
    - $bRd, bRe, cRe, cRd, eRf,\text{ and }dRf$
- Therefore, we have that $f$ is the maximal element in this case

It is important to note that a poset can have more than one maximal and minimal element:

![image.png](attachment:690f3e86-9fcb-4f24-8a58-74f7ed2368c4:image.png)

in this diagram, we can see that a, c, and e are all minimal elements because no element is related to them

![image.png](attachment:0348b9d5-3aa2-4c24-9df0-b32b6fe9a73f:image.png)

once again, in this diagram it is clear that both e and f are both maximal elements because they are not related to any element

### MAXIMUM AND MINIMUM ELEMENTS:

Let us say we have a poset $(S,R)$ where $S$ is some set and $R$ is a partial order defined on $S$

**MINIMUM ELEMENT:**

An element $x\in S$ is called the minimum element of $S$ if $\forall y\in S, xRy$

- this element IS unique, there can only be one minimum element, opposite to minimal

**MAXIMUM ELEMENT:**

An element $x\in S$ is called the maximum element of $S$ if $\forall y\in S, yRx$

- once again, this element is UNIQUE as well

Both maximum and minimum elements do not need to exist. However, if they do, they must be unique

Example:

![image.png](attachment:27652540-e466-4e44-a88b-2cab83f7d9be:image.png)

here, the minimum element is a, because it is related to every other element in the relation

- it is important to note (cause i forgot LOL) that transitive arrows are removed in Hasse diagrams. So, since a is related to b, and b is related to e, then obv a is related to e, and so on

![image.png](attachment:3ec461ba-e410-47d0-bf7a-77e56bbab98a:image.png)

here, there are no minimum or maximum elements. If you consider a is the minimum element, it has to have a relation with all other elements. But, it does not have a relation with b, so it is not the minimum element. same can be said about b

also, d is not the maximum element, because every element in the diagram must be related to d. but e is not related to d

![image.png](attachment:fe4a16bb-1e1f-4399-ba1a-bcc8e3ea61ce:image.png)

here, the minimum element is a, and the maximum element is f

- this is because a is related to every other element in the diagram. although they arent immediately connected, you can deduce it. a is related to b, b is related to d, therefore a is related to d. but d is also related to f, therefore, a is related to f. and the loop goes on
- f is the same, in some way every element is related to it

![image.png](attachment:8994e96e-acf3-494b-989d-8c530e2b6901:1cda29ee-5053-47cb-970c-02700f87b0aa.png)

in this diagram, you have no minimum or maximum element because not all elements are related in some way

the maximal element here though is e and a

the minimal element here is b, f, g and a