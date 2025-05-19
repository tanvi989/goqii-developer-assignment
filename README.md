GOQii Developer Assignment
This is a full-stack developer assignment project for GOQii, demonstrating backend API development, frontend integration, database management, and version control using GitHub.

Project Structure
-developer-assignment/
├── backend/
│   ├── db.php
│   └── user/
│       ├── create.php
│       ├── read.php
│       ├── update.php
│       └── delete.php
├── frontend/
│   └── goqii-frontend/
│       ├── public/
│       └── src/
│           ├── components/
│           │   ├── UserForm.jsx
│           │   ├── UserList.jsx
│           │   ├── Footer.jsx
│           │   └── Navbar.jsx
│           ├── App.jsx
│           └── main.jsx
├── README.md
Features
Create, Read, Update, Delete (CRUD) API in Core PHP

SQL database integration for user entity

Frontend built using React.js with Bootstrap for styling

Fully responsive and mobile-friendly UI

CSV download feature for user data

Version control with Git, hosted on GitHub

Tech Stack
Frontend: React.js + Bootstrap + Vite

Backend: Core PHP (RESTful API)

Database: MySQL

Version Control: Git + GitHub

Setup Instructions
Backend
Place the backend/ folder inside your local XAMPP htdocs directory (e.g., C:/xampp/htdocs/backend).

Create a database in MySQL and import the following schema:

sql

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Configure your database credentials in db.php:

php
Copy
Edit
$host = 'localhost';
$db   = 'your_database_name';
$user = 'root';
$pass = '';
Ensure all PHP API files include CORS headers at the top:

php
Copy
Edit
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
Frontend
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend/goqii-frontend
Install required dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Make sure your backend is running and accessible from http://localhost/backend/.

How to Use
Fill out the form to add new users

View all users in the list

Edit or delete individual users

Export the full user list to a CSV file

Key Decisions & Notes
Used Core PHP for backend as per requirement

Passwords are securely stored using password_hash()

Frontend interacts with the backend using the fetch() API

Bootstrap was used to ensure quick, responsive layout

CSV generation is handled entirely in the frontend

The project structure is modular and well-commented for clarity

Submission
GitHub Repository: https://github.com/tanvi989/goqii-developer-assignment

