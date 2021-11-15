const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

todoButton.addEventListener('click', addTODO);
todoList.addEventListener('click', deleteItem); 

document.addEventListener('DOMContentLoaded', grabTodos())
//Functions
function addTODO(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todoItem");
    todoDiv.appendChild(newTodo);
    
    saveLocalTodos(todoInput.value);

    const compButton = document.createElement('button');
    compButton.innerHTML = '<i class="fas fa-check"></i>';
    compButton.classList.add("completeButton");
    todoDiv.appendChild(compButton);
    
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add("removeButton");
    todoDiv.appendChild(removeButton);

    todoList.appendChild(todoDiv);
    
    todoInput.value = "";
}

function deleteItem(e) {
    if (e.target.classList == "removeButton") {
        e.target.parentElement.remove();
        removeCompletedLS(e.target.parentElement);
        // e.target.parentElement.classList.add("falling");

        // e.target.parentElement.addEventListener('transitionend', function() {
        //     e.target.parentElement.remove();
        // });
    }
    if (e.target.classList == "completeButton") {
        e.target.parentElement.classList.toggle("completed");
        // saveCompleted(e.target.parentElement);
    }
};


//Local Storage Save Function

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function grabTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
    
        const newTodo = document.createElement('li')
        newTodo.innerText = todo
        newTodo.classList.add("todoItem");
        todoDiv.appendChild(newTodo);
    
        const compButton = document.createElement('button');
        compButton.innerHTML = '<i class="fas fa-check"></i>';
        compButton.classList.add("completeButton");
        todoDiv.appendChild(compButton);
        
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        removeButton.classList.add("removeButton");
        todoDiv.appendChild(removeButton);
    
        todoList.appendChild(todoDiv);
    });
}


//Remove Local Storage

function removeCompletedLS(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos));
}

// function saveCompleted(todo) {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
// }