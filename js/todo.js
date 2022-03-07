const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDoItem(event) {
    const toDoItem = event.target.parentElement;
    const toDoItemID = toDoItem.id;
    toDos = toDos.filter(el => el.id !== parseInt(toDoItemID));
    saveToDos();
    toDoItem.remove();
}

function paintToDo(newToDo) {
    const toDoItem = document.createElement("li");
    const toDoItemContents = document.createElement("span");
    const toDoItemDeleteBtn = document.createElement("button");

    toDoItem.appendChild(toDoItemContents);
    toDoItem.appendChild(toDoItemDeleteBtn);
    toDoList.appendChild(toDoItem);

    toDoItem.id = newToDo.id;
    toDoItemContents.innerText = newToDo.text;
    toDoItemDeleteBtn.innerText = " X ";
    toDoItemDeleteBtn.addEventListener("click", deleteToDoItem)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDoValue = toDoInput.value;
    toDoInput.value = "";

    const newToDo = {
        id: Date.now(),
        text: newToDoValue,
    }

    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(el => {
        toDos.push(el);
        paintToDo(el);
    });
}