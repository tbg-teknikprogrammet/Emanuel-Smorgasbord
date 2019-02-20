
var win = false;
var score = 0; // Playing to
var Player1 = 0;
var Player2 = 0;

var BtnPlayer1 = document.querySelector("#P1"); // Select the Player1

BtnPlayer1.addEventListener("click", function() { // Manipulate
    if(Player1 == PlayingTo.value) {

    } else if(Player1 == PlayingTo) {
        document.querySelector("#Wining-text").innerHTML = "<strong> Player one won! </strong>";

    } else {
        Player1 += 1; // Adds numbers
        document.querySelector("#Sc-one").innerHTML = Player1; // A variable because it needs to change        
    }
});

var BtnPlayer2 = document.querySelector("#P2"); // Select the Player2

BtnPlayer2.addEventListener("click", function() { // Manipulate
    Player2 += 1;
    document.querySelector("#Sc-two").innerHTML = Player2; // Same here
});

// How long will play to?
var PlayingTo = document.querySelector(".userInp"); // Select


PlayingTo.addEventListener("click", function() {
    // score += 1;
    document.querySelector("#PlayingTo").innerHTML = PlayingTo.value;
});


do {

} while(win = false && score != 10)


// Reset, make everything as it was from the begining
// If input = score, make win = true
