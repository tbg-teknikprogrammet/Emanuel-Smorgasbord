
var win = false;
var score = 0; // Playing to
var Player1 = 0;
var Player2 = 0;
var Player1Class = document.querySelector("#Sc-one");
var Player2Class = document.querySelector("#Sc-two");

// How long will you play to?
var PlayingTo = document.querySelector(".userInp"); // Select
PlayingTo.addEventListener("click", function() {
    document.querySelector("#PlayingTo").innerHTML = PlayingTo.value;
});
//**********************
PlayingTo.value = 1;

// Select the Player1 -- ONE
var BtnPlayer1 = document.querySelector("#P1"); // Select
BtnPlayer1.addEventListener("click", function() { // Manipulate
    if(win == false) {
        Player1 += 1; // Adds numbers to html
        document.querySelector("#Sc-one").innerHTML = Player1; // A variable because it needs to change  
    } 

    if(Player1 == PlayingTo.value) { 
        win = true;
        document.querySelector("#Wining-text").innerHTML = "<strong> Player one won! </strong>";
        Player1Class.classList.add("ColorWin");
        Player2Class.classList.add("ColorLose");
    }
});
//***********************


// Select the Player2 -- TWO
var BtnPlayer2 = document.querySelector("#P2"); // Select
BtnPlayer2.addEventListener("click", function() { // Manipulate
    if(win == false) {
        Player2 += 1;
        document.querySelector("#Sc-two").innerHTML = Player2;
    }

    if(Player2 == PlayingTo.value) {
        win = true;
        document.querySelector("#Wining-text").innerHTML = "<strong> Player two won! </strong>";
        Player2Class.classList.add("ColorWin");
        Player1Class.classList.add("ColorLose");
    }
        
});
//***********************

// Reset the scorekeeper
var BtnReset = document.querySelector(".RS"); // Select
BtnReset.addEventListener("click", function() { // Manipulate
    win = false;
    score = 0;
    Player1 = 0;
    document.querySelector("#Sc-one").innerHTML = Player1;
    Player2 = 0;
    document.querySelector("#Sc-two").innerHTML = Player2;

    document.querySelector("#Wining-text").innerHTML = "";
    document.querySelector("#PlayingTo").innerHTML = "0";
    Player2Class.classList.remove("ColorWin");
    Player1Class.classList.remove("ColorWin");
    Player1Class.classList.remove("ColorLose");
    Player2Class.classList.remove("ColorLose");

});
//**********************