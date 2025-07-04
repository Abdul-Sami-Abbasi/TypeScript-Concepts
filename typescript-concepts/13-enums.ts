// 13-enums.ts
// Topic: Enums in TypeScript

// ✅ Numeric Enum
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}

let move: Direction = Direction.Left;
console.log("Move direction:", move); // 2

// ✅ Numeric Enum with custom starting value
enum Status {
  Pending = 1,
  InProgress,  // 2
  Completed,   // 3
}

let currentStatus: Status = Status.InProgress;
console.log("Current Status:", currentStatus); // 2

// ✅ String Enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let favoriteColor: Color = Color.Green;
console.log("Favorite Color:", favoriteColor); // "GREEN"

// ✅ Enum in function
function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "Waiting...";
    case Status.InProgress:
      return "Work in progress...";
    case Status.Completed:
      return "All done!";
  }
}

console.log("Status message:", getStatusMessage(currentStatus));
