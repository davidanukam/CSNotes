## Lecture 6

We're going to be learning about the **SOLID** Principles:
- **S**RP
- **O**CP
- **L**SP
- **I**SP
- **D**IP

## Single Responsibility Principle (SRP)

"*A class should have only one reason to change.*"

This principle basically says that any module should encapsulate **one** axis of change or responsibility:
- Responsibility here means a **stakeholder** or **concern** (business logic, persistence, presentation, etc.).
This is important because if a class has multiple reasons to change, it the **couples** unrelated concerns and becomes too fragile.

### SRP **Violation** Example:

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
		std::cout << "Generating Report: " << content << std::endl;
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
};

int main() {
	Report report("Quarterly Sales");
	report.generate();
	report.saveToFile("Sales.txt");
	report.sendEmail("ceo@company.com");
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

### SRP **Adherence** Example

```cpp
#include <iostream> // for console output
#include <fstream> // for file output
#include <string> // for std::string

// =========================
// (1) Class: Report
// -------------------------
// Responsibility: ONLY holds report content
// and can genreate/return it.
// It does NOT know about saving or emailing.
// =========================
class Report {
	std::string content; // the "business data"
public:
	Report(const std::string &text) : content(text) {}
	
	// Business logic: generate a report
	void generate() {
		std::cout << "Generating Report: " << content << std::endl;
	}
	
	// Expose content safely (read-only)
	std::string getContent() const { return content; }
};

// =========================
// (2) Class: ReportSaver
// -------------------------
// Responsibility: handles persistence.
// It knows how to save a Report to disk,
// but it does NOT generate or email reports.
// =========================
class ReportSaver {
public:
	void saveToFile(const Report &report, const std::string &filename) {
		std::ofstream file(filename); // open file for writing
		file << content.getContent(); // save report content
		file.close();                 // close file
	}
};

// =========================
// (3) Class: ReportSender
// -------------------------
// Responsibility: handles communication.
// It knows how to send a Report somewhere,
// but it does NOT generate or save reports.
// =========================
class ReportSender {
public:
	void sendEmail(const Report &report, const std::string &address) {
		std::cout << "Sending report to " << address << std::endl;
		std::cout << "Content: " << report.getContent() << std::endl;
		// Real SMTP logic would go here...
	}
};

// =========================
// (4) MAIN
// -------------------------
// Demonstrates how these pieces interact.
// Notice: Report is passed to saver/sender.
// Relationships are ASSOCIATIONS, not inheritance.
// =========================
int main() {
	Report report("Quarterly Sales");
	report.generate(); // (1) Business logic only
	
	ReportSaver saver;
	saver.saveToFile(report, "Sales.txt"); // (2) Persistence
	
	ReportSender sender;
	sender.sendEmail(report, "ceo@company.com"); // (3) Communication
}
```

## Open/Closed Principle (OCP)

"*Software entities should be open for extension, but closed for modification.*"

You should be able to add new behavior (extension) without changing existing, stable code (modification). Achieved through abstraction (interfaces, base classes) or composition (strategy, plugins).

### OCP **Violation** Example

```cpp
#include <iostream>
#include <string>
#include <stdexcept>

class Invoice {
    double amount_;
    std::string customerEmail_;
public:
    Invoice(double amount, std::string email)
        : amount_(amount), customerEmail_(std::move(email)) {}

    double amount() const { return amount_; }
    const std::string& email() const { return customerEmail_; }
};

void saveReceiptToDisk(const std::string& text) {
    std::cout << "[SAVE RECEIPT] " << text << "\n";
}

void sendEmail(const std::string& to, const std::string& body) {
    std::cout << "[EMAIL -> " << to << "] " << body << "\n";
}

enum class PaymentMethod {
    CreditCard,
    PayPal
};

class PaymentProcessor {
public:
    void process(const Invoice& inv, PaymentMethod method) {
        std::cout << "[PROCESS] amount $" << inv.amount() << "\n";

        switch (method) {
        case PaymentMethod::CreditCard: {
            const double feeRate = 0.029;
            const double fixedFee = 0.30;
            double total = inv.amount() * (1.0 + feeRate) + fixedFee;

            std::cout << "[CC] Charging via Stripe-like gateway...\n";
            std::cout << "[CC] Amount + fees = $" << total << "\n";

            std::string receipt = "CC receipt for $" + std::to_string(total);
            saveReceiptToDisk(receipt);
            sendEmail(inv.email(), receipt);
            break;
        }
        case PaymentMethod::PayPal: {
            const double feeRate = 0.034;
            const double fixedFee = 0.49;
            double total = inv.amount() * (1.0 + feeRate) + fixedFee;

            std::cout << "[PP] Charging via PayPal-like API...\n";
            std::cout << "[PP] Amount + fees = $" << total << "\n";

            std::string receipt = "PayPal receipt for $" + std::to_string(total);
            saveReceiptToDisk(receipt);
            sendEmail(inv.email(), receipt);
            break;
        }
        default:
            throw std::runtime_error("Unsupported payment method");
        }
    }
};

int main() {
    Invoice a{100.00, "alice@example.com"};
    Invoice b{250.00, "bob@example.com"};

    PaymentProcessor processor;
    processor.process(a, PaymentMethod::CreditCard);
    processor.process(b, PaymentMethod::PayPal);
    return 0;
}
```

### Why does this break OCP?

High-level policy (`PaymentProcessor`) must be modified for every new payment method or rule change.

Logic is branched by Enum (`switch`/`if-else` ladder), ensuring constant churn.

Details leak in (fees, gateways, receipts), tangling responsibilities and coupling code.

Testing becomes significantly harder due to large methods with many execution paths.

### OCP **Adherence** Example

```cpp
#include <iostream>
#include <memory>
#include <string>
#include <vector>

class Invoice {
    double amount_;
    std::string customerEmail_;
public:
    Invoice(double amount, std::string email)
        : amount_(amount), customerEmail_(std::move(email)) {}

    double amount() const { return amount_; }
    const std::string& email() const { return customerEmail_; }
};

inline void saveReceipt(const std::string& text) {
    std::cout << "[SAVE RECEIPT] " << text << "\n";
}

inline void emailReceipt(const std::string& to, const std::string& text) {
    std::cout << "[EMAIL -> " << to << "] " << text << "\n";
}

// =========================
// (1) Abstraction: IPaymentMethod
// -------------------------
// High-level code depends on this interface.
// =========================
struct IPaymentMethod {
    virtual ~IPaymentMethod() = default;
    virtual std::string name() const = 0;
    virtual std::string charge(const Invoice& inv) const = 0;
};

// =========================
// (2) Concrete Strategies
// -------------------------
// Adding a new method = adding a new class.
// No edits to PaymentProcessor required!
// =========================
class CreditCardPayment : public IPaymentMethod {
public:
    std::string name() const override { return "CreditCard"; }
    std::string charge(const Invoice& inv) const override {
        constexpr double feeRate = 0.029;
        constexpr double fixed = 0.30;
        double total = inv.amount() * (1.0 + feeRate) + fixed;
        std::cout << "[CC] Charge via Stripe-like gateway. Total $" << total << "\n";
        return "CC receipt $" + std::to_string(total);
    }
};

class PayPalPayment : public IPaymentMethod {
public:
    std::string name() const override { return "PayPal"; }
    std::string charge(const Invoice& inv) const override {
        constexpr double feeRate = 0.034;
        constexpr double fixed = 0.49;
        double total = inv.amount() * (1.0 + feeRate) + fixed;
        std::cout << "[PP] Charge via PayPal-like API. Total $" << total << "\n";
        return "PayPal receipt $" + std::to_string(total);
    }
};

class ApplePayPayment : public IPaymentMethod {
public:
    std::string name() const override { return "ApplePay"; }
    std::string charge(const Invoice& inv) const override {
        constexpr double feeRate = 0.020;
        constexpr double fixed = 0.10;
        double total = inv.amount() * (1.0 + feeRate) + fixed;
        std::cout << "[APAY] Charge via ApplePay gateway. Total $" << total << "\n";
        return "ApplePay receipt $" + std::to_string(total);
    }
};

// =========================
// (3) High-Level Policy
// -------------------------
// Closed to modification; Open to extension.
// =========================
class PaymentProcessor {
public:
    void process(const Invoice& inv, const IPaymentMethod& method) const {
        std::cout << "[PROCESS] $" << inv.amount() << " via " << method.name() << "\n";
        const std::string receipt = method.charge(inv);
        saveReceipt(receipt);
        emailReceipt(inv.email(), receipt);
    }
};

int main() {
    Invoice a{100.00, "alice@example.com"};
    Invoice b{250.00, "bob@example.com"};
    Invoice c{180.00, "cindy@example.com"};

    PaymentProcessor processor;
    CreditCardPayment cc;
    PayPalPayment pp;
    ApplePayPayment apay; // New method drops in without touching PaymentProcessor

    processor.process(a, cc);
    processor.process(b, pp);
    processor.process(c, apay);
}
```

## Liskov Substitution Principle (LSP)

"Subtypes must be substitutable for their base types without altering the correctness of the program."

  

A derived class must honor the contract of its base class. Clients using the base type should not need to know the concrete subtype to function correctly. Violations often occur when derived classes throw, restrict, or weaken behavior promised by the base type.

  

### LSP Violation Example

```cpp
#include <iostream>
#include <stdexcept>

class Bird {
public:
    virtual ~Bird() = default;
    
    // Base contract promises all birds can fly
    virtual void fly() {
        std::cout << "Flapping wings and flying high!\n";
    }
};

class Penguin : public Bird {
public:
    void fly() override {
        // Violation: contract promises flight, but Penguin breaks it
        throw std::logic_error("Penguins cannot fly!");
    }
};

void makeItFly(Bird& b) {
    std::cout << "Client: I expect a bird to fly...\n";
    b.fly(); // Safe for most birds, breaks for penguins!
}

int main() {
    Bird sparrow;
    Penguin penguin;

    makeItFly(sparrow); // Works
    
    try {
        makeItFly(penguin); // Throws std::logic_error!
    } catch (const std::logic_error& e) {
        std::cout << "Error: " << e.what() << "\n";
    }
}
```

### Why is this an LSP Violation?

The base class `Bird` promises: "you can always call `fly()`".

  

Anywhere a `Bird` is expected, substituting a `Penguin` breaks client expectations.

  

Because `Penguin` is not truly substitutable for `Bird`, LSP is broken.

  

### LSP Adherence Example

```cpp
#include <iostream>

// =========================
// (1) Capabilities / Interfaces
// -------------------------
// Split capabilities into distinct interfaces.
// =========================
struct IFlyable {
    virtual ~IFlyable() = default;
    virtual void fly() = 0;
};

struct ISwimmable {
    virtual ~ISwimmable() = default;
    virtual void swim() = 0;
};

// =========================
// (2) Base Type & Implementations
// -------------------------
// Base Bird only contains behavior true for ALL birds.
// =========================
class Bird {
public:
    virtual ~Bird() = default;
    virtual void display() const = 0;
};

class Sparrow final : public Bird, public IFlyable {
public:
    void display() const override { std::cout << "Sparrow\n"; }
    void fly() override { std::cout << "Sparrow: flapping and flying!\n"; }
};

class Penguin final : public Bird, public ISwimmable {
public:
    void display() const override { std::cout << "Penguin\n"; }
    void swim() override { std::cout << "Penguin: torpedo swimming!\n"; }
};

// =========================
// (3) Client Functions
// -------------------------
// Depend on capabilities, not taxonomy assumptions.
// =========================
void launchIntoSky(IFlyable& f) {
    std::cout << "Launching into sky...\n";
    f.fly();
}

void sendIntoWater(ISwimmable& s) {
    std::cout << "Sending into water...\n";
    s.swim();
}

int main() {
    Sparrow sparrow;
    Penguin penguin;

    sparrow.display();
    penguin.display();

    launchIntoSky(sparrow); // Works: Sparrow implements IFlyable
    // launchIntoSky(penguin); // COMPILE ERROR: Penguin does not implement IFlyable

    sendIntoWater(penguin); // Works: Penguin implements ISwimmable
    // sendIntoWater(sparrow); // COMPILE ERROR: Sparrow does not implement ISwimmable
}
```

## Interface Segregation Principle (ISP)

"Clients should not be forced to depend upon interfaces they do not use."

  

Prefer many small, role-specific interfaces over large, "fat" ones. Reduces coupling and makes it impossible to misuse an object by calling methods it doesn't support. Prevents classes from being burdened with no-op or error-throwing implementations.

  

### ISP Violation Example

```cpp
#include <iostream>
#include <stdexcept>
#include <string>

// Fat interface forces ALL implementers to support print, scan, and fax
struct IMultiFunctionDevice {
    virtual ~IMultiFunctionDevice() = default;
    virtual void print(const std::string& doc) = 0;
    virtual void scan(const std::string& dest) = 0;
    virtual void fax(const std::string& number) = 0;
};

class SimplePrinter : public IMultiFunctionDevice {
public:
    void print(const std::string& doc) override {
        std::cout << "[PRINT] " << doc << "\n";
    }
    void scan(const std::string& /*dest*/) override {
        // Forced to implement a capability it doesn't have!
        throw std::logic_error("SimplePrinter does not support scanning");
    }
    void fax(const std::string& /*number*/) override {
        throw std::logic_error("SimplePrinter does not support faxing");
    }
};

class ScanFaxStation : public IMultiFunctionDevice {
public:
    void print(const std::string& /*doc*/) override {
        throw std::logic_error("ScanFaxStation cannot print");
    }
    void scan(const std::string& dest) override {
        std::cout << "[SCAN] -> saved to " << dest << "\n";
    }
    void fax(const std::string& number) override {
        std::cout << "[FAX] -> sent to " << number << "\n";
    }
};

class PrintClient {
    IMultiFunctionDevice& device;
public:
    explicit PrintClient(IMultiFunctionDevice& d) : device(d) {}
    void run() { device.print("Quarterly Report"); }
};

class ScanClient {
    IMultiFunctionDevice& device;
public:
    explicit ScanClient(IMultiFunctionDevice& d) : device(d) {}
    void run() { device.scan("scan.pdf"); }
};

int main() {
    SimplePrinter printer;
    ScanFaxStation sfs;

    PrintClient printOnly(printer);
    printOnly.run();

    ScanClient scanOnly(sfs);
    scanOnly.run();
}
```

### Why does this break ISP?

A fat interface (`IMultiFunctionDevice`) forces implementers to provide dummy or exception-throwing methods for features they don't support.

  

Clients with narrow needs are tightly coupled to unused interface members.

  

Swapping implementations passes compilation but causes runtime exceptions when unsupported methods are called.

  

### ISP Adherence Example

```cpp
#include <iostream>
#include <string>

// =========================
// (1) Role-Specific Interfaces
// =========================
struct IPrinter {
    virtual ~IPrinter() = default;
    virtual void print(const std::string& doc) = 0;
};

struct IScanner {
    virtual ~IScanner() = default;
    virtual void scan(const std::string& dest) = 0;
};

struct IFax {
    virtual ~IFax() = default;
    virtual void fax(const std::string& number) = 0;
};

// =========================
// (2) Concrete Devices
// Implement ONLY supported capabilities
// =========================
class SimplePrinter final : public IPrinter {
public:
    void print(const std::string& doc) override {
        std::cout << "[PRINT] " << doc << "\n";
    }
};

class ScanFaxStation final : public IScanner, public IFax {
public:
    void scan(const std::string& dest) override {
        std::cout << "[SCAN] -> " << dest << "\n";
    }
    void fax(const std::string& number) override {
        std::cout << "[FAX] -> " << number << "\n";
    }
};

class MultiFunctionPrinter final : public IPrinter, public IScanner, public IFax {
public:
    void print(const std::string& doc) override { std::cout << "[MFP PRINT] " << doc << "\n"; }
    void scan(const std::string& dest) override { std::cout << "[MFP SCAN] -> " << dest << "\n"; }
    void fax(const std::string& number) override { std::cout << "[MFP FAX] -> " << number << "\n"; }
};

// =========================
// (3) Clients depend ONLY on needed roles
// =========================
class PrintClient {
    IPrinter& printer;
public:
    explicit PrintClient(IPrinter& p) : printer(p) {}
    void run() { printer.print("Quarterly Report"); }
};

class ScanClient {
    IScanner& scanner;
public:
    explicit ScanClient(IScanner& s) : scanner(s) {}
    void run() { scanner.scan("scan.pdf"); }
};

class FaxClient {
    IFax& faxer;
public:
    explicit FaxClient(IFax& f) : faxer(f) {}
    void run() { faxer.fax("+1-555-0100"); }
};

// =========================
// (4) Composite MFD (Adapter style)
// =========================
class CompositeMFD final : public IPrinter, public IScanner, public IFax {
    IPrinter& p; IScanner& s; IFax& f;
public:
    CompositeMFD(IPrinter& p_, IScanner& s_, IFax& f_) : p(p_), s(s_), f(f_) {}
    void print(const std::string& doc) override { p.print(doc); }
    void scan(const std::string& dest) override { s.scan(dest); }
    void fax(const std::string& num) override { f.fax(num); }
};

int main() {
    SimplePrinter printer;
    ScanFaxStation scanfax;
    MultiFunctionPrinter mfp;

    PrintClient pc1(printer); pc1.run();
    ScanClient sc1(scanfax); sc1.run();
    FaxClient fc1(scanfax); fc1.run();

    // Compile-time safety prevented invalid wiring:
    // PrintClient bad1(scanfax); // COMPILE ERROR: ScanFaxStation is not an IPrinter
}
```

## Dependency Inversion Principle (DIP)

"Depend on abstractions, not on concretions."

  

High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details (implementations) should depend on abstractions. Commonly realized through constructor injection and interfaces in C++.

  

### DIP Violation Example

```cpp
#include <iostream>
#include <string>

class EmailService {
public:
    void send(const std::string& to, const std::string& msg) {
        std::cout << "[EMAIL -> " << to << "] " << msg << "\n";
    }
};

class SmsService {
public:
    void send(const std::string& to, const std::string& msg) {
        std::cout << "[SMS -> " << to << "] " << msg << "\n";
    }
};

// High-level policy tightly coupled to concrete detail
class NotificationManager {
    EmailService email_; // Hard dependency on concrete low-level class
public:
    void notifyWelcome(const std::string& userContact) {
        email_.send(userContact, "Welcome aboard!");
    }
    
    void notifyAlert(const std::string& userContact, const std::string& alert) {
        email_.send(userContact, "ALERT: " + alert);
    }
};

int main() {
    NotificationManager manager;
    manager.notifyWelcome("alice@example.com");
    manager.notifyAlert("bob@example.com", "CPU usage high");
}
```

### Why does this break DIP?

`NotificationManager` (high-level) directly depends on `EmailService` (low-level concretion).

  

There is no abstraction layer between high-level logic and low-level details.

  

The high-level module instantiates its own dependencies internally, preventing dependency injection or mocking for tests.

  

### DIP Adherence Example

```cpp
#include <iostream>
#include <string>

// =========================
// (1) Abstraction (Contract)
// =========================
struct IMessageService {
    virtual ~IMessageService() = default;
    virtual void send(const std::string& to, const std::string& msg) = 0;
};

// =========================
// (2) Low-Level Implementations
// =========================
class EmailService final : public IMessageService {
public:
    void send(const std::string& to, const std::string& msg) override {
        std::cout << "[EMAIL -> " << to << "] " << msg << "\n";
    }
};

class SmsService final : public IMessageService {
public:
    void send(const std::string& to, const std::string& msg) override {
        std::cout << "[SMS -> " << to << "] " << msg << "\n";
    }
};

// =========================
// (3) High-Level Policy
// Depends ONLY on abstraction via constructor injection
// =========================
class NotificationManager {
    IMessageService& transport_; // Reference to abstraction
public:
    explicit NotificationManager(IMessageService& transport) : transport_(transport) {}

    void notifyWelcome(const std::string& userContact) {
        transport_.send(userContact, "Welcome aboard!");
    }

    void notifyAlert(const std::string& userContact, const std::string& alert) {
        transport_.send(userContact, "ALERT: " + alert);
    }
};

// =========================
// (4) Composition Root (Main)
// =========================
int main() {
    EmailService email;
    SmsService sms;

    // Use Email
    NotificationManager viaEmail(email);
    viaEmail.notifyWelcome("alice@example.com");

    // Swap to SMS with zero changes to NotificationManager
    NotificationManager viaSms(sms);
    viaSms.notifyWelcome("+1-555-0100");
}
```

## Summary

- **SRP** $\rightarrow$ Cohesion
- **OCP** $\rightarrow$ Extensibility
- **LSP** $\rightarrow$ Behavioral Substitutability
- **ISP** $\rightarrow$ Lean Contracts
- **DIP** $\rightarrow$ Dependency Flow Inversion