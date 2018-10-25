var name = "Emanuel"; // String
var age = 17; // Number
// == Jämför men kollar inte datatyp
// === Jämför och kollar datatyp

if (age < 18) {
    console.log("LMAO, you are only " + age + " years old")
}
else if(age > 18 && age < 48) {
    console.log("Youre age is too cool 4 school")
}
else {
    console.log("Watch this xd!")
}  
/* 
************************
----- Guessing app -----
************************
 */

 //Variabel
var number = 7;

while(userInput != number) {
    //Input
    var userInput = Number(prompt("Gissa ett nummer mellan 1-10"));
    //Läsa villkoret
    if(userInput === number) {
       document.writeln("Bra jobbat, bro! <br>");
    } 
    else if(userInput >= 9001) {
      document.writeln("It's over 9000!");
    }
    else if(userInput === 6 || userInput === 8) {
        prompt("Du är riktigt nära! Försök igen.")
     }
    else if(userInput > number) {
       document.writeln("Gissa lägre.");  
    } 
    else if(userInput < number) {
       document.writeln("Gissa högre.");
    }
    else {
       document.writeln("Endast siffror!");
     }

}

// var age = Number(prompt("Din ålder"));

//      if(age < 0) {
//       document.writeln("Va? Du är ju inte ens född än.");
//     } 
//     else if(age % 2 == 0) {
//        document.writeln("Balance in everything. As it should be.");
//      }
//     else if(age % 2 != 0) {
//       document.writeln("Not balance in everything. As it shouldn't be.");
//     }