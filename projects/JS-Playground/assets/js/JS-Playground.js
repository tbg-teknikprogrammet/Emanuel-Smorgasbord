var BigImageClass = document.querySelector(".BigLightBox");
var SlideNum = 0;
var OnImageClick = document.querySelector(".LittleImage");

OnImageClick.addEventListener("click", function() {
    BigImageClass.style.visibility = "visible";
});

var OnBigImageClick = document.querySelector(".BigLightBox");

OnBigImageClick.addEventListener("click", function() {
    BigImageClass.style.visibility = "hidden";
});

// Sliderino
var SlideNum = 3;
var ImageOne = document.getElementsByTagName("img")[1];
var ImageTwo = document.getElementsByTagName("img")[2];
var ImageThree = document.getElementsByTagName("img")[3];


var ButtonRight = document.querySelector(".slide-right"); // Select
ButtonRight.addEventListener("click", function() { // Manipulate
    SlideNum++; // Adds numbers to SlideNum so that the if's work

    if(SlideNum > 3) {
        SlideNum = 1;
    }
    SlideFunc();
});

var ButtonLeft = document.querySelector(".slide-left"); // Select
ButtonLeft.addEventListener("click", function() { // Manipulate
    SlideNum--;

    if(SlideNum < 1) {
        SlideNum = 3;
    }
    SlideFunc();
});

function SlideFunc() {
    if(SlideNum == 1) { // The if's where all pictures except one is visible depending on "SlideNum"
        ImageOne.style.visibility = "visible"; // Visible
        ImageTwo.style.visibility = "hidden";
        ImageThree.style.visibility = "hidden";
    } 

    else if(SlideNum == 2) {
        ImageOne.style.visibility = "hidden";
        ImageTwo.style.visibility = "visible"; // Visible
        ImageThree.style.visibility = "hidden";
    }

    else if(SlideNum == 3) {
        ImageOne.style.visibility = "hidden";
        ImageTwo.style.visibility = "hidden";
        ImageThree.style.visibility = "visible"; // Visible
    }
}

// Color changing buttons 
var ColorLoop
var PressedOnce = false;
function thisfunc() {
    ColorLoop = setInterval(function() {
        document.getElementsByTagName("body")[0].classList.toggle("toggleBg");// toggleBg is the class that adds the color
        document.getElementsByTagName("section").classList.toggle("toggleBorder");
    }, 300);
}
if(PressedOnce == false) { // This if does nothing atm, was an attempt to make it allowed for only one press on the "A" key.
    document.addEventListener("keydown", function() { // Listens to a button press through the whole page
        if(event.which == 67) { // If the button is C, do something
            document.querySelector(".sec3").style.backgroundColor = "#eb1f1f"; // .sec3 gets the color red when c is pressed
        }
        else if(event.which == 66) { // B
            document.querySelector(".sec3").style.backgroundColor = "#3ad31c";
        }
        else if(event.which == 65) { // Attempt for "A" button that changes colors automatically
            thisfunc(); // Dont press "A" twice..
            PressedOnce = true;
        }
        else {
            document.querySelector(".sec3").style.backgroundColor = "#302e2e"; // Any other button is presed, return to normal
        }  
        if(event.which == 27) {
            // alert("You pressed: esc");
            clearInterval(ColorLoop);
            document.getElementsByTagName("body")[0].classList.remove("toggleBg");
            document.getElementsByTagName("section")[0].classList.remove("toggleBorder");
    
        }
    });    
} else if(PressedOnce == true) {

}

// Clicker game!
var Clicks = 0;
var ButtonClicked = false;
var UpgradeButton = document.querySelector(".UpgradeButton");
var UpgradeButton2 = document.querySelector(".UpgradeButton2");
var ClickButton = document.querySelector(".TheClicker");
var ClickerWin = document.querySelector(".ClickerWin");
do { // After Clicks is 10, a button will appear and if you click it, you get Clicks * 1000 // Kom på do whilen själv, kände mig ganska smart
    UpgradeButton.addEventListener("click", function() {
        ButtonClicked = true;
        Clicks = Clicks - Clicks; // "A small price to pay" -Thanos
        document.querySelector(".Clicks").innerHTML = Clicks; // Updates Clicks in html
        UpgradeButton.style.visibility = "hidden";
        
    });
} while(Clicks >= 10);

ClickButton.addEventListener("click", function() { // Satt fast här och kom sen på hela lösningen själv, kände mig ganska smart
    if(ButtonClicked == true && Clicks >= 50000) {
        document.querySelector(".addQuestionMark").innerHTML = "???"; 
        Clicks = Clicks + 1000; 
    } else if(ButtonClicked == true) {
        document.querySelector(".addQuestionMark").innerHTML = "??";  
        Clicks = Clicks + 1000;  
    } else
        Clicks++;
    
if(Clicks >= 10 && Clicks <= 11) { // Do something when Clicks are at 10
    UpgradeButton.classList.remove("UpgradeButton");
    UpgradeButton.classList.add("UpgradeButtonVisible");
    
} else if(Clicks >= 100000) { // Win when you have clicked 100 000 times
    UpgradeButton2.classList.remove("UpgradeButton2");
    UpgradeButton2.classList.add("UpgradeButtonVisible2");
  
}
    document.querySelector(".Clicks").innerHTML = Clicks;
});

UpgradeButton2.addEventListener("click", function() {
    ClickerWin.style.visibility = "visible";
});

// Scorekeeper ------------------------------------------------------------------
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
//------------------------------------------------------------------------------------


// VIDEO PLAYER -------------------------

// Play/pause
var HelloThere = document.getElementsByClassName("VideoPlayer")[0];
var PlayOrPause = document.getElementsByClassName("Tool1")[0];
var IsPaused = true;
PlayOrPause.addEventListener("click", function() {
    if(IsPaused == true) {
        HelloThere.play();
        IsPaused = false;
        document.querySelector(".Tool1").innerHTML = "Pause";
    } else if(IsPaused == false) {
        HelloThere.pause();
        IsPaused = true;
        document.querySelector(".Tool1").innerHTML = "Play";
    }   
});
// Size
var ScaleVideo = document.getElementsByClassName("Tool2")[0];
var IsBig = true;
ScaleVideo.addEventListener("click", function() {
    if(IsBig == true) {
        HelloThere.style.width = "200px";
        IsBig = false;
    } else if(IsBig == false) {
        HelloThere.style.width = "400px";
        IsBig = true;
    }
});
// Volume
var VolumeControll = document.getElementsByClassName("Tool3")[0];
var IsVolumeOn = true;
VolumeControll.addEventListener("click", function() {
    if(IsVolumeOn == true) {
        HelloThere.volume = 0;
        IsVolumeOn = false;
        document.querySelector(".Tool3").innerHTML = "Unmute";
    } else if(IsVolumeOn == false) {
        HelloThere.volume = 1;
        IsVolumeOn = true;
        document.querySelector(".Tool3").innerHTML = "Mute";

    }
});
// Moving the video?
function MovingVideo() { // Does not work :(
    var position = 0;
    var AnimatedVideo = document.querySelector(".VideoPlayer");
    var Animation = setInterval(frame, 5);
    function frame() {
        if(position == 10) {
            clearInterval(Animation);
        } else {
            position++;
            AnimatedVideo.style.top = position + "px";
            AnimatedVideo.style.left = position + "px";
        }
    }
}
var Animate = document.getElementsByClassName("Tool4")[0];
Animate.addEventListener("click", function() {
    MovingVideo()
});
    
    




