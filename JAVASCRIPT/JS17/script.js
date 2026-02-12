//GETTER AND SETTER
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // convention: underscore means "internal use"
  }

  // Getter (read balance)
  get balance() {
    return `Current balance: ₹${this._balance}`;
  }

  // Setter (update balance with validation)
  set balance(amount) {
    if (amount < 0) {
      console.error("Balance cannot be negative!");
      
    }
    else this._balance = amount;
  }
}

// Usage
const acc1 = new BankAccount("Aditya", 5000);

// Getter is called like a property (no parentheses)
console.log(acc1.balance);

// Setter is called like assignment
acc1.balance = 7000;
console.log(acc1.balance);

// Invalid update
acc1.balance = -1000;   // will trigger validation
console.log(acc1.balance);
//example 2:
class Student {
  constructor(name, marks) {
    this.name = name;
    this._marks = marks; // internal storage
  }

  // Getter → return grade based on marks
  get grade() {
    if (this._marks >= 90) return "A";
    if (this._marks >= 75) return "B";
    if (this._marks >= 60) return "C";
    return "D";
  }

  // Getter → read marks
  get marks() {
    return this._marks;
  }

  // Setter → validate marks before updating
  set marks(value) {
    if (value < 0 || value > 100) {
      console.error("Marks should be between 0 and 100");
      
    }
    else this._marks = value;
  }
}

// Usage
const s1 = new Student("Aditya", 85);

console.log(s1.marks);   // 85
console.log(s1.grade);   // B

s1.marks = 92;           // setter called
console.log(s1.grade);   // A

s1.marks = 150;          // invalid
console.log(s1.marks);   // still 92
