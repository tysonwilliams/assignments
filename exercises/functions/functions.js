var sumTwoNumbers = function (num1, num2) {
    return num1 + num2;
}

function largestOfThreeNumbers (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else return num3;
}

var oddOrEven = function (num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function concatenate (name) {
    if (name.length <= 20) {
        return name + name;
    } else {
        var newName = name.length / 2;
        return name.slice(0, newName);
    }
}