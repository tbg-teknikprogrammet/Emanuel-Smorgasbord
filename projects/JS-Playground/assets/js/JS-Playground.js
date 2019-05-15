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
var SlideNum = 2;
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


// Color changing button 
document.addEventListener("keydown", function(event) { // Listens to a button press
    if(event.which == 67) { // If the button is c, do something
        document.querySelector(".sec3").style.backgroundColor = "#eb1f1f"; // .sec3 gets the color red when c is pressed
    }
    else if(event.which == 66) {
        document.querySelector(".sec3").style.backgroundColor = "#3ad31c"; // Green
    }

    else if(event.which == 65) { // Attempt for a button that changes colors automatically
        document.addEventListener("keydown", function() {
            setInterval(function() {
                document.getElementsByTagName("body").classList.toggle("toggleBg") // toggleBg is the class that adds the color
            }, 200); // <-- does this work?
        });
    }

    else {
        document.querySelector(".sec3").style.backgroundColor = "#302e2e"; // Any other button is presed, return to normal
    }
  
});

// Clicker game?

var Clicks = 0;
var IsButton = false;
var UpgradeButton = document.querySelector(".UpgradeButton");


var ClickButton = document.querySelector(".TheClicker");
ClickButton.addEventListener("click", function() {
    if(IsButton == true) {
        Clicks = Clicks + 1000;
    } else {
        Clicks++;
    }
    
if(Clicks == 10) {
    UpgradeButton.classList.remove("UpgradeButton");
    UpgradeButton.classList.add("UpgradeButtonVisible");
}
   
    document.querySelector(".Clicks").innerHTML = Clicks;
});
