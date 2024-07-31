let id = -1;
let projects = []

function display(projects) {
  for(i = 0; i < projects.length; i++) {
    projects[i].title
  }
} 

class Project{
  constructor(title){
    this.title = title;
    this.id = id++;
    this.tasks = [];
  };

  add(task) {
    this.tasks.push(task);
  };

  displaySelf() {
    const content = document.querySelector('.content');
    const project = document.createElement('div');
    const task = document.createElement('div');
    task.setAttribute('id', 'task');
    project.setAttribute('id', 'project');
    const title = document.createElement('div');
    title.setAttribute('id', 'Title');
    title.textContent = `${this.title}`;
    project.appendChild(title);
    for(i = 0; i < this.tasks.length; i++) {
      this.tasks[i].displayTask(task);
      project.appendChild(task);
    }
  }
}

class Task{
  constructor(name, description, dueDate, priority, check){
    this.name = name; 
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
  };

  displayTask(project) {
    const name = document.createElement('div');
    name.setAttribute('id', 'name');
    name.textContent = `${this.name}`;
    const description = document.createElement('div');
    description.setAttribute('id', 'desc');
    description.textContent = `${this.description}`;
    const dueDate = document.createElement('div');
    dueDate.setAttribute('id', 'date');
    dueDate.textContent = `${this.dueDate}`;
    const priority = document.createElement('div');
    priority.setAttribute('id', 'priority');
    priority.textContent = `${this.priority}`;
    const check = document.createElement('div');
    check.setAttribute('id', 'check');
    check.textContent = `${this.check}`;
    project.appendChild(name);
    project.appendChild(description);
    project.appendChild(dueDate);
    project.appendChild(priority);
    project.appendChild(check);
  }
}

const add = document.getElementById('add');
const createTask = document.getElementById('createTask');
const confirm = document.getElementById('confirm');
const tdate = document.getElementById('tdate');
const tname = document.getElementById('tdate');
const tpriority = document.getElementById('tdate');
const tcheck = document.getElementById('tdate');
const tdesc = document.getElementById('tdate');

add.addEventListener('click', () => {
  createTask.showModal();
});

confirm.addEventListener('click', () => {
  let task = new Task(tname.value, tdesc.value,tdate.value,tpriority.value,tcheck.value);

});

const showButton = document.getElementById("create");
const createProject = document.getElementById("createProject");
const outputBox = document.querySelector("#test");
const confirmBtn = createProject.querySelector("#confirmBtn");
const selectEl = document.querySelector('#project');

showButton.addEventListener("click", () => {
  createProject.showModal();
});

createProject.addEventListener("close", (e) => {
  outputBox.textContent =
    createProject.returnValue === "default"
      ? "No return value."
      : `${createProject.returnValue}`;
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  projects.push(new Project(document.getElementById('title').value));
  projects[0].displaySelf();
  createProject.close(selectEl.value); 
});