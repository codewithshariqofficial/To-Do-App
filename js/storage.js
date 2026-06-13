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
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return [];
        }
    }
};
