export const uiRenderer = {
    renderTodoList(todoListElement, todos, emptyStateElement, callbacks) {
        todoListElement.innerHTML = '';
        
        if (todos.length === 0) {
            emptyStateElement.classList.remove('hidden');
        } else {
            emptyStateElement.classList.add('hidden');
            todos.forEach(todo => {
                const li = this.createTodoElement(todo, callbacks);
                todoListElement.appendChild(li);
            });
        }
    },

    createTodoElement(todo, { onToggle, onDelete }) {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;

        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} aria-label="${todo.completed ? 'Mark task as active' : 'Mark task as completed'}">
            <span class="todo-category">${todo.category}</span>
            <span class="todo-text">${this.escapeHTML(todo.text)}</span>
            <button class="delete-btn" title="Delete task" aria-label="Delete task">Delete</button>
        `;

        const checkbox = li.querySelector('.todo-checkbox');
        checkbox.addEventListener('change', () => onToggle(todo.id));

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => onDelete(todo.id));

        return li;
    },

    renderStats({ activeCount, hasCompleted }, itemsLeftElement, clearCompletedBtn) {
        itemsLeftElement.textContent = `${activeCount} ${activeCount === 1 ? 'item' : 'items'} left`;
        
        if (hasCompleted) {
            clearCompletedBtn.classList.remove('hidden');
        } else {
            clearCompletedBtn.classList.add('hidden');
        }
    },

    renderCategoryFilters(container, categories, activeCategory, onCategoryChange) {
        container.innerHTML = '';
        if (categories.length <= 1) return; // Only show if there's more than just 'all'

        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${category === activeCategory ? 'active' : ''}`;
            btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            btn.dataset.category = category;
            btn.addEventListener('click', () => onCategoryChange(category));
            container.appendChild(btn);
        });
    },

    escapeHTML(str) {
        const p = document.createElement('p');
        p.textContent = str;
        return p.innerHTML;
    }
};
