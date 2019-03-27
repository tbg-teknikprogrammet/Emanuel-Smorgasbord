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


var SlideNum = 1;
var ButtonRight = document.getElementsByClassName("slide-right");
var ButtonLeft = document.getElementsByClassName("slide-left");
var ImageOne = "assets/images/mountains.jpg";
var ImageTwo = "assets/images/mountains2.png";
var ImageThree = "assets/images/mountains3.png";

ButtonRight.addEventListener("click", function() {
    SlideNum++
});

ButtonLight.addEventListener("click", function() {
    SlideNum--
});


if(SlideNum = 1) {
    ImageTwo.style.visibility = "hidden";
    ImageThree.style.visibility = "hidden";
} 

else if(SlideNum = 2) {
    ImageOne.style.visibility = "hidden";
    ImageThree.style.visibility = "hidden";
}

else if(SlideNum = 3){
    ImageOne.style.visibility = "hidden";
    ImageTwo.style.visibility = "hidden";
}