// Todos.js

class Todos {
    static todoList = [];

    constructor(title = 'New Task', description = 'New Task', 
    dueDate = new Date(), priority = 'L', notes = []) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._completionStatus = false;
        Todos.todoList.push(this);
    }

    static getTodoList() {
        return Todos.todoList;
    }

    static deleteTodo(index) {
        Todos.todoList.splice(index, 1);
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

export default Todos;