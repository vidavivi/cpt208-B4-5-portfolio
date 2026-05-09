# Extracted Technical Information for Portfolio

> Purpose: This file is a factual handoff for updating the CPT208 Kinlight process portfolio. It should be used as a source for rewriting the portfolio section, not copied into the page verbatim. The portfolio page should stay concise and visual.

## 1. Confirmed Project Status

- **Project:** Kinlight, CPT208 B4 Relation between Generations.
- **Overall status:** Full-stack development has been completed.
- **Frontend:** Completed and publicly deployed.
- **Frontend live URL:** https://208-design.vercel.app
- **Frontend deployment platform:** Vercel.
- **Backend:** Completed, but not publicly deployed.
- **Database:** MySQL database implemented. The valid database name is `kinlight_db`.
- **Backend + database access:** Locally runnable from the submitted source code.
- **Backend deployment note:** Public backend deployment is not included because the group did not rent an external server, and the instructor said backend deployment is not required.
- **Important wording rule:** Do not describe the system as incomplete. Do not write “public deployment planned later.”
- **README setup instructions:** To be improved later. Do not overclaim that the setup documentation is already complete.
- **AI logs:** To be added later. Do not overclaim that `/ai-logs` is already complete.
- **Deprecated / unused database file:** Any old `kinlight` file is no longer used and should not be referenced. Use `kinlight_db`.

## 2. Core Technology Stack for Portfolio Display

Use only this simplified technology stack in the portfolio. Do not list every dependency.

| Area | Portfolio-ready description |
|---|---|
| Frontend | React + Vite web interface for the deployed user-facing prototype. |
| Backend | Node.js + Express backend implementing API routes and application logic. |
| Database | MySQL database using `kinlight_db` for users, family posts, moods, items, rewards, and weekly summaries. |
| Deployment | Frontend deployed on Vercel for public demonstration. Backend runs locally from source code. |
| Repository | Source code submitted through GitHub / project repository. |

## 3. System Architecture Summary

Recommended portfolio display format:

**User Action → React / Vite Frontend → Express API → MySQL Database (`kinlight_db`) → UI Feedback**

Portfolio explanation, if a short caption is needed:

> Kinlight uses a full-stack architecture. Users interact with the deployed React frontend, which sends feature-specific requests to the Express backend. The backend reads from and writes to the MySQL database, then returns updated data so the interface can refresh posts, moods, inventory, rewards, and weekly summaries.

Do not show local file paths or backend source-code details on the portfolio page.

## 4. Core Feature Data Handling

Use these as concise feature cards, not as a large table.

### 4.1 Family Album

- **User action:** User uploads a family post, shares a short message, or reacts to family updates.
- **Data handled:** Post content, media reference, family member identity, and reactions.
- **Backend/database evidence:** Stored through backend post/upload/reaction logic and related post/reaction tables.
- **Visible UI feedback:** New posts and reactions appear in the shared family album.

### 4.2 Mood Jar

- **User action:** User records a mood, optional note, and visibility setting.
- **Data handled:** Mood value, date, optional comment, user identity, and visibility state.
- **Backend/database evidence:** Mood entries are stored in the database and filtered according to visibility.
- **Visible UI feedback:** Mood jar and calendar update with private or family-visible emotional records.

### 4.3 Daily Drop / Items

- **User action:** User checks the daily drop, claims an item, uses an item, or activates a reward.
- **Data handled:** Daily claim status, item ownership, inventory count, and active reward state.
- **Backend/database evidence:** Daily drop, item, inventory, and active item records are stored in the database.
- **Visible UI feedback:** Claimed rewards, inventory status, and room/pet feedback update in the interface.

### 4.4 Weekly Echo

- **User action:** User opens the weekly recap and claims weekly rewards.
- **Data handled:** Posts, moods, reactions, messages, item activity, recap summary, and reward claim state.
- **Backend/database evidence:** Weekly reports are generated from stored activity data and persisted with reward claim records.
- **Visible UI feedback:** Weekly Echo displays connected days, family moments, statistics, keepsake summaries, and gift state.

### 4.5 Account / Family Context

This can be shown only as a small supporting note if there is space.

- **User action:** User switches role/context or views family members.
- **Data handled:** User identity, family membership, and role context.
- **Visible UI feedback:** The app updates family-specific content according to the active user context.

## 5. Access & Reproducibility Content

Use 2–3 compact access cards or buttons.

### Frontend Live Demo

- **Label:** Frontend Live Demo
- **URL:** https://208-design.vercel.app
- **Description:** Publicly deployed Vercel frontend for demonstration.

### Source Code Repository

- **Label:** Source Code Repository
- **URL:** `[Insert GitHub repository link]`
- **Description:** Full project source code. Insert the confirmed repository link manually.

### Backend & Database

- **Label:** Backend & Database
- **Status:** Completed; locally runnable with MySQL database `kinlight_db`.
- **Description:** Backend public deployment is not included because no external server was rented and backend deployment was not required by the instructor.

## 6. Portfolio-ready Wording

### A. Technical Implementation Overview

Kinlight was developed as a completed full-stack web application for intergenerational communication between university students and family members. The deployed frontend provides the user-facing experience, including Family Album, Mood Jar, Daily Drop, Weekly Echo, and account/family context features. The backend is implemented with Node.js and Express, while the MySQL database `kinlight_db` supports persistent records for posts, moods, items, rewards, and weekly summaries.

### B. Deployment & Access Status

Kinlight has completed full-stack development. The frontend is deployed on Vercel for public demonstration, while the backend and MySQL database are fully implemented and locally runnable from the submitted source code. Public backend deployment is not included because no external server was rented, and backend deployment was not required by the instructor.

### C. Data Handling Evidence

Kinlight handles real user input and interaction states rather than relying only on static mockups. Family Album stores posts and reactions; Mood Jar records emotional entries with visibility settings; Daily Drop updates reward and inventory states; and Weekly Echo aggregates stored activity data into weekly summaries and reward claims. These data flows demonstrate how the interface, backend logic, and MySQL database work together to support the core playful features.

## 7. Recommended Portfolio Section Structure

Use this structure when modifying the portfolio page:

1. **Completion Status**  
   Four status cards: Frontend deployed; Backend completed; MySQL `kinlight_db`; Source code available.

2. **System Architecture**  
   One visual flow: User Action → React Frontend → Express API → MySQL Database → UI Feedback.

3. **Core Feature Data Handling**  
   Four compact feature cards: Family Album; Mood Jar; Daily Drop / Items; Weekly Echo.

4. **Access & Reproducibility**  
   Frontend live demo button; GitHub repository button; backend/database local-run note.

## 8. Content to Remove or Avoid in Portfolio

Remove or avoid the following from the portfolio page:

- Large technology stack table.
- Large API endpoint table.
- Large database table list.
- Local machine paths such as `/Users/...`.
- Overly detailed dependency names unless they are essential.
- “Public deployment is planned for a later stage.”
- “The system is incomplete.”
- “Only the frontend is completed.”
- “Backend deployed online.”
- Repeated explanations of why the backend is not deployed.
- References to unused old `kinlight` database files.

## 9. Instruction for Portfolio Codex

When updating the portfolio:

- Use this markdown file as a factual source.
- Do not copy all technical details into the page.
- Convert the information into cards, badges, and flow blocks.
- Reduce the current text by at least 50%.
- Keep the page visually consistent with the current warm Kinlight portfolio style.
- Do not use frontend stickers or decorative UI assets unless explicitly requested.
- Make sure the page answers the CPT208 requirement: system architecture, hosted high-fi/frontend URL, source repository, and evidence of data handling.
