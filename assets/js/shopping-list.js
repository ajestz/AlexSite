// JavaScript Document
// Declare variables
var elList, addLink, newEl, newTest, counter, listItems;

//Initialize variables to action elements
elList = document.getElementById('list');
addButton = document.getElementById('addToList');
counter = document.getElementById('counter');

//Declare function to process newly added item
function addItem() {
    itemName = document.getElementById('itemName').value.trim();

    if (itemName === "") {
        alert("Please enter a valid item name.");
        return;
    }

    newEl = document.createElement('div');
    newEl.classList.add('alert', 'alert-info', 'alert-dismissable');
    newEl.textContent = itemName;
    elList.appendChild(newEl);
    document.getElementById('itemName').value = "";
    updateCounter();
}

//Create a function to update the shopping list counter
function updateCounter() {
    listItems = elList.getElementsByTagName('div').length;
    counter.textContent = listItems;
}

function removeItem(event) {
    if (event.target.classList.contains('alert')) {
        event.target.remove();
        updateCounter();
    }
}

addButton.addEventListener('click', addItem);
elList.addEventListener('click', removeItem);