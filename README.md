# Todo App with React & Firebase

A simple Todo app built with **React** and **Firebase**.  
Users can login with Google, add, delete, edit, and categorize their todos.

## Features
- Login with Google account
- Stay logged in until logout
- Each user sees only their own todos
- Add, edit, delete todos
- Mark todos as done and sort completed tasks
- Assign priority: High / Medium / Low
- Dark mode toggle
- Responsive and user-friendly UI

## Tools & Technologies
- **React**: for building UI components
- **Firebase Auth**: for Google login and user authentication
- **Firebase Firestore**: as a free cloud database
- **CSS**: for styling & Dark Mode
- **Service Layer (authService.js / todoService.js)**: hides database logic

## Challenges & Solutions
- **Firestore query requires index** → solved by creating composite index in Firebase console
- **Keeping todos user-specific** → used `uid` in queries to filter todos
- **Dark mode & UI improvements** → added state toggle & CSS classes
- **Editable todos & sorting by completed** → implemented update function and conditional rendering

## How to Run
1. Clone the repository  
   ```bash
   git clone https://github.com/Jana-almansour2/todo-react-firebase.git
