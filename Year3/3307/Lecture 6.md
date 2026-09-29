## Lecture 6

We're going to be learning about the **SOLID** Principles:
- (S)RP
- (O)CP
- (L)SP
- (I)SP
- (D)IP

## Single Responsibility Principle (SRP)

*A class hsould have only one reason to change*

This principle basically says that any module should encapsulate **one** axis of change or responsibilty:
- Responsibility here means a **stakeholder** or **concern** (business logic, persistence, presentation, etc.).
This is important because if a class has multiple reasons to change, it the **couples** unrelated concerns and becomes too fragile.

SRP Violation Example:

```cpp
#include <iostream>
#include <fstream>
#include <string>

class Report {
	std::string content;
public:
	Report(const std::string &text) : content(text) {}
	
	// Business logic: generate a report
	void generate() {
		
	}
}
```