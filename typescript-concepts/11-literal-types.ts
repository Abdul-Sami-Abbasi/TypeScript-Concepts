// 11-literal-types.ts
// Topic: Literal Types in TypeScript

// ✅ Single literal type
let response: "yes" = "yes";
// response = "no"; ❌ Error

// ✅ Union of string literals
type Direction = "up" | "down" | "left" | "right";
let move: Direction = "left";
// move = "forward"; ❌ Error

// ✅ Union of number literals
type StatusCode = 200 | 404 | 500;
let status: StatusCode = 500;

// ✅ Boolean literal type
type BoolLiteral = true | false;
let isConnected: BoolLiteral = false;

// ✅ Literal type in function parameter
function setMode(mode: "auto" | "manual") {
  console.log("Mode set to:", mode);
}

setMode("auto");
// setMode("semi-auto"); ❌ Error

console.log("Status:", status);
console.log("Move:", move);
