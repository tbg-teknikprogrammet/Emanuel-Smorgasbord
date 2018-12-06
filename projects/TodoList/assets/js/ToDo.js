
document.getElementsByTagName("button")[0].addEventListener("click", List)

var ToDoList = []

function List() {

    var putin = 0;
     
        while(putin != "q" || putin != "Q") {

            putin = prompt("Vad vill du göra?")

            if(putin == "L" || putin == "l") {
                console.log(ToDoList) // Visar listan
                // prompt(ToDoLista.length)
             }  
             
             else if(putin == "N" || putin == "n") {
                 ToDoList.push(" "); //Lägger till, till listan
                 console.log(ToDoList)
             }
             
             else if(putin == "R" || putin == "r") {
                 ToDoList.slice() // Tar bort från listan
                 console.log(ToDoList)
                 prompt(ToDoList)
             }
    
            //  else if(putin != "q" || putin != "Q")
            //     break;
        }
      
}