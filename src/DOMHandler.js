// DOMHandler.js

import Todo from './Todo.js';
import Project from './Project.js';
import { compareAsc, format, isSameDay, isSameWeek, isSameMonth } from "date-fns";

const pageLoad = function() {
    let tasks = Todo.tasks.slice();
    const mainTasks = document.querySelector('.show-tasks');
    tasks.sort((a, b) => a.dueDate - b.dueDate);
    appendTasks(tasks, mainTasks);
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
    console.log(tasks);
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
    yes.innerHTML = '<i class="fas fa-check">';
    no.innerHTML = '<i class="fas fa-times"></i>';
    form.appendChild(yes);
    form.appendChild(no);

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
    form.appendChild(date);

    const button = document.createElement('button');
    button.textContent = '+';
    form.appendChild(button);

    no.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
    })

    button.addEventListener('click', (event) => {
        const taskForm = event.target.parentNode;
        event.preventDefault();
        const currDate = new Date(taskForm.date.value)
        currDate.setDate(currDate.getDate() + 1);
        new Todo(taskForm.title.value, taskForm.description.value, currDate, taskForm.priority.value);
        pageLoad();
    });

    event.target.after(form);
};

const addButtonHandlers = function() {
    const buttons = document.querySelectorAll('button');
    console.log(buttons[0].textContent);
    buttons[0].addEventListener('click', newProjectHandler);
    buttons[1].addEventListener('click', newTaskHandler);
};








export { addHomeListeners, addProjectListeners, pageLoad, addButtonHandlers };