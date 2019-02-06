
// Select
var element = document.getElementById("highlight");

// Manipulate
element.style.color = "green";
element.style.border = "4px solid black";
element.style.backgroundColor = "grey";

var ele = document.querySelector("h1");
ele.classList.add("some-class");

// select
var newClass = document.getElementsByClassName("special")[0];
// manipulate
newClass.classList.add("anotherClass");
newClass.classList.remove("anotherClass");
newClass.classList.toggle("anotherClass"); 