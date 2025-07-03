// 06-multidimensional-arrays.ts
// Topic: Multidimensional Arrays in TypeScript

// ✅ 2D Array of numbers
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matrix:");
console.log(matrix);

// Access element at row 1, column 2
console.log("matrix[1][2] =", matrix[1][2]); // 6

// Modify value at row 0, column 1
matrix[0][1] = 99;
console.log("After modification:", matrix);

// ✅ 2D Array of strings (like seating plan)
let seatingPlan: string[][] = [
  ["Ali", "Sami"],
  ["Ahmed", "Zain"],
];

console.log("Seating Plan:", seatingPlan);

// ✅ 3D Array
let cube: number[][][] = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

console.log("cube[1][0][1] =", cube[1][0][1]); // 6
