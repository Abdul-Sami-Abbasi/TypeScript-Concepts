// 03-any-type.ts
// Topic: 'any' type in TypeScript

//Definition: The `any` type allows you to opt-out of type checking for a variable, meaning it can hold any value without TypeScript enforcing type constraints.

// Using `any` disables type checking
let value: any = 5;
console.log("Initial:", value);

// Reassigning different types
value = "Now a string";
console.log("After string:", value);

value = { message: "Now an object" };
console.log("After object:", value);

// Even calling unknown methods won't cause an error
value.doSomething?.();

// ⚠️ Warning: You lose all type safety
function logData(data: any) {
  console.log("Received:", data);
}

logData(123);
logData("hello");
logData({ user: "Ali" });
