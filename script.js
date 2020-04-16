const input = document.getElementById("input");
const list = document.querySelector(".todo-list");

function addToDo(toDo) {
    var item = `
        <li class="todo-item">
        <p class="text">${toDo}</p>
        <img class="todo-delete" src="res/img/close.jpg" alt="close"/>
        </li>
        `;

    list.insertAdjacentHTML("afterbegin", item);
}

document.addEventListener("keyup",function(evt){
    if (evt.key === "Enter") {
        let toDo = input.value;
        if (toDo) {
            addToDo(toDo);
        }
        input.value = "";
    }
});

document.addEventListener("click", function(evt){
    const element = evt.target.closest(".todo-item");
    if (element) {
        element.classList.toggle("complete");
    }
});

document.addEventListener("click", function(evt){
  const todoRemoveEl = evt.target.closest(".todo-item");
  if(todoRemoveEl){
      const todoEl = evt.target.closest(".todo-delete");
      todoEl.remove();
  }
});