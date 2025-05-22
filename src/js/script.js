document.getElementById('addTask').addEventListener('click', function () {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="btn btn-sm btn-success me-2 toggleBtn">✔</button>
      <button class="btn btn-sm btn-danger deleteBtn">✘</button>
    </div>
  `;
  document.getElementById('taskList').appendChild(li);
  input.value = '';

  li.querySelector('.deleteBtn').addEventListener('click', function () {
    li.remove();
  });

  li.querySelector('.toggleBtn').addEventListener('click', function () {
    li.classList.toggle('completed');
  });
});
