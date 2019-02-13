
// Select
var element = document.getElementById("highlight");

// Manipulate
element.style.color = "green";
element.style.border = "4px solid black";
element.style.backgroundColor = "grey";

var ele = document.querySelector("h1");
ele.classList.add("some-class"); // some-class in csss

// select
var newClass = document.getElementsByClassName("special")[0];

// manipulate
newClass.classList.add("anotherClass");
newClass.classList.remove("anotherClass");
newClass.classList.toggle("anotherClass"); 

// select the element
var Pone = document.getElementsByClassName(".test");
Pone.textContent = "w<strong>OA</strong>w";
Pone.innerHTML = "W<strong>O</strong>W";

// Chaining methods
document.getElementsByTagName("h1")[1].textContent = "TheEnd";
document.getElementsByTagName("h1")[1].innerHTML = "The <i>Epic</i>";

// Manipulating attributes
// Like src and href

var link = document.querySelector("a");
link.getAttribute("href"); //output
link.setAttribute("href", "https://www.reddit.com/");

document.getElementsByTagName("img")[0].setAttribute("src", "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-victory-royale-fortnite-gear.jpg")

