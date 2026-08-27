function addTask() {
    const taskList = document.getElementById('task-list');
    const newTask = document.getElementById('new-task');
    const taskItem = document.createElement('li');
     if (newTask.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <input type="checkbox">
        <input type="text" value="${newTask.value}">
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
    newTask.value = '';
}
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}