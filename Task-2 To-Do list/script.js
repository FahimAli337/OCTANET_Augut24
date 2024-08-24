document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = ${taskValue} <span class="delete">x</span>;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});