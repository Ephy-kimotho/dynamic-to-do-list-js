//Setup Event Listener for Page Load:
document.addEventListener("DOMContentLoaded", function () {

    //Select DOM Elements:
    const addButton = document.getElementById("add-task-btn")
    const taskInput = document.getElementById("task-input")
    const taskList = document.getElementById("task-list")

    //Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim()

        if (taskText === "") {
            alert("Kindly enter a task")
        } else {
            /*  Task Creation and Removal  */
            const li = document.createElement("li")
            li.textContent = taskText

            const removeBtn = document.createElement("button")
            removeBtn.textContent = "Remove"
            removeBtn.classList.add("remove-btn")

            removeBtn.addEventListener("click", function () {
                this.parentNode.remove()
            })

            li.appendChild(removeBtn)
            taskList.appendChild(li)
            taskInput.value = ""
        }
    }

    //Attach Event Listeners
    addButton.addEventListener("click", addTask)
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask()
        }
    })
})