// Events n stuffs
// eventlistener( event, function, true/false) too meny

var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    setTimeout(function() {
        document.querySelector("p").innerHTML = "You clicked me! :D";
    }, 1000);
});

//select
var lis = document.querySelectorAll("li");

//manipulate
// lis[0].addEventListener("click", function() {
//     lis[0].style.textDecoration = "line-through"
// })
// lis[1].addEventListener("click", function() {
//     lis[1].style.textDecoration = "line-through"
// })
// lis[2].addEventListener("click", function() {
//     lis[2].style.textDecoration = "line-through"
// })

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.textDecoration = "line-through";
    });
}

// color changer

var btnToggle = document.querySelector("#btnToggleBg");
var isBlue = false;

btnToggle.addEventListener("click", function() {
    setInterval(function() {
        document.getElementsByTagName("body")[0].classList.toggle("toggleBg")
    }, 100);
   
    // if(isBlue) {
    //     document.getElementsByTagName("body")[0].style.background = "#29282c";
    // }
    // else {
    //     document.getElementsByTagName("body")[0].style.background = "#21082c";
    // }
    // isBlue = !isBlue
});


