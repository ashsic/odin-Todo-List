// index.js



import Todo from './Todo.js';
import Project from './Project.js';

import { addHomeListeners, addProjectListeners, pageLoad } from "./DOMHandler.js";

const fest = new Todo('Test task', 'Test', new Date(2024, 0, 1));
const test1 = new Todo('Brush Teeth', 'Use a toothbrush to brush my teeth', new Date(2024, 0, 12));
const test2 = new Todo('Walk Dog', 'what da dog doin?', new Date(2024, 0, 7), 'H');
const lest = new Todo('test 2', 'new1', new Date(), 'M', [], true);

console.log(test1);


const project1 = new Project();

const workout1 = new Todo('Work Out', 'Chest day', new Date(2024, 0, 2), 'M');
const workout2 = new Todo('Work Out', 'Leg day', new Date(2024, 0, 3), 'H');
const workout3 = new Todo('Work Out', 'Shoulders day', new Date(2024, 0, 5), 'L');

project1.addTask(workout1);
project1.addTask(workout2);
project1.addTask(workout3);




console.log(Project.projects);

console.log(Project.projects[0]._tasks);

// console.log(project1);




// console.log(project1);


pageLoad();
addHomeListeners();
addProjectListeners();