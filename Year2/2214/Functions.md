## FUNCTION:

Let $A$ and $B$ be nonempty sets. A **function** $f$ from $A$ to $B$ (denoted: $f: A\rightarrow B$) is an assignment of EXACTLY ONE element of $B$ to each element of $A$.

If $b$ is the unique element of $B$ assigned by the function to the element $a\in A$, we write $f(a)=b$

Functions are also maps

From each element in $A$, one element maps to at LEAST one element in $B$ basically

![Functions](assets/Functions/.png)

### RELATIONS:

A relation from $A$ to $B$ is just a subset of $A\times B$. A function can also be defined in terms of a relation from $A$ to $B$. A relation from $A$ to $B$ that contains one, and ONLY ONE, ordered pair $(a,b)$ for every element $a\in A$, defines a function $f$ from $A$ to $B$.

This function is defined by the assignment $f(a)=b$, where $(a,b)$ is the unique ordered pair in the relation that has $a$ as its first element

If $|A|=n$ and $|B|=m$, how many relations do we have from $A\rightarrow B$?

- The total number of ordered pairs we can have from their product is going to be $m\times n$. So, we then have $|A\times B|=m\times n$
- A relation is simply a subset of this product, and for each pair $(a,b)\in A\times B$, you have two choices:
    - Either the pair $(a,b)$ is in the relation
    - It is NOT in the relation
- Thus, for each of the $mn$ pairs, there are two choices: it is either in the relation or not. This leads to a total number of possible relations being: $2^{mn}$

Examples:

If you are given two sets $A=\{1,2,3\}$ and $B=\{5,6,7\}$ and the relation $R=\{(1,5),(1,7),(2,6)\}$, is this a function? **NO,** because 1 maps to 5 and 7, when we said a function should make $A$ map to EXACTLY one element of $B$

If you are given the relation $R=\{(1,5),(2,5)\}$, is this a function? **YES,** although you might be saying “but but but 5 is mapped to twice” that does not matter. It matters that the first element is not mapped to two different numbers in $B$. If the numbers in $B$ are mapped two by TWO DIFFERENT ELEMENTS FROM $A$, then that’s fine

### DOMAIN:

If $f$ is a function from $A$ to $B$, we say that $A$ is the **domain** of $f$ and $B$ is the **codomain** of $f$.

If $f(a)=b$, we say that $b$ is the **image** of $a$ and $a$ is the **preimage** of $b$.

The **range, or image,** of $f$ is the set of all images of elements of $A$. This is best explained with an example

Example:

If we are given this relation $R=\{(1,5), (2,5)\}$, answer the following questions:

1. Is this relation a function?
2. What is the domain of this relation?
3. What is the image/range of this relation?

- This relation IS a function, since 5 is mapped to by two different elements of $A$. The elements of $A$ are unique and are not mapped twice.
- The domain of this relation: $D_R=\{1,2\}$. Remember, the domain is the first element is each ordered pair
- The image of this relation: $Range=Im(f)=\{5\}$

If you are given this relation: $R=\{(1,2),(1,4),(2,2),(2,5)\}$, answer the same questions above

- This is NOT a function, since 1 is mapped to two elements and 2 is mapped to two elements
- The domain of this relation: $D_R=\{1,2\}$
- The image of this relation: $Range=I(R)=\{2,4,5\}$

Two functions are considered equal when they have:

- The same domain
- The same codomain
- Map each element of the domain to the same element in the codomain

Another way to describe range:

- The range of a function, denoted as $Range(f)$ or $f(A)$, is the set of ALL values that $f$ maps to in the codomain $B$. In other words, it is the set of OUTPUT values of the function
- $f(A)=\{f(a) \ | \ a\in A\}$
- The range $f(A)$ is ALWAYS a subset of the codomain $B$, because $f$ maps elements from $A\rightarrow B$

![image.png](attachment:869f7881-18b8-437d-9098-2d66f032b683:image.png)

Is this a function?

- Yes, each element in $A$ is not mapped to two different elements in $B$. Although $d$ is never mapped to anything, that’s fine. It doesn’t HAVE to be mapped.
- $f=\{(a,0),(b,1),(c,1)\}$
- The domain of this function: $D_f=\{a,b,c\}$
- The codomain of this function: $Codomain=\{0,1,2,3,4\}$
- The range/image of this function: $Im(f)=Range=\{0,1\}$

We don’t include $d$ in the domain of $f$ since $d$ is never mapped to anything. Although some elements in $B$ are not mapped to anything, it is still considered the codomain since the codomain is ALL elements of $B$

If we have $A=N-\{0\}$ and $B=N-\{0\}$, and we have the relation defined as:

$R=\{(x,x^2)\ | \ x\in A\}$

- Is this relation a function
- What is the domain and codomain of this relation
- What is the range/image of this relation

1. This relation IS a function, this is because for every $x\in A$, there will always be ONE $x^2\in B$ that $x$ will map to. Meaning if $x=1$, 1 ONLY gets mapped to $(1)^2=1$. If $x=2$, 2 ONLY gets mapped to $(2)^2=4$, and so on
2. The domain of this function is $D_f=A$ and the codomain of this function: $Codomain=B$
3. The range/image of this function: $Range=Im(f)=\{x^2\ | \ x\in A\}$, it is all perfect squares

If we have $A=Z$ , which is just $(-\infin,+\infin)$, and $B=Z$, and we are given the relation:

$R=\{(x^2,x)\ | \ x\in A\}$

- Is this relation a function

1. This is NOT a function, because for $x^2$, you can have $x$ be either the + or - value of its square root. So, if we had $x^2=1$, this means either $x=1$ or $x=-1$, 1 maps to two values, so this is not a function

We have different types of functions that we will talk about…yay!

1. Injective functions
2. Surjective functions
3. Bijective functions
4. Inverse functions

## INJECTIVE FUNCTIONS:

A function is said to be **injective, or one-to-one,** IF AND ONLY IF distinct elements of the domain $f$ have distinct images in the range of $f$

Examples:

If we had the function $\{(1,1),(2,1)\}$, this is NOT an injective function, because 1 in the codomain is mapped to twice by two distinct elements in the domain.

If we had something like $\{(1,2),(3,4)\}$, this IS an injective function

## SURJECTIVE FUNCTION:

A function $f$ is said to be **surjective, or onto,** IF AND ONLY IF every element of the codomain is in the range of $f$.

Examples:

If we are given $A=\{1,2,3\}$ and $B=\{4,5,6\}$ and we are given this function: $f=\{(1,4),(2,5),(3,5)\}$, then this is not surjective. Because, in our function, the range would be $Range=Im(f)=\{4,5\}$, which is NOT equal to the codomain $\{4,5,6\}$.

If we are given $A=\{1,2,3\}$ and $B=\{4,5\}$ and the function $f=\{(1,4),(2,5),(3,5)\}$, then this IS considered surjective

### BIJECTIVE FUNCTIONS:

A function is said to be **bijective** IF AND ONLY IF it is BOTH injective and surjective

![image.png](attachment:b3cf93e4-083d-4b22-ad37-03f5eef6a48c:e8522201-2317-4910-83ae-6312c68cacf6.png)

Example:

If we are given $A=\{1,2,3\}$ and $B=\{4,5,6\}$ and we are given this function: $f=\{(1,4),(2,5),(3,6)\}$, this function is both surjective AND injective, making it a bijective function

## INVERSE FUNCTION:

If $f:A\rightarrow B$ is a bijective function, then its **inverse** relation $f^{-1}:B\rightarrow A$ is also a function

In this case, we say that $f$ is **invertible**

The surjectivity of $f$ guarantees that $f^{-1}$ is defined al ALL elements of $B$; the injectivity of $f$ guarantees that $f^{-1}$ maps each element of $B$ to a unique element of $A$

$$ f(a)=b\rightarrow f(b)=a $$

Example: If we are given $f=\{(1,2),(2,5),(4,-1)\}$, we have an inverse function

$f^{-1}=\{(2,1),(5,2),(-1,4)\}$

If a function is not bijective, it can still have an inverse **relation,** mind you, i’m not saying FUNCTON, it can have an inverse RELATION:

Let $f:\{1,2,3\}\rightarrow \{a,b\}$ be:

$f=\{(1,a),(2,b),(3,b)\}$

Obviously this function is not injective, since $f(2)=f(3)=b$, but this doesn’t mean it doesn’t have an inverse RELATION. An inverse relation is defined as:

$$ f^{-1}=\{(b,a)\ | \ (a,b)\in f\} $$

This relation becomes a function IF AND ONLY IF it is bijective

So, for the above example, we can still have an inverse relation $f^{-1}=\{(a,1),(b,2),(b,3)\}$

<aside> 🤓

It is important to note that:

- All functions are relations
- Not all relations are functions </aside>

this is common sense if you think about it

## COMPOSITION OF FUNCTIONS:

If $f:A\rightarrow B$ and $g:B\rightarrow C$ are functions, then the composition $g\circ f:A\rightarrow C$ (which is always defined as a relation) is a function.

$$ g\circ f:A\rightarrow C,g\circ f=g(f(x)) $$

![IMG_1915.jpeg](attachment:205c1e4e-8d8f-48d1-b0b3-1f1ec70c5ee1:IMG_1915.jpeg)

So, if we had a function $h=g\circ f$, and we wanted to find the value of $h(1)$, this would be:

$h(1)=g\circ f=g(f(x))=g(f(1))=g(4)=7$. This makes sense when you trace it with the image above