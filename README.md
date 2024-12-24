# React Redux Toolkit CRUD - User Management

This repository contains a small **CRUD (Create, Read, Update, Delete)** application for managing users. It demonstrates the use of **React** and **Redux Toolkit** to handle state efficiently and perform basic operations.

## Repository Information

- **Repository Name**: react-redux-toolkit-crud
- **GitHub Link**: [https://github.com/MostafaZrour/react-redux-toolkit.git](https://github.com/MostafaZrour/react-redux-toolkit.git)

## Features

- Add new users with a form.
- View a list of users.
- Edit user information.
- Delete users from the list.
- State management powered by **Redux Toolkit**.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MostafaZrour/react-redux-toolkit.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-redux-toolkit-crud
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding a User
1. Open the "Add User" form.
2. Fill in user details and click "Add".

### Viewing Users
- The main page lists all users.

### Editing a User
1. Click the "Update" button next to a user.
2. Update the information and save changes.

### Deleting a User
- Click the "Delete" button next to a user to remove them from the list.

## Project Structure

```
react-redux-toolkit-crud/
├── public/                # Static assets
├── src/
│   ├── redux-toolkit/
│   │     ├── ProdcutSlice.js    # Redux Toolkit slice for managing product state.
│   │     ├── UserSlice.js       # Redux Toolkit slice for managing user state.
│   │     └── store.js           # Redux store configuration.
│   ├── pages/                   # React components
│   │     ├── Home.js            # Home page component with links to user and product management.
│   │     ├── Layout.js          # Layout component for structuring the application.
│   │     ├── Products.js        # Component for fetching and displaying products from an API.
│   │     ├── Update.js          # Component for updating an existing user with prefilled data.
│   │     └── List.js            # Component for displaying the list of users and providing edit/delete actions.
│   ├── App.js                   # Main application component.
│   └── index.js                 # Entry point.
├── package.json                 # Project metadata and dependencies.
└── README.md                    # Project documentation.
```

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Redux Toolkit**: Simplified state management with Redux.
- **React-Redux**: Integration of Redux with React.
- **CSS**: Styling (or replace with your preferred styling framework).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or feedback, contact:
- **Mostafa Zrour**
- GitHub: [MostafaZrour](https://github.com/MostafaZrour)

