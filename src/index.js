// index.js



import Todo from './Todo.js';
import Project from './Project.js';

import { addHomeListeners, addProjectListeners } from "./DOMHandler.js";

const fest = new Todo('aaaaa', 'new1', new Date(2024, 0, 1));
const test1 = new Todo('bbbbb', 'new2', new Date(2024, 0, 12));
const test2 = new Todo('ccccc', 'new3', new Date(2024, 0, 7));
const lest = new Todo('ddddd', 'new1', new Date());

console.log(test1);


const project1 = new Project();

project1.addTask(fest);
project1.addTask(test1);
project1.addTask(test2);


console.log(Project.projects);

console.log(Project.projects[0]._tasks);

// console.log(project1);




// console.log(project1);



addHomeListeners();
addProjectListeners();