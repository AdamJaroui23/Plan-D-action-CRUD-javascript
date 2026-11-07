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

const formInput = document.getElementById('taskForm');
const taskTitle = document.getElementById('title');
const taskDescription = document.getElementById('description');
const taskSubmit = document.getElementById('submitBtn');
const tasksContainer = document.getElementById('tasksContainer');