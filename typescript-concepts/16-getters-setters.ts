// 16-getters-setters.ts
// Topic: Getters and Setters in TypeScript

// Definition: Getters and setters in TypeScript allow you to define custom behavior for accessing and modifying properties of a class. This provides control over how properties are read and written, enabling validation or transformation of data.

// ✅ Person with name property using getter & setter
class Person {
  private _name: string = "";

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 2) {
      console.log("❌ Name must be at least 2 characters long.");
    } else {
      this._name = newName;
    }
  }
}

const person = new Person();
person.name = "S";   // ❌ Too short
person.name = "Sami"; // ✅
console.log("Person's name:", person.name); // Getter used

// ✅ Employee with salary validation
class Employee {
  private _salary: number = 0;

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._salary = value;
  }
}

const emp = new Employee();
emp.salary = 50000;      // ✅ Valid
console.log("Salary:", emp.salary); // 50000

// emp.salary = -1000;   // ❌ Throws Error
