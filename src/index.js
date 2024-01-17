let id = -1;
let projects = [];
let current;

class Project{
  constructor(title){
    this.title = title;
    this.tasks = [];
    id++;
    this.id = id;
  };

  add(task) {
    this.tasks.push(task);
    createProjects();
  };

  displayProject() {
    const content = document.querySelector('#content');

    const project = document.createElement('div');
    project.classList.add('project'+this.id);
    project.replaceChildren();
    const title = document.createElement('div');
    title.setAttribute('id', 'Title');
    title.textContent = this.title;

    project.appendChild(title);
    for(let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].displayTask(project); 
    }
    content.appendChild(project);
    const createTask = document.getElementById('createTask');
    const button = document.createElement('button');
    
    button.setAttribute('id', 'add');
    button.textContent = '+';

    button.addEventListener("click", () => {
      current = projects[this.id];
      console.log(current);
      createTask.showModal();
    });
  
    
    project.appendChild(button);
  };
}

class Task{
  constructor(name, date, status, priority){
    this.name = name;
    this.date = date;
    this.status = status;
    this.priority = priority;
  };

  displayTask(project){
    const task = document.createElement('div');
    task.classList.add('task');

    const name = document.createElement('div');
    name.setAttribute('id', 'name');
    name.textContent = this.name;

    const date = document.createElement('div');
    date.setAttribute('id', 'date');
    date.textContent = this.date;

    const status = document.createElement('div');
    status.setAttribute('id', 'check');
    status.textContent = this.status;

    const priority = document.createElement('div');
    priority.setAttribute('id', 'priority');
    priority.textContent = this.priority;

    task.appendChild(name);
    task.appendChild(date);
    task.appendChild(priority);
    task.appendChild(status);
    project.appendChild(task);
  };

}

function createProjects(){
  const content = document.querySelector('#content');
  content.replaceChildren();
  for(let i = 0; i<projects.length; i++) {
    projects[i].displayProject();
  }
}

let project = new Project('Project');
let task = new Task('Name:', 'Date:', 'Priority:', 'Status:');
project.add(task);
projects.push(project);

createProjects();

const createProject = document.getElementById('createProject');
const create = document.getElementById('create');
const confirmBtn = document.getElementById('confirmBtn');

create.addEventListener('click', () => {
  createProject.showModal();
})

createProject.addEventListener("close", (e) => {
});

confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.getElementById('title');
  let project = new Project(title.value);
  let task = new Task('Name:', 'Date:', 'Priority:', 'Status:');
  project.add(task);
  projects.push(project);
  console.log(projects);
  createProjects();
});

const confirm = document.querySelector("#confirm");
confirm.addEventListener("click", (event) => {
  console.log(current);
  const tname = document.getElementById('tname').value;
  const tdate = document.getElementById('tdate').value;
  const tcheck = document.getElementById('tcheck').value;
  const tpriority = document.getElementById('tpriority').value;
  event.preventDefault(); 
  let task = new Task(tname, tdate, tcheck, tpriority);
  current.add(task);
});