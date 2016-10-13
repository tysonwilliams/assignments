var howManyActions = 30;

var player = {
    name: "tyson",
    totalCoins: 10,
    status: "small",
    isStarActive: false,
    setName: function(namePicked) {
        if(namePicked.toLowerCase() === "mario") {
            this.name = "Mario";
        } else if(namePicked.toLowerCase() === "luigi") {
            this.name = "Luigi";
        } else {
            alert("Name needs to be 'mario' or 'luigi'")
        }
    },
    gotHit: function() {
        switch (player.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            default:
                this.status = "Dead";
                this.gameActive = false;
        }
    },    
    gotPowerup: function() {
        if(this.status === "Big") {
           this.status = "Powered Up";
        }  else if(this.status === "Small") {
            this.status = "Big";
        } 
    },
    gameActive: true,
    addCoin: function() {
        this.totalCoins++
    },
    print: function() {
        console.log("Name: " + this.name + "\nCoins: " + this.totalCoins + "\nStatus: " + this.status);
    }
}

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doAction() {
    switch(getRandomInt(0, 2)) {
        case 0: 
            player.gotHit();
            break;
        case 1:
            player.gotPowerup();
            break;
        case 2:
            player.addCoin();
            break;
    }
}

for (var i = 0; i < howManyActions; i++) {
        doAction();
    }

player.print();