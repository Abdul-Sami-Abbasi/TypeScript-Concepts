// 07-objects.ts
// Topic: Objects in TypeScript

// ✅ Basic object with types
let user1: { name: string; age: number } = {
  name: "Sami",
  age: 22,
};

// ✅ Object with optional property
let product: { id: number; name: string; description?: string } = {
  id: 1,
  name: "Mobile Phone",
};

// ✅ Using type alias
type Car = {
  brand: string;
  model: string;
  year: number;
};

let car1: Car = {
  brand: "Honda",
  model: "Civic",
  year: 2021,
};

// ✅ Nested object
type Student = {
  name: string;
  address: {
    city: string;
    zip: number;
  };
};

let student: Student = {
  name: "Ali",
  address: {
    city: "Karachi",
    zip: 74000,
  },
};

// ✅ Array of objects
let users: { id: number; name: string }[] = [
  { id: 1, name: "Sami" },
  { id: 2, name: "Ali" },
];

console.log("User1:", user1);
console.log("Product:", product);
console.log("Car:", car1);
console.log("Student:", student);
console.log("Users:", users);
