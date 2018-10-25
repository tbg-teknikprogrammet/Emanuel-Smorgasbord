//Jämförelse med while är att variablen enbart existerar i for-loopen
//for

for(var i = 0; i < 600; i++) {
    // console.log(i);
}

var str = "Hello World!";
for(var i = 0; i < str.length; i++) {
    // console.log(str[i]);
}
//             0     1       2      3  4  5
var myArr = ["Det", "Är", "Fredag", 1, 5, 9];
var len = myArr.length;
for(var i = 0; i < len; i++) {
    // console.log(myArr[i]);
}

// print all numbers between -10 and 19
for(var i = -10; i < 20; i++) {
    // console.log(i)
}


// print all even numbers between 10 and 40
for(var i = 10; i < 41; i++) {
    if(i % 2 == 0) {
        // console.log(i);
    }
}

// print all odd numbers between 300 and 333
for(var i = 300; i < 334; i++) {
    if(i % 2 == 1) {
        // console.log(i);
    }
}

// print all even numbers dividable by 5 and 3 between 5 and 50
for(var i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}