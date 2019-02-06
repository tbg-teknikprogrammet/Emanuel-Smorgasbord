document.URL
document.links
document.body
document.head

// select
// Matching ID
var elementy = document.getElementById("highligt");
console.log(elementy); // Log HTML
console.log(elementy); // Log object

// All with matching class name
var elements = document.getElementsByClassName("bolded");
console.log(elements);
console.log(elements);

// All with matching tag name
var eles = document.getElementsByTagName("li");

// Takes a string and argument and returns the first element that natches a given CSS-style selector
// Only first
var queryTag = document.querySelector(".bolded");

// All
var queryAllTag = document.querySelectorAll(".bolded");

// uPGifT p, id = first, class = special
var find1 = document.getElementById("first");

var find2 = document.getElementsByClassName("special")[0];

var find3 = document.getElementsByTagName("p")[0];

var find4 = document.querySelectorAll("#first")[0];

var find5 = document.querySelector("h1 + p"); // first p after h1
