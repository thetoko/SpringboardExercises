const form = document.querySelector('#toDoList');
const todoInput = document.querySelector('input[name="todoitem"]');
const toDoList = document.querySelector('#results');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = document.createElement('button')
    const newItem = document.createElement('li');
    button.innerText = 'Remove';
    newItem.innerText = todoInput.value;
    toDoList.appendChild(newItem)
    newItem.appendChild(button);
    todoInput.value = '';
});

toDoList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('complete');
    }
});