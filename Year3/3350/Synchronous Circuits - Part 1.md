# Synchronous Circuits

## Part 1: Gates, Switches, and Boolean Algebra

## Layers of Abstraction

![TheLayersOfAbstraction](assets/TheLayersOfAbstraction.png)

We are now going to be looking at the **lowest level** of the hierarchy (BUT NOT TRANSISTORS).

**Digital (Logic) Design**: Using circuits to implement some logic

**Circuit Design**: The Design of individual circuits

## Circuit Design

### Why do we care? (good question)
- Appreciate the limitations of hardware.
- Understand why some things are fast and some things are slow.
- Need circuit design to understand logic design.
- Need logic design to understand CPU Datapath

## Digital Circuits

NOT DIGITAL (LOGIC) DESIGN!!!

This just talks about how everything to do with circuits is **digital** in the sense that they are represented by discrete, individual values (so no gray areas or ambiguity).

However, this means that we must convert an **analog**: take a continuous variable (in our case electricity) and change that signal to digital

In other words we take the analog signal, electricity (voltage) and covert it into binary (0's and 1's)
- "High" voltage $\Rightarrow 1$
- "Low" voltage $\Rightarrow 0$

## Physicality of Circuits

In terms of **Circuits**, everything is a **switch**.

![CircuitsAreSwitches](assets/CircuitsAreSwitches.png)

- "Input" $\Rightarrow A$
- "Output" $\Rightarrow Z$

I don't really need to explain this but I got some time right now so...

If A is 0 (false) then the switch is **open** and Z is **off**.
If A is 1 (true) then the switch is **closed** and Z is **on**.

So, since the state of A is equal to the state of Z, we can summarize and say that this circuit implements:

$$
A \equiv Z
$$

## Transistors: Electrically Controlled Switches

Like I said, we don't care about transistors so nothing more needs to be said here. Maybe learn it for midterm or exam (idk)

![TransistorsChannelSlide](assets/TransistorsChannelSlide.png)

## Logic as Circuits

**Propositional Logic**: A set of propositions (mathematical sentences that are either **true** or **false**) combined by some **Logical Connectives**.
- Each proposition is represented by a binary digital signal (0 or 1 as false and true respectively).
- **Local Connectives** are presented by **Logic Gates**.

**Logic Gate**: A circuit mapping **a number of propositions** to one (sometimes more) proposition(s).

The Basics: AND ($\wedge$), OR ($\vee$), NOT($\neg$):

![BasicLogicGateSymbols](assets/BasicLogicGateSymbols.png)

**Arity**: The number of input signals a gate/function has (AND = 2, OR = 2, NOT = 1)

## Gates as Switches

When it comes to implementing **Logic Gates** as **Switches**, we can just think of the switches as **Boolean Integers**:

![LogicGatesAsSwitches](assets/LogicGatesAsSwitches.png)

## Logic Gates in Detail

### AND

![AndLogicGate](assets/AndLogicGate.png)

- $A \wedge B \equiv C$
- $A \cdot B \equiv C$

Truth Table for **AND**

| A   | B   | $A \wedge B \equiv C$ |
| --- | --- | --------------------- |
| 0   | 0   | 0                     |
| 0   | 1   | 0                     |
| 1   | 0   | 0                     |
| 1   | 1   | 1                     |

### OR

![OrLogicGate](assets/OrLogicGate.png)

- $A \vee B \equiv C$
- $A + B \equiv C$

Truth Table for **OR**

| A   | B   | $A \vee B \equiv C$ |
| --- | --- | ------------------- |
| 0   | 0   | 0                   |
| 0   | 1   | 1                   |
| 1   | 0   | 1                   |
| 1   | 1   | 1                   |
### NOT

![NotLogicGate](assets/NotLogicGate.png)

- $\neg A \equiv C$
- $\bar{A} \equiv C$

Truth Table for **NOT**

| A   | $\neg A \equiv C$ |
| --- | ----------------- |
| 0   | 1                 |
| 1   | 0                 |

### NAND

![NandLogicGate](assets/NandLogicGate.png)

- $\neg (A \wedge B) \equiv C$
- $\overline{A \cdot B} \equiv C$
- $A \ | \ B$ 

> "|" = Sheffer Stroke

Truth Table for **NAND**

| A   | B   | $\overline{A \cdot B} \equiv C$ |
| --- | --- | ------------------------------- |
| 0   | 0   | 1                               |
| 0   | 1   | 1                               |
| 1   | 0   | 1                               |
| 1   | 1   | 0                               |

### NOR

![NorLogicGate](assets/NorLogicGate.png)

- $\neg (A \vee B) \equiv C$
- $\overline{A + B} \equiv C$
- $A \downarrow B$

> "$\downarrow$" = Pierce Arrow

Truth Table for **NOR**

| A   | B   | $\overline{A + B} \equiv C$ |
| --- | --- | --------------------------- |
| 0   | 0   | 1                           |
| 0   | 1   | 0                           |
| 1   | 0   | 0                           |
| 1   | 1   | 0                           |

### XOR

![XorLogicGate](assets/XorLogicGate.png)

- $A \oplus B \equiv C$

Truth Table for **XOR**

| A   | B   | $A \oplus B \equiv C$ |
| --- | --- | --------------------- |
| 0   | 0   | 0                     |
| 0   | 1   | 1                     |
| 1   | 0   | 1                     |
| 1   | 1   | 0                     |

## The Algebra of Logic Gates

Due to the equivalence of Truth Tables and Binary Digital Signals, Boolean Algebra is heavily used when discussing Circuitry.

Associativity:
- l
- l

Identity:
- l
- l

Commutativity:
- l
- l

Annihilation:
- l
- l

Distributivity:
- l
- l

Idempotence:
- l
- l

Absorption:
- l
- l

Double Negation:
- l
- l

De Morgan's Laws:
- l
- l

Complementation:
- l
- l

## Proving De Morgan's Laws

We have seen this a billion times but whatever, here we go again!

Proof By Exhaustion: The easiest way to prove something is to write out each expression's truth table.

$$
\overline{A + B} \equiv \overline{A} \cdot \overline{B}
$$

| A   | B   | $A + B$ | $\overline{A + B}$ | $\overline{A}$ | $\overline{B}$ | $\overline{A} \cdot \overline{B}$ |
| --- | --- | ------- | ------------------ | -------------- | -------------- | --------------------------------- |
| 0   | 0   | 0       | **1**              | 1              | 1              | **1**                             |
| 0   | 1   | 1       | **0**              | 1              | 0              | **0**                             |
| 1   | 0   | 1       | **0**              | 0              | 1              | **0**                             |
| 1   | 1   | 1       | **0**              | 0              | 0              | **0**                             |

## Simplifying Expressions with Boolean Algebra

$$
\overline{xy} \ \overline{z} + \overline{xy} \ \overline{z}
$$

$$
\begin{aligned}
\overline{xy} \ \overline{z} + \overline{xy} \ \overline{z} &\equiv \overline{xy}(\overline{z} + z) \qquad \text{Factor} \ \overline{xy} \\
&\equiv \overline{xy}(1) \qquad \text{Complementation of} \ z \\
&\equiv \overline{xy} \qquad \text{Identity with} \ \overline{xy} \\
\end{aligned}
$$

| $x$ | $y$ | $z$ | $xy$ | $\overline{xy}$ | $\overline{xy} \ \overline{z}$ | $\overline{xy} \ z$ | $\overline{xy} \ \overline{z} + \overline{xy} \ z$ |
| --- | --- | --- | ---- | --------------- | ------------------------------ | ------------------- | -------------------------------------------------- |
| 0   | 0   | 0   | 0    | **1**           | 1                              | 0                   | **1**                                              |
| 0   | 0   | 1   | 0    | **1**           | 0                              | 1                   | **1**                                              |
| 0   | 1   | 0   | 0    | **1**           | 1                              | 0                   | **1**                                              |
| 0   | 1   | 1   | 0    | **1**           | 0                              | 1                   | **1**                                              |
| 1   | 0   | 0   | 0    | **1**           | 1                              | 0                   | **1**                                              |
| 1   | 0   | 1   | 0    | **1**           | 0                              | 1                   | **1**                                              |
| 1   | 1   | 0   | 1    | **0**           | 0                              | 0                   | **0**                                              |
| 1   | 1   | 1   | 1    | **0**           | 0                              | 0                   | **0**                                              |

Sometimes a **Truth Table** is too challenging...
- For $v$ variables a truth table has $2^{v}$ rows

$$
\overline{(\overline{x} + \overline{z})}(abcd + xz) \Longrightarrow \ \text{6 variables, 64 rows}
$$

Instead, we can simplify using the laws of **Boolean Algebra**:

$$
\begin{aligned}
\overline{(\overline{x} + \overline{z})}(abcd + xz) &\equiv \overline{\overline{xz}}(abcd + xz) \qquad \ \text{De Morgan's Law} \\
&\equiv xz(abcd + xz) \qquad \ \text{Double negation of} \ x \ \text{and} \ z \\
&\equiv xz \qquad \ \text{Absorption}
\end{aligned}
$$

## Simplifying Expressions for Simplified Circuits

We can do the same with Circuits:

![SimplifyingCircuitsExample](assets/SimplifyingCircuitsExample.png)

## Canonical Forms

From 2209 we know that there are 2 canonical forms:
- **Disjunctive Normal Form** (DNF) $\Rightarrow$ **OR**s of **AND**s
	- "Product of Sums"
- **Conjunctive Normal Form** (CNF) $\Rightarrow$ **AND**s of **OR**s
	- "Sum of Products"

**DNF** Example: $(A * B) + (C * D) + (E * F)$

**CNF** Example: $(A + B) * (C + D) * (E + F)$

**EVERY** Boolean Expression can be converted to a Canonical Form! (**DNF** is more useful, practical and easier to create... because of **Truth Tables**!)

Example:

1. $a$, $b$, $c$ are inputs, $f$ is output.
2. Create one product term for every entry in the table with $f \equiv 1$
3. Put $\overline{x}$ in product if $x$ is **False** in that row
4. Put $x$ in product if $x$ is **True** in that row
5. OR all products together (connect them with a $\vee$ or $+$)

| a   | b   | c   | f   |
| --- | --- | --- | --- |
| 0   | 0   | 0   | 1   |
| 0   | 0   | 1   | 0   |
| 0   | 1   | 0   | 1   |
| 0   | 1   | 1   | 0   |
| 1   | 0   | 0   | 1   |
| 1   | 0   | 1   | 0   |
| 1   | 1   | 0   | 0   |
| 1   | 1   | 1   | 1   |

$\therefore \ \overline{a}\overline{b}\overline{c} + \overline{a}b\overline{c} + a\overline{b}\overline{c} + abc$

## Functional Completeness

A Formula whose outcomes and operations can be adequately described by a set of functions (operators) is called Functionally complete.
- For Boolean Algebra, the classical set of operators: $\lbrace{+, \cdot, \neg\rbrace}$
- is functionally complete but NOT **minimal**
- Minimal: Removing any one of the operators would make the set functionally *incomplete*!
- However, thanks to the goat De Morgan, we only need one of **AND** or **OR**.
- The sets $\lbrace{+, \neg\rbrace}$ (NOR) and $\lbrace{\cdot, \neg\rbrace}$ (NAND) are both Functionally Complete AND Minimal.

## NAND & NOR (Functional Completeness)

- **NAND** = $|$
- **NOR** = $\downarrow$

> To Prove Functional Completeness, we need to show that the operators of the set can mimic the functionality of the set $\lbrace{+, \cdot, \neg\rbrace}$.

$\negX \equiv C$
## Summary

Boolean Algebra can simplify circuits.
- Remove variables that the output does not depend on.
- Simplifies expression, removing needless gates.
- Space and time complexity improved!

Truth Tables, Canonical Forms, and Functional Completeness are all related in one happy family. Yay!