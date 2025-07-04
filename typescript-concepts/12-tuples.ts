// 12-tuples.ts
// Topic: Tuples in TypeScript

// ✅ Basic tuple
let person: [string, number] = ["Sami", 22];
console.log("Person Tuple:", person);

// ✅ More descriptive example
let coordinates: [number, number, string] = [45.0, 73.2, "North"];
console.log("Coordinates:", coordinates);

// ✅ Tuple with optional value
let user: [string, number?] = ["Ali"];
console.log("User:", user);

// ✅ Array of tuples
let scores: [string, number][] = [
  ["Math", 95],
  ["English", 88],
  ["Science", 92],
];

console.log("Scores:");
for (const [subject, mark] of scores) {
  console.log(`${subject}: ${mark}`);
}

// ❌ Invalid tuple (will cause error if uncommented)
// let wrong: [string, number] = [22, "Sami"]; // ❌ Order is incorrect
