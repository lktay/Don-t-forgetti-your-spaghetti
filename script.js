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

// submit form
form.addEventListener("submit", addItem);

//functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

if(value !== "" && editFlag === false){
  const element = document.createElement("article");
  //add class
  element.classList.add("grocery-item");
  //add ID
  const attribute = document.createAttribute("data-id");
  attribute.value = id;
  element.setAttributeNode(attribute);
  //creating the item
  element.innerHTML = `            <p class="item-name">${value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>`;
  //append item to list
  list.appendChild(element);
  //display success
  displayAlert("Item added!", "success");
  //add container (visibility > visible)
  container.classList.add("show-container");
  //add to local storage
  addToLocalS(id, value);
  //set to default
  setToDefault();

}
else if(value !== "" && editFlag === true){
  console.log("Editing");
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
}, 1500);
}

//set to default
function setToDefault(){
  console.log("set to default");
}


// local storage

function addToLocalS(id, value) {
  console.log("added to local storage")
}

//setup items?
