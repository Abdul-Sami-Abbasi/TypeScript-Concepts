// 05-array-types.ts
// Topic: Array Types in TypeScript

// ✅ Basic arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let myFruits: string[] = ["Apple", "Banana", "Mango"];
let flags: boolean[] = [true, false, true];

// ✅ Using Array<type> syntax
let usernames: Array<string> = ["Sami", "Ali", "Ahmed"];

// ✅ Array of objects
type Product = {
  id: number;
  name: string;
};

let products: Product[] = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Phone" },
];

// ✅ Readonly arrays
let readonlyIds: readonly number[] = [1, 2, 3];
// readonlyIds.push(4); ❌ Error: Readonly array cannot be changed

// ✅ Tuple type
let myPerson: [string, number] = ["Abdul Sami", 22];

console.log("Fruits:", myFruits);
console.log("Person tuple:", myPerson);
