// 02-type-inference.ts
// Topic: Type Inference in TypeScript

// Definition: Type Inference means that TypeScript can automatically guess the type of a variable based on its value — even if you don’t explicitly annotate it.

// ✅ TypeScript infers types from initial values

// Inferred as string
let appName = "TypeScript Basics";
// appName = 42; ❌ Error: Type 'number' is not assignable to type 'string'

// Inferred as number
let version = 1.0;

// Inferred as boolean
let isPublished = true;

// Inferred as string[]
let tags = ["typescript", "learning", "code"];

// Function return type inferred as string
function sayHello() {
  return "Hello, TypeScript!";
}

// Inferred object type
let user = {
  name: "Sami",
  age: 22,
  isAdmin: false,
};

// Hovering over `user` in VS Code will show inferred types

console.log(sayHello());
console.log(`App: ${appName}, Version: ${version}, Tags: ${tags.join(", ")}`);
