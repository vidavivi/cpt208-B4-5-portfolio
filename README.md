# Kinlight

Kinlight is a CPT208 Human-Centred Computing group project that explores low-pressure, asynchronous communication between university students and their parents when living apart.

The system is designed to support lightweight emotional expression, gentle family awareness, and easier conversation starting through three core features: Album, Jar, and Weekly Echo.

## Core Features

### Album

A family-oriented sharing space where users can view and respond to everyday family updates through lightweight reactions and visual feedback, without needing to start a full conversation.

### Jar

A mood-recording feature that allows users to log emotional states and manage how much mood information is shared with family members.

### Weekly Echo

A weekly recap feature that reads family activity data from posts, moods, and daily drops to generate a lightweight family summary and support easier conversation starting.

## Technology Stack

### Front End

- React
- TypeScript
- Vite
- MUI
- Radix UI
- Tailwind CSS
- Emotion
- React Router
- Custom styles and interaction logic

### Back End

- Node.js
- Express
- CORS
- Multer
- `mysql2/promise`
- REST-style API routes

### Database

- MySQL
- Database name: `kinlight`
- Initialization file: `backend/init_mysql.sql`

## Current Deployment Status

The source code is hosted on GitHub. At the current submission stage, the full-stack system runs locally.

Both front-end and back-end deployment are planned for a later stage. Therefore, this repository currently documents the local full-stack implementation rather than a public deployed service.

Repository: [https://github.com/000ovo000/208_Design](https://github.com/000ovo000/208_Design)

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/000ovo000/208_Design.git
cd 208_Design
```

### 2. Install front-end dependencies

```bash
npm install
```

### 3. Install back-end dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Initialize the MySQL database

```bash
mysql -u root -p < backend/init_mysql.sql
```

The database name should be `kinlight`. Before running the backend, configure the local MySQL connection in `backend/db.js` if needed. Do not expose or commit real database passwords in public documentation.

### 5. Start the full-stack system

```bash
npm run dev:all
```

## Repository Structure

```text
208_Design/
├── backend/
│   ├── routes/
│   ├── uploads/
│   ├── db.js
│   ├── server.js
│   ├── init_mysql.sql
│   └── package.json
├── public/
│   └── images/
├── src/
│   ├── app/
│   ├── styles/
│   ├── main.tsx
│   └── routes.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## Main API Areas

```text
/api/me
/api/family-members
/api/moods
/api/posts
/api/uploads
/api/weekly-echo
```

The backend also includes daily-drop and item-related routes for playful item use and daily interaction handling.

## Data Handling Overview

| Feature | Main user action | Backend / data source | Database tables |
| --- | --- | --- | --- |
| Album | View or create family posts | `/api/posts`, `/api/uploads` | `posts` |
| Jar | Record mood state | `/api/moods` | `moods` |
| Weekly Echo | View weekly recap | `/api/weekly-echo` | `posts`, `moods`, `daily_drops` |
| Family context | Load current user and family members | `/api/me`, `/api/family-members` | `users`, `families`, `family_members` |
| Daily Drop / Items | Claim or use playful items | daily-drop and item routes | `items`, `my_items`, `daily_drops` |

## Team Contributions

| Member | Main contributions |
| --- | --- |
| Duocan Li | Constructed and optimized the overall process portfolio; organized and analyzed user research data; investigated and analyzed relevant academic papers and commercial products; conducted user interviews; designed the poster. |
| Chengcheng Hu | Conducted user interviews; implemented the Album front-end feature; contributed to backend implementation; designed the poster. |
| Leyi Liu | Conducted user interviews; implemented the Jar front-end feature; contributed to backend implementation; designed the poster. |
| Xintong Wang | Conducted user interviews; implemented the Weekly Echo front-end feature; contributed to backend implementation; designed the poster. |

## AI Use Disclosure

ChatGPT, Codex, and Figma AI were used as support tools during the project for code generation, debugging, CSS refinement, portfolio wording, and visual generation.

User research, design requirements, final design logic, function selection, and evaluation decisions were defined and reviewed by the team.

AI-assisted outputs were treated as drafts or implementation support and were checked against project requirements, user research findings, and the intended interaction logic before being included in the final work.

## Notes

This README is intended for coursework review and local project setup. It documents the current locally runnable full-stack implementation and does not describe a public deployed version of the system.
