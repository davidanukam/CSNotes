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

- So, for an online store, objects could be Customer, Product, Order, ShoppingCart, etc.

**Define attributes and methods:**

For each object:

- Determine what information it needs to store (attributes/variables) (For example, a Product has a `name, price, stockQuantity`
- What actions it needs to perform (methods) (For example, methods can be something like `getPrice(), updateStock()`

**Determine relationships:**

Figure out how the objects connect and interact with each other.

**Relationship types:**

1. **Association:** Objects know about each other (e.g., a `Customer` HAS an `Order`)
2. **Aggregation:** A “has-a” relationship where one object contains others (e.g., an `Order` CONTAINS multiple `Product` objects)
3. **Inheritance:** An “is-a” relationship (e.g., an `Admin` IS a `User`)

Example of OOP:

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
}
```

the reason why this is OOP is because you don’t change the balance directly, you tell the objects to do it for you via its methods

## FUNCTIONAL PROGRAMMING:

**Functional programming** is a programming style that basically focuses on PURE functions (functions that ALWAYS give the same output for the same input and don’t change anything else) and **immutability** (data is not changed after its created)

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