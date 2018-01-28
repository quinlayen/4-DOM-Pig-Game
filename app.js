

// function to determine which player it is and change players

// function to roll the dice randomly and assign that to the current score

// function to add final result to the players overall score

// function to determine if player will continue to roll again to save to GLBAL score

// victory condition is first player to reach 100.  Use a while loop indicating that all fucntions will work as long as player GLBAL score is less than 100

let score = [];
let roundScore = 0;
let activePlayer = 0;
let dice;
let globalScore;
let totalDice = 0;
let currentScore;

//this function starts a new game
let newGame = function(){
    
}

//this function is used to change the active player
let changeActivePlayer = function(){
    if (activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
};



// this function is used to change the globalScoring variable
let globalScoring = function(){
    if (activePlayer === 0){
        document.querySelector('#score-0').textContent=score[0]=(totalDice);
        changeActivePlayer();
    } else {
        document.querySelector('#score-1').textContent=score[1]=(totalDice);
        changeActivePlayer();
    }
};

// this function controls the roll mechanism of the game
let roll = function(){
    dice = Math.floor(Math.random()*6)+1;
    if (dice === 1){
        document.getElementById('dice').src=('dice-1.png');
    } else if (dice === 2){
        document.getElementById('dice').src=('dice-2.png');
    } else if (dice === 3) {
        document.getElementById('dice').src=('dice-3.png');
    } else if (dice === 4) {
        document.getElementById('dice').src=('dice-4.png');
    } else if (dice === 5) {
        document.getElementById('dice').src=('dice-5.png');
    } else {
        document.getElementById('dice').src=('dice-6.png');
    }

    if (dice !== 1){
        totalDice = dice + totalDice;
        currentScoring();
    } else {
        changeActivePlayer();
    }
};

let currentScoring = function(){
    if (activePlayer === 0){
        currentScore = document.getElementById('current-0').textContent = totalDice;
    } else {
        currentScore = document.getElementById('current-1').textContent = totalDice;
    }
}

document.querySelector('.btn-roll').addEventListener('click', roll);
document.querySelector('.btn-hold').addEventListener('click', globalScoring);