/**
 Terence Williams
 01/22/15
 Assignment: Goal 4: Duel 3
 */

// self-executing function
(function(){

console.log("FIGHT!!!");


    // New game objects and arrays created

    var fighters = [
        playerOne = {name: "Kabal", damage: "20", health: "100"},
        playerTwo = {name: "Kratos", damage: "20", health: "100"}

        ];


    var round = 0;


    // Fight button variable created

    var fightButton = document.getElementById("buttonblue");


     // players health from DOM

    document.getElementById("playerOne").innerHTML = playerOne.name + ": " + playerOne.health;
    document.getElementById("playerTwo").innerHTML = playerTwo.name + ": " + playerTwo.health;


     // New fight function created

    function fight() {

        if (playerOne.health < 1 && playerTwo.health < 1) {
            return false;
        }

        //random formula created Math.floor(Math.random() * (max - min) + min);

        var minDamage1 = playerOne.damage * .5;
        var minDamage2 = playerTwo.damage * .5;
        var f1 = Math.floor(Math.random() * (playerOne.damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (playerTwo.damage - minDamage2) + minDamage2);

        //console.log(f1);
        //console.log(f2);

        //inflict damage
        playerOne.health = playerOne.health - f1;
        playerTwo.health = playerTwo.health - f2;

        var results = winnerCheck();

        console.log(results);

        if (results === "no winner") {
            round++;
            document.getElementById("playerOne").innerHTML = playerOne.name + ":" + playerOne.health;
            document.getElementById("playerTwo").innerHTML = playerTwo.name + ":" + playerTwo.health;
            document.getElementById("round").innerHTML = "round " + round + " : Finished!";
        } else {
            document.getElementById("playerOne").innerHTML = "";
            document.getElementById("playerTwo").innerHTML = "";
            document.getElementById("round").innerHTML = results;

            console.log(button);
            button.innerHTML = "Fatality!!!";
            button.setAttribute('onclick', null);

        }

    };

    function winnerCheck() {
        console.log("in winnerCheck FN");

        var result = "no winner";

        if (playerOne.health < 1 && playerTwo.health < 1) {
            result = "You Both Die";
        } else if (playerOne.health < 1) {
            result = playerTwo.name + "WINS!!!";
        } else if (playerTwo.health < 1) {
            result = playerOne.name + "WINS!!!";
        }

        return result;

    };


        fightButton.onclick = function(e) {
            fight();
            e.preventDefault();
            return false;

    }

})();