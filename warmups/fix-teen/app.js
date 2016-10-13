function fixTeen(n) {
    if ((n > 12 && n < 15) || (n > 16 && n < 20)) {
        n = 0;
    }
    return n;
}

function noTeenSum (a, b, c) {
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);
    return a + b + c;
}

console.log(noTeenSum(1,2,13));