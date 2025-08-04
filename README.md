# 🚀 Multi-Tenant SaaS Backend (Express.js + RBAC)

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen?logo=mongodb)
![License](https://img.shields.io/badge/license-MIT-blue)

> A **Node.js + Express backend** for a **multi-tenant SaaS application** with **tenant isolation, role-based access control (RBAC), and JWT authentication**.

---

## 📑 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Quick Testing with .http File](#-quick-testing-with-http-file-vs-code-rest-client)
- [Next Steps](#-next-steps)

---

## ✅ Features

- **Multi-Tenant Architecture:** Each tenant’s data is private and isolated
- **Role-Based Access Control (RBAC):**
  - **Owner:** Full access (manage tenants, users, projects)
  - **Admin:** Manage projects and users
  - **Member:** Read-only access
- RESTful API with proper request validation
- Secure password hashing using bcrypt
- JWT-based authentication for secure endpoints

---

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone git@github.com:OmarBelfeki/Multi-Tenant-SAAS-expressJS.git
cd Multi-Tenant-SAAS-expressJS
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a **.env** file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/multi_tenant_saas
JWT_SECRET=your_secret_key_here
```

### 4️⃣ Start the server
```bash
npm run dev
```
Server will start at: **http://localhost:5000**

---

## 📂 Project Structure
```
src/
 ├── config/
 │   └── db.js
 ├── middleware/
 │   ├── authMiddleware.js
 │   └── roleMiddleware.js
 ├── models/
 │   ├── Tenant.js
 │   ├── User.js
 │   └── Project.js
 ├── routes/
 │   ├── authRoutes.js
 │   ├── projectRoutes.js
 ├── app.js
 └── server.js
```

---



---

## 🔥 Quick Testing with .http File

Create a `requests.http` file:
```http
### 1️⃣ Register a New Tenant + Owner
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
    "tenantName": "Belfeki Dev",
    "name": "omar belfeki",
    "email": "omarbelfeki1@gmail.com",
    "password": "password123"
}

### 2️⃣ Login
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
    "email": "omar@b.com",
    "password": "password123"
}

### 3️⃣ Create a Project (Owner/Admin Only)
POST http://localhost:5000/api/projects
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTA2MTE3NjkzOGQ1NWNlNjNjNzQxYyIsImlhdCI6MTc1NDI5MzA5OSwiZXhwIjoxNzU0ODk3ODk5fQ.QG9cIAfo4EaqsXmq1dtSNFUcvKdO9ThUgxO2LwI5tPs
Content-Type: application/json

{
    "name": "New SaaS Platform",
    "description": "Backend for multi-tenant application"
}


### 4️⃣ Get All Projects for Tenant
GET http://localhost:5000/api/projects
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTA2MTE3NjkzOGQ1NWNlNjNjNzQxYyIsImlhdCI6MTc1NDI5MzA5OSwiZXhwIjoxNzU0ODk3ODk5fQ.QG9cIAfo4EaqsXmq1dtSNFUcvKdO9ThUgxO2LwI5tPs
```

---

## ✅ Next Steps

- [ ] Add tenant-level user management (invite, update roles)
- [ ] Implement billing & subscription plans
- [ ] Add automated tests with Jest or Supertest
- [ ] Deploy to cloud (AWS, Render, or Railway)

---

## 📜 License
This project is licensed under the MIT License.
