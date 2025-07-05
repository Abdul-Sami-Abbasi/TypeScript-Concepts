// 18-generics.ts
// Topic: Generics in TypeScript

// ✅ Generic function
function echo<T>(value: T): T {
  return value;
}

console.log("Echo:", echo<string>("Hello"));
console.log("Echo:", echo(42));

// ✅ Generic function with array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log("First item (numbers):", getFirst([10, 20, 30]));
console.log("First item (strings):", getFirst(["a", "b", "c"]));

// ✅ Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 100 };
console.log("String Box:", stringBox);
console.log("Number Box:", numberBox);

// ✅ Generic class
class Pair<T, U> {
  constructor(public first: T, public second: U) {}

  getPair(): [T, U] {
    return [this.first, this.second];
  }
}

const pair = new Pair("age", 22);
console.log("Generic Pair:", pair.getPair());

// ✅ Generic with constraints
function printLength<T extends { length: number }>(item: T): void {
  console.log("Length is:", item.length);
}

printLength("TypeScript");
printLength(["a", "b", "c"]);
// printLength(100); ❌ Error: number has no length
