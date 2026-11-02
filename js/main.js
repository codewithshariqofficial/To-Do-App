import { TodoManager } from './todoManager.js';
import { uiRenderer } from './uiRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
    const todoManager = new TodoManager();
    
    // DOM Elements
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const categorySelect = document.getElementById('category-select');
    const todoListElement = document.getElementById('todo-list');
    const emptyStateElement = document.getElementById('empty-state');
    const itemsLeftElement = document.getElementById('items-left');
    const clearCompletedBtn = document.getElementById('clear-completed');
    const statusFilters = document.getElementById('status-filters');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const currentDateElement = document.getElementById('current-date');

    // Set current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = new Date().toLocaleDateString(undefined, options);

    const updateUI = () => {
        const filteredTodos = todoManager.getFilteredTodos();
        uiRenderer.renderTodoList(todoListElement, filteredTodos, emptyStateElement, {
            onToggle: (id) => {
                todoManager.toggleTodo(id);
                updateUI();
            },
            onDelete: (id) => {
                todoManager.deleteTodo(id);
                updateUI();
            }
        });

        uiRenderer.renderStats(
            todoManager.getStats(),
            itemsLeftElement,
            clearCompletedBtn
        );

        uiRenderer.renderCategoryFilters(
            categoryFiltersContainer,
            todoManager.getAllCategories(),
            todoManager.categoryFilter,
            (category) => {
                todoManager.setCategoryFilter(category);
                updateUI();
            }
        );
    };

    // Event Listeners
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        const category = categorySelect.value;
        
        if (text) {
            todoManager.addTodo(text, category);
            todoInput.value = '';
            updateUI();
            todoInput.focus();
        }
    });

    statusFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Update active class
            statusFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filter = e.target.dataset.filter;
            todoManager.setStatusFilter(filter);
            updateUI();
        }
    });

    clearCompletedBtn.addEventListener('click', () => {
        todoManager.clearCompleted();
        updateUI();
    });

    // Initial render
    updateUI();
});
