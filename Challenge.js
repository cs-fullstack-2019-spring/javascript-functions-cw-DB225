//Create 4 functions called add, subtract, multiply, and divide.
// Create them to allow a user to perform the name of the function to the two numbers
// and return the result.

function typeOperation() {
    var numA, numB, result1;

    function getNameOperator() {
        var nameOperator = prompt("Enter the name of operation:");
        return nameOperator;
    }
    function getNumA() {
        numA = parseInt(prompt("Enter the first number:"));
        return numA;
    }
    function getNumB() {
        numB = parseInt(prompt("Enter the last number:"));
        return numB;
    }

    function add(numA,numB) {
        result1 = ((parseInt(numA)) + (parseInt(numB)));
        return result1;
    }

    function substract(numA, numB) {
        var result2= ((parseInt(numA)) - (parseInt(numB)));
        return result2;
    }

    function multiply(numA, numB) {
        var result3 = ((parseInt(numA)) * (parseInt(numB)));
        return result3;
    }
    function divide(numA, numB) {
        var result4 = ((parseInt(numA)) / (parseInt(numB)));
        return result4;
    }

    function doOperation() {
        var numA = getNumA();
        var numB = getNumB();
        var operator = getNameOperator();

        //We write "add" to have an addition
        if(operator === "add"){
            console.log(add(numA,numB));
        }
        //We write "substract" to have a substraction
        else if (operator === "substract") {
            console.log(substract(numA,numB));
        }
        //We write "multiply" to have a multiplication
        else if (operator === "multiply") {
            console.log(multiply(numA,numB));
        }
        //We write "divide" to have a division
        else if (operator === "divide") {
            console.log(divide(numA,numB));
        }
        else{
            console.log("DONE!!")
        }
        add();
        substract();
        multiply();
        divide();
    }
    doOperation();
}
typeOperation();