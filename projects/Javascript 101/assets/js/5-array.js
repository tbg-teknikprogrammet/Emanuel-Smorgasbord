var friend1 = "Ingen";
var friend2 = "Inge";
var friend3 = "Ing";
var friend4 = "In";

var friends = ["Ingen", "Inge", "Ing", "In"];
// startar på 0
console.log(friends[0] + " " + friend1);

var colours = ["Red", "Green", "Blue"];
var colors = new Array();

//push() - Lägga till en grej till en array
colours.push("Magneta");
console.log(colours);

//pop() - Tar bort den sista grejen i en array
colours.pop();
console.log(colours);

//unshift() - Lägger till en grej till början av en array
colours.unshift("Despacito");
console.log(colors);

//shift() - Tar bort en grej till början av en array
colours.shift();
console.log(colours);

//indexOf() - Hittar indexen av en grej i en array
console.log(colours.indexOf("Green"));
console.log(colours.indexOf("Cyan"));

//slice() - Kopiera delar av en array
var fruits = ["Mango", "Banan", "Citron", "Ananas", "Apelsin", "lol"]

var citrus = fruits.slice(2, 4);
console.log(citrus);

var copyFruits = fruits.slice(fruits);
console.log(copyFruits);

//            0         1       2        3         4          5           6          7
var cars = ["Audi", "Volvo", "Ford", "Ferrari", "Lada", "Lamborghini", "Subaru", "Citroën"];
for(var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

var countries = ["Sweden", "Norway", "Finland", "Denmark", "Island"];
countries.forEach(function(country) {
    console.log(country);
});

function countryList(country) {
    console.log("****************");
    console.log(country);
    
}

countries.forEach(countryList);



function printReverse(thisArray) {
    for(var i = thisArray.length -1; i >= 0; i--) {
        // console.log(thisArray[i]);
    }
}

printReverse([1,2,3,4,5]);

function isIdentical(anotherArr) {
    var what = [1,0,1,1];
    for(var i = 0; i < anotherArr.length; i++) {
        if(what === anotherArr) {
            // console.log("True")
        }
        else {
            // console.log("False")
        }
    }
}

// sumArray

function sumArray(ArrAnswer) {
    var sum = 0

    for(var i = 0; i < ArrAnswer.length; i++) {
        sum += ArrAnswer[i];
    }
    console.log(sum)
    return sum;
}

sumArray([1,9,327,1000]);

