// 15-access-modifiers.ts
// Topic: Access Modifiers in TypeScript

// Definition: Access modifiers in TypeScript control the visibility of class members (properties and methods). They help encapsulate data and enforce access rules, making code more maintainable and secure.

// ✅ public (default) - accessible from anywhere
class Car {
  public model: string;

  constructor(model: string) {
    this.model = model;
  }

  displayModel(): string {
    return this.model;
  }
}

const car1 = new Car("Honda");
console.log("Car model (public):", car1.model); // ✅ Access allowed

// ✅ private - only inside the class
class Account {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  getPassword(): string {
    return this.password;
  }
}

const acc = new Account("mySecret123");
// console.log(acc.password); ❌ Error: Property 'password' is private
console.log("Account password:", acc.getPassword()); // ✅ Allowed via method

// ✅ protected - only inside class or subclass
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  getName(): string {
    return this.name; // ✅ Allowed because it's a subclass
  }
}

const emp = new Employee("Sami");
// console.log(emp.name); ❌ Error: Protected property
console.log("Employee name:", emp.getName()); // ✅
