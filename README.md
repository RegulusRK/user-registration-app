# Fullstack User Registration System

This repository contains a fullstack application featuring a Node.js API connected to MongoDB and a frontend registration form built with HTML, CSS, and JavaScript.

## 🚀 Features

- User registration form  
- Sends data to a backend API  
- Stores user data in a MongoDB database  
- Supports full CRUD operations: Create, Read, Update, Delete  

## Live Demo

You can view the project's front-end live here: [User Registration App](https://<regulusrk>.github.io/user-registration-app/)
ONLY THE FRONT-END


## 📁 Project Structure

```
root/
├── back-end/
│   └── api/
│       ├── server.js
│       ├── routes/
│       ├── models/
│       └── controllers/
└── front-end/
    └── cadastro/
        ├── index.html
        └── style.css
```

## ⚙️ How to Run

### Backend (API)

1. Navigate to the API folder:
   ```bash
   cd back-end/api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The API will be running at: `http://localhost:3000`

> Make sure MongoDB is up and running locally, or update the connection string in your code.

### Frontend

1. Go to the `front-end/` folder  
2. Open the `index.html` file in your browser  
3. Submit the form — the data will be sent to the API  

## 🔄 API Endpoints

| Method | Route        | Description        |
|--------|--------------|--------------------|
| GET    | /users       | Get all users      |
| GET    | /users/:id   | Get user by ID     |
| POST   | /users       | Create a new user  |
| PUT    | /users/:id   | Update user        |
| DELETE | /users/:id   | Delete user        |

## 🧪 Technologies Used

- JavaScript
- Node.js  
- Express  
- MongoDB  
- HTML, CSS  

## 📝 License

This project is licensed under the MIT License.
