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

export { addHomeListeners, addProjectListeners, pageLoad };