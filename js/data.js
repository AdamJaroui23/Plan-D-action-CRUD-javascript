let tasks = [
    {
        id: 1,
        title: "Apprendre JavaScript",
        description: "Réviser les tableaux et les objets",
        completed: false
    },
    {
        id: 2,
        title: "Créer une page HTML",
        description: "Utiliser les éléments HTML5",
        completed: true
    },
    {
        id: 3,
        title: "Manipuler le DOM",
        description: "Créer et supprimer des éléments",
        completed: false
    }
];


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
        <button>Modifier</button>
        <button>Supprimer</button>
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
