// Project.js

class Project {
    static projects = [];
    static counter = 0;

    constructor(name = 'New Project', description = 'New Project') {
        this._name = name;
        this._description = description;
        this._tasks = [];
        Project.projects.push(this);
        this._id = ++Project.counter;
    }

    static getProjects() {
        return Project.projects;
    }

    static deleteProject(id) {
        Project.projects.filter((project) => {
            return project._id != id;
        });
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    addTask(task) {
        this._tasks.push(task);
    }

    deleteTodo(id) {
        this._tasks = this._tasks.filter((task) => {
            return task._id != id;
        });
    }
};

export default Project;