// 08-type-aliases.ts
// Topic: Type Aliases in TypeScript

// Definition: A type alias lets you create a custom name for a type — especially helpful when the type is long or reused in multiple places.

// ✅ Basic type alias
type Age = number;
let myAge: Age = 22;

// ✅ Object type alias
type User = {
  id: number;
  name: string;
  email?: string; // optional property
};

let user2: User = { id: 1, name: "Ali" };

// ✅ Function type alias
type GreetFunction = (name: string) => string;

const greet2: GreetFunction = (name) => {
  return "Hello, " + name;
};

console.log(greet2("Sami"));

// ✅ Union type alias
type ID = number | string;
let userId: ID = "user123";
userId = 456;

// ✅ Nested type alias
type Address = {
  city: string;
  zip: number;
};

type Customer = {
  name: string;
  address: Address;
};

let customer: Customer = {
  name: "Ahmed",
  address: {
    city: "Lahore",
    zip: 54000,
  },
};

console.log("Customer:", customer);
