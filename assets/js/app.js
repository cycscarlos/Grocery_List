let grocery = document.getElementById("grocery");

grocery.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  let data = this.elements.writeList.value; /* guardar lo escrito en el input */
  let list = document.querySelector("ol");
  let item = document.createElement("li");
  let text = document.createElement("p");

  text.textContent = data; /* se transfiere lo guardado al área de párrafo */
  this.elements.writeList.value = ""; /* se limpia el input */
  item.append(text); /* se agrega el párrafo al elemento <li> */
  list.append(item); /* se agrega el elemento <li> al elemento <ol> */

  let removeBtn = document.createElement("span");
  removeBtn.classList.add("remove");
  item.append(removeBtn);
  removeBtn.addEventListener("click", deleteItem);
  item.addEventListener("click", doneItem);
}

function deleteItem(e) {
  e.target.parentElement.remove();
  // this.parentElement.remove();
}

function doneItem(e) {
  // e.target.classList.toggle("done");
  this.classList.toggle("done");
}
