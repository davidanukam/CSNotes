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

Basically, everything is a switch.

- "Input" $\Rightarrow A$
- "Output" $\Rightarrow Z$

I don't really need to explain this but I got some time right now so...

If A is 0 (false) then the switch is **open** and Z is **off**.
If A is 1 (true) then the switch is **closed** and Z is **on**.

So, since the state of A is equal to the state of Z, we can summarize and say that this circuit implements:


$\cap$
$\wedge$
$\vee$

CNF: $(A + B) * (C + D) * (E + F)$

DNF: $(A * B) + (C * D) + (E * F)$



