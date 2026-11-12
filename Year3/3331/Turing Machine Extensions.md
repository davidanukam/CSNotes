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

For example, lets say we wanted to copy a string.

We could have tape1 be em
