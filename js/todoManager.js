import { storage } from './storage.js';

export class TodoManager {
    constructor() {
        this.todos = storage.load();
        this.statusFilter = 'all';
        this.categoryFilter = 'all';
    }

    addTodo(text, category = 'Other') {
        const newTodo = {
            id: Date.now().toString(),
            text: text.trim(),
            category,
            completed: false,
            createdAt: new Date().toISOString()
        };
        this.todos.push(newTodo);
        this.save();
        return newTodo;
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.save();
    }

    clearCompleted() {
        this.todos = this.todos.filter(t => !t.completed);
        this.save();
    }

    setStatusFilter(status) {
        this.statusFilter = status;
    }

    setCategoryFilter(category) {
        this.categoryFilter = category;
    }

    getFilteredTodos() {
        return this.todos.filter(todo => {
            const statusMatch = 
                this.statusFilter === 'all' || 
                (this.statusFilter === 'active' && !todo.completed) || 
                (this.statusFilter === 'completed' && todo.completed);
            
            const categoryMatch = 
                this.categoryFilter === 'all' || 
                todo.category === this.categoryFilter;

            return statusMatch && categoryMatch;
        });
    }

    getStats() {
        const activeCount = this.todos.filter(t => !t.completed).length;
        const hasCompleted = this.todos.some(t => t.completed);
        return { activeCount, hasCompleted };
    }

    getAllCategories() {
        const categories = new Set(this.todos.map(t => t.category));
        return ['all', ...Array.from(categories)];
    }

    save() {
        storage.save(this.todos);
    }
}
