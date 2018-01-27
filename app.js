/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// function to determine which player it is and change players

// function to roll the dice randomly and assign that to the current score

// function to add final result to the players overall score

// function to determine if player will continue to roll again to save to GLBAL score

// victory condition is first player to reach 100.  Use a while loop indicating that all fucntions will work as long as player GLBAL score is less than 100

let score = [];
let roundScore = 0;
let activePlayer = 0;

//let dice = Math.floor(Math.random()*6)+1

dice = 1;
   if (dice === 1){
       document.getElementById('dice').src=("dice-1.png")
   }
