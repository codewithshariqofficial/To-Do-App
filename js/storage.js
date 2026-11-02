const STORAGE_KEY = 'advanced_todo_app_tasks';

export const storage = {
    save(todos) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    },

    load() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (!data) return [];
            const todos = JSON.parse(data);
            // Make sure stored data is actually a list of tasks
            return Array.isArray(todos) ? todos : [];
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return [];
        }
    }
};
