function ifPalindrom(str) {
var strStripped = str.toLowerCase().replace(/[^a-z]/gi, "");
strStripped === strStripped.split("").reverse().join("") ? console.log(true) : console.log(false);
}

ifPalindrom("racecar");