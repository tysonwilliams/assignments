var enemies = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEnemyType() {
    var enemyTypes = ["Prowler", "Mighty Grunt", "Ancient Dragon"]
    var random = getRandomInt(0, 2);
    return enemyTypes[random];
}

function getHitPoints(enemyType) {
    if (enemyType === "Prowler") {
        return getRandomInt(50, 79);
    } else if (enemyType === "Mighty Grunt") {
        return getRandomInt(20, 49);
    } else {
        return getRandomInt(80, 100);
    }
}

function Enemy() {
    this.type = getEnemyType();
    this.hp = getHitPoints(this.type);
    this.defense = this.hp * 3;
}

for(var i = 0; i < 100; i++) {
    enemies.push(new Enemy());
}

console.log(enemies);