// Todo.js

class Todo {
    static counter = 0;
    static tasks = [];

    constructor(title = 'New Task', description = 'New Task', 
    dueDate = format(new Date(), "d MMMM yyyy"), priority = 'L', notes = []) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._completionStatus = false;
        this._id = ++Todo.counter;
        Todo.tasks.push(this);
        
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

    get notes() {
        return this._notes;
    }

    editNote(index, newNote) {
        this._notes[index] = newNote;
    }

    addNote(note) {
        this._notes.push(note);
    }

    removeNote(index) {
        this._notes.splice(index, 1);
    }

    completeTodo() {
        this._completionStatus = true;
    }
};

export default Todo;