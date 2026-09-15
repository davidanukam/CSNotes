## OBJECTS, CLASSES, ATTRIBUTES, AND METHODS:

**Objects** are like things in the real world (e.g., a car, person, etc…). They consist of two main parts:

- **attributes:** what it **knows** (data, so for example, a car’s color and speed)
- **behaviors:** what it **does** (actions, for example, a car can accelerate and brake)

A **class** is a blueprint or template for creating objects. It can define what something _is_ and what it _can_ do, but it isn’t the thing itself

- So, if we have a class Car, objects of this class would be specific cars (like Ford, Toyota, whatever)

**Attributes:** Variables that live inside a class and hold an object’s data.

- In a `Car` class, attributes could be `string color, int speed, string model` and so on.

**Methods:** Functions that live inside a class and define what an object can do

- Once again, in this damn Car class, methods could be something like `brake(), accelerate()` yada yada yada

**Access Specifiers**: Rules that control who can see and use the attributes (variables) and methods of a class.

There are 3 different types:

- **Private:** Can only be used from INSIDE the class itself
- **Public:** Can be used from anywhere
- **Protected:** Basically like private, but child classes (from inheritance) can also use them

A **constructor** is a special method that initializes objects of a class. This is automatically called when an object is created.

A **destructor** is a special method that is automatically called when an object is destroyed. It is used to clean up resources after the object has been deleted.

**Inheritance** allows one class (child class) to derive properties and behaviors from another class (parent class)

**Polymorphism** allows objects of different classes to be treated as objects of a common parent class.

- So, to give a bit long but good example (ty reddit). Imagine you have a program with all kinds of animals: Cats, Dogs, Lion, etc. Naturally, you are going to have a different class for each type of animal. Each class represents specific attributes and behavior for that type (e.g., Dog barking and Lion roaring).
    
    Now, imagine you want to make an array/list of animal of different kinds such as [lion1, cat1, dog1, etc.], but we know in order to create a list/array, all elements must be of the same type! This problem can be solved with polymorphism!
    
    First, let me just talk a bit more about inheritance. You can say all types of animal share some common trait, and you can put those traits in a super class called `Animal`, like all animals `breathe()` for example. You can tell that a Dog is an Animal, a Cat is an Animal, and so on. All these types of animals inherit the characteristics of an Animal
    
    You can NOW mix different types of animals because they are all inheriting from Animal. So, now we can create an Animal array/list and put different types of animals in there—like lions, dogs, cats, etc.. This is polymorphism
    

**Abstract class** is a class that cannot be instantiated (cannot create object from it directly). It is meant to be a base class for other classes.

- It contains at least one **pure virtual function** (a virtual function is expected to be overridden). Child classes **must** provide an implementation for this function
    - With a virtual function, if you tell an `Animal` to `makeSound()`, it will check what SPECIFIC type of animal it actually is and make the appropriate sound

```cpp
#include <iostream>
using namespace std;

class Animal { // Abstract class
public:
	virtual void speak() = 0; // MUST be overridden
	
	void sleep() {
		cout << "Sleeping..." << endl;
	}
protected:
	int age; // data member allowed
};
```

An **Interface** is a class that **ONLY** has **pure virtual functions** (and a **virtual destructor**). It defines what a class MUST do, but not how.

```cpp
class IShape {
public:
	virtual void draw() = 0;
	virtual double area() = 0;
	
	virtual ~IShape() {} // destructor
};
```

A long example:

```cpp
#include <iostream>
#include <string>
using namespace std;

class Car {
public:
	//Constructor: Initializes an object w model and year
	Car(string carModel, int carYear) {
		model = carModel;
		year = carYear;
	}
	
	void displayInfo() {
		cout << "Model: " << model << "Year: " << year << endl;
	}
private:
	string model;
	int year;
};

int main() {
	Car myCar("Toyota", 2022); // create an object of the class Car w specific values
	myCar.displayInfo();
	return 0;
}
```

## **OBJECT ORIENTED DESIGN AND ANALYSIS:**

The process of designing a software system by identifying objects and how they interact

- **Goal:** To create a system that is modular (broken into parts), flexible (easy to change), and easy to maintain

**Designing classes and objects:**

- First thing you do in OO design is to see what the main objects and key classes that are in the problem you are trying to solve. So, before you code, you need to think about what “things” (objects) your problem will need

How do we identify these objects?

Look at how the problem domain (e.g., online shopping) and find the key nouns. These are your potential objects

- So, for an online store, objects could be `Customer`, `Product`, `Order`, `ShoppingCart`, etc.

**Define attributes and methods:**

For each object:

- Determine what information it needs to store (attributes/variables) (For example, a Product has a `name, price, stockQuantity`
- What actions it needs to perform (methods) (For example, methods can be something like `getPrice(), updateStock()`

**Determine relationships:**

Figure out how the objects connect and interact with each other.

**Relationship types:**

1. **Association:** Objects know about each other (e.g., a `Student` AND an `Course`)
	- A student registers for a course and a course teaches students, but neither owns or depends on the other's existence.
2. **Aggregation:** A **weak** “has-a” relationship where one object contains others (e.g., an `Department` HAS multiple `Professors` objects or a `Car` HAS multiple `Wheel` objects)
	- If the department were to close down, the professors still continue to exist.
3. **Composition:** A **strong** "has-a" relationship where the parts cannot exist independently of the whole. (e.g., A `House` has a bunch of `Room` objects)
	- If that house object gets destroyed, then all of the rooms within it also get destroyed)
4. **Inheritance:** An “is-a” relationship (e.g., an `Admin` IS a `User`)

Lets see some **Relationship** examples:

We'll use a `Car` class and a `Wheel` class!

```cpp
#include <iostream>
#include <string>

using namespace std;

class Wheel {
private:
	string loc;
	string side;

public:
	Wheel(string loc, string side) : loc(loc), side(side) {}
	
	void showInfo() {
		cout << loc << "-" << side << endl;
	}
};
```

**Aggregation** Code Example:

```cpp
class Car {
private:
	// each wheel is a reference to separately created wheel object
	Wheel &flw; // front left wheel
	Wheel &frw; // front right wheel
	Wheel &blw; // back left wheel
	Wheel &brw; // back right wheel

public:
	Car(Wheel &w1, Wheel &w2, Wheel &w3, Wheel &w4) : flw(w1), frw(w2), blw(w3), brw(w4) {}
	
	void showWheelInfo() {
        cout << "Wheel 1: ";
        flw.showInfo();

        cout << "Wheel 2: ";
        frw.showInfo();

        cout << "Wheel 3: ";
        blw.showInfo();

        cout << "Wheel 4: ";
        brw.showInfo();
    }
};

int main() {
	Wheel w1("front", "left");
	Wheel w2("front", "right");
	Wheel w3("back", "left");
	Wheel w4("back", "right");

	Car c(w1, w2, w3, w4);
	c.showWheelInfo();
	return 0;
}
```

**Composition** Code Example:

```cpp
class Car {
private:
	// each wheel belongs to the car object that is created
	Wheel flw = Wheel("front", "left");
	Wheel frw = Wheel("front", "right");
	Wheel blw = Wheel("back", "left");
	Wheel brw = Wheel("back", "right");

public:
	Car() {}
	
	void showWheelInfo() {
        cout << "Wheel 1: ";
        flw.showInfo();

        cout << "Wheel 2: ";
        frw.showInfo();

        cout << "Wheel 3: ";
        blw.showInfo();

        cout << "Wheel 4: ";
        brw.showInfo();
    }
}

int main {
	Car c;
	c.showWheelInfo();
	return 0;
}
```

**Inheritance** Code Example:

```cpp
#include <iostream>
#include <string>

using namespace std;

class Car {
private:
    string type = "N/A";

public:
	Car() {
        cout << "I am a Car!" << endl;
    }

    void showName() {
        cout << "> Type: " << type << endl;
    }
};

class Ford : public Car {
private:
    string type = "Ford";

public:
	Ford() {
        cout << "> I am a Ford!" << endl;
    }

    void showName() {
        cout << "> Type: " << type << endl;
    }
};

int main() {
    Car c;
    c.showName();

    cout << endl;

    Ford f;
    f.showName();
    return 0;
}
```

### Example of OOP:

```cpp
#include <iostream>
using namespace std;

// OO example: Modeling a Bank Account
class Account {
private:
	double balance; // state (attribute)
	
public:
	// Constructor
	Account(double initialBalance){
		balance = initialBalance;
	}
	
	void deposit(double amount) {
		balance += amount;
	}
	
	void withdraw(double amount) {
		if (balance >= amount) {
			balance -= amount; // modifies state
		}
	}
	
	double getBalacnce const {
		return balance;
	}
};

int main() {
	Account myAccount(100.0);
	myAccount.deposit(50);
	myAccount.withdraw(30); 
	
	cout << "Final balance: $" << myAccount.getBalance() << endl;
	return 0;
}
```

the reason why this is OOP is because you don’t change the balance directly, you tell the objects to do it for you via its methods

## FUNCTIONAL PROGRAMMING:

**Functional programming** is a programming style that basically focuses on **PURE functions** (functions that ALWAYS give the same output for the same input and don’t change anything else) and **immutability** (data is not changed after its created)

### Example of Functional Programming:

```cpp
#include <iostream>
using namespace std;

// functional programming: using functions to handle transactions
double deposit(double balance, double amount) {
	return balance + amount; // returns new balance without modifying input state
}

double withdraw(double balance, double amount) {
	if (balance >= amount) {
		return balance - amount; // return new balance
	} else {
		cout << "Insufficient funds!" << endl;
		return balance;
	}
}

int main() {
	double balance = 100.0;
	balance = deposit(balance, 50); 
	cout << "Balance after deposit: $:" << balance << endl;
	
	balance = withdraw(balance, 30);
	cout << "Balance after withdrawal: $" << balance << endl;
	return 0;
}
```

## STATE AND MUTABILITY: OOP

In OOP, objects maintain their internal state but can be modified by their methods.

They can also interact with other objects and modify the states of them.

This means that the state of the program evolves over time.

(Check the [Example of OOP](#Example%20of%20OOP))
## STATE AND MUTABILITY: FUNCTIONAL PROGRAMMING

In Functional Programming, there is an emphasis on **immutability** meaning that data should not be changed once it is already created.

This means that you would create new data structures based on transformations.

So in the banking example (Check the [Example of Functional Programming](#Example%20of%20Functional%20Programming)) you always return a new account balance after each transaction rather than modifying the existing one.

## MODULARITY AND REUSE: OOP

**Reuse** is basically just having reusable classes.

**Modularity** is basically just inheritance and polymorphism (this means that new functionality is created by extending existing classes)

## MODULARITY AND REUSE: FUNCTIONAL PROGRAMMING

**Reuse** is basically just writing new pure reusable functions.

As for **Modularity**, functions can be combined, passed as arguments, or returned as values (higher-order functions).

```cpp
#include <iostream>
using namespace std;

// A function that adds two numbers
int add(int a, int b) {
	return a + b;
}

// A function that takes two numbers and another function as input
int applyFunction(int x, int y, int (*func)(int, int)) {
	return func(x, y); // Call the passed function with x and y
}

int main() {
	int result = applyFunction(5, 3, add); // Pass the 'add' function as an argument
	cout << "Result: " << result << endl; // Output: Result: 8
	return 0;
}
```

## CONCURRENCY: OOP

In OOP, concurrency can be complex because of the shared mutable states of an object

This raises issues like **race conditions**, **deadlocks**, and makes it hard to debug.

To manage concurrent access, you can use mechanisms like **locks** or **synchronization**.

## CONCURRENCY: FUNCTIONAL PROGRAMMING

In Functional Programming, concurrency is easier to manage due to the immutable data and how multiple functions can operate on it without interference.

## ABSTRACTION AND ENCAPSULATION: OOP

We will talk more about **Encapsulation** in [Lecture 2](Lecture%202.md)!!! YAY SO FUN!!! 😑

**Encapsulation**: Focuses on **HOW** an object protects and groups its data while hiding their internal state (Using access modifiers like `private` `protected` and `public`)

**Abstraction**: Focuses on **WHAT** an object does by exposing their behavior through pubic methods

Lets use some examples:

- **Encapsulation**: The components of a cars engine are safely sealed under the hood (enCAPsulated). The internal wires and pistons cannot be touched or rewired directly from the driver's seat. This means that you must interact with them safely via designated controls.
- **Abstraction**: When you press the gas pedal to move forward in a car, you do not need to know *HOW* the fuel injectors, spark plugs, or transmission gears operate. All you need to know is that pressing this pedal makes you go vroom vroom.

## ABSTRACTION AND ENCAPSULATION: FUNCTIONAL PROGRAMMING

**Encapsulation**: Is not relied on at all! (Because there are no objects that have any data to hide 🤷)

**Abstraction**: Focuses on **WHAT** a function does rather than **HOW** it does that. This can be done through the use of:
- high-order functions
- function composition
- pure functions
... all of which we will get to sometime soon 😭

```cpp
#include <iostream>
using namespace std;

// A function to double a number
int doubleNumber(int x) {
	return x * 2;
}

// A function to square a number
int squareNumber(int x) {
	return x * x;
}

int main() {
	int x = 5;
	
	// Compose functions: first double the number, then square it
	int result = squareNumber(doubleNumber(x)); // First 5 * 2 = 10, then 10 * 10 = 100
	cout << "Result: " << result << endl; // Output: Result: 100
	return 0;
}
```

## FLEXIBILITY AND EXTENSIBILITY: OOP

**Flexibility**: OOP uses tightly coupled systems so it is harder to change certain aspects without affecting others. However, they can still be flexible with the use of object hierarchies and class extensions (this can get more complex as the class hierarchy grows).

**Extensibility**: However, because of inheritance and polymorphism, it is much easier to extend and modify objects and their behaviors.

Example:

```cpp
#include <iostream>

using namespace std;

class Shape {
	virtual void draw() = 0; // Abstract method
};

class Circle : public Shape {
	void draw() override {
		cout << "Drawing Circle" << endl;
	}
};

class Sqaure : public Shape {
	void draw() override {
		cout << "Drawing Square" << endl;
	}
};
```

## FLEXIBILITY AND EXTENSIBILITY: FUNCTIONAL PROGRAMMING

**Flexibility**: This is obvious as each individual function can be modified and treated as first-class citizens. Meaning you can:
- pass them as arguments to other functions
- return them from functions
- assign them to variables
- store them in data structures (like arrays, lists, etc.)

**Extensibility**: This is where **composability** comes in. We can combine small functions to build more complex behaviors (e.g.,
`int result = squareNumber(doubleNumber(x))`)

Example:

```cpp
#include <iostream>

using namespace std;

void drawShape(void (*drawFunc)()) {
    drawFunc(); // Call the passed function to draw
}

int main() {
    drawShape([]() { cout << "Drawing Circle" << endl; });
    drawShape([]() { cout << "Drawing Square" << endl; });

    return 0;
}
```

## TYPICAL USE CASES

### OOP
Use OOP when you can map things to real-world entities
- User interfaces, games, and business systems (e.g., payroll, inventory management)
And also when it is critical to manage state and model entities with attributes and behaviors inside of systems 

### FUNCTIONAL PROGRAMMING
Use Functional Programming when you want to transform data, perform scientific computing, and process things concurrently
- Web apps, reactive systems, and where immutability is crucial

## OBJECT-ORIENTED APPROACH VS FUNCTIONAL PROGRAMMING

| Fe