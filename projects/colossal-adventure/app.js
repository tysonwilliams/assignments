var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hi adventurous soul! What's your name? ");

readlineSync.question("Ahhh " + userName + "! Are you ready to embark on your journey? There may be both treasures to find and enemies to fight. Type 'w' then press Enter to see your starting inventory: ");

var user = {Name: userName, HP: 70, Items: []};

console.log(user);

readlineSync.question("This is your beginning inventory. Type 'w' and press Enter to continue: ");
    
var journeying = true;

var noEnemy = 0;
var enemies = [{HP: 25, attack: 35, name: "Bolrog"},
{HP: 45, attack: 55, name: "Gorgon"},
{HP: 75, attack: 85, name: "Dragoni"}];

function randomEnemy() { 
    var whichEnemy = Math.floor((Math.random() * 4));
    return whichEnemy;
}

var getEnemy = randomEnemy();

function contWalk() {
    readlineSync.question("Type 'w' to continue walking. ");
}

function encounterEnemy(enemy) {
    console.log("You have encountered a " + enemy.name + "!");
    var runOrFight = readlineSync.question("Do you want to fight or run? Type 'f' to Fight or 'r' to Run: ");
    if (runOrFight === "f") {
        fight();
    } else if (runOrFight === "r") {
        run();
    } else {
        console.log("You seem confused. You got eaten.");
        user.HP -= 50;
        readlineSync.question("Type 'print' to see your inventory: ");
        print();
        journeying = false;
    }
}

function fight() {
    var userAttack =readlineSync.question("Prepare to fight! Type 'a' then press Enter to attack! ");
    var attack = Math.floor((Math.random() * 100));
    if (attack > enemies[getEnemy].hp) {
        console.log("You killed the " + enemies[getEnemy].name + " " + userName + "! You get some HP and a special item that will be stored in your inventory.");
        user.HP += 5;
        user.items.push("special")
        readlineSync.question("Type 'print' to see your inventory: ");
        print();
    journeying = false;
    } else {
        enemyAttack();
    }
}

function enemyAttack() {
    console.log("Your attack didn't kill the " + enemies[getEnemy].name + "!");
    var enemyAttacks = Math.floor((Math.random() * 100));
    if (enemyAttacks < user.hp) {
        console.log("The " + enemies[getEnemy].name + " attacked you for " + enemyAttacks + ", but you survived.");
        encounterEnemy();
    } else {
        console.log(enemies[getEnemy].name + " attacked you for " + enemyAttacks + " damage! You were defeated!");
        user.HP -= enemyAttacks;
        readlineSync.question("Type 'print' to see your inventory: ");
        print();
        journeying = false;
    }
}

function run() {
    console.log("Run!!!!!");
    var escapeChance = Math.floor((Math.random() * 3));
    if (escapeChance < 2) {
        console.log("You escaped! Running takes away some energy though!");
        user.HP -= 25;
        readlineSync.question("Type 'print' to see your new HP. ");
        print();
    } else {
        console.log("You got eaten!");
        user.HP -= 50;
        readlineSync.question("Type 'print' to HPsee your inventory: ");
        print();
        journeying = false;
    }
}

while(journeying) {
    getEnemy = randomEnemy(); //Why does this make it work?
    console.log("You have begun... get ready " + userName + "!");
    if (getEnemy === 3) {
        console.log("You are enjoying your journey...");
        contWalk();
    } else {
        encounterEnemy(enemies[getEnemy]);
    }
}

function print() {
    console.log(user);
}