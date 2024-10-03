// Here we demostrate blocking (synchronous) code
// In this case execution goes from top to bottom
// And waits for each operation to complre before moving on
// this is not ideal for a server, as it would block other requests

// require the file system module
const fs = require("fs"); // built-in module
// read contents of larger file
let food = fs.readFileSync("food.txt", "utf8");
// print our contents
console.log(food);
// print a success message
console.log("Food file read successfully");
// read content of smaller files
let drinks = fs.readFileSync("drinks.txt", "utf8");
// print our contents
console.log(drinks);
// print a success message
console.log("Drinks file read successfully");
