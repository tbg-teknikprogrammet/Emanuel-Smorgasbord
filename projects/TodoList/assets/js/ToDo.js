
document.getElementsByTagName("button")[0].addEventListener("click", List)

var ToDoList = []

function List() {

        var putin = 0;
     
        while(putin != "q" || putin != "Q") { // Do while the q button is not pressed

            putin = prompt("Vad vill du göra?");

            if(putin == "L" || putin == "l") {
                console.log(ToDoList)
                // for(var i = 0; i <= ToDoList.length; i++) {
                //     console.log(ToDoList)
                // }
             }  
             
             else if(putin == "N" || putin == "n") {
                 var addNew = prompt("Write something to add to the list")
                 ToDoList.push(addNew); // Add thing to the array
                 console.log("You added " + addNew + " to the list!")
             }
             
             else if(putin == "R" || putin == "r") {
                    var removeIt = Number(prompt("Write a number to remove from the list"))
                 
                    ToDoList.splice(removeIt, 1) // Remove a chosen item from the list
                    console.log(ToDoList)
                 }
                   
             else if(putin == "q" || putin == "Q") // Stops the loop, basically cancel the action if you for example pressed "n"
                break;
        }
        if(putin == "q" || putin == "Q") // Quit the prompt
            console.log("Closing...")
}