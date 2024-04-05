// const divTodo = document.getElementById('todo');
const userInput = document.querySelector("input");
const subBtn = document.querySelector("button");
const todoList = document.getElementById("todoList");
const todoListArr = document.getElementsByTagName("ul")

todoList.addEventListener("click", (e) => {
    e.target.classList.toggle("strikethrough");
})
 

function addTodo(e) {
    e.preventDefault(); // prevent form submitting to a new html page
    const newTodo = userInput.value;// grabbing input value and storing into a varibale
    // console.log(userInput.value)

    
    //check for empty string; // validate if string is empty or not
    if(newTodo === ""){
        alert("Cannot be empty")
        return;
    };
    // atempting to check if item is already in todo list but cant get it to check items

    for(let i =0; i < todoListArr.length; i++){
        // console.log(todoListArr[i].innerText)
        if(newTodo === todoListArr[i].innerText ){
           alert("Error")
            return;
        } 
    }

        todoList.appendChild(document.createElement('li')).textContent = newTodo; 
        userInput.value = "";    
 

}
subBtn.addEventListener("click", addTodo);

