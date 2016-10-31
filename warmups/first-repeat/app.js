function firstNonRepeat(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[1]) {
            continue;
        } else {
            return (str[i]);
            break;
        }
    }
};

firstNonRepeat("ggggggggxkljfvlsjkfg");