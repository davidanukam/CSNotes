# Turing Machines

So we know that **Regular Languages** (FSMs, Regular Expressions) $\subseteq$ **Context-Free Languages** (CFGs, PDAs). So every Regular Language IS a Context-Free Language.

Well, guess what? **Turing Machines** now cover everything. So now we have, **Regular Languages** (FSMs, Regular Expressions) $\subseteq$ **Context-Free Languages** (CFGs, PDAs) $\subseteq$ **Turing Machines** (Unrestricted Grammars, D, SD). So every Regular Language IS a Context-Free Language AND every Context-Free Language IS a Turing Machine.

![[Pasted image 20261111144032.png]]

Review:
- FSMs = Finite State Machines
- CFGs = Context-Free Grammars
- PDAs = Push-Down Automata

Turing Machines span two sets, those being **Decidable** (D) and **Semi-Decidable** (SD). (We'll get into the differences later!)

## Formal Definition

A Turing Machine M is a sextuple (K, $\Sigma$, $\Gamma$, $\delta$, s, H):
- K is a finite set of **states**
- $\Sigma$ is the **input alphabet**, which does not contain $\Box$ (Blank)
- $\Gamma$ is the **tape alphabet**, which must contain $\Box$ and have $\Sigma$ as a subset
- s $\in$ K is the **initial state**
- H $\subseteq$ K is the set of **halting states**
- $\delta$ is the **transition function**

![[Pasted image 20261111145118.png]]

Some things to note:
- The input tape is infinite in both directions
- $\delta$ is a function NOT A RELATION, so this definition is for deterministic Turing machines.
- $\delta$ must be defined for all (state, input) pair unless the state is a halting state.
- IMPORTANT: Turing machines do not necessarily halt (unlike FSMs and PDAs). WHY? Because to halt, they must enter a halting state, otherwise they loop.
- Turing machines generate output so they can compute functions. (We'll see some examples later)

Example:

lets say M takes as input a string in the language $\lbrace{a^{i}b^{j}, 0 \le j \le i\rbrace}$...

and adds `b`'s as required to make the number of `b`'s equal the number of `a`'s.

Well, the input to M would look something like this:

![[Pasted image 20261111145923.png]]

And the output should be:

![[Pasted image 20261111145929.png]]

Well, hold your breath, cause this is gonna hurt.

Here is a Turing machine M that will do what we said above:

![[Pasted image 20261111150106.png]]

Kind of like PDAs, we have the transition format `a`/`b`/`c` where we **read** `a` from the tape, then **write** `b` on the tape before **moving** the `tape head` (the $\uparrow$ in the two pictures above) in direction `c`.

For example, take the first transition from state 1 to state 2. We **read** $\Box$ (Blank) from the tape, then we **write** $\Box$ (Blank) to the tape (at the same position we just read from), then lastly, we **move** the `tape head` $\rightarrow$ (right, duh). In proper notation, it would be:

$$\delta(1, \Box) = (2, \Box, \rightarrow)$$

## Halting

Okay so to make this a one liner: "Haling means that a machine finishes its computation and stops running, rather than looping infinitely."

Basically, think of a FSM, with an **final accepting state**. It obviously halts once an input string is read and reaches that final accepting state.

However, what about if we reach a trap state? Well then we are looping infinitely, right? WRONG! Well, yes, but NO!

When we say looping infinitely, we mean that there is an **epsilon loop** (so no input is being consumed).

In a FSM, when we have a trap state, we are saying that once we reach this state, any other characters being read from our input string should remain on this state. So if our string is 10 characters long and we reach the trap state on character 4, then we read the last 6 characters but stay on the trap state and finally `not accept` the string. THIS STILL COUNTS AS HALTING!

- A DFSM M, on input w, is **guaranteed** to halt in |w| steps (because of what I just said above. No matter what, accepting or rejecting, we consume all input regardless so it halts.)
- On the other hand, A PDA M, on input w, is NOT guaranteed to halt at all. WHY? Here's an example:

If we consider M =

![[Pasted image 20261111152016.png]]

Well, **clearly** we have an **epsilon transition** from state 1 to state 2 and another one from state 2 BACK to state 1 (so technically a loop). This means it can `loop infinitely` and therefore NEVER halt.

However, there exists an algorithm to construct an **equivalent** PDA M' that IS guaranteed to halt. What is it? I'll get back to that when I figure it out 😭

- Lastly, a TM M, on input w, is NOT guaranteed to halt as well. This time we can confidently say that there does NOT exist an algorithm to construct a TM M' that is guaranteed to halt.

## Notation for Turing Machines

Okay lets speed run this. From this point onwards, I want you to think of Turing machines as a group of some basic machines. (Kind of like the phone you keep being distracted by instead of locking in. Its made up of a bunch of little "machines" that make up the whole.)

### Basic machines

Symbol writing machines:
- For each $\textbf{x} \in \Gamma$, define $M_{\textbf{x}}$, written as just **x**, to be a machine that writes **x**, then halts.

Head moving machines:
- **R**: for each $\textbf{x} \in \Gamma, \delta(s, \textbf{x}) = (s, \textbf{x}, \rightarrow)$
- **L**: for each $\textbf{x} \in \Gamma, \delta(s, \textbf{x}) = (s, \textbf{x}, \leftarrow)$

Machines that simply halt:
- **h**: just halts
- **n**: **rejects** and then halts
- **y**: **accepts** and then halts

### Checking Inputs and Combining Machines

Okay so now we need to describe how to:
- Check the the tape and branch on what character we see and
- Combine the basic machines to form larger ones

To do this, we need two forms:
- $M_{1}M_{2}$:
	- Begin in start state of $M_{1}$, run $M_{1}$ until it halts, begin $M_{2}$ in its start state, run $M_{2}$ until it halts, then halt the entire machine. If EITHER FAIL TO HALT, then $M_{1}M_{2}$ fails to halt (the entire machine fails to halt).
- $M_{1} \xrightarrow{\text{<condition>}} M_{2}$
	- The same as the $M_{1}M_{2}$ form above, except that `<condition>` is checked to move from $M_{1}$ to $M_{2}$.

Alright, lets see an example:

![[Pasted image 20261111155800.png]]

- So we start at the **initial (start) state** of $M_{1}$. ("**>**" marks the beginning).
- Compute until $M_{1}$ reaches a **halt state**.
- Then examine the **tape** and take the appropriate **transition** (`a` or `b`).
- We then start at the **initial (start) state** of the next machine (here its either $M_{2}$ or $M_{3}$).
- Again, we have to **halt** if any component reaches a **halt state** and hos no place to go.
- However, if **ANY** component **FAILS TO HALT**, then the **ENTIRE** machine **MAY** fail to halt.

### Some Shorthands

![[Pasted image 20261111160250.png]]

Honestly, if you've been locked in, then most of these should make sense of rip. Review FSM if needed.

I'll explain the **Variables**:
- For the first one, we're basically saying that to transition from $M_{1}$ to $M_{2}$, we need to **read** the **tape** and find any character that is NOT `a` AND then **save** that character into a variable **x**. **x** is stored elsewhere but its a variable just like in programming. So it can be referenced and used later on.
- For the second one, we're just saying that we can transition from $M_{1}$ to $M_{2}$ by either **reading** an `a` or a `b` from the **tape** and then **saving** that character into a variable **x**.
- For the third one, we are checking if the character stored in a variable **x** is the same character stored in another variable **y**. If they are the same, then we take the transition and from $M_{1}$ to $M_{2}$.

Example: $> \xrightarrow{\neg \Box}\text{Rx}$
- This means to start at "**>**" (the starting position of the **tape head**) and if the character there is NOT Blank, then store the character into a variable **x** and then **move** Right and **write** that stored character in **x** on the tape at the current tape head's position (so basically overwriting the next character on the tape).
- So for example, $\underline{a}bbab, x = \text{None} \Rightarrow a\underline{b}bab, x = a \Rightarrow a\underline{a}bab$

### Some Useful Machines

![[Pasted image 20261111160308.png]]

Looking at the simplified RED machines:
- $R_{\Box}$: Go **Right** until you find a $\Box$.
- $L_{\Box}$: Go **Left** until you find a $\Box$.
- $R_{\neg \Box}$: Go **Right** until you find a character that is not $\Box$.
- $L_{\neg \Box}$: Go **Left** until you find a character that is not $\Box$.
### Some More Useful Machines

![[Pasted image 20261111160331.png]]

Okay so here's an example:

![[Pasted image 20261111162456.png]]

To describe it as best as I can:

- Start at "**>**"
- (1) Go Right until you find a `1` or a $\Box$.
- Once you are are at a `1` or a $\Box$ then:
	- If the character you are at is a `1` then:
		- (over)**write** the `1` on the tape with a `#`
		- Go Right until you find a $\Box$
		- (over)**write** the $\Box$ on the tape with a `#`
		- Go Right once
		- (over)**write** the next **character** on the tape with a `#`
		- Go Left until you find a $\Box$
		- Then go back to (1)
	- Otherwise, if the character you are at is a $\Box$, then:
		- (2) Go Left once
		- If the character you are at is a `#` then:
			- (over)**write** the `#` on the tape with a `1`
			- Then go back to (2)
		- Otherwise, if the character you are at is a $\Box$ then:
			- go to the **halt state** and HALT (stop)

Here's another example called a **Shifting Machine**:

![[Pasted image 20261111164027.png]]

Try going through and figuring out how this TM works.

## Turing Machines as Language Recognizers

As convention:
- We will write the input $\text{w}$ on the tape as: $\Box \text{w} \Box$, where $\text{w}$ contains no $\Box$'s.
- Thus, the initial configuration of M will be: (s, $\underline{\Box}\text{w}$)

Let M = (K, $\Sigma$, $\Gamma$, $\delta$, s, $\lbrace{y, n\rbrace}$)

- M **accepts** a string $\text{w}$ iff (s, $\underline{\Box}\text{w}$) $(|-_{M})^{*}$ ($\text{y}$, $\text{w}'$) for some string w'
- M **rejects** a string $\text{w}$ iff (s, $\underline{\Box}\text{w}$) $(|-_{M})^{*}$ ($\text{n}$, $\text{w}$') for some string w'
- (Honestly, you can try and figure out what these mean formally but, I think you understand when a FSM, PDA, and TM accept and reject by now)

## Decidable Languages

This means that M **decides** a language L $\subseteq \Sigma^{*}$ iff:
- For any string w $\in \Sigma^{*}$ it is true that:
	- if w $\in$ L then M accepts w, and
	- if w $\in$ L then M rejects w.

So we can say that a Language L is **decidable** iff there is a Turing Machine M that **decides** it. In this case, the language L is in **D** so we define the set **D** to be the set of all **decidable** languages.

Here's an example:

From the Context-Free Languages notes, we know that $A^{n}B^{n}C^{n} = \lbrace{a^{n}b^{n}c^{n} : n \ge 0\rbrace}$ is NOT Context-Free (we can't use a stack to track more than 2 things). Well, guess what? We can create a Turing Machine for it now!

![[Pasted image 20261111171031.png]]

Here's another one that we know is NOT Context-Free:

![[Pasted image 20261111171045.png]]

## Semi-decidable Languages

Okay now for the last set of possible language types: **Semidecidables**

Let $\Sigma_{M}$ be the input alphabet to a Turing Machine M. Let L $\subseteq (\Sigma_{M})^{*}$.

M **semidecides** L iff, for any string w $\in (\Sigma_{M})^{*}$:
- w $\in$ L $\rightarrow$ M **accepts** w
- w $\not\in$ L $\rightarrow$ M **does not accept** w

IMPORTANT: "**does not accept**" means that M may either:
- **REJECT** or **FAIL TO HALT**

That IMPORTANT part is why these languages are **semidecidable**.

A Language L is **semidecidable** iff there is a Turing Machine that **semidecides** it. We define the set **SD** to be the set of all **semidecidable** languages.

Okay, so here's an example of a TM M that semidecides L:

![[Pasted image 20261111172004.png]]

If you follow the TM, you can see that if the input string w does NOT have an `a`, then you are going to keep moving Right forever, and never halt (you know this because there is no `n` (reject) state, nor a `h` (halt) state to get to).

So then, putting on our thinking caps, how could we make another TM M' that **decides** L?

![[Pasted image 20261111172430.png]]

Exactly! We can just add a $\Box$ (Blank) transition to a `n` (reject) state which automatically halts after rejecting.

## Computing Functions

Let M = (K, $\Sigma$, $\Gamma$, $\delta$, s, $\lbrace{h\rbrace}$). Its initial configuration is (s, $\underline{\Box}$w).

Define M(w) = z **iff** (s, $\underline{\Box}$w) $(|-_{M})^{*}$ (h, $\underline{\Box}$w).

Let $\Sigma' \subseteq \Sigma$ be M's **output alphabet** (i.e., the **set of symbols** that M **MAY** leave on its **tape** when it **halts**)

Let $f$ be any function from $\Sigma^{*}$ to $\Sigma'^{*}$

M **computes $f$** iff for **all** w $\in \Sigma^{*}$, M(w) = f(w).

A **function $f$** is **recursive** or **computable** iff there is a Turing machine M that computes it. Note that M always halts here ($\lbrace{h\rbrace}$).

An example makes this easier to understand:

![[Pasted image 20261111174908.png]]

## Computing Numeric Functions

For any positive integer k, $\text{value}_{k}(n)$ returns the nonnegative integer that is encoded, base k, by the string $n$

For example:
- $\text{value}_{2}(101)$ = 5
- $\text{value}_{8}(101)$ = 65

TM M computes a function $f$ from $\mathbb{N}^{m}$ to $\mathbb{N}$ iff, for some k:

$$\text{value}_{k}(M(n_1; n_2; \dots, n_{m})) = f(\text{value}_{k}(n_1), \dots, \text{value}_{k}(n_{m}))$$

Here's a quick example:

![[Pasted image 20261111175414.png]]

## Not All Functions Are Computable

![[Pasted image 20261111175857.png]]

To explain this briefly, since it probably won't ever be tested, these **bust beaver functions** are the fastest growing functions out there.

We know:
- $f(x) = x$
- $f(x) = x^2$
- $f(x) = x^{x}$
- $f(x) = x^{x!}$
- $f(x) = {x!}^{x!}$
- etc...

