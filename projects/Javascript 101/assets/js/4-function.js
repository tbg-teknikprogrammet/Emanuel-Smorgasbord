// Föräldern sjunger och barnet lyssnar
// console.log("Blinka lilla stjärna där")
// console.log("Blinka lilla stjärna där")
// console.log("hur jag undrar vart du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

// // Barnet nynnar med
// console.log("Blinka lilla stjärna där")
// console.log("Blinka lilla stjärna där")
// console.log("hur jag undrar vart du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

// //Nu sjunger barnet den helt själv
// console.log("Blinka lilla stjärna där")
// console.log("Blinka lilla stjärna där")
// console.log("hur jag undrar vart du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

// This code is WET! Write Everything Twice
// Koden ska vara DRY. Dont Repeat Yourself

function twinkleTwinkle() {
    console.log("Blinka lilla stjärna där")
    console.log("Blinka lilla stjärna där")
    console.log("hur jag undrar vart du är")
    console.log("fjärran lockar du min syn")
    console.log("likt en diamant i skyn")    
}

// Call a function
twinkleTwinkle();
twinkleTwinkle();
twinkleTwinkle();

// Deklarera en funktion
function doSomething() {
    console.log("Hello World")
    console.log("Im doing something")
}

// Parameter och Argument

// Deklarerar en funktion med två stycken parametrar
function square(num, num1) {
    console.log(num * num1);

}

// Anropar funktionen med två stycker argument
square(5, 6);

function sayHello(name) {
    console.log("Hello there. " + name);
}

// Anropar funktionen med ett argument i form av en string två gånger
sayHello("General Kenobi...");
sayHello("alt + shift + pil ned");

function area(lenght, height) {
    console.log("The area of: " + lenght + " and " + height + " is: " + lenght * height); 
}

area(5, 10)

function greet(person1, person2, person3, person4) {
    console.log("Hej, " + person1 + "!")
    console.log("Hej, " + person2 + "!")
    console.log("Hej, " + person3 + "!")
    console.log("Hej, " + person4 + "!")
}

greet("Emanuel", "Edward", "Nilsson", "YEET")


function squared(x) {
    return x * x;
}

console.log("4 squared is: " + squared(4));

var result = squared(10);
console.log(result);