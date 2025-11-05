# Windows CMD Commands - Step by Step

## Complete Setup (Copy Each Command One by One)

### Step 1: Navigate to Project
```cmd
cd "C:\Users\HarshB\Downloads\alena (1)\alena\AlenaCinta"
```

### Step 2: Install Dependencies (IMPORTANT - Do This First!)
```cmd
npm install
```
**Wait for this to finish** - it will download all packages (takes 2-5 minutes)

### Step 3: Run Development Server

**Option A - Using npm script (Recommended):**
```cmd
npm run dev
```

**Option B - If npm run dev doesn't work, use npx:**
```cmd
npx tsx server/index.ts
```

**Option C - With environment variable:**
```cmd
set NODE_ENV=development
npx tsx server/index.ts
```

---

## Quick Copy-Paste (Run in Order):

```cmd
cd "C:\Users\HarshB\Downloads\alena (1)\alena\AlenaCinta"
npm install
npm run dev
```

---

## Troubleshooting

### If npm is not recognized:
1. Install Node.js: https://nodejs.org/ (Download LTS version)
2. Restart CMD after installation
3. Verify: `node --version` and `npm --version`

### If npm install fails:
- Make sure you have internet connection
- Try: `npm install --verbose` to see detailed errors
- Check if Node.js version is 18+ (run `node --version`)

### If npm run dev still doesn't work:
Try this command instead:
```cmd
set NODE_ENV=development
npx tsx server/index.ts
```

---

## What Should Happen:

After running `npm run dev`, you should see:
```
serving on port 5000
```
or similar messages.

Then open browser: **http://localhost:5000**

---

## To Stop Server:
Press `Ctrl + C`

