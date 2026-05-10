# KinLight Process Portfolio

## Overview

This repository is the CPT208 KinLight process portfolio repository. It documents the research, design thinking, iteration process, and final presentation context for **KinLight**, a playful family connection web app for university students and parents living apart.

KinLight was developed around three design requirements:

- low reply pressure
- flexible timing
- easy to start

The final system centers on three core functions: **Album / Connect**, **Jar**, and **Weekly Echo**.

## Live Links

- Process portfolio: [Portfolio URL]
- Live frontend demo: [https://208-design.vercel.app](https://208-design.vercel.app)
- System/source code repository: [https://github.com/000ovo000/208_Design](https://github.com/000ovo000/208_Design)

## Repository Purpose

This repository is for the **process portfolio**, not the main implementation codebase. It helps reviewers understand the design rationale, development journey, and final project positioning without duplicating the full system repository documentation.

## Final System Status

- Frontend: completed and deployed as a multi-page React/Vite course-demo application with **Home**, **Album**, **Jar**, **Echo**, and **Me** tabs, plus a demo-mode fallback.
- Backend and database: fully implemented for local demonstration with an Express + MySQL architecture. The backend is not a placeholder.
- Deployment note: the backend is **not cloud-deployed**, but this does **not** mean it is unfinished. It is locally runnable and demoable as part of the final system.

## Core Functions

- **Album / Connect**: family album browsing, member filtering, time filtering, image upload, post creation and deletion, emoji reactions, pet-message relay, and care-message flows.
- **Jar**: mood check-ins with private, soft, and full visibility, including family-visible mood sharing rules and care interactions.
- **Weekly Echo**: weekly statistics aggregation, report generation and regeneration, current report retrieval, keepsake summary, and reward claiming into inventory.

## Technology Summary

- Frontend: React 18, TypeScript, Vite 6, Tailwind CSS 4, Radix UI primitives, Motion, Lucide React
- Backend: Node.js, Express 5, MySQL, `mysql2`, Multer, CORS, dotenv
- Database: `kinlight_db`
- SQL files: `kinlight_db.sql`, `seed_db.sql`
- Backend coverage includes routes for posts, uploads, moods, inventory, daily drop, weekly echo, family members, pet messages, and care messages

## AI Use and Disclosure

AI was used for coding assistance, debugging, layout refinement, documentation support, and limited visual asset generation where applicable.

Core design logic, user research, design requirements, and evaluation interpretation were produced by the team.

For primary coding prompt records, please refer to the system repository's [`/ai-logs`](https://github.com/000ovo000/208_Design/tree/main/ai-logs).

## Team / Contributions

| Member | Main contributions |
| --- | --- |
| Duocan Li | Constructed and optimized the process portfolio; organized and analyzed user research data; investigated relevant academic and commercial references; conducted user interviews; designed the poster. |
| Chengcheng Hu | Conducted user interviews; implemented Album-related front-end work; contributed to backend implementation; designed the poster. |
| Leyi Liu | Conducted user interviews; implemented Jar-related front-end work; contributed to backend implementation; designed the poster. |
| Xintong Wang | Conducted user interviews; implemented Weekly Echo-related front-end work; contributed to backend implementation; designed the poster. |

## Notes for Assessment

This README is intentionally concise. It is designed to help teachers quickly understand what this repository is for, how it relates to the final KinLight system, and where to find the live demo, source code, and AI disclosure records.
