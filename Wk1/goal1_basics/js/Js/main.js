/**
 Terence Williams
 01/10/15
 Assignment: Goal 1: Duel 1
 */

// self-executing function
(function(){

console.log("FIGHT!!!");

//player name
    var playerOneName = "Kabul";
    var playerTwoName = "Kratos";

    //playerdamage
    var player1Damage = 50;
    var player2Damage = 50;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;


    function fight(){
        console.log('in the fight function');

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

   for (var i=0; i < 10; i++){
       console.log(i);

       //random formula created Math.floor(Math.random() * (max - min) + min);

       var minDamage1 = player1Damage * .5;
       var minDamage2 = player2Damage * .5;
       var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
       var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

       //console.log(f1);
       //console.log(f2);

       //inflict damage
       playerOneHealth-=f1;
       playerTwoHealth-=f2;




   };
    };


    function winnerCheck(){


    };

    /***** The program gets started below *****/
    console.log('program starts')
    fight();


})();