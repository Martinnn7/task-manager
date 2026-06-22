# Task Manager App

A full-stack Task Management web application built using **React, Node.js, Express, Prisma, and PostgreSQL**.  
It allows users to register, log in, and manage tasks with full CRUD functionality.

---

## Features

- User Registration & Login (basic auth)
- Create, Read, Update, Delete Tasks
- Toggle task completion status
- Search tasks by title
- Filter tasks (All / Active / Completed)
- Dashboard with task statistics

---
### Requirements:

Make sure you have installed:

- Node.js (v18+ recommended)
- PostgreSQL
- npm or yarn

---

## Tech Stack

### Frontend
- React (Vite)
- TailwindCSS

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

---

## Installation Guide

# 1. Clone Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager

# 2. Setup Backend

cd server
npm install

# 3. Setup Environment Variables

Create a .env file inside /server

DATABASE_URL="postgresql://username:password@localhost:5432/taskmanager"

**Make sure PostgreSQL is installed and running locally.**

# 4. Setup Database (Prisma)

Run migrations:

npx prisma generate
npx prisma migrate dev --name init

(Optional)
npx prisma studio
Prisma Studio can be used to see database data more clearly.

# 5. Start Backend Server

npm run dev

**Backend runs at:**
http://localhost:3000

---

## Frontend Setup

# 6. Install Dependencies

cd client
npm install

# 6. Start Frontend

npm run dev

**Frontend runs at:**

http://localhost:5173



