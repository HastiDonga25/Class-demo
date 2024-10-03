// this is a regular javascript function
// We want to implement a counter that counts the number of times it is called
function counter(){
    //declare a variable to store the count
    let count = 0;
    //increase the count by 1
    count++;
    //print the count in the terminal
    console.log(count);
}
// call the function twice
counter(); //1
counter(); //1

//1) Declare count as global variable and use it inside counter()
//2) Pass count as an argument to counter()
//3) use a closure(nested function)