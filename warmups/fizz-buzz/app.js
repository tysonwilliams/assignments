function fizzBuzz(number, wordOne, wordTwo) {

for (var i = 1; i < number + 1; i++) {
    if((i % 3 === 0) && (i % 5 !== 0)) {
        console.log(wordOne);
    }
    else if((i % 5 === 0) && (i % 3 !== 0)) {
        console.log(wordTwo);
    }
    else if((i % 3 === 0) && (i % 5 === 0)) {
        console.log(wordOne, wordTwo);
    } else {
        if((i % 3 !== 0) && (i % 5 !== 0)) {
        console.log(i);
        }
    }
}
}

fizzBuzz(100, "threeDiv", "fiveDiv");