const click = document.getElementById("click");
const input = document.getElementById("input");
let list, id;
function addToDo(toDo) {
    var item = `
        <li class="todo-item">
        <p class="text">${toDo}</p>
        <img src="res/img/close.jpg" alt="close"/>
        </li>
        `;

    var position = "afterbegin";
    list.insertAdjacentHTML(position, item);
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
const elementJob = element.attributes.job.value;

if(elementJob == "complete"){

}else if(elementJob == "remove"){

}
});

//document.removeEventListener("click", function(evt){
//};