document.addEventListener("DOMContentLoaded", () => {
// your code here

   const createForm = document.getElementById("create-task-form")

   createForm.addEventListener('submit', function(e) {
     e.preventDefault()
     const listItem = document.createElement("li")
     const tasks = document.getElementById("tasks")
     const inputValue = document.getElementById("new-task-description").value
     listItem.innerText = inputValue
     tasks.appendChild(listItem)
     li.appendChild(button)

   });

});

// function newToDo() {
// let li = document.createElement("li");
// const inputValue = document.getElementById("new-task-description").value;
// const t = document.createTextNode(inputValue);
// li.appendChild(t);
// if (inputValue === '') {
//   alert("You must write something!");
// } else {
//   document.getElementById("tasks").appendChild(li);
// }
// document.getElementById("new-task-description").value = "";
// }
// var span = document.createElement("SPAN");
// var txt = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(txt);
// li.appendChild(span);
//
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
