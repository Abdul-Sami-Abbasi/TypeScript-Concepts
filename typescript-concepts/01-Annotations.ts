// 01-annotations.ts
// Topic: Type Annotations in TypeScript

// ✅ Variable annotations
let age: number = 25;
let username: string = "Abdul Sami";
let isStudent: boolean = true;

// ✅ Array annotations
let marks: number[] = [85, 90, 78];
let fruits: string[] = ["Apple", "Banana", "Mango"];

// ✅ Object annotation
let person: { name: string; age: number } = {
  name: "Ali",
  age: 30,
};

// ✅ Function annotations (parameters and return types)
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("Sami"));

// ✅ Function with multiple parameter types
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 7));

// ✅ Annotated variable without initial value
let country: string;
country = "Pakistan";

console.log(`Country: ${country}`);
