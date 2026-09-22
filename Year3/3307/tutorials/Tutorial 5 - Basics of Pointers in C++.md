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
	
	cout << "&a: " << &a << endl;
	cout << "p: " << p << endl;
	cout << "*p: " << *p << endl;
	
	return 0;
}
```

```bash
&a: 149
p: 149
*p: 5
```

![[Pasted image 20260922095039.png|200]]

- Since we are storing the location of the variable in memory, the pointer takes the type of the value that is at that location in memory (This allows for both accessing the value and modifying the value).
- THIS MEANS THAT **POINTERS** ARE **STRONGLY TYPED**!

# Pointer Dereferencing Example

```cpp
#include <iostream>
using namespace std;

int main() {
	int a = 5; // Declare and initialize an integer
	int *p = &a; // Declare a pointer and store the address of 'a'
	
	cout << "Value of a: " << a << endl; // Output the value of 'a'
	cout << "Value using *p: " << *p << endl; // Dereference 'p' to get the value of 'a'
	
	*p = 10; // Change the value of 'a' using the pointer
	cout << "New value of a: " << a << endl; // Output the new value of 'a'
	
	return 0;
}
```

```bash
Value of a: 5
Value using *p: 5
New value of a: 10
```

> Basically works the same for other data types (double, char etc.)

Here's an example of pointers, memory and the strongly typed property.

```cpp
int main() {
	int a = 1025;
	int *p = &a;
	
	cout << "Size of integer is " << sizeof(int) << " bytes" <, endl;
	cout << "Address = " << p << " value = " << *p << endl;
	cout << "Address = " << p + 1 << " value = " << *(p + 1) << endl;
	
	char *p0;
	p0 = (char*)p; // Typecasting from int* to char*
	
	cout <, "Size of char is " << sizeof(char) << " bytes" << endl;
	cout << "Address = " << (void*)p0 << " value = " << (int)*p0 << endl;
	
	return 0;
}
```