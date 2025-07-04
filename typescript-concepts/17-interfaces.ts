// 17-interfaces.ts
// Topic: Interfaces in TypeScript

// Definition: Interfaces in TypeScript define the structure of an object, specifying the properties and methods it should have. They are used to enforce type checking and provide a contract for classes or objects to follow.

// ✅ Interface for an object
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // optional
}

const user1: User = {
  id: 1,
  name: "Sami",
};

console.log("User:", user1);

// ✅ Interface with method
interface Animal {
  name: string;
  makeSound(): void;
}

const cat: Animal = {
  name: "Cat",
  makeSound() {
    console.log("Meow!");
  },
};

cat.makeSound();

// ✅ Using interface with class
interface Person {
  name: string;
  speak(): void;
}

class Student implements Person {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} says hello`);
  }
}

const student1 = new Student("Ali");
student1.speak();

// ✅ Interface extension (inheritance)
interface Base {
  id: number;
}

interface Employee extends Base {
  position: string;
}

const emp: Employee = {
  id: 101,
  position: "Engineer",
};

console.log("Employee:", emp);
