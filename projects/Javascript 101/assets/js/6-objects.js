var person = ["Sid", 25, "Land of ooo"];

console.log(person[2]);

// Reverse the order of data

var person2 = [32, "Riverwood", "Bert"]; // BorLänge

console.log(person2[2]);

// To model a person is perfect use case for object

var person = {
    name: "Bob", // Key: value pair
    age: 46, 
    hometown: "California"
};

// Order is non-existent in objects

// Take data from objects
console.log("This person's name is: " + person.name);

console.log(person.age);

person.age += 1;

console.log(person.age);

person.hometown = "pölse";


var oddNums = {}; // Empty object and add more items later on
oddNums.numberlolz = 1;
oddNums.String = "one";
oddNums.isOdd = true; // Made up by myself

// All at once

var doge = {
    name: "Doggo",
    breed: "Border Collie",
    age: 3,
    isFriend: true
}

var fish = new Object();
fish.name = "Fish";
fish.type = "Fish";
fish.age = 3;
fish.isLazy = false;


var junkObject = {
    name: "Junkrat",
    age: 41,
    color: "Explotions",
    isEvil: true,
    friends: ["Roadhog", "none1", "none3"],
    pet: {
        name: "Explotions",
        species: "Bomb",
        age: 20
    }
}

console.log(junkObject.pet.species)
console.log(junkObject.friends[0])
console.log(junkObject.isEvil)

var books = [
    { // Index 0
        author: "Emanuel Nilsson", 
        title: "How2Dab", 
        comments: ["So good! 10/10", "Such trash"]
    }, 
    { // Index 1
        author: "Ben Shapiro", 
        title: "Rek libtards 101", 
        comments: ["This book is epic!", "How could i have lived without this book!"]
    }
];

// array[index].objectProperty[index]
// console.log(books[1].comments[0]) // "This book is epic!"

for(var i = 0; i < books.length; i++) {
    console.log(books[i].title, books[i].author, books[i].comments);
}

var movies = [
    { // Movie 0
        Name: "Lord Of The Rings",
        Rating: "10/10",
        HasWatched: true, 
    }, 
    { // Movie 1
        Name: "Star Wars III", 
        Rating: "Hello there/10",
        HasWatched: true,
    },
    { // Movie 2
        Name: "Overwatch Stories", 
        Rating: "9.5/10",
        HasWatched: false,
    },
    { // Movie 3
        Name: "Bee Moive", 
        Rating: "11/10",
        HasWatched: true,
    }
];

movies.forEach(function(allMovies) {
    // can i use a for?
    if(movies.HasWatched == true) {
        console.log("- You have watched "); // What should i put here to make haswatched to "you have watched"?
    }
    else
        console.log("- You have not watched "); // Same as above

    console.log(allMovies);
});

// function movieList(allMovies) {
//     console.log(allMovies)
// }

// movieList();