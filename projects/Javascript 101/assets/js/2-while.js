// När använder vi while?
// När vi inte vet hur många gånger vi ska iterera

// var text = "";
// var i = 0;

// while(i <= 20) {
//     text += "Numret är: " + i + "<br>";
//     i+=2;
//     if(i > 6) {
//         break;
//     }
// }

//document.getElementById("output").innerHTML = text;

//---------Övning 1--------------
// var tal = -19;
// var text = "";

// while(tal != 20) {
//     text += tal + "<br>";
//     tal++;
//     document.getElementById("output").innerHTML = text;
// }

//----------Övning 2--------------
// var tal = 300;
// var text = "";

// while(tal <= 333) {
//     text += tal + "<br>";
//     tal++;

//     if(tal % 2 == 0) {
//         tal++;
//     }

//     document.getElementById("output").innerHTML = text;
// }

//----------Övning 3----------------
// var tal = 5;
// var text = "";

// while(tal <= 50) {
    
//     if(tal % 3 == 0 && tal % 5 == 0) {
//         text += tal + "<br>";
//     }
//     tal++;
//     document.getElementById("output").innerHTML = text;
// }

//-----------Övning 4---------------
// 
// ************************
// ----- Guessing app -----
// ************************
//


//  var number = 7;

//  while(userInput != number) {
//      var userInput = Number(prompt("Gissa ett nummer mellan 1-10"));
//      //Läsa villkoret
//      if(userInput === number) {
//         document.writeln("Bra jobbat, bro! <br>");
//      } 
//      else if(userInput >= 9001) {
//        document.writeln("It's over 9000!");
//      }
//      else if(userInput === 6 || userInput === 8) {
//         document.writeln("Du är riktigt nära! Försök igen.");
//       }
//      else if(userInput > number) {
//         document.writeln("Gissa lägre.");  
//      } 
//      else if(userInput < number) {
//         document.writeln("Gissa högre.");
//      }
//      else {
//         document.writeln("Endast siffror!");
//       }
 
//  }

//*****************
//Are we there yet?
//*****************