document.addEventListener('DOMContentLoaded',()=>{
  let addButton = document.getElementById('add-task-btn'),
    taskInput =  document.getElementById('task-input'),
    taskList =  document.getElementById('task-list');
  function addTask() => {
    let taskText = taskInput.value.trim();
    if (!taskText) {
      alert('Please, Enter a task to be added');
    } else {
      let taskElement =  document.creatElement('li'),
        removeBtn = document.createElement('button');
      taskElement.textConent = taskText;
      taskList.appendChild(taskElement);
      taskInput.value = '';
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.onClick = function (e){
        taskList.removeChild(e.target.parentNode);
      }
      taskElement.appendChild('removeBtn');
    }

    addButton.addEventListener('keypress',(event)=>{
      if (event.key === 'Enter') {
        addTask();
      }
    })
    
  }
  
})
