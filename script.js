document.addEventListener('DOMContentLoaded',()=>{
  let addButton = document.getElementById('add-task-btn'),
    taskInput =  document.getElementById('task-list'),
    taskList =  document.getElementById('add-input');
  function addTask() => {
    let taskText = taskInput.value.trim();
    if (!taskText) {
      alert('Please, Enter a task to be added');
    } else {
      let taskElement =  document.creatElement('li');
      taskElement.textConent = taskText;
      taskList.appendChild(taskElement);
      taskInput.value = '';
    }

    addButton.addEventListener('keypress',(event)=>{
      if (event.key === 'Enter') {
        addTask();
      }
    })
    
  }
  
})
