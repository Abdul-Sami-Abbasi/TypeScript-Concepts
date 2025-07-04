// 10-union-types.ts
// Topic: Union Types in TypeScript

// Definition: Union types allow a variable to hold values of multiple types. This is useful when a value can be one of several types, providing flexibility in type definitions.

// ✅ Union of primitive types
let score: number | string;

score = 95;
score = "A+";
// score = true; ❌ Not allowed

console.log("Score:", score);

// ✅ Union in function parameter
function printId(id: number | string) {
  console.log("ID:", id);
}

printId(101);
printId("student-102");

// ✅ Union in arrays
let data: (string | number)[] = ["Sami", 22, "Ali", 30];

console.log("Mixed Array:", data);

// ✅ Union of object types
type Dog = { bark: () => void };
type Cat = { meow: () => void };

type Pet = Dog | Cat;

function speak(pet: Pet) {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// Example usage
const dog: Dog = { bark: () => console.log("Woof!") };
const cat: Cat = { meow: () => console.log("Meow!") };

speak(dog); // Woof!
speak(cat); // Meow!
