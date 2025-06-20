function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return alert('Please enter a task.');

  const li = document.createElement('li');
  li.textContent = task;

  li.onclick = function () {
    li.classList.toggle('completed');
  };

  li.ondblclick = function () {
    li.remove();
  };

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
