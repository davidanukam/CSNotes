## Cache Design Questions
1. How best to organize the memory block (a.k.a lines) inside the cache?
2. To which block (line) of the cache does a given (main) memory address map?
	- Note: Since the cache is a subset of the main memory, multiple memory addresses can map to the same cache location
3. How do we know if a block of the main memory currently has a copy in cache?
4. How do we quickly find a particular copy of main memory (memory address contents) in the cache?

## General Organization of a Cache Memory

![[Pasted image 20260918095333.png]]
