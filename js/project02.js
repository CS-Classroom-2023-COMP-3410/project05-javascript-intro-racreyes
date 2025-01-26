//Interactive TODO list
class project02 {
  constructor() {
    this.taskList = document.getElementById("task-list");
    this.newTaskInput = document.getElementById("new-task-input");
    this.addTaskForm = document.getElementById("add-task-form");
    this.filterButtons = document.querySelectorAll(".filter-btn");
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.currentFilter = "all";
    this.dragStartIndex = null;

    this.addEventListeners();
    this.renderTasks();
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  swapTasks(fromIndex, toIndex) {
    const temp = this.tasks[fromIndex];
    this.tasks[fromIndex] = this.tasks[toIndex];
    this.tasks[toIndex] = temp;
  }

  renderTasks() {
    this.taskList.innerHTML = "";
    const filteredTasks = this.tasks.filter(task => {
      if (this.currentFilter === "completed") return task.completed;
      if (this.currentFilter === "pending") return !task.completed;
      return true;
    });

    filteredTasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.className = "flex items-center justify-between bg-white text-black p-2 rounded shadow draggable";
      taskItem.draggable = true;
      taskItem.dataset.index = index;

      const dragHandle = document.createElement("span");
      dragHandle.textContent = "≡";
      dragHandle.className = "cursor-grab pr-2 text-gray-500 hover:text-gray-700";

      const taskText = document.createElement("span");
      taskText.textContent = task.text;
      taskText.className = `flex-1 ${task.completed ? "line-through text-gray-500" : ""}`;

      const actionsDiv = document.createElement("div");

      const completeButton = document.createElement("button");
      completeButton.textContent = task.completed ? "Undo" : "Done";
      completeButton.className = `px-2 py-1 text-sm rounded ${task.completed ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"} text-white transition`;
      completeButton.addEventListener("click", () => {
        task.completed = !task.completed;
        this.saveTasks();
        this.renderTasks();
      });

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded transition ml-2";
      editButton.addEventListener("click", () => {
        const newText = prompt("Edit your task", task.text);
        if (newText) {
          task.text = newText;
          this.saveTasks();
          this.renderTasks();
        }
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition ml-2";
      deleteButton.addEventListener("click", () => {
        this.tasks.splice(index, 1);
        this.saveTasks();
        this.renderTasks();
      });

      actionsDiv.appendChild(completeButton);
      actionsDiv.appendChild(editButton);
      actionsDiv.appendChild(deleteButton);

      taskItem.appendChild(dragHandle);
      taskItem.appendChild(taskText);
      taskItem.appendChild(actionsDiv);

      this.taskList.appendChild(taskItem);

      // Drag-and-Drop Events
      taskItem.addEventListener("dragstart", () => {
        this.dragStartIndex = index;
        taskItem.classList.add("opacity-50");
      });

      taskItem.addEventListener("dragover", (e) => {
        e.preventDefault();
        taskItem.classList.add("bg-gray-200");
      });

      taskItem.addEventListener("dragleave", () => {
        taskItem.classList.remove("bg-gray-200");
      });

      taskItem.addEventListener("drop", () => {
        const dragEndIndex = parseInt(taskItem.dataset.index, 10);
        this.swapTasks(this.dragStartIndex, dragEndIndex);
        this.saveTasks();
        this.renderTasks();
      });

      taskItem.addEventListener("dragend", () => {
        taskItem.classList.remove("opacity-50");
      });
    });
  }

  addEventListeners() {
    this.addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = this.newTaskInput.value.trim();
      if (taskText) {
        this.tasks.push({ text: taskText, completed: false });
        this.saveTasks();
        this.renderTasks();
        this.newTaskInput.value = "";
      }
    });

    this.filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        this.currentFilter = button.id.replace("filter-", "");
        this.renderTasks();
      });
    });
  }
}

// Initialize the To-Do App
new project02();