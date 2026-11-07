let tasks = [];


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
        <button id="editBtn">Modifier</button>
        <button class="deleteBtn" data-id="${task.id}">Supprimer</button>
        `;
    })
}

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = taskTitle.value;
    const description = taskDescription.value;
    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false
    }
    tasks.push(newTask)
    taskTitle.value = "";
    taskDescription.value = "";
    displayTasks()
})


tasksContainer.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".deleteBtn");
    if (!deleteBtn) return;

    const id = Number(deleteBtn.dataset.id);
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
});
