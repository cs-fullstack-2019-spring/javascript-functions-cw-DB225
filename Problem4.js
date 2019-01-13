//Create a function called checkPassword.
// Send two string variables to the checkPassword function to check if the strings are equal.
// Return true if they are equal and false if they are not equal.
// Print the function's return value.

function checkPassword(a,b) {
    var x = a + b;
    return x;
}
    var a  = "Car";
    var b = "CAr";

    if(a===b){
        console.log (true);
    }
    if(a!==b){
        console.log (false);
    }
checkPassword(a,b);

//this program return "false" because a!=b