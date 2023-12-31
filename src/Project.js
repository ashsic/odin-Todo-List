// Project.js

class Project {
    projects = [];
    constructor(name = 'New Project', description = 'New Project') {
        this._name = name;
        this._description = description;
        this._tasks = [];
        Project.projects.push(this);
    }

    static deleteProject(index) {
        Project.projects.splice(index, 1);
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

    removeTask(index) {
        this._tasks.splice(index, 1);
    }
};

export default Project;