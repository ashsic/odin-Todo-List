// index.js

import Todo from './Todo.js';
import Project from './Project.js';
import { compareAsc, format } from "date-fns";

const fest = new Todo('aaaaaa');
const test1 = new Todo();
const test2 = new Todo();

console.log(test1);


const project1 = new Project();

project1.addTask(fest);
project1.addTask(test1);
project1.addTask(test2);

console.log(project1);

project1.deleteTodo(1);

console.log(project1);

// console.log(Project.getProjects());