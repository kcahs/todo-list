# ToDo App Exercise

Use the following example and complete the following steps.

## Clone the repository

Use the GitHub-Link and clone the repository to your local device.

## Install Dependencies and Start the App

### npm install

Run 'npm install' to install all the dependencies.

### npm start

Run 'npm start' to start the app.

## Tasks

### 1) Replace the staticly created data with code using the mockData

- Pass the data to the right components
- Destructure the props Object to use the data in these components
- Loop through the array and display the data
  - Make sure to visualize important tasks (❗)
  - Make sure to visualize completed tasks (✔)
  - **Bonus**: Split the list into two different lists for open and completed tasks as seen in the static example
  - **Bonus**: Show important tasks first in the list

### 2) Seperate Components for every Task

- Create a new component "Task"
- Pass the needed props to the Task-Component
- Replace the Code in the TodoList-Component with the Task-Component

### 3) Add functionality

- Use the Form-Component to add new Tasks to the Todo-List
  - https://www.w3schools.com/react/react_forms.asp
  - https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
- Add onClick-functionality to the buttons to check/uncheck tasks as completed
- **Bonus**: Add functionality to delete tasks from the list.

### 4) Bonus Tasks

- Use the localStorage, that the data is stored and usable after reload
  - https://blog.logrocket.com/using-localstorage-react-hooks/
- Add a warning (window.confirm) before a task can be deleted
- Add a dueDate field in the form and display the dueDate in the List
- Add a completedAt field in the Object and display it in the list
- Add categories
- Add a filter
