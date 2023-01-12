// select items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#list-item");
const addBtn = document.querySelector(".add-btn");
const container = document.querySelector(".list-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


// edit
let editElement;
let editFlag = false;
let editID = "";

// event listeners
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearList);

//functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

if(value !== "" && editFlag === false){
  //making the article to hole p (item name) and buttons (clear and remove)
  const element = document.createElement("article");
  //add class to new article
  element.classList.add("grocery-item");
  //add ID to new article
  const attribute = document.createAttribute("data-id");
  attribute.value = id;
  element.setAttributeNode(attribute);
  //creating the item (p and button container)
  element.innerHTML = `            <p class="item-name">${value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>`;
  //as the buttons only exist within these conditions, these can be accessed here

const editBtn = element.querySelector(".edit-btn")
const deleteBtn = element.querySelector(".delete-btn")
//functions editItem deleteItem defined latergit 
editBtn.addEventListener("click",editItem);
deleteBtn.addEventListener("click",deleteItem);

  //append item to list (grocery-list div)
  list.appendChild(element);
  displayAlert("Item added!", "success");

  //add container (visibility > visible)
  container.classList.add("show-container");

  //set to default
  setToDefault();

}
else if(value !== "" && editFlag === true){
editElement.innerHTML = value;
displayAlert("Item edited", "success")
setToDefault();

}
else{
displayAlert("Please type an item", "danger")
}
}

//display alert
function displayAlert(text, color){
  alert.textContent = text;
alert.classList.add(`alert-${color}`);

//remove alert
setTimeout(function(){
  alert.textContent = "";
  alert.classList.remove(`alert-${color}`);
}, 500);
}

//clear list

function clearList(){
  const items = document.querySelectorAll(".grocery-item")

if (items.length > 0){
  items.forEach(function(item){
    list.removeChild(item);
  })
}
container.classList.remove("show-container");
displayAlert("List cleared", "danger");
setToDefault();
}

//set to default
function setToDefault(){
grocery.value = "";
editFlag = false;
editID = "";
addBtn.textContent = "Add"
}

//delete function
function deleteItem(e){
const element = e.currentTarget.parentElement.parentElement;
const id = element.dataset.id;
list.removeChild(element);
if(list.children.length === 0){
  container.classList.remove("show-container");
}
displayAlert("Item removed", "danger")
}
//edit function
function editItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  //set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  addBtn.textContent = "Edit";
}
