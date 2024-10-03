// this is a closure function
// similar to a class in that it contains data and behavior
function counter(){
    //data member
    let count= 0;
    //behaviour
    function increase(){ //in C#/JAVA this would be a public method
        count++;
        console.log(count);
    }

    function decrease(){ //in C#/JAVA this would be a public method
        count--;
        console.log(count);
    }

    //expose public methods using a return statement
    return{increase,decrease}; // no equivalent in C#/JAVA because they use public access modifiers
}
// to use it, we need to store the returned object in a variable
const c = counter(); // in C#/JAVA this would be 'var counter = new Counter();'
// now we can call the public methods defined in the return statments
c.increase();
c.decrease();
c.increase();
c.decrease();