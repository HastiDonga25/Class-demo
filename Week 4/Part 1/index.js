// This will be the entry point of our application
// Import Express
const express = require("express");
//Create an app object by calling express as a method
const app = express();
// Define middlewares functions
// MiddlewareFUnctions are regular with three specific parameters
// request, response and next
function showHomePage(req, res, next){
    res.send("Hello World! Welcome to my Home Page");
}

//Associate routes (paths) with middleware functions
// get represents the HTTP get method that will be handles
// "/" is the path that will be handled
// showHomePage is the middlesware function function that wiil be called when user requests this path
app.get("/", showHomePage);
//Middleware functions can be reused for diffrent paths
app.get("/home", showHomePage);
// Start the Server by listening to a port
// Port number, callback function to handle the sserver start
app.listen(3000, () => {
    console.log("Server is runnnibg on http://localhost:3000"); 
});

