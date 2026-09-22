# Memory (RAM)

We know that:
- int (4 bytes = 32 bits)
- char (1 bytes = 8 bits)
- float (4 bytes = 32 bits)

Imagine we store an integer b that holds the value 8

![[Pasted image 20260922094503.png|300]]

So we want to know the memory address of these variables and operate upon these memory addresses

# Pointers
- A **pointer** is a variable that stores the memory address of another variable
- So basically we store the location in memory where the value is stored.

```cpp
int main() {
	int a;
	int *p;
	
	p = &a;
	a = 5;
	
	cout << "&a" << 
}
```