## LANGUAGES AND STRINGS:

Why do we bother to study the theory of computation?

- The **Theory of Computation** is the study of the fundamental capabilities and limitations of computers. It’s not just about learning how to code in a specific language, rather, it’s about asking and answering abstract questions such as:
    - “What can and cannot be computed?” are there problems that are IMPOSSIBLE for any computer to solve, no matter how powerful it is?
    - “How efficiently can a problem be solved?” so if a problem CAN be solved, how much memory or time will it take?

So, we learn the fundamental rules and limits of what computers can and can’t do. This knowledge lasts forever, hence why it’s important to study the theory of computation, so if a new programming language emerges, we have some knowledge about its limitations and capabilities

So, you basically start asking yourself “Can my language do this?” and ask “Is this POSSIBLE to do, and if so, what is the best possible performance I can achieve?”

In order to process a program, a computer has to solve several problems, all based on strings of characters. It gets broken down into:

- **Lexical Analysis:** Break the code into pieces, basically break them into variables and numbers
- **Parsing:** Create a tree that corresponds to the sequence of operations that should be executed
- **Optimization:** Make the code faster or simpler
- **Termination:** Can we prove the program will ever stop?
- **Interpretation:** Actually running the program and see what it does

So, this problem:

```
int alpha, beta;
alpha = 3;
beta = (2 + 5) / 10;
```

can be broken down into this tree:

![image.png](attachment:c04e91de-d3a5-43b3-ae88-b4d1195aba43:image.png)

In order to study all these different problems, we need one common way to talk about them. That framework is called **Language Recognition**

A **language** is a set of strings over an alphabet

### STRINGS:

A **string** is a finite sequence of symbols drawn from some alphabet. **A string can be empty,** we define this with $\epsilon$ (epsilon)

- an example of a string is something like 001 or cat

An **alphabet** is a finite, non empty set of symbols. An alphabet is usually defined with $\sum$. An alphabet CANNOT be infinitely large

- an example of alphabets can be a **binary alphabet**, which is just the set $\sum=\{0,1\}$

![image.png](attachment:81f01f53-35e3-4011-88cb-2e0ecd6a2d5f:image.png)

we denote $\sum^*$ as the set of ALL possible strings over an alphabet $\sum$

- for example, if our alphabet was $\sum=\{0,1\}$, then
    
    $\sum^*=\{\epsilon, 0, 1, 00, 01, 10, 11, 000, 001, ...\}$
    

### FUNCTIONS ON STRINGS:

**Length: $|s|$** is the number of symbols (characters, letters) in $s$

- for example, $|\epsilon|=0$ or $|1001101|=7$, $|\text{hello}|=5$

**$\#_c(s)$** is the number of times that $c$ occurs in $s$

- for example, $\#_a(abbaaa)$ is basically saying how many $a$’s are there in the sequence $abbaaa$? $\#_a(abbaaa)=4$

**Concatenation:** stick two strings together basically

- example, if $x=\text{good}$ and $y=\text{bye}$, then $xy=\text{goodbye}$, you just stick em together

usually we denote the concatenation of two strings by $xy$ but if you see $x.y$ don’t start shitting your pants they mean the same shit

**PROPERTIES:**

- The length of $|xy|=|x|+|y|$
    
    - take the goodbye example: $|\text{goodbye}|=7$ and $|x|+|y|=|\text{good}|+|\text{bye}|=4+3=7$
- The empty string $\epsilon$ is the identity: $x\epsilon=\epsilon x= x$
    
    - btw, an identity is basically an element that, when combined with any other element using a specific operation, leaves the other element unchanged. so, when you do 100 + 0 = 100, 0 is the identity here. Or if you do 100 x 1 = 100, 1 is the identity here
- It’s associative, meaning: $\forall s,t,w \ ((st)w = s(tw))$
    
    - example: let $s=go, w= od, w=bye$. If we do the left side first, we will get
        
        $(st)w =(good)bye=goodbye$
        
        now if we do the right side: $s(tw)=go(odbye)=goodbye$, you get the same thing!
        
- They are NOT commutative, so doing $x+y=y+x$ will not give you the same results in strings
    
    - example: if $s=good$ and $t=bye$, if we do $s+t=goodbye$, but if we do
        
        $t+s=byegood$, they arent the same clearly
        

**Repetition (Power):** $w^i$ means that the string $w$ is repeated $i$ times

- example: $w^0=\epsilon$ (anything to the power of 0 is the empty string)
- $w^3=www$
- $(bye)^2=byebye$
- $a^0b^3=bbb$

**Reverse:** For each string $w$, $w^R$ is just the string written backwards

The reverse of $\epsilon$ is just $\epsilon$

- if $|w|=0$ then $w^R=w=\epsilon$
- if $|w|\ge1$ then:
    - $\exists a \in \sum (\exists u \in \sum^*(w=ua))$ so, we define $w^R=au^R$

OR IF THE SECOND THING DOESNT MAKE SENSE:

For a long string, take the first character and put it at the end of the reverse of the rest.

- example: $abc^R=c + (ab)^R = c+ b + a = cba$

**THEOREM:** The reverse of two concatenated strings is the reverse of the second string followed by the reverse of the first, $(wx)^R=x^R+w^R$ given $w,x$ are strings

Example:

$(nametag)^R=(tag)^R+(name)^R=gateman$

(remember to come back here because there’s the whole proof by induction thing but i need to look more into it)

### **RELATIONS ON STRINGS:**

**Substring:** A string that appears consecutively inside another string

For example:

- $aaa$ IS a substring of the string $aaabbaaa$
- $aaaaaa$ IS NOT a substring of the string $aaabbbaaa$ (there are no consecutive $aaaaaa$’s inside the string)

**EVERY STRING IS A SUBSTRING OF ITSELF**

$\epsilon$ is a substring of every string

What is the difference between a substring and a proper substring?

- a **substring** is any consecutive sequence of characters taken from within the string, this includes:
    - the string ITSELF
    - the empty string
    - any consecutive sequence at the beginning, middle, or end
    - example: for the string $s="abc"$, all of its substrings are:
        - $\epsilon,a,b,c,ab,bc,abc$
- a **proper substring** is any substring that DOES NOT INCLUDE THE STRING ITSELF
    - example: for the string $s="abc"$, all of the proper substrings include:
        - $\epsilon,a,b,c,ab,bc$

**Prefix:** A string you can put at the beginning of another string to build it

$s$ is a prefix of $t$ if you can add something $(x)$ to the end of $s$ to get $t$ $(t=s+x)$

**EVERY STRING IS A PREFIX OF ITSELF**

$\epsilon$ is a prefix of every string

What is the difference between a prefix and a proper prefix?

- a **prefix** is the consecutive sequence of characters staring from left to right that INCLUDES the string
    - example: for the string $s="abba"$, the prefixes of $abba$ are:
        - $\epsilon,a,ab,abb,abba$
- a **proper prefix** is basically all prefixes EXCEPT FOR THE ENTIRE STRING
    - example: for the string $s="abba"$, the proper prefixes are:
        - $\epsilon, a, ab,abb$

**Suffix:** A string you can put at the end of another string to build it

$s$ is a suffix of $t$ if you can add something $(x)$ to the start of $s$ to get $t$ $(t=x+s)$

**EVERY STRING IS A SUFFIX OF ITSELF**

$\epsilon$ is a suffix of every string

What is the difference between a suffix and a proper suffix?

- a **suffix** is the consecutive characters starting from right to left that INCLUDES the string
    - example: for the string $s="abba"$, the suffixes are:
        - $\epsilon,a,ba,bba,abba$
- a **proper suffix** is basically all suffixes EXCEPT FOR THE ENTIRE STRING
    - example: for the string $s="abba"$, the proper suffixes are:
        - $\epsilon,a,ba,bba$

### **DEFINING A LANGUAGE:**

A **language** is a (finite or infinite) set of string over a finite alphabet $\sum$

Examples: Let $\sum=\{a,b\}$

Some languages over $\sum$ include:

- $\emptyset, \{\epsilon\}, \{a,b\}, \{\epsilon, a, aa, aaa, aaaaaa\}$, and many more!

The language $\sum^*$ contains an infinite number of string, including: $\epsilon, a, b, ab, ababaa,...$

It is important to know that $\emptyset\neq\epsilon$, $\epsilon$ HAS 1 string, but it just happens to have no letters, its just empty

$L\subseteq\sum^*$

If we say that $a\in\sum$, this would mean the contents of $\sum$ would be letters or symbols

If we say that $a\in \sum^*$, this would mean the contents of $\sum$ would be STRINGS

- so, $\sum=\{a,b\}$, this means the contents are called letters
- $\sum^*=\{\epsilon, a, b, aa, ab, ba, bb, aaa, aab...\}$, there are all STRINGS

Some examples to make stuff more clearer:

$L=\{x\in\{a,b\}^* | \text{ all }a's\text{ precede all }b's\}$

So:

- $\epsilon,a,aa,aabbb,bb$ ARE IN L. While bb may seem like it wouldnt be there, since there are no a’s in the string, you are allowed to just put b’s, the string just happens to have zero a’s which is fine, there is no restriction on saying there HAS to be an a
- $aba,ba,abc$ are NOT in L. in the first and second one, we have an a after a b, and in the last one we have a c which is not even supposed to be there? who invited the horse
- $\epsilon,a,aa,bb$ ARE IN L.

$L=\{x\in\{a,b\}^* | \exists y \in \{a,b\}^* | x=ya\}$

So:

- To translate this into simpler terms, this is essentially saying that the string $x$ HAS to end with an $a$
- So, $\epsilon, ba, bba, aaa$ ARE IN L
- $a, bbab, abba, abb$ are NOT in L

What are the following languages?

$L=\{w\in\{a,b\}^* |\text{ no prefix of w contains }b\}$

- this can be: $\epsilon,a,aa,aaa,aaaa,...$

$L=\{w\in\{a,b\}^*|\text{ ny prefix of w starts with an }a\}$

- this can be: $\epsilon, b, bba, bbba, bbbaa$

$L=\{w\in \{a,b\}^*|\text{ every prefix of w starts with }a\}$

- this one is a bit tricky. $\epsilon$ is a prefix of every string, and $\epsilon$ does NOT start with $a$. So, this means $L=\emptyset$

You can use repetition in a language definition:

$L=\{a^n|n\ge0\}$

- $\epsilon, a, aa, aaa, aaaa, aaaaa,...$

**LANGUAGES ARE SETS:**

There are two main ways to computationally handle a language

- **Generator (enumerator):** A machine that LISTS OUT all the strings in the language, one by one
- **Recognizer:** A machine that takes a string as input and answers “yes” if string in language, if not, then the answer would be a “no”. obviously, this would be more useful

**ENUMERATION:**

How do they list strings?

The usually list them in **lexicographic order** (dictionary order essentially, shortest first)

- $\sum=\{a,b\}$, $\sum= \{\epsilon, a, b, aa, ab, bb, bb, aaa,...\}$

Example, the lexicographic enumeration of:

$\{w\in \{a,b\}^* |\ w\text{ is even}\}$ would be:

- $\{\epsilon, aa, ab, bb, aaaa, aaab,....\}$

### **HOW LARGE IS A LANGUAGE:**

We know that the **smallest** possible language is the empty set $\emptyset$, which has ZERO strings

We also know that the **largest** possible language is $\sum^*$, which contains every possivle string, which would make that language infinitely large

There is a theory that states:

**If $\sum\ne\emptyset$, then $\sum^*$ is countably infinite**

Now, what the HELL does this mean?

- Let us say you have an alphabet with just two letters $\{a,b\}$, this includes:
- $\epsilon$
- All 1-letter words (cause of enumeration) $\{a,b\}$
- All 2-letter words (also, cause of enumeration) $\{aa,ab,ba,bb\}$
- All 3-letter words, and so on, FOREVER!

But, this seems impossible to count, because there is no end! the trick here is to create a list that will eventually include every possible word

So, we sort the words by LENGTH first. Then, in each list, list them in alphabetical order

It would look like:

- Length 0: $\epsilon$
- Length 1: $a,b$
- Length 2: $aa,ab,ba,bb$
- Length 3: $aaa,aab,aba,abb,baa,bab,bba,bbb$
- Length 4, you get the gist, and so on

Now, why is this list countably infinite?

- It’s a list: meaning you can number EVERY item. The first word is number 1, the epsilon , the second word is number 2 (a), the third is number 3 (b), and so on

Due to this sorting rule, every single possible string will eventually appear in the list and get assigned its own unique number. Since you can pair each string with a unique number, the set of all strings is the same size as the set of natural numbers, which makes it countably infinite

countably infinite just means you can make an infinite list of something

- every single item in the set can be given a unique number, and every number on your list will have an item

Another theorem states:

**If $\sum\ne\emptyset$ then the set of languages over $\sum$ is uncountably infinite**

**Uncountably infinite** means there are so many things that is impossible to make a list of all of them. Even an infinite list would miss something

Example:

Think of a 1-centimeter line segment. It begins at 0cm and ends at 1cm

Now, think about how many points are on that line. A point is a specific, exact location, like 0.5cm or 0.5000000000001cm

The number of points between 0 and 1 is uncountably infinite. The reason why you can’t list them is because:

Let us say you try to make a list of EVERY point. It might start like:

- 1: 0.1cm
- 2: 0.01cm
- 3: 0.001cm
- 4: 0.00001cm
- you plan to list… quite a lot

You will never, never list the point 0.5cm because you’re listing numbers that just get infinitely closer and smaller towards zero.

So, the set of all points on a line is uncountably infinite. There is no possible way to put them in order and assign each one a number. There are simply too many

All in all, uncountably infinite means that a set is so vast that its impossible to create a complete, numbered list of all elements, making it a larger type of infinite than the infinity of whole numbers (woah..)

### **DIAGONALIZATION**

We know that integers and rational numbers are countable, however, irrational numbers are uncountable.

Proof:

1. Suppose the irrational numbers WERE countable, we could list them as:
    
    $n_1,n_2,n_3,...$
    
2. Construct a new number N by ensuring:
    
    Its 1st decimal digit ≠ the 1st decimal digit of $n_1$
    
    Its 2nd decimal digit ≠ the 2nd decimal digit of $n_2$
    
    Its 3rd decimal digit ≠ the 3rd decimal digit of $n_3$
    
    …and so on
    
3. By construction, $N$ differs from every $n_i$ in at least one decimal place
    
4. So, $N$ is NOT on the list, which leads to a contradiction
    
5. Therefore, irrationals cannot be listed (they are uncountable)
    

Let me give a more solid example w numbers so it makes sense:

![IMG_2704.jpeg](attachment:7760e442-9153-4095-bfe2-ca99ab5ffeda:IMG_2704.jpeg)

## FUNCTIONS ON LANGUAGES:

Since languages are sets, we can use set operations on them:

- Union
- Intersection
- Complement

We also have special language operations:

- Concatenation
- Kleene Star

### **CONCATENATION:**

If $L_1$ and $L_2$ are languages over $\sum$, then:

$$  
L_1L_2=\{st\ |\ s\in L_1\text{ and } t\in L_2\}  
$$

So, combine every string in the first language with every string in the second

Example:

$L_1=\{cat,dog\}, \ L_2=\{apple,pear\}$

$L_1L_2=\{catapple, catpear, dogapple, dogpear\}$

The language $\{\epsilon\}$ is like the number 1 for multiplication. Concatenating anything with $\{\epsilon\}$ gives you the original thing back

$$  
L\{\epsilon\}=\{\epsilon\}L=L  
$$

The empty language $\emptyset$ is like the number 0 for multiplication. Concatenating anything with $\emptyset$ gives you $\emptyset$

$$  
L\{\emptyset\}=\{\emptyset\}L=\emptyset  
$$

When defining languages with variables like $n$ and $m$ in $a^nb^m$, the variables are independent

For example:

We are given $L_1=\{a^n | n\ge 0\}$ and $L_2=\{b^n | n\ge 0\}$

Concatenating these two means: take one string from $L_1$ and put it directly in front of one string from $L_2$

So:

$$  
L_1L_2=\{a^nb^m | n,m\ge0\}  
$$

example:

- $n=0,m=0 \rightarrow \epsilon$
- $n=3, m=0\rightarrow aaa$
- $n=0,m=3\rightarrow bbb$
- $n=2,m=4\rightarrow aabbbb$

$L_1L_2\ne\{a^nb^n | n\ge 0\}$, obviously, they are both independent

### KLEENE STAR:

The Kleene star $(L^*)$ operation basically means “zero or more concatenations of strings from $L$”

This always includes $\epsilon$

It includes every string that can be formed by concatenating any finite number of strings from $L$

Example:

$L=\{dog,cat,fish\}$

$L^*=\{\epsilon, dog, cat, fish, dogdog, catcat, fishfish, dogcat, fishcatfish, ...\}$

### PLUS OPERATOR:

The plus operation means “one or more concatenations of strings from $L$”

$L^+=LL^*$

$L^+=L^*-\{\epsilon\}$ iff $\epsilon\not\in L$. If $\epsilon\in L$, then $L^+$ still contains $\epsilon$ because you could choose it from one of the concatenations

When we say “$L^+$ is the closure of $L$ under concatenation”, this means:

- $L^+$ contains all strings that can be formed by concatenating one or more strings from $L$
- It’s the smallest set with that property

**CONCATENATION AND REVERSE OF LANGUAGES**

$(L_1L_2)^R = L_2^RL_1^R$

The reverse of the concatenation of two languages is the concatenation of their reverses, but in the opposite order

Proof:

We know that $(xy)^R=y^Rx^R$

1. $(L_1L_2)^R$ is the set of all reversed strings $(xy)^R$ where $x\in L_1$ and $y\in L_2$
2. This equals the set: $\{y^Rx^R | x\in L_1,y\in L_2\}$
3. This set is exactly $L_2^RL_1^R$

Example:

Suppose $L_1=\{a,ab\}$ and $L_2=\{b,ba\}$ over the alphabet $\sum=\{a,b\}$

Let us calculate $(L_1L_2)^R$

First, find the concatenation of the two languages

$L_1L_2=\{ab,aba,abb,abba\}$

Now, let us reverse this new language:

$ab\rightarrow ba, aba\rightarrow aba, abb\rightarrow bba, abba \rightarrow abba$

So, $(L_1L_2)^R=\{ba,aba,bba,abba\}$

Let us calculate $L_2^RL_1^R$

$L_2^R=\{b,ab\}, L_1^R=\{a,ba\}$

Now, concatenate the two:

$L_2^RL_1^R=\{ba,bba,aba,abba\}$

They are the exact same!

### **SEMANTIC VS SYNTAX:**

The distinction between the form of a string (syntax) and its meaning (semantics)

For example, the language $A^nB^n=\{a^nb^n| n\ge 0\}$. While this language is well defined syntactically, what do these strings mean semantic wise? On their own, they are just patterns

**Syntax:** The formal structure, rules, and patterns of strings in a language

**Semantics:** The meaning assigned to those strings

## DECISION PROBLEMS:

A **decision problem** is any problem that has a yes/no answer

A **decision procedure** is an algorithm that solves a decision problem (always halts with the correct answer)

For example:

- An decision problem could be “is integer $n$ a prime” and the decision procedure can be some algorithm that checks if $n$ is prime or not

Our main focus will be:

The **language recognition problem:** Given a language $L$ and a string $w$, is $w\in L?$

### ENCODING:

Problems that don’t look like decision problems can be recast into new problems that do look like it. EVERYTHING is a string

Example:

“Does a program always halt?” can be recast as a decision problem, which would look like: “Given a program $p$, written in some standard programming language, is $p$ guaranteed to halt on all inputs?”

The language to be decided:

$HP_{ALL}=\{p | p\text{ halts on all inputs}\}$, obviously, $p$ halts IFF $p\in HP_{ALL}$

Convention:

**`<X>`** represents the string encoding of the object X

**`<X,Y>`** represents the string encoding of the pair objects X and Y

Another example:  
You can transform a function computation problem into a verification problem

**Original problem:** Compute the product of two integers

**Recast as decision:** Instead of computing x * y, verify if a given answer z is correct

**Language to be decided:** $L=\{w\text{ of the form: }x\times y = z|z \text{ is any well formed integer, and }z =x \times y\}$

so it would basically be:  
L = { x * y = z such that integer_3 = int_1 x int_2 }. if int 1 times int 2 is not int 3, then it isnt in the language

- so $12\times 9=108\in L$, but $12\times 8=108\not\in L$