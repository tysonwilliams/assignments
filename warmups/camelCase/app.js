function camelCase(words) {
    return words.toLowerCase().replace(/-(.)/g, function(match, group) {
        return group.toUpperCase();
    });
};

camelCase("let's-case-these-camels");