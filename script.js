// Setup Event Listener for Page Load:
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM Elements:
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        storedTasks.forEach(task => createTask(task));
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        const taskItems = Array.from(taskList.children);
        taskItems.forEach(item => {
            tasks.push(item.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a Task Element
    function createTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", function () {
            this.parentNode.remove();
            saveTasks();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Kindly enter a task");
        } else {
            createTask(taskText);
            saveTasks();
            taskInput.value = "";
        }
    }

    // Attach Event Listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load existing tasks from Local Storage
    loadTasks()
    
});
