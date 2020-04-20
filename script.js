function ToDolist(insertPoint, todos) {
    const containerHtml = `
            <div class="todo-container">
                <h1 class="todo-title">todos</h1>
                <ul class="todo-list"></ul>
                <input class="todo-input" type="text" placeholder="E.g. Build a web app">
            </div>
        `;
    insertPoint.insertAdjacentHTML("afterbegin", containerHtml);

    const container = insertPoint.children.item(0);
    const input = container.querySelector(".todo-input");
    const list = container.querySelector(".todo-list");

    todos.forEach(function (todo) {
        addToDo(todo);
    });

    function addToDo(toDo) {
        const item = `
        <li class="todo-item">
            <p class="text">${toDo}</p>
            <img class="todo-delete" src="res/img/close.jpg" alt="close"/>
        </li>
        `;
        list.insertAdjacentHTML("afterbegin", item);
    }

    function AddNewTodo(evt) {
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

    function removeTodo(evt) {
        const todoRemoveEl = evt.target.closest(".todo-delete");
        if (todoRemoveEl) {
            const todoEl = evt.target.closest(".todo-item");
            todoEl.remove();
        }
    }

    container.addEventListener("keyup", AddNewTodo);

    container.addEventListener("click", toggleTodo);

    container.addEventListener("click", removeTodo);
}
const todoInsertPoint1El = document.querySelector("#todoInsertPoint1");
const todoInsertPoint2El = document.querySelector("#todoInsertPoint2");

new ToDolist(todoInsertPoint1El,[
    "todo1",
    "todo2",
    "todo3",
]);
new ToDolist(todoInsertPoint2El,[
    "todo1",
    "todo2",
    "todo3",
]);