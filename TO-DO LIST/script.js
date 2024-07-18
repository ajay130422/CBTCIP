document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const completedList = document.getElementById('completed-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const listItem = document.createElement('li');
        const timeStamp = document.createElement('span');
        timeStamp.classList.add('time-stamp');
        timeStamp.textContent = `Added on: ${new Date().toLocaleString()}`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completed?';
        completeButton.addEventListener('click', () => {
            listItem.classList.add('completed');
            listItem.removeChild(completeButton);
            const completedTimeStamp = document.createElement('span');
            completedTimeStamp.classList.add('time-stamp');
            completedTimeStamp.textContent = `Completed on: ${new Date().toLocaleString()}`;
            listItem.appendChild(completedTimeStamp);
            completedList.appendChild(listItem);
        });

        listItem.textContent = task;
        listItem.appendChild(timeStamp);
        listItem.appendChild(completeButton);
        taskList.appendChild(listItem);
    }
});
