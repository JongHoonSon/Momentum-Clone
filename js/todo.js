const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDoItem(event) {
    const toDoItem = event.target.parentElement;
    toDoItem.remove();
}

function paintToDo(newToDo) {
    const toDoItem = document.createElement("li");
    const toDoItemContents = document.createElement("span");
    const toDoItemDeleteBtn = document.createElement("button");

    toDoItem.appendChild(toDoItemContents);
    toDoItem.appendChild(toDoItemDeleteBtn);
    toDoList.appendChild(toDoItem);

    toDoItemContents.innerText = newToDo;
    toDoItemDeleteBtn.innerText = "X";
    toDoItemDeleteBtn.addEventListener("click", deleteToDoItem)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);