document.addEventListener('DOMContentLoaded',()=>{
  let addButton = document.getElementById('add-task-bt'),
    taskInput =  document.getElementById('task-list'),
    taskList =  document.getElementById('add-task-bt');
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
