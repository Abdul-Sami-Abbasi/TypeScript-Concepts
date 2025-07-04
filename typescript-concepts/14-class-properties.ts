// 14-class-properties.ts
// Topic: Class Property Annotations in TypeScript

// ✅ Basic class with type annotations
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
  }
}

const student1 = new Student("Sami", 22);
console.log(student1.introduce());

// ✅ Class with optional and default values
class Product {
  title: string;
  price: number = 100;
  description?: string;

  constructor(title: string, price?: number, description?: string) {
    this.title = title;
    if (price) this.price = price;
    if (description) this.description = description;
  }
}

const product1 = new Product("Laptop", 1200, "Gaming laptop");
console.log("Product:", product1);

// ✅ Access modifiers: public, private, readonly
class Account {
  public username: string;
  private password: string;
  readonly id: number;

  constructor(username: string, password: string, id: number) {
    this.username = username;
    this.password = password;
    this.id = id;
  }

  // Getter for private password
  getPassword(): string {
    return this.password;
  }
}

const acc = new Account("sami22", "secret123", 101);
console.log("Account username:", acc.username);
console.log("Account password (via method):", acc.getPassword());
// acc.password; ❌ Error: private property
// acc.id = 202; ❌ Error: readonly
