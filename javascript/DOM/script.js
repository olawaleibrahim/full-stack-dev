var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        li.appendChild(deleteButton);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);

function insertButton(referenceNode, newNode) {
    // referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    var newButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
}

var li = document.querySelectorAll("li");

li.forEach(function(li, i) {
    console.log(li, i);
    var deleteButton = document.createElement("button");
    li.addEventListener("click", function() {
        li.classList.add("done");
    })
})

function deleteItem() {
    var buttons = document.getElementsByClassName("done");
    buttons.forEach(function(buttons) {
        buttons.addEventListener("click", function() {

        }) 
    })
}


