"use strict";
window.onload = function() {
    // reference to the input box
    var todoItemInput = document.getElementById("todoItemInput");


    // hitting enter (13) adds entry
    todoItemInput.onkeyup = function(event) {

        if (event.which === 13) {

            // grab text from input box
            var todoItemText = todoItemInput.value;

            // add new item to the list
            addTodoItem(document.getElementById("listContainer"), todoItemText);

        }

        // focus the text box upon page load
       //  todoItemInput.focus();

    };



    // reference to the input button
    var addButton = document.getElementById("addItemButton");



    // when button is clicked, add entry from the text box
    addButton.addEventListener('click', function() {

        // grab text from input box
        var todoItemText = todoItemInput.value;

        // add new item to the list
        addTodoItem(document.getElementById("listContainer"), todoItemText);
    });


    // focus the text box upon page load
    todoItemInput.focus();
};

function toDoItemStatus() {

    //remove "cb_" from checkbox id
    var checkboxId = this.id.replace("cb_", "");


    var todoItemText = document.getElementById("item_" + checkboxId);

    // applies line through style over text when checked

    if (this.checked) {
        todoItemText.className = "checked";
        todoItemText.parentElement.style.backgroundColor = "#efefef";

    } else {
        todoItemText.className = "";
        todoItemText.parentElement.style.backgroundColor = "#fff";
    }
    todoItemInput.focus();
}

function renameItem() {
    alert("renameItem");
}

//function removeTodo() {
    // change style of item to display:none to remove item from list
    //alert("removeTodo");
    //this.style.display = "none";
    //todoItemInput.focus();
//}

function removeTodoFromMinus() {
    // change style of item to display:none to remove item from list
    //alert("removeTodo");
    this.parentElement.style.display = "none";
    todoItemInput.focus();
}


function addTodoItem(list, todoItemText) {

    // if text box is empty or a single white space, do not add entry, then refocus on the text box
     if (todoItemText === "" || todoItemText === " ") {
         todoItemInput.focus();
         return false;
     }

    // create random id name
    var idNumber = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

    // create a new to do list item with a random id name
    var toDoItem = document.createElement('li');
    toDoItem.id = "li_" + idNumber;
    //toDoItem.ondblclick = removeTodo;

    var todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    //todoCheckbox.className = "squaredFour";

    //var checkboxLabel = document.createElement('label');
    //label.htmlFor = "checkbox";

    var clickToDelete = document.createElement("div");
    clickToDelete.className = "clicktoDelete";
    clickToDelete.innerHTML = "&#10005;"
    clickToDelete.onclick = removeTodoFromMinus;


    // create html id of check box and add the the number of list items to the id
    todoCheckbox.id = "cb_" + idNumber;
    todoCheckbox.onclick = toDoItemStatus;

    var todoSpan = document.createElement("span");

    // create html id of list item and add the the number of list items to the id
    todoSpan.id = "item_" + idNumber;
    todoSpan.innerHTML = todoItemText;
    todoSpan.onclick = renameItem;

    toDoItem.appendChild(todoCheckbox);
    //toDoItem.appendChild(checkboxLabel);
    toDoItem.appendChild(todoSpan);
    toDoItem.appendChild(clickToDelete);

    // creates a child of the list item
    list.appendChild(toDoItem);

    // clear text box
    todoItemInput.value = "";

    // return focus to text box
     todoItemInput.focus();

};
