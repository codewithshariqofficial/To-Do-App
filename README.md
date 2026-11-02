# 📝 Advanced To-Do App

A clean, modern and responsive **To-Do application** built with **vanilla HTML, CSS and JavaScript** — no frameworks, no libraries, no build step.

Add tasks, organize them by category, filter by status, and never lose your list: everything is saved automatically in your browser's `localStorage`.

> **Want a live demo?** Enable **GitHub Pages** → *Settings → Pages → Branch: `main` / root*. Your app will be live at `https://codewithshariqofficial.github.io/To-Do-App/` (add the link here once it's published).

---

## ✨ Features

- ➕ **Add tasks** with a title and a category
- 🏷️ **Categories** — Personal, Work, Shopping, Other
- ✅ **Mark tasks as complete** with a single click
- 🗑️ **Delete individual tasks**
- 🧹 **Clear all completed** tasks at once
- 🔍 **Filter by status** — All / Active / Completed
- 📂 **Dynamic category filters** generated from your existing tasks
- 💾 **Auto-save** to `localStorage` — your tasks survive page reloads
- 📊 **Live counter** of remaining (active) tasks
- 📅 **Current date** displayed in the header
- 🛡️ **XSS-safe rendering** — task text is escaped before rendering
- 📱 **Fully responsive** layout for mobile and desktop
- 🎨 **Modern glassmorphism UI** with smooth animations

---

## 🖥️ Demo

> Add a task → it instantly appears in the list and is saved to your browser.
> Reload the page → your tasks are still there.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| ---------- | ------- |
| HTML5 | Semantic page structure |
| CSS3 | Styling, responsive layout, animations, CSS variables |
| JavaScript (ES6 Modules) | App logic, state management, rendering |
| Web Storage API (`localStorage`) | Persistence between sessions |

No dependencies. No installations. Just open and use.

---

## 🚀 Getting Started

### Option 1 — Run locally

Because the app uses **ES6 modules**, browsers block module loading from the `file://` protocol. Use any local server:

```bash
# Clone the repository
git clone https://github.com/codewithshariqofficial/To-Do-App.git
cd To-Do-App
```

Then serve the folder using any of these:

```bash
# Python 3
python -m http.server 5500

# Node.js
npx serve .

# VS Code
# Right-click index.html → "Open with Live Server"
```

Now open **http://localhost:5500** in your browser.

### Option 2 — Open directly

You *can* double-click `index.html`, but modern browsers may block ES modules on `file://`. A local server is recommended.

---

## 📁 Project Structure

```
To-Do-App/
├── index.html            # App markup
├── style.css             # Styling, themes and responsive rules
├── js/
│   ├── main.js           # Entry point: wires DOM events to the app logic
│   ├── todoManager.js    # State + business logic (add, toggle, delete, filter)
│   ├── uiRenderer.js     # Renders tasks, stats and filters to the DOM
│   └── storage.js        # localStorage save/load helpers
└── README.md
```

### How it works

```
main.js  ──►  TodoManager  ──►  storage.js  ──►  localStorage
   │               │
   └──────────►  uiRenderer  ──►  DOM
```

- **`TodoManager`** owns the task list and filter state.
- **`uiRenderer`** is stateless — it only paints what it is given.
- **`storage`** isolates all `localStorage` access in one place.
- **`main.js`** connects user events to the manager, then re-renders.

This separation makes the code easy to read, test and extend.

---

## 🎯 How to Use

1. Type your task in the input field.
2. Pick a category from the dropdown.
3. Press **Add Task** (or hit `Enter`).
4. Click the checkbox to mark a task as done.
5. Use **All / Active / Completed** to filter by status.
6. Use the category buttons to filter by category.
7. Click **Clear Completed** to remove all finished tasks.

---

## 💾 Data Storage

Tasks are stored in `localStorage` under the key:

```
advanced_todo_app_tasks
```

Each task looks like this:

```json
{
  "id": "1730000000000",
  "text": "Finish the README",
  "category": "Work",
  "completed": false,
  "createdAt": "2026-11-02T10:00:00.000Z"
}
```

> Note: data is stored **per browser and per device**. Clearing your browser data will also clear your tasks.

---

## 🧩 Possible Improvements

- [ ] Edit an existing task
- [ ] Drag-and-drop to reorder tasks
- [ ] Due dates and reminders
- [ ] Dark mode toggle
- [ ] Search tasks
- [ ] Sync across devices (backend + database)
- [ ] Drag-and-drop categories

Contributions and suggestions are welcome — feel free to open an issue or a pull request.

---

## 👨‍💻 Author

**Shariq Shahid**

- GitHub: [@codewithshariqofficial](https://github.com/codewithshariqofficial)
- Repository: [codewithshariqofficial/To-Do-App](https://github.com/codewithshariqofficial/To-Do-App)

---

## ⭐ Support

If you found this project useful or learned something from it, consider giving it a **star** ⭐ — it means a lot!

---

<p align="center">Built with ❤️ using HTML, CSS & JavaScript</p>
