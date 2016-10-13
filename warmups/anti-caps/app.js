function isLower(str) {
    return str === str.toLowerCase();
}

function isCaps(str) {
    return str === str.toUpperCase();
}

function antiCaps(str) {
    var newString = "";
    for(var i = 0; i < str.length; i++) {
        if(is;aps(str[i])) {
            newString = newString + str[i].toLowerCase();
        } else {
            newString = newString + str[i].toUpperCase():
        }
    }
return newString;
}

console.log(antiCaps("Hello"));
console.log(antiCaps("racEcar"));
console.log(antiCaps("SomeThing"));