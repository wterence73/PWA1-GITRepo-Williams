/**
 Terence Williams
 01/22/15
 Assignment: Goal 4: Duel 3
 */

// self-executing function
(function(){

console.log("FIGHT!!!");

//game player names

    var playerNames = ["Wonder Woman", "Cat Woman", "Kabul", "Batman", "Superman", "Kratos"];
    var playerOneName = playerNames[2];
    var playerTwoName = playerNames[5];


    // New game objects created

    var playerOne = {name: "Kabal", damage: "20", health: "100"

    };

    var playerTwo = {name: "Kratos", damage: "20", health: "100"

    };

    // New player arrays created

    var playerArrays = playerOne("Kabal", "20", "100");
    var playerArrays1 = playerTwo("Kratos", "20", "100");



    //game play playerdamage

    var playerDamage = ["10", "20", "30", "40", "50", "60"];
    var player1Damage = playerDamage[1];
    var player2Damage = playerDamage[1];

    //game play player health status

    var playerHealth = ["10", "25", "50", "80", "100"];
    var playerOneHealth = playerHealth[4];
    var playerTwoHealth = playerHealth[4];
    var round=0;


    // New fight function created

    function fight(){
        console.log('in the fight function');

        var playerStart = playerOne.name;
        var playerStart1 = playerOne.health;
        var playerStart2 = playerTwo.name;
        var playerStart3 = playerTwo.health;


        // Access to DOM

        var playerAccess = document.getElementById("scores");
        var playerAccess1 = document.getElementById("Kabal");
        var playerAccess2 = document.getElementById("Kratos");

        console.log(playerAccess);
        console.log(playerAccess1);
        console.log(playerAccess2);

        // Access the innerHtml

        playerAccess.innerHTML = "100";
        playerAccess1.innerHTML = "Kabal";
        playerAccess2.innerHTML = "Kratos";



   for (var i=0; i < 10; i++){
       console.log(i);

       //random formula created Math.floor(Math.random() * (max - min) + min);

       var minDamage1 = playerOne.damage * .5;
       var minDamage2 = playerTwo.damage * .5;
       var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1);
       var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);

       //console.log(f1);
       //console.log(f2);

       //inflict damage
       playerOne.health-=f1;
       playerTwo.health-=f2;

       console.log(playerOne.health);
       console.log(playerTwo.health);

       console.log(playerOne.name+":"+playerOne.health+" "+playerTwo.name+":"+playerTwo.health);

       var results = winnerCheck();
       console.log(results);

       if (results === "no winner"){
          round++;
           playerAccess.innerHTML = "100";
           playerAccess1.innerHTML = "Kabal";
           playerAccess2.innerHTML = "Kratos";
       }else{
           console.log(results);
           break;
       }


   };
    };


    function winnerCheck(){
        console.log("in winnerCheck FN");


        var result="no winner";

        if (playerOne.health<1 && playerTwo.health<1) {
            result = "You Both Die";
        } else if(playerOne.health<1){
            result =playerTwo.name+"WINS!!!";
        } else if(playerTwo.health<1) {
            result = playerOne.name + "WINS!!!";
        }

        return result;



    }

    /***** The program gets started below *****/
    console.log('program starts');
    fight();


})();