// const divTodo = document.getElementById('todo');
const userInput = document.querySelector("input");
const subBtn = document.querySelector("button");
const todoList = document.getElementById("todoList");

todoList.addEventListener("click", (e) => {
    e.target.classList.toggle("strikethrough");
})
 

function addTodo(e) {
    e.preventDefault(); // prevent form submitting to a new html page
    const newTodo = userInput.value;// grabbing input value and storing into a varibale
    
    //check for empty string;
    if(newTodo === "") return;

    todoList.appendChild(document.createElement('li')).textContent = newTodo;
    userInput.value = "";


}
subBtn.addEventListener("click", addTodo);


// console.log(userInput);
