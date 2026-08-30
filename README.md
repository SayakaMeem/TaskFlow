# 🚀 TaskFlow - Full Stack Task Management Application

TaskFlow is a full-stack task management application that allows users to create, view, complete, and delete tasks through a simple and responsive web interface.

The application demonstrates a modern full-stack deployment approach using **React + Vite frontend** and **Vercel Serverless API backend**. The complete system is deployed on Vercel with a single production URL.

🌐 Live Demo:
https://taskflow-463ui5x0s-sayakameems-projects.vercel.app


---

# ✨ Features

- ✅ Create new tasks
- ✅ View all tasks
- ✅ Mark tasks as completed
- ✅ Undo completed tasks
- ✅ Delete tasks
- ✅ Responsive dark-themed UI
- ✅ Serverless backend API
- ✅ Single URL deployment using Vercel


---

# 🛠️ Technology Stack

## Frontend

### React.js
Used for building the interactive user interface and managing application state.

### Vite
Used as the frontend build tool for fast development and optimized production builds.

### Axios
Used for communicating with backend API endpoints.

### JavaScript (ES6+)
Used for application logic and API handling.


---

## Backend

### Vercel Serverless Functions

The backend API is implemented using Vercel serverless functions.

API endpoint:

/api/tasks


Handles:

- GET → Fetch all tasks
- POST → Create new task
- PUT → Update task completion status
- DELETE → Remove task


---

## Deployment

### Vercel

The complete application is deployed using Vercel.

Architecture:

TaskFlow
│
├── Frontend
│ ├── React
│ ├── Vite
│ └── Axios
│
├── API
│ └── Vercel Serverless Function
│
└── Deployment
└── Vercel




---

# 📂 Project Structure

TaskFlow
│
├── frontend
│
│ ├── api
│ │ └── tasks.js
│ │
│ ├── src
│ │ ├── App.jsx
│ │ ├── App.css
│ │ └── main.jsx
│ │
│ ├── package.json
│ └── vite.config.js
│
└── README.md



---

# 🚀 Running Locally

## 1. Clone Repository

```bash
git clone <repository-url>

Move into project:

cd TaskFlow/frontend
2. Install Dependencies
npm install
3. Start Development Server
npm run dev

The application will run at:

http://localhost:5173
🔌 API Testing

The backend API is available at:

/api/tasks

Example:

GET request:

GET /api/tasks

Response:

[
  {
    "id":1,
    "title":"Learn React",
    "completed":false
  }
]
📦 Production Build

To create an optimized production build:

npm run build

Preview locally:

npm run preview
🌍 Deployment Guide (Vercel)
Install Vercel CLI
npm install -g vercel
Login
vercel login
Deploy

Inside frontend folder:

vercel --prod

Vercel automatically:

Builds React application
Deploys frontend
Creates serverless API routes
Provides production URL
🔄 API Flow
User Interface
      |
      |
      ↓
React Components
      |
      |
      ↓
Axios Requests
      |
      |
      ↓
/api/tasks
      |
      |
      ↓
Vercel Serverless Function
📌 Future Improvements
Database integration (MongoDB/PostgreSQL/Supabase)
User authentication
Task categories
Due dates and reminders
Cloud persistent storage
Drag and drop task management
👨‍💻 Author

Sayaka Meem

Full Stack Developer
