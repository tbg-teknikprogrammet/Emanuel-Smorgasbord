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
var SlideNum = 1;
var ImageOne = "assets/images/mountains.jpg";
var ImageTwo = "assets/images/mountains2.png";
var ImageThree = "assets/images/mountains3.png";

var ButtonRight = document.querySelector(".slide-right"); // Select
ButtonRight.addEventListener("click", function() { // Manipulate
    SlideNum++;
});

var ButtonLeft = document.querySelector(".slide-left"); // Select
ButtonLeft.addEventListener("click", function() { // Manipulate
    SlideNum--;
});

if(SlideNum = 1) {
    ImageTwo.visibility = "hidden";
    ImageThree.visibility = "hidden";
} 

else if(SlideNum = 2) {
    ImageOne.style.visibility = "hidden";
    ImageThree.visibility = "hidden";
}

else if(SlideNum = 3) {
    ImageOne.visibility = "hidden";
    ImageTwo.visibility = "hidden";
}

// Color changing button

document.addEventListener("keydown", function(event) { // Listens to button press
    if(event.which == 67) { // If the button is c, do something
        document.querySelector(".sec3").style.backgroundColor = "#eb1f1f";
    }
    else if(event.which == 66) {
        document.querySelector(".sec3").style.backgroundColor = "#3ad31c"; // Green
    }

    else if(event.which == 65) {
        document.addEventListener("keydown", function() {
            setInterval(function() {
                document.getElementsByTagName("body")[0].classList.toggle("toggleBg")
            }, 200);
        });
    }

    else {
        document.querySelector(".sec3").style.backgroundColor = "#302e2e";
    }
  
    
});