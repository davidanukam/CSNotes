## Cache Design Questions

We are going to answer these in this course

1. How best to organize the memory block (a.k.a lines) inside the cache?
2. To which block (line) of the cache does a given (main) memory address map?
	- Note: Since the cache is a subset of the main memory, multiple memory addresses can map to the same cache location
3. How do we know if a block of the main memory currently has a copy in cache?
4. How do we quickly find a particular copy of main memory (memory address contents) in the cache?

## General Organization of a Cache Memory

![[Pasted image 20260918095333.png]]

- How do we get the exact location of the block (line) we need?
	- First, use the **set** index (calculated from the address of the first byte)
	- Then, we can use the **tag** to find the exact location in the given set and the given line.

![[Pasted image 20260918095755.png]]

## Memory-Cache Mapping (Addressing Cache Memories)

![[Pasted image 20260918105341.png]]

The data word at the *m*-bit address A is in cache if the tag bits in one of the $<\text{valid}>$ lines in set $<\text{set index}>$ match $<\text{tag}>$

The word contents begin at offset $<\text{block offset}>$ bytes from the beginning of the block

**Address Mapping**:

block address = $<\text{tag}> || <\text{set index}>$
set # = 

**Block Offset**:

| x   | y         |
| --- | --------- |
| 0   | 000...000 |
| 1   | 000...001 |
| 2   | 000...010 |
| ... | ...       |
| B-1 | ...       |
**Word Address**: Viewing the main memory as a su of bytes

**Byte Address**:

![[Pasted image 20260918100656.png]]
## Types of Cache Organization

**Direct-Mapped**:

N = 1
- One line per set
- Each memory address is mapped to exactly one line in the cache
- $b = log_2(B), N = C/B, s = 0, t = m - b$

**Fully Associative**:

- R = 1 (allow a memory address to be mapped to any cache block)
- Tag is whole address except block offset
- $b = log_2(B), N = C/B, s = 0, t = m - b$

**N-way set associative (We use this most of the time**):

- N is typically 2, 4, 8, or 16 (sometimes 32)
- A memory block maps to a specific set but can be placed in any way of that set (so there are N choices of mapping).
- $b = log_2(B), R = C/(B \times N), s = log_2(R), t = m - s- b$

## Why Middle Bits For Set Index?

![[Pasted image 20260918101658.png]]

**High-Order Bit Indexing**:

Underlined bits are the set (so which of the 4 sets to go to)
Non-underlined bits are the set (so which line)

**Middle-Order Bit Indexing**:

Underlined bits are the tag (so which line)
Non-underlined bits are the set (so which of the 4 sets to go to)

**SO WE USE MIDDLE-ORDER BIT INDEXING!!!**

Oh! Lets see an example for a **Direct-Mapped Cache**

![[Pasted image 20260918104935.png]]

