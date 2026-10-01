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

Basically, 

$\cap$
$\wedge$
$\vee$

CNF: $(A + B) * (C + D) * (E + F)$

DNF: $(A * B) + (C * D) + (E * F)$



