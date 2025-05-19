GOQii Developer Assignment



This is a full-stack developer project for GOQii, demonstrating backend API development, frontend integration, database management, and version control using GitHub.

📁 Project Structure
pgsql
Copy
Edit
developer-assignment/
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
✨ Features
Full CRUD functionality using Core PHP

MySQL database integration for user management

React.js frontend with Bootstrap styling

Responsive and mobile-friendly UI

Export user data as CSV

Version control using Git and GitHub

🛠 Tech Stack
Frontend: React.js, Bootstrap, Vite

Backend: Core PHP (REST API)

Database: MySQL

Version Control: Git + GitHub

🚀 Setup Instructions
Backend
Move the backend/ folder into your XAMPP htdocs directory:
C:/xampp/htdocs/backend

Create a MySQL database and import the schema:


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Configure database credentials in db.php:


$host = 'localhost';
$db   = 'your_database_name';
$user = 'root';
$pass = '';
Add CORS headers at the top of each PHP API file:


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
Frontend
Navigate to the frontend directory:


cd frontend/goqii-frontend
Install dependencies:


npm install
Start the development server:


npm run dev
Make sure your backend is running at: http://localhost/backend/

📚 How to Use
Add new users via the form

View all users in the list

Edit or delete individual users

Export the user list as a CSV file

📝 Notes & Key Decisions
Used Core PHP as specified in the requirements

Passwords are securely stored using password_hash()

Frontend communicates with the backend via the fetch() API

Bootstrap ensures a clean and responsive UI

CSV export is implemented entirely in the frontend

Codebase is modular and well-commented for clarity

🔗 Submission
GitHub Repository: https://github.com/tanvi989/goqii-developer-assignment

