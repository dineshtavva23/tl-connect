# TL Connect

A role-based dashboard and task management portal for **Tinkerers' Lab, IITH** — connecting students, cores, and the head for smooth workflow and communication.

🌐 **Live Site:** [https://tl-connect.netlify.app/](https://tl-connect.netlify.app/)

---

## 📚 Table of Contents

- [About](#about)
- [User Roles & Permissions](#user-roles--permissions)
- [Features by Role](#features-by-role)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Setup & Run](#setup--run)
- [Future Scope](#future-scope)

---

## 📌 About

TL Connect is a role-based interface for managing workshops, announcements, tasks, and teams at Tinkerers' Lab, IITH. It helps coordinate across multiple teams while keeping access rights scoped to the right role.

---

## 👥 User Roles & Permissions

### 🔵 Student
- View upcoming/past workshops
- Register for workshops
- View announcements
- View tasks assigned to their domain

### 🟣 Core Member (Domain Leads)
- View & manage workshops (they conduct)
- View tasks assigned to their domain
- Post announcements
- Submit feedback

### 🟢 Head (Admin Role)
- View summary of total cores, students, tasks
- View all core members (filterable by domain)
- View all tasks grouped by team
- Manage system-wide info (read-only for now)

---

## ✅ Features by Role

| Feature             | Student | Core | Head |
|---------------------|---------|------|------|
| View Workshops      | ✅      | ✅   | 🔍   |
| Register for Workshop | ✅    | ❌   | ❌   |
| Add/Edit Workshop   | ❌      | ✅   | 🔍   |
| View Tasks          | ✅ (domain) | ✅ (domain) | ✅ (all) |
| Add Tasks           | ❌      | ❌   | 🔜 |
| Post Announcements  | ❌      | ✅   | ✅ |
| View Members        | ❌      | ❌   | ✅ |
| Role-based Dashboards | ✅   | ✅   | ✅ |
| Feedback Submission | ✅      | ✅   | ❌ |

---

## 📁 Project Structure

```
/pages
  /core           ← Core-specific pages
  /head           ← Head (admin) pages
  /student        ← Student views
  /components     ← Navbar, Footer, Cards
  /data           ← JSON files for tasks, workshops, users
  index.js        ← Role selector + login mock

/components
  Navbar.jsx
  CoreNavbar.jsx
  HeadNavbar.jsx
  Card.jsx
  WorkshopCard.jsx
  TaskCard.jsx
  RegisterWindow.jsx

/data
  workshops.json
  tasks.json
  announcements.json
  cores.json
```

---

## ⚙️ Tech Stack

- **Next.js 14** (React + Routing)
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Local JSON** as mock database (will be replaced by backend later)
- **Netlify** for deployment

---

## 🛠 Setup & Run Locally

```bash
git clone https://github.com/your-username/tl-connect.git
cd tl-connect
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 🚀 Future Scope

- 🔐 Full login system with authentication and role protection
- 🗃️ Backend with MongoDB/PostgreSQL
- 📥 Downloadable resources & uploads
- 📊 Analytics dashboard for head
- 📨 Notifications for tasks/workshops

---

