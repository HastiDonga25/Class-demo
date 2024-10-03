// Here we demostrate Non-blocking (asynchronous) code
// In this case execution also goes from top to bottom
// insted, it move on to the mext operation without waiting for the current one to complete
// it uses callback function to handle the results of the operations
// this is ideal for a server, as it doesn't block other requests
//require the file system module
const { error } = require("console");
const fs = require("fs"); // built-in module
//read contents of large file
// provide a callback function to handle when the operation ends and print out the contents
// three parameters: file name, encoding, callback function
fs.readFile("food.txt","utf8", (error,data)=>{
    console.log(data);
});
// print the success message
console.log("Food file read Successfully");

//read contents of large file
// provide a callback function to handle when the operation ends and print out the contents
fs.readFile("drinks.txt","utf8", (error,data)=>{
    console.log(data);
});
// print the success message
console.log("Drinks file read Successfully");