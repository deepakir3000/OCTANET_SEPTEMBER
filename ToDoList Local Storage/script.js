const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Load tasks from local storage on page load
window.addEventListener('load', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    addTaskToList(task);
  });
});

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToList(taskText);
    saveTasksToLocalStorage();
    taskInput.value = '';
  }
});

function addTaskToList(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    li.remove();
    saveTasksToLocalStorage();
  });
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.children).map(li => li.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
