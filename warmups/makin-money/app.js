function formatMoney (num) {
    var money = [];
    for (var i = num.length; i >= 0; i--) {
        //num[i].toString;
        money.push(num[i]);
    }
    money.splice(3, 0, ".");
    money.splice(money.length, 0, "$");
    return money.reverse().join("");
};

formatMoney("123456789");
console.log(money);