const todoForm = document.getElementById("frmTodo");
const todoInput = document.querySelector("#frmTodo input");
const todoList = document.getElementById("lstTodo");

const TODOS_KEY = "todos";

let todos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function displayTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleSubmitTodo(event){
    event.preventDefault();
    const valueTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text : valueTodo,
        id : Date.now(),
    };
    todos.push(newTodoObj);
    displayTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleSubmitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null){
    const parseTodos = JSON.parse(savedTodos);
    todos = parseTodos;
    parseTodos.forEach(displayTodo);       
    
}