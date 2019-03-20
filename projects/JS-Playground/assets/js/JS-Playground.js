var BigImageClass = document.querySelector(".BigLightBox");
var SlideNum = 0;
var SlideArr = ["assets/images/overwatch.jpeg","assets/images/mountains.jpg","assets/images/mountains2.png"]

var OnImageClick = document.querySelector(".LittleImage");

OnImageClick.addEventListener("click", function() {
    BigImageClass.style.visibility = "visible";
});

var OnBigImageClick = document.querySelector(".BigLightBox");

OnBigImageClick.addEventListener("click", function() {
    BigImageClass.style.visibility = "hidden";
});




