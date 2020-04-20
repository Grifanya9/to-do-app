const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");

const todos = [
    "todo1",
    "todo2",
    "todo3",
    "todo4",
];

for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    addToDo(todo);
}

function addToDo(toDo) {
    const item = `
        <li class="todo-item">
            <p class="text">${toDo}</p>
            <img class="todo-delete" src="res/img/close.jpg" alt="close"/>
        </li>
    `;

    list.insertAdjacentHTML("afterbegin", item);
}

function onAddNewTodo(evt) {
    if (evt.key === "Enter") {
        let toDo = input.value;
        if (toDo) {
            addToDo(toDo);
        }
        input.value = "";
    }
}

function toggleTodo(evt) {
    const element = evt.target.closest(".todo-item");
    if (element) {
        element.classList.toggle("complete");
    }
}

function removeTodo(evt){
    const todoRemoveEl = evt.target.closest(".todo-delete");
    if(todoRemoveEl){
        const todoEl = evt.target.closest(".todo-item");
        todoEl.remove();
    }
}

document.addEventListener("keyup", onAddNewTodo);

document.addEventListener("click", toggleTodo);

document.addEventListener("click", removeTodo);