# Turing Machine Extensions

We want to show that no matter what extensions we might make to the **basic** Turing machine model, **it will have the SAME power** as the **basic** machine.

We are going to talk about two possible extensions:
- **Multiple Tape** Turing Machines (TMs)
- **Nondeterministic** Turing Machines (TMs)

## Multiple Tapes Turing Machines (TMs)

![[Pasted image 20261111202246.png]]

So we know that in the **basic** Turing Machine model, there is only **ONE** input tape where we **read**, and **write** to.

Well, what if we wanted to use more than 1 tape?

Not surprisingly, we can do so by re-defining what the **transition function** looks like.

The **transition function** for a **k-tape** Turing machine:

![[Pasted image 20261111202439.png]]

To simply this absolute jargon, just think about how we transition on the basic TM.

The `tape head` ($\uparrow$) is at some location on our tape and, for example, we check if the character at that location is an `a`, if it is, then we go to another machine (or states) since TMs are just large machines made from smaller machines.

Well, since we have more tapes, we can treat each one separately, each with their own `tape head`.

For example, lets say we wanted to copy a string `w (abba)`.

[1] We could have tape1 have our input string w while tape2 just has $\Box$'s (Blanks).

Then we could have the two `tape head`'s start at a location on their tape (in this case, we only care that tape1's `tape head` starts at the $\Box$ right before the input string).

[2] Then, we could go through the TM, using the simple machines from the last note, and every time we **read** a letter in the input string, we can **write** it on tape2.

[3] We can then return back to the start of the copied string on tape2 (since its `tape head` is independent).

Then we can **read** the string again (this time on tape2) and while we are **reading** the characters, we can **write** them onto tape1 (notice that we did NOT reset tape1's `tape head`).

[4] This allows us to produce a final output string `ww (abbaabba)`.

[1]
![[Pasted image 20261111203718.png]]

[2]
![[Pasted image 20261111203727.png]]

[3]
![[Pasted image 20261111203736.png]]

[4]
![[Pasted image 20261111203750.png]]

Another given Two Tape example is **Addition**:

![[Pasted image 20261111203933.png]]

I ain't gonna explain this one fully cause you should understand how this works:
- Move both `tape head`'s to the Right but only copy the first number (in binary) to tape2. (the numbers are separated by a **;** on tape1).
- Now both `tape head`'s are at the end of their respective numbers.
- Since addition starts from the furthest right digit and makes its way to the left-most digit, I think you get the picture.
	- We can "add" the two characters located at both `tape head`'s by using a simple TM
		- Maybe if tape_head_1 == `1` and tape_head_2 == `1` then write a `0`, if tape_head_1 == 0 and tape_head_2 == `1` then write a `1`
	- I probably don't have to point this out, but we are writing the output string back on tape1.

## Adding Tapes Adds No Power

Okay so now we have to (kinda) prove that even if we had like 10 ka-billion tapes, the "power" would not change. (Power here refers to...)

Theorem: Let M be a **k-tape** Turing Machine for some k $\ge$ 1.
- Then there is a standard TM M' where $\Sigma \subseteq \Sigma'$, and:
	- On input x, M **halts** with output z on the first tape iff M' halts in the **same state** with z on its tape.
	- On input x, if M **halts** in **n** steps, M' halts in $O(n^2)$ steps.

We can prove this with a **Proof by Construction**.

Since WE don't actually care (it won't be tested at all), this is basically what we get:

![[Pasted image 20261111205457.png]]

Essentially, we are saying that if we have 2 tapes then we can add 2 more tapes where each one of the 2 new tapes track the `tape head` of the tape above it.

- So the **2nd tape** basically tracks the `tape head` of the **first tape**
- and the **4th tape** is used to track the `tape head` of the **third tape**

So to generalize, if we have **k-tapes**, we can add **k-MORE** tapes to help track the location of the **k-tape-heads**

## Nondeterministic Turing Machines

Alright, really quickly, I'm gonna add some notes.

So there's a slide that says that when we make any one of these nondeterministic, then the Power () changes:
- For FSMs, liked we talked about above, when we make them nondeterministic, the Power does NOT increase
- For PDAs, then we make them nondeterministic, the power DOES increase
	- This is because ...
- For Turing Machines, liked we just proved, when we make them nondeterministic, the power also does NOT increase.

Okay but then what is a nondeterministic TM?

## Nondeterministic Turing Machines

A nondeterministic TM is a sextuple (K, $\Sigma$, $\Gamma$, $\Delta$, s, H) where $\Delta$ is a subset of:
- $((K - H) \times \Gamma) \times (K \times \Gamma \times \lbrace{\leftarrow, \rightarrow \rbrace})$

What does this mean? Well, I don't actually know but I can give an example:

![[Pasted image 20261113124310.png]]

Using a kind of **parse tree** version of a TM, we can see that at any **node**, we have options just like in **NDPDA**s, and **NDFSM**.

Okay but then what does it mean for a nondeterministic TUring machine to:
- Decide a language
- Semidecide a language
- Compute a function

## Nondeterministic Turing Machine Deciding

Let M = (K, $\Sigma$, $\Gamma$, $\Delta$, s, $\lbrace{\text{y}, \text{n}\rbrace}$) be a nondeterministic TM

Let w be an element of $\Sigma^{*}$

M **accepts** w iff at least ONE of its computations **accepts**.
M **rejects** w iff ALL of its computations **reject**
M **decides** a language L $\subseteq \Sigma^{*}$ iff, $\forall$w:
- There is a finite number of paths that M can follow on input w,
- All of those paths halt, and
- w $\in$ L iff M accepts w

Okay, well this is all ramble unless we see an example so:

let L = $\lbrace{w \in \lbrace{0, 1\rbrace}^{*} : w \ \text{is the binary encoding of a composite number} \rbrace}$

NDTM M decides L by doing the following on input $w$:

1. Nondeterministically choose two positive binary number such that:
	- $2 \le |p| \ \text{and} \ |q| \le |w|$
	- Write them on the tape, after $w$, separated by a semicolon (;)
		- $\underline{\square}110011;111;1111\square\square$
2. Multiply $p$ and $q$ and put the answer, $A$, on the tape, in place of $p$ and $q$:
	- $\underline{\square}110011;1011111\square\square$
3. Compare $A$ and $w$. If they are equal, then go to $y$ (accept). Otherwise, go to $n$ (reject).

## Nondeterministic Turing Machine Semideciding

Let M = (K, $\Sigma$, $\Gamma$, $\Delta$, s, $\lbrace{\text{y}, \text{n}\rbrace}$) be a nondeterministic TM

We can say that M **semidecides** a language L $\subseteq \Sigma^{*}$ iff:
- for all $w \in \Sigma^{*}$:
	- (s, $\underline{\square}w$) yields a least ONE **accepting** configuration

Alright, lets look at an example of NDFSM that semidecides a language L:

![[Pasted image 20261113125914.png]]

> Something to note here is that in this case, the picture above, we can actually "do better" or in other words, there's a better NDTM that DECIDES the language L, but, FOR SOME REASON, he didn't include it so idek what it is.

## Nondeterministic Functions Computation

M **computes** a functions $f$ iff, $\forall w \in \Sigma^{*}$:
- **All** of M's computations **halt**, and
- **All** off M's computations result in **f(w)**

## Equivalence of Deterministic and Nondeterministic Turing Machines

**Theorem**: If a nondeterministic TM M **decides** or **semidecides**  a language, or computes a function, then there is a standard (deterministic) TM M' **deciding** or **semideciding** the SAME language or computing the SAME function.

**Proof**: (By construction) $\rightarrow$ We must do separate constructions for deciding/semideciding and for function computation.

I mean I guess bro. Whatever you say.

## For Deciding/Semideciding

Basically, we have a NDTM M and we want to see if it decides a language or if it semidecides it.

1. First, we have to actually build M', which tries the possible computations of M. If ONE of them **accepts**, the M' **accepts**.
2. So, essentially, if you try path 1 and it accpets, then accept and exit.