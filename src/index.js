document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let myForm = document.getElementById("create-task-form")

  myForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let list = document.getElementById("tasks")
    let listItem = document.createElement("LI")
    let inputValue = document.getElementById("new-task-description").value 
    listItem.innerText = inputValue
    list.appendChild(listItem)
  });
});

