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

# Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

## 2. Setup Backend

```bash
cd server
npm install
```

## 3. Setup Environment Variables

Create a .env file inside /server

```javascript
DATABASE_URL="postgresql://username:password@localhost:5432/database-name"
```

**Make sure PostgreSQL is installed and running locally.**

## 4. Setup Database (Prisma)

Run migrations:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

(Optional)
```bash
npx prisma studio
```
You can use Prisma Studio to view and manage your database data in a more visual and user-friendly way.

## 5. Start Backend Server

```bash
npm run dev
```

**Backend runs at:**
http://localhost:3000

---

# Frontend Setup

## 6. Install Dependencies

```bash
cd client
npm install
```

## 7. Start Frontend

```bash
npm run dev
```

**Frontend runs at:**

```bash
http://localhost:5173
```
---

# Troubleshooting

## Database connection error

Check .env DATABASE_URL

## Prisma Client not generated

```bash
npx prisma generate
```

## Port already in use

Change backend port in server.js

```javascript
const PORT = 3001;
```



