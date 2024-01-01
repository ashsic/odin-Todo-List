// Todo.js

class Todo {
    static counter = 0;
    static tasks = [];

    constructor(title = 'New Task', description = 'New Task', 
    dueDate = format(new Date(), "d MMMM yyyy"), priority = 'L', notes = [], completionStatus = false) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._completionStatus = completionStatus;
        this._id = ++Todo.counter;
        Todo.tasks.push(this);
        
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }

    get completionStatus() {
        return this._completionStatus;
    }

    set completionStatus(newCompletionStatus) {
        this._completionStatus = newCompletionStatus;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(newDueDate) {
        this._dueDate = newDueDate;
    }

    get priority() {
        return this._priority;
    }

    set priority(newPriority) {
        this._priority = newPriority;
    }
};

export default Todo;