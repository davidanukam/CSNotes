## Cache Design Questions
1. How best to organize the memory block (a.k.a lines) inside the cache?
2. To which block (line) of the cache does a given (main) memory address map?
	- Note: Since the cache is a subset of the main memory, multiple memory addresses can map to the same cache location
3. How do we know if a block of the main memory currently has a copy in cache?
4. How do we quickly find a particular copy of main memory (memory address contents) in the cache?

## General Organization of a Cache Memory

![[Pasted image 20260918095333.png]]

- How do we get the exact location of the block (line) we need?
	- First, use the set number (calculated from the address of the first byte)
	- Then, we can use the **tag** to find the exact location in the given set and the given line.

![[Pasted image 20260918095755.png]]

## Memory-Cache Mapping (Addressing Cache Memories)

![[Pasted image 20260918100153.png]]

Block Offset:

| x   | y         |
| --- | --------- |
| 0   | 000...000 |
| 1   | 000...001 |
| 2   | 000...010 |
| ... | ...       |
| B-1 | ...       |
Word Address: Viewing the main memory as a su of bytes