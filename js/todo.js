const $toDoForm = document.querySelector(".todo-form");
const $toDoInput = document.querySelector(".todo-form input");
const $toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos"
let toDos = [];

$toDoForm.addEventListener("submit", handleToDoSubmit);
checkToDos();

function checkToDos() {
    const savedToDos = localStorage.getItem(TODOS_KEY);

    if(savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        parsedToDos.forEach(el => {
            toDos.push(el);
            paintToDo(el);
        });
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDoValue = $toDoInput.value;
    $toDoInput.value = "";

    const newToDo = {
        id: Date.now(),
        text: newToDoValue,
    }

    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

function paintToDo(newToDo) {
    const $toDoItem = document.createElement("li");
    const $toDoItemSpan = document.createElement("span");
    const $toDoItemDeleteBtn = document.createElement("button");
    const $toDoItemDeleteBtnImage = document.createElement("img");

    $toDoItemDeleteBtn.append($toDoItemDeleteBtnImage);
    $toDoItem.appendChild($toDoItemSpan);
    $toDoItem.appendChild($toDoItemDeleteBtn);
    $toDoList.appendChild($toDoItem);

    $toDoItem.classList.add("todo-item");
    $toDoItem.id = newToDo.id;
    $toDoItemSpan.innerText = newToDo.text;
    $toDoItemDeleteBtnImage.src = "svg/trash-can-solid.svg";
    $toDoItemDeleteBtn.addEventListener("click", deleteToDoItem)
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDoItem(event) {
    const $toDoItem = event.target.parentElement;
    const toDoItemID = $toDoItem.id;
    toDos = toDos.filter(el => el.id !== parseInt(toDoItemID));
    saveToDos();
    $toDoItem.remove();
}