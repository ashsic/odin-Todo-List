// DOMHandler.js

import Todo from './Todo.js';
import Project from './Project.js';
import { compareAsc, format, isSameDay, isSameWeek, isSameMonth } from "date-fns";

const appendTasks = function(tasks, appendTo) {
    appendTo.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = `${task.title} ${format(task.dueDate, "d MMMM yyyy")}`;
        appendTo.appendChild(li);
    });
}

const homeListener = function(event) {
    document.querySelector('.main-subtitle').textContent = event.target.textContent;
    let tasks = Todo.tasks.slice();
    const mainTasks = document.querySelector('.show-tasks');
    
    tasks = tasks.filter((task) => {
        if (event.target.id == 1) return true;
        if (event.target.id == 2) return isSameDay(task.dueDate, new Date());
        if (event.target.id == 3) return isSameWeek(task.dueDate, new Date());
        if (event.target.id == 4) return isSameMonth(task.dueDate, new Date());
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

export { addHomeListeners, addProjectListeners };