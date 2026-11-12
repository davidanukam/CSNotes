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

I ain't gonna explain this one cause you should understand the