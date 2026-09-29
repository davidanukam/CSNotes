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
		std::cout <, "Generating Report: " << content << std::endl;
	}
	
	// Persistence: save the report to a file
	void saveToFile(const std::string &filename) {
		std::ofstream file(filename);
		file << content;
		file.close();
	}
	
	// Communication: send report via email
	void sendEmail(const std::string &address) {
		std::cout << "Sending report to " << address << std::endl;
		// Pretend SMTP logic is here...
	}
	
	int main() {
		Report report("Quarterly Sales");
		report.generate();
		report.saveToFile("Sales.txt");
		report.sendEmail("ceo@company.com");
	}
}
```

Why does this **break** SRP?

Well we can see the multiple responsibilities being handled in one class:
- Report content generation (business logic)
- File persistence (I/O)
- Email communication (messaging)

If the file format changes, then the `Report` class must also change.
If the email system changes, then the `Report` class must also change.
If the business rules change, then the `Report` class must also change.

SRP