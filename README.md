# MERN Thinkboard

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). Features include note CRUD, rate limiting, and a modern React frontend.

---

## Folder Structure

```
mern_thinkboard/
  backend/    # Express.js API, MongoDB, rate limiting
  frontend/   # React + Vite frontend
```

---

## Tech Stack
- **Frontend:** React, Vite, TailwindCSS, DaisyUI
- **Backend:** Node.js, Express, Mongoose, Upstash Redis (rate limiting)
- **Database:** MongoDB

---

## Development Setup

### 1. Clone the Repository
```bash
git clone <repo-url>
cd mern_thinkboard
```

### 2. Backend Setup
```bash
cd backend
npm install
```

#### Environment Variables
Create a `.env` file in `backend/` with:
```
MONGO_URI=<your-mongodb-uri>
UPSTASH_REDIS_REST_URL=<your-upstash-redis-url>
UPSTASH_REDIS_REST_TOKEN=<your-upstash-redis-token>
NODE_ENV=development
PORT=5001 # optional, defaults to 5001
```

#### Run Backend (dev mode)
```bash
npm run dev
```
Server runs on [http://localhost:5001](http://localhost:5001)

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

#### Run Frontend (dev mode)
```bash
npm run dev
```
Frontend runs on [http://localhost:5173](http://localhost:5173)

---

## Production Build & Deployment

### 1. Build and Start from the Root Directory

The root `package.json` provides scripts to streamline production deployment:

```bash
# From the project root
yarn install # or npm install (if you want to install root dependencies, optional)
npm run build   # Installs dependencies and builds frontend
npm start       # Starts backend (serves API and built frontend)
```
- `npm run build` installs dependencies for both backend and frontend, then builds the frontend for production.
- `npm start` starts the backend server, which will also serve the built frontend static files.

### 2. Manual Steps (Alternative)
If you prefer, you can still build and start each part manually:

#### Build Frontend
```bash
cd frontend
npm install
npm run build
```

#### Start Backend (serves frontend in production)
```bash
cd ../backend
npm install
NODE_ENV=production npm start
```

---