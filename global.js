const list = document.getElementById("list");
const input = document.getElementById("input");

let LIST, id;
let data = localStorage.getItem("todo");
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else{
    LIST = [];
    id = 0;
}

function addToDo(todo, id){

    const item = `<li class="todo-item">
                <p class="text"></p>
                <img src="res/img/close.jpg" alt="close"/>
            </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup",function(evt){
    if(evt.code === Enter){
        const todo = input.value;
        if(todo){
            addToDo(todo, id, false, false);

            LIST.push({
                name : todo,
                id : id,
                done : false,
                trash : false
            });
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.input.value;

    if(elementJob == "addtodo"){
        addToDo(element);
    }else if(elementJob == "return"){
        return(element);
    }

    // add item to localstorage ( this code must be added where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});