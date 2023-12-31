// index.js

import { compareAsc, format } from "date-fns";

import Todo from './Todo.js';
import Project from './Project.js';

import { addHomeListeners } from "./DOMHandler.js";

const fest = new Todo('aaaaaa');
const test1 = new Todo();
const test2 = new Todo();

console.log(test1);


const project1 = new Project();
const project2 = new Project();
const project3 = new Project();
const project4 = new Project();

project1.addTask(fest);
project1.addTask(test1);
project1.addTask(test2);
project2.addTask(fest);
project3.addTask(fest);
project4.addTask(fest);

console.log(Project.getProjects());



// console.log(project1);

Project.deleteTodo(1);
Project.deleteProject(2);

// console.log(project1);

console.log(Project.getProjects());

addHomeListeners();