# Todo App with React & Firebase

This project is a web-based Todo application built using **React** and **Firebase**.
The idea of the project is to create a simple and practical task management app that
allows users to organize their daily tasks in an easy and user-friendly way.

The main goal of this project is to:
- Allow users to login securely using their Google account
- Enable users to create and manage their own personal todo lists
- Ensure that each user’s data is private and accessible only to them

React was chosen for this project because it simplifies building interactive user
interfaces and allows the application to be divided into reusable components,
making the code easier to organize and maintain.

---

## Project Description

The Todo application allows users to manage their tasks after logging in.
Only authenticated users can access the application, and each user can view
and manage only their own todos.

The user can:
- Login using Google authentication
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Assign priority levels (High, Medium, Low)
- Switch between light mode and dark mode
- Logout at any time

### Simple Usage Scenario
1. The user opens the application and logs in using a Google account.
2. After logging in, the user is redirected to the main Todo page.
3. The user adds a new task and selects its priority.
4. When a task is completed, the user marks it as done, and it moves to the bottom
   of the list to visually separate completed tasks from active ones.
5. The user can logout at any time.

---

## Tools and Technologies

- **React**  
  Used to build the user interface and manage components and application state.

- **Firebase Authentication**  
  Used to handle secure Google login and manage user sessions.

- **Firebase Firestore**  
  Used as a cloud database to store todos for each user separately.

- **Visual Studio Code**  
  Used as the main code editor for writing and managing the project code.

- **npm Packages**  
  Used to install required libraries and dependencies.

- **GitHub**  
  Used for version control and sharing the project source code.

---

## Implementation Overview

The project was created using a standard React setup.
The application was divided into clear components such as:
- Login component
- Todo list component
- Individual todo item component

Firebase was connected using environment variables (`.env`) to keep sensitive
configuration data secure.
Authentication and database logic were separated into service files to keep the
code clean and well-structured.

React state hooks were used to manage:
- User authentication state
- Todo data
- UI features such as dark mode

Todos are fetched and updated based on the currently logged-in user, ensuring
that each user only accesses their own data.
The user interface was designed to be simple, responsive, and easy to use.

---

## Challenges and Solutions

One challenge was controlling access to the application so that only logged-in
users could view and manage todos.
This was solved by checking the authentication state and rendering the application
content conditionally.

Another challenge was organizing the project structure and separating UI logic
from database operations.
This was solved by using a service layer for Firebase-related logic, which made
the code cleaner and easier to maintain.

---

## Conclusion

The main objective of this project was successfully achieved.
The application provides a secure and user-friendly way for users to manage
their daily tasks while keeping their data private.

In the future, the application could be enhanced by adding features such as
task deadlines, reminders, or additional task filtering options.

Overall, this project helped strengthen practical skills in React, Firebase
integration, and real-world web application development.
