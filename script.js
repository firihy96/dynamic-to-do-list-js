document.addEventListener("DOMContentLoaded", () => {
  let addButton = document.getElementById("add-task-btn"),
    taskInput = document.getElementById("task-input"),
    taskList = document.getElementById("task-list");
  function addTask() {
    let taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Please, Enter a task to be added");
    } else {
      let taskElement = document.createElement("li"),
        removeBtn = document.createElement("button");
      taskElement.textContent = taskText;
      taskList.appendChild(taskElement);
      taskInput.value = "";
      removeBtn.textContent = "Remove";
      taskElement.appendChild(removeBtn);
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener('click',(e)=>{
        taskList.removeChild(e.target.parentNode)
      })
    }
  }
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
  addButton.addEventListener("click", () => {
    addTask();
  });
});
