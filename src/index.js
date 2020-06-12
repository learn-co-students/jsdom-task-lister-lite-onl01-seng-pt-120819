document.addEventListener('DOMContentLoaded', () => {
  // your code here
  const submitBtn = document.querySelector('#submit');
  const taskText = document.getElementById('new-task-description');
  const todoList = document.getElementById('tasks');
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let todoItem = document.createElement('li');
    todoItem.innerText = taskText.value;
    todoList.appendChild(todoItem);
  });
});
