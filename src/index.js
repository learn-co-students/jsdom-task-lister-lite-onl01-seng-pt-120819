document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#create-task-form").addEventListener("submit", createListItem);
  


  function createListItem(){
    event.preventDefault();
    const description = document.getElementById('new-task-description')
    const ul = document.getElementById('tasks')
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.innerHTML = '<i class="fas fa-trash-alt"></i>'
    button.addEventListener("click", deleteListItems);
    li.innerHTML = description.value
    ul.appendChild(li)
    li.appendChild(button)
    description.value = ""
  }

function deleteListItems(e){
e.target.parentElement.remove();
}
  
});



