# Local Development Commands (Windows CMD)

## Quick Start

### 1. Navigate to Project Directory
```cmd
cd "C:\Users\HarshB\Downloads\alena (1)\alena\AlenaCinta"
```

### 2. Install Dependencies
```cmd
npm install
```

### 3. Run Development Server
```cmd
npm run dev
```

### 4. Open in Browser
Visit: **http://localhost:5000**

---

## Full Commands Reference

### Install Dependencies (First Time Only)
```cmd
cd "C:\Users\HarshB\Downloads\alena (1)\alena\AlenaCinta"
npm install
```

### Start Development Server
```cmd
npm run dev
```
- Frontend and backend run together
- Server runs on port 5000
- Auto-reloads on file changes

### Build for Production (Test Build)
```cmd
npm run build
```

### Run Production Build Locally
```cmd
npm run build
npm start
```

### Type Check (Verify No Errors)
```cmd
npm run check
```

---

## Troubleshooting

### If `npm` is not recognized:
1. Install Node.js: https://nodejs.org/
2. Restart CMD after installation
3. Verify: `node --version` and `npm --version`

### If port 5000 is already in use:
Change port in `server/index.ts` or set environment variable:
```cmd
set PORT=3000
npm run dev
```

### Clear Cache and Reinstall:
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## What Each Command Does:

- **`npm install`**: Downloads all dependencies (React, Express, etc.)
- **`npm run dev`**: Starts development server with hot reload
- **`npm run build`**: Creates production build (for deployment)
- **`npm start`**: Runs production build locally
- **`npm run check`**: Checks TypeScript for errors

---

## After Running `npm run dev`:

✅ Server will start on **http://localhost:5000**
✅ You'll see logs in the terminal
✅ Open browser and visit: http://localhost:5000
✅ Test all pages:
   - Home: http://localhost:5000
   - Our Story: http://localhost:5000/cerita-kita
   - Gallery: http://localhost:5000/galeri (password: `mommy`)

---

## Stop the Server:

Press `Ctrl + C` in the CMD window to stop the server.

