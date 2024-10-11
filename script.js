document.addEventListener("DOMContentLoaded", () => {
  let tasks = [];
  // loading previous tasks
  let storedTasks = JSON.parse(window.localStorage.getItem("tasks"));
  console.log(storedTasks);
  console.log(tasks);
  if (storedTasks) {
    tasks = [...storedTasks];
  }
  console.log(tasks);
  // selecting elements
  let addButton = document.getElementById("add-task-btn"),
    taskInput = document.getElementById("task-input"),
    taskList = document.getElementById("task-list"),
    taskElement,
    removeBtn;
  // a function that create the structure task element that will hold user inputs
  function taskDOM(taskTextPassed) {
    (taskElement = document.createElement("li")),
      (removeBtn = document.createElement("button"));
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    // injecting user input data into these elements
    taskElement.textContent = taskTextPassed;
    taskInput.value = "";
    taskElement.appendChild(removeBtn);
    taskList.appendChild(taskElement);
    // removing task
    removeBtn.addEventListener("click", (e) => {
      //updating tasks array before removing element from DOM
      let taskIndex = tasks.findIndex((task) => {
        return task === taskTextPassed;
      });
      tasks.splice(taskIndex, 1);
      // update local storage
      window.localStorage.setItem("tasks", JSON.stringify([...tasks]));
      // removing from DOM
      taskList.removeChild(e.target.parentNode);
    });
  }
  loadTasks();
  // for previously saved tasks
  function loadTasks() {
    tasks.forEach((task) => {
      taskDOM(task)
    });
  }
  // new add tasks fn
  function addTask(task) {
    // for passed task

    // retrieve and cleaning user input task
    let taskText = taskInput.value.trim();
    // in case of calling the fn without nothing to add
    if (!taskText) {
      alert("Please, Enter a task to be added");
      // exit task to add
    } else {
      // adding this task to tasks array
      tasks.push(taskText);
      // update local storage
      window.localStorage.setItem("tasks", JSON.stringify([...tasks]));
      
      taskDOM(taskText);
    }
  }
  // invoking adding Tasks logic whenever the user press Enter on the input element or add Task button
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
  addButton.addEventListener("click", () => {
    addTask();
  });
});
