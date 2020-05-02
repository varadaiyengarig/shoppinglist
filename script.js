var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("shopping");

function inputLength() {
	return input.value.length;
}

/* Modified function to also add delete button when new shopping list items are added */

function createListElement() {
	var li = document.createElement("li");
	var delbtn = document.createElement("button");
	delbtn.setAttribute("id", "Delete");
	var delbtntext = "Delete";
	li.appendChild(document.createTextNode(input.value));
	delbtn.appendChild(document.createTextNode(delbtntext));
	ul.appendChild(li);
	li.appendChild(delbtn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

/* For crossing out items in the shoppint List */

function processShoppingList (e) {
	console.log("i am in");
	console.log(e.target.id);
	if (e.target.id != "Delete") {
    e.target.classList.toggle("done"); 
  } else {
  	e.target.parentNode.remove();
  } 
} 


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", processShoppingList,false);

/*delbtn.addEventListener("click", deleteShoppingList,false);*/


/*
function deleteShoppingList (e) {
	console.log("i am in");
	console.log(e.target.id);
	if (e.target.id == "Delete") {
    e.target.classList.toggle("done"); 
  } 
}
*/


