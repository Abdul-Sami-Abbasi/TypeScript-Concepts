// 04-never-type.ts
// Topic: 'never' keyword in TypeScript

//definition: The `never` type represents values that never occur. It is used for functions that throw errors or run indefinitely, and it can also be used in exhaustive checks.

// ❌ This function never returns. It throws an error.
function throwError(message: string): never {
  throw new Error(message);
}

// ❌ This function runs forever and never ends.
function infiniteLoop(): never {
  while (true) {
    console.log("Running endlessly...");
  }
}

// ✅ Using never in exhaustive checks
type Animal = "cat" | "dog";

function getSound(animal: Animal): string {
  switch (animal) {
    case "cat":
      return "Meow";
    case "dog":
      return "Woof";
    default:
      // Exhaustiveness check
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

console.log(getSound("cat")); // Meow
// console.log(getSound("cow")); ❌ Compile-time error
