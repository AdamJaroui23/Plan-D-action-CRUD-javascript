let tasks = [];
let editingTaskId = null;

const formSubmit = document.getElementById('taskForm');
const taskTitle = document.getElementById('title');
const taskDescription = document.getElementById('description');
const taskSubmit = document.getElementById('submitBtn');
const tasksContainer = document.getElementById('tasksContainer');
displayTasks()

function displayTasks() {
    tasksContainer.innerHTML = "";
    tasks.forEach(task => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${task.title}</h3> <p>${task.description}</p> <p>${task.completed ? "Terminée" : "En cours"}</p>`
        tasksContainer.appendChild(div);
        div.innerHTML += `
        <button class="editBtn" data-id="${task.id}">Modifier</button>
        <button class="deleteBtn" data-id="${task.id}">Supprimer</button>
        `;
    })
}

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = taskTitle.value;
    const description = taskDescription.value;

    if (editingTaskId !== null) {
        const task = tasks.find(task => task.id === editingTaskId);
        if (task) {
            task.title = title;
            task.description = description;
        }
        editingTaskId = null;
        taskSubmit.textContent = "Ajouter";
    } else {
        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            completed: false
        };
        tasks.push(newTask);
    }

    taskTitle.value = "";
    taskDescription.value = "";
    displayTasks()
})


tasksContainer.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".deleteBtn");
    if (!deleteBtn) return;

    const id = Number(deleteBtn.dataset.id);
    tasks = tasks.filter(task => task.id !== id);
    if (editingTaskId === id) {
        editingTaskId = null;
        taskTitle.value = "";
        taskDescription.value = "";
        taskSubmit.textContent = "Ajouter";
    }
    displayTasks();
});


tasksContainer.addEventListener("click", (event) => {
    const editBtn = event.target.closest(".editBtn");
    if (!editBtn) return;

    const id = Number(editBtn.dataset.id);
    const task = tasks.find(task => task.id === id);
    if (!task) return;

    editingTaskId = id;
    taskTitle.value = task.title;
    taskDescription.value = task.description;
    taskSubmit.textContent = "Modifier";

})