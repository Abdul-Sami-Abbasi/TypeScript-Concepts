// 09-intersection-types.ts
// Topic: Intersection Types in TypeScript

// Definition: Intersection types allow you to combine multiple types into one. This means a value can satisfy multiple type requirements at once, which is useful for creating complex types that share properties from different sources.

// ✅ Combining object types
type Person = {
  name: string;
};

type Contact = {
  email: string;
};

type Employee = Person & Contact;

const emp: Employee = {
  name: "Sami",
  email: "sami@example.com",
};

// ✅ Another example: User with login and profile
type Account = {
  username: string;
  password: string;
};

type Profile = {
  name: string;
  age: number;
};

type User = Account & Profile;

const user: User = {
  username: "sami22",
  password: "mypassword",
  name: "Abdul Sami",
  age: 22,
};

console.log("Employee:", emp);
console.log("User:", user);

// ❌ Incompatible intersection (will cause error if uncommented)
// type A = { type: "admin" };
// type B = { type: "user" };
// type AB = A & B;
// const test: AB = { type: "admin" }; // ❌ Cannot satisfy both
