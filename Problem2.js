//Create a function that’s passed a firstName and lastName.
// Return lastName comma firstName.

function name(name1, name2){
    var x = name1 +", "+ name2;
    return x;
}
var b = prompt("Firstname: ");
var y =  prompt("Lastname");
console.log(name(b,y));
 // this program asks the user to write a firstname and a lastname
//Then return both separate by comma;