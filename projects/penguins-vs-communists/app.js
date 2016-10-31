function Parties(party, pop) {
    this.party = party;
    this.pop = 1000000;
};

var penguins = new Parties("Penguin Party");
var communists = new Parties("Communist Party");
var flipCoin = Math.floor(Math.random() * 2 + 1);
var whoAttacksFirst;
var whichPartyToAttack;

function attackFirst() {
    if (flipCoin === 1) {
        return whoAttacksFirst = penguins;
    } else {
        return whoAttacksFirst = communists;
    }
};

function attackedParty() {
    attackFirst();
    if (whoAttacksFirst === penguins) {
        return whichPartyToAttack = communists;
    } else {
        return whichPartyToAttack = penguins;
    }
};

function determineHit() {
    return Math.floor(Math.random() * 5);
};

function onTheHit() {
    determineHit();
    var randomDamage = Math.floor(Math.random() * 250000);
    if ((determineHit() > 1) && (penguins.pop > 0 && communists.pop > 0)) {
        console.log("\nNuke landed for " + randomDamage + "!");
        whichPartyToAttack.pop -= randomDamage;
        console.log("Penguins' population is at " + penguins.pop + "!");
        console.log("Communists' population is at " + communists.pop + "!\n");
        if (penguins.pop > 0 && communists.pop > 0) {
            console.log("\tThe " + whichPartyToAttack.party + " is sending a nuke back!");
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function onTheMiss() {
    determineHit();
    var randomDamage = Math.floor(Math.random() * 250000);
    
    if ((determineHit() > 1) && (penguins.pop > 0 && communists.pop > 0)) {
        console.log("\tNuke missed! The " + whoAttacksFirst.party + " is sending a nuke back!\n");
        console.log("Nuke landed for " + randomDamage + "!");
        whoAttacksFirst.pop -= randomDamage;
        console.log("Penguins' population is at " + penguins.pop + "!");
        console.log("Communists' population is at " + communists.pop + "!\n");
        if (penguins.pop > 0 && communists.pop > 0) {
            console.log("\tThe " + whoAttacksFirst.party + " is sending a nuke back!");
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function sendNuke(party, onHit, onMiss) {
    party = attackedParty();
    console.log("\nOhhh snap!!!!!\nThe " + whoAttacksFirst.party + " is sending a nuke towards the " + whichPartyToAttack.party + "! It has begun!!!\n");
    
    var myVar = setInterval(myFunction, 5000);
    function myFunction() {
        if (penguins.pop > 0 && communists.pop > 0) {
            //attackedParty();
            onHit = onTheHit();
            if (penguins.pop < 500000 && penguins.pop > 450000) {
             console.log("\n\tWhooaa ooOOHH we're halfway there!\n\tWhooaa ooOOHH Penguin and a Pear!!!\n");
            }
            onMiss = onTheMiss();
        } else {
                if (communists.pop < 0) {
                    console.log("\tThe war between Penguins and Communists has ended. Penguins won, but Earth is basically destroyed... Even the ghosts died, hence the negative number. Well played Penguins, well played.\n");
                } else {
                    console.log("\tThe war between Penguins and Communists has ended. Communists won, but Earth is basically destroyed... Even the ghosts died, hence the negative number. Well played you dirty commies, well played.\n");
                }
            clearInterval(myVar);
        }
    }
};

sendNuke();