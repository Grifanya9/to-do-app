const input = document.getElementById("input");
const list = document.querySelector(".list");

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
    const todoEl = evt.target.closest(".item");
    if (todoEl) {
        todoEl.classList.toggle("complete");
    }
});

document.addEventListener("click", function(evt){
  const todoRemoveEl = evt.target.closest(".delete");
  if(todoRemoveEl){
      const todoEl = evt.target.closest(".item");
      todoEl.remove();
  }
});