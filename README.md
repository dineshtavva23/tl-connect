# TL Connect

A role-based dashboard and task management portal for **Tinkerers' Lab, IITH** — connecting students, cores, and the head for smooth workflow and communication. Backend work yet to be done. 


**Live Site:** [https://tl-connect.netlify.app/](https://tl-connect.netlify.app/)

---

## Table of Contents

- [User Roles & Permissions](#user-roles--permissions)
- [Features by Role](#features-by-role)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Setup & Run](#setup--run)
- [Future Scope](#future-scope)

---



## User Roles & Permissions

###  Student
- View upcoming/past workshops
- Register for workshops
- View announcements
- View tasks assigned to their domain

###  Core Member (Domain Leads)
- View & manage workshops (they conduct)
- View tasks assigned to their domain
- Post announcements
- Submit feedback

###  Head (Admin Role)
- View summary of total cores, students, tasks
- View all core members (filterable by domain)
- View all tasks grouped by team
- Manage system-wide info (read-only for now, backend yet to be added)
- View Feedbacks(yet to be added)
---

##  Features by Role

| Feature             | Student | Core | Head |
|---------------------|---------|------|------|
| View Workshops      | ✅      | ✅   | 🔍   |
| Register for Workshop | ✅    | ❌   | ❌   |
| Add/Edit Workshop   | ❌      | ✅   | 🔍   |
| View Tasks          | ✅ (domain) | ✅ (domain) | ✅ (all) |
| Add Tasks           | ❌      | ❌   | to be added |
| Post Announcements  | ❌      | ✅   | ✅ |
| View Members        | ❌      | ❌   | ✅ |
| Role-based Dashboards | ✅   | ✅   | ✅ |
| Feedback Submission | ✅      | ✅   | view them(to be added) |

---

##  Project Structure

```
/pages
  /core           ← Core-specific pages
  /head           ← Head (admin) pages
  /student        ← Student views
  index.js        ← Role selector + login mock

/components
  AnnouncementCard.jsx
  Card.jsx
  CoreNavbar.jsx
  HeadNavbar.jsx
  Footer.jsx
  RegisterWindow.jsx
  StudentNavbar.jsx
  TaskCard.jsx
  WorkshopCard.jsx
  WorkshopDetails.jsx

/data
  announcements.json
  cores.json
  coreTasks.json
  summerschool.json
  tasks.json
  workshops.json
```

---

##  Tech Stack

- **Next.js 14** (React + Routing)
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Local JSON** as mock database (will be replaced by backend later)
- **Netlify** for deployment

---

## Setup & Run Locally

```bash
git clone https://github.com/dineshtavva23/tl-connect.git
cd tl-connect
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

##  Future Scope

-  Full login system with authentication and role protection
-  Backend with MongoDB/PostgreSQL
-  Downloadable resources & uploads
-  Analytics dashboard for head
-  Notifications for tasks/workshops

---

