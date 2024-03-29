// ASI: Automatic Semicolon Insertion

let pokemonBall = "Othman"
var student = "Medine"
const age = 21

// Variablen um die HTML Komponenten zu fangen und manipulieren
let todolistInputField = document.getElementById("todoInputField");
let todolistSubmitButton = document.getElementById("addButton");
let todolistBody = document.getElementById("todoList");

function addTodo() {
    //alert("Hurray, you just triggert your first Event with Click")
    let todoInputValue = todolistInputField.value.trim();

    if (todoInputValue !== "") {

        let textNode = document.createTextNode(todoInputValue);

        //alert(todoInputValue);
        let newTodoBody = document.createElement("li");

        newTodoBody.classList.add("list-group-item");

        // zufügen und löschen Button
        let deleteButton = document.createElement("button");

        // add 
        deleteButton.textContent = "Delete Todo";
        deleteButton.onclick = function () {
            this.parentElement.remove();
        }

        //newTodoBody.appendChild(todoInputValue);
        newTodoBody.appendChild(textNode);

        // add delete Button
        newTodoBody.appendChild(deleteButton);

        todolistBody.appendChild(newTodoBody);

        confetti({
            shapes: "triangle"
        })

        todolistInputField.value = "";
    }
}

todolistSubmitButton.addEventListener("click", () => {
    addTodo();
})

todolistInputField.addEventListener("keypress", (taste) => {
    if (taste.key === "Enter") {
        addTodo();
    }
})

function HelloWorld() {
    alert("Hello World");
}

//HelloWorld(); //Funktionen müssen zur Arbeit gerufen werden
