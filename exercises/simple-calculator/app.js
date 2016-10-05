//var num1 = document.getElementById("firstNumber").value
//var num2 = document.getElementById("secondNumber").value
//
//var calcAdd = function(num1, num2) {
//    return num1 + num2;
//}
//
//var calcSub = function(num1, num2) {
//    return num1 - num2;
//        
//}
//
//var calcMult = function(num1, num2) {
//    return num1 * num2;
//}

function addition() {
    var valueOne = document.getElementById("addition1").value;
    var valueTwo = document.getElementById("addition2").value;
    var added = document.getElementById("added");
    
    valueOne = parseInt(valueOne);
    valueTwo = parseInt(valueTwo);
    
    added.innerHTML = valueOne + valueTwo
}

function subtraction() {
    var valueOne = document.getElementById("subtraction1").value;
    var valueTwo = document.getElementById("subtraction2").value;
    var subtracted = document.getElementById("subtracted");
    
    valueOne = parseInt(valueOne);
    valueTwo = parseInt(valueTwo);
    
    subtracted.innerHTML = valueOne - valueTwo
}

function multiplication() {
    var valueOne = document.getElementById("multiplication1").value;
    var valueTwo = document.getElementById("multiplicatio2n").value;
    var multiplied = document.getElementById("multiplied");
    
    valueOne = parseInt(valueOne);
    valueTwo = parseInt(valueTwo);
    
    multiplied.innerHTML = valueOne * valueTwo
}