document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form#create-task-form").addEventListener("submit", functSubmit);

  function functSubmit(){
    event.preventDefault();
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    li.innerHTML = document.getElementById("new-task-description").value;
    ul.appendChild(li);
    document.getElementById("new-task-description").value ='';
  }

});


