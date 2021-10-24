const taskValue = document.getElementsByClassName('new_task')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];
const completedTask = document.getElementsByClassName('completed_task')[0];



const addTasks = (task) => {
　　const listItem = document.createElement('li');
　　const showItem = taskList.appendChild(listItem);
　　showItem.innerHTML = task;

    //delete Button
　　const deleteButton = document.createElement('button');
　　deleteButton.innerHTML = 'X';
　　listItem.appendChild(deleteButton);

　　deleteButton.addEventListener('click', evt => {
　　　　evt.preventDefault();
　　　　deleteTasks(deleteButton);
　　}); 
};

//delete button
const deleteTasks = (deleteButton) => {
　　const chosenTask = deleteButton.closest('li');
　　taskList.removeChild(chosenTask);
};

taskSubmit.addEventListener('click', evt => {
　　evt.preventDefault();
　　const task = taskValue.value;
　　addTasks(task);
　　taskValue.value = '';
});




function countTasks() {
    let count = document.getElementsByTagName('li').length;
    document.getElementById('count').innerHTML = count + 'tasks left';
}



