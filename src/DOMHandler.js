// DOMHandler.js

import Todo from './Todo.js';
import Project from './Project.js';
import { format, isSameDay, isSameWeek, isSameMonth } from "date-fns";

const pageLoad = function() {
    let tasks = Todo.tasks.slice();
    const mainTasks = document.querySelector('.show-tasks');
    tasks.sort((a, b) => a.dueDate - b.dueDate);
    appendTasks(tasks, mainTasks);
    document.querySelector('.main-subtitle').textContent = 'All Tasks';
};

const exitForm = (event) => {
    event.preventDefault();
    if (event.target.parentNode.tagName === 'FORM') {
        event.target.parentNode.remove();
        return;
      }
    event.target.parentNode.parentNode.remove();
};

const appendTasks = function(tasks, appendTo) {
    appendTo.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.setAttribute('id', task.id);
        li.classList.add(task.priority);
        li.classList.add(task.completionStatus);
        li.textContent = `${task.title} ${format(task.dueDate, "MMMM do, yyyy")}`;
        appendTo.appendChild(li);
    });
}

const homeListener = function(event) {
    document.querySelector('.main-subtitle').textContent = event.target.textContent;
    let tasks = Todo.tasks.slice();
    const mainTasks = document.querySelector('.show-tasks');
    
    tasks = tasks.filter((task) => {
        if (event.target.value == 1) return true;
        if (event.target.value == 2) return isSameDay(task.dueDate, new Date());
        if (event.target.value == 3) return isSameWeek(task.dueDate, new Date());
        if (event.target.value == 4) return isSameMonth(task.dueDate, new Date());
    });

    tasks.sort((a, b) => a.dueDate - b.dueDate);

    appendTasks(tasks, mainTasks);
};

const addHomeListeners = function() {
    const homeLis = document.querySelectorAll('.chronological > li');
    homeLis.forEach((li) => {
        li.addEventListener('click', homeListener);
    });
};

const projectListener = function(event) {
    document.querySelector('.main-subtitle').textContent = event.target.textContent;
    let tasks = Project.projects[parseInt(event.target.id)].tasks;
    const mainTasks = document.querySelector('.show-tasks');
    
    tasks.sort((a, b) => a.dueDate - b.dueDate);

    appendTasks(tasks, mainTasks);
};

const addProjectListeners = function() {
    const projectLis = document.querySelectorAll('.projects > li');
    projectLis.forEach((li) => {
        li.addEventListener('click', projectListener);
    });
};

const newProjectHandler = function(event) {
    const form = document.createElement('form');

    const label = document.createElement('label');
    label.setAttribute('for', 'projectName');
    label.textContent = 'Name: ';
    form.appendChild(label);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'projectName');
    form.appendChild(title);

    const yes = document.createElement('button');
    const no = document.createElement('button');
    yes.setAttribute('id', 'yes');
    no.setAttribute('id', 'no');
    yes.innerHTML = '+';
    no.innerHTML = '<i class="fas fa-times"></i>';
    form.appendChild(yes);
    form.appendChild(no);

    no.addEventListener('click', exitForm);

    yes.addEventListener('click', (event) => {
        event.preventDefault();
        new Project(event.target.parentNode.projectName.value);
        const projects = document.querySelector('.projects');
        projects.innerHTML = '';
        event.target.parentNode.remove();
        Project.projects.forEach((project, index) => {
            const li2 = document.createElement('li');
            li2.setAttribute('id', index);
            li2.textContent = `${project.name}`;
            projects.appendChild(li2);
        });
        addProjectListeners();
    });

    event.target.after(form);
};

const newTaskHandler = function(event) {
    const form = document.createElement('form');

    const div = document.createElement('div');
    div.classList.add('row');
    const no = document.createElement('button');
    no.textContent = 'X';
    div.appendChild(no);
    form.appendChild(div);

    const label = document.createElement('label');
    label.setAttribute('for', 'title');
    label.textContent = 'Title: ';
    form.appendChild(label);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    form.appendChild(title);

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'description');
    label2.textContent = 'Description: ';
    form.appendChild(label2);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('id', 'description');
    form.appendChild(description);

    const p = document.createElement('p');
    p.textContent = 'Priority: ';
    form.appendChild(p);

    const radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'priority');
    radio1.setAttribute('value', 'L');
    radio1.checked = true;
    const radioLabel1 = document.createElement('label');
    radioLabel1.textContent = 'Low';
    radioLabel1.appendChild(radio1);
    form.appendChild(radioLabel1);

    const radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', 'priority');
    radio2.setAttribute('value', 'M');
    const radioLabel2 = document.createElement('label');
    radioLabel2.textContent = 'Medium';
    radioLabel2.appendChild(radio2);
    form.appendChild(radioLabel2);

    const radio3 = document.createElement('input');
    radio3.setAttribute('type', 'radio');
    radio3.setAttribute('name', 'priority');
    radio3.setAttribute('value', 'H');
    const radioLabel3 = document.createElement('label');
    radioLabel3.textContent = 'High';
    radioLabel3.appendChild(radio3);
    form.appendChild(radioLabel3);

    const label3 = document.createElement('label');
    label3.setAttribute('for', 'date');
    label3.textContent = 'Due Date: ';
    form.appendChild(label3);

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('id', 'date');
    date.value = new Date().toISOString().split('T')[0];
    form.appendChild(date);

    const button = document.createElement('button');
    button.textContent = '+';
    form.appendChild(button);

    const label4 = document.createElement('label');
    label4.setAttribute('for', 'select');
    label4.textContent = 'Project: ';
    form.appendChild(label4);

    const select = document.createElement('select');
    select.setAttribute('id', 'select');

    const option2 = document.createElement('option');
    select.appendChild(option2);

    Project.projects.forEach((project, index) => {
        const option = document.createElement('option');
        option.textContent = project.name;
        select.appendChild(option);
    });
    

    form.appendChild(select);

    no.addEventListener('click', exitForm);

    button.addEventListener('click', (event) => {
        const taskForm = event.target.parentNode;
        event.preventDefault();
        const currDate = new Date(taskForm.date.value)
        currDate.setDate(currDate.getDate() + 1);
        const newTask = new Todo(taskForm.title.value, taskForm.description.value, currDate, taskForm.priority.value);
        
        if (taskForm.select.selectedIndex > 0){
            const project = Project.projects[taskForm.select.selectedIndex - 1];
            console.log(project);
            project.addTask(newTask);
        }

        pageLoad();

        if (event.target.parentNode.tagName === 'FORM') {
            event.target.parentNode.remove();
            return;
        }
        event.target.parentNode.parentNode.remove();
    });

    event.target.after(form);
};

const addButtonHandlers = function() {
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', newProjectHandler);
    buttons[1].addEventListener('click', newTaskHandler);
};

export { addHomeListeners, addProjectListeners, pageLoad, addButtonHandlers };