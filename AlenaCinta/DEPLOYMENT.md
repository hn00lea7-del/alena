# Deployment Guide - Free Options

This guide will help you deploy the Alena website for free using one of these platforms:

## Option 1: Render (Recommended - Easiest)

### Steps:
1. **Create a Render account** at https://render.com (free tier available)

2. **Connect your GitHub repository**:
   - Push your code to GitHub (if not already done)
   - In Render dashboard, click "New +" → "Web Service"
   - Connect your GitHub repo

3. **Configure the service**:
   - **Name**: `alena-website` (or any name you like)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Root Directory**: `alena/AlenaCinta` (or just the root if you deploy from repo root)

4. **Environment Variables** (if needed):
   - `NODE_ENV` = `production`
   - `PORT` = Leave empty (Render auto-assigns)

5. **Click "Create Web Service"**
   - Render will automatically build and deploy
   - Your site will be live at `https://your-app-name.onrender.com`

### Note:
- Free tier includes 750 hours/month
- Service sleeps after 15 minutes of inactivity (first request wakes it up)
- Perfect for personal projects like this!

---

## Option 2: Railway (Very Easy)

### Steps:
1. **Create a Railway account** at https://railway.app (free $5 credit/month)

2. **Deploy from GitHub**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Railway auto-detects**:
   - It will detect Node.js automatically
   - Auto-runs `npm install` and `npm start`

4. **Configure** (if needed):
   - Go to Settings → Variables
   - Add `NODE_ENV` = `production`
   - Railway auto-assigns PORT

5. **Deploy**:
   - Click "Deploy" and wait for build
   - Railway gives you a free `.railway.app` domain

### Note:
- Free tier: $5 credit/month (enough for this project)
- No sleep time - always running
- Very easy setup!

---

## Option 3: Fly.io (Good Free Tier)

### Steps:
1. **Install Fly CLI**:
   ```bash
   # Windows (PowerShell)
   powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
   ```

2. **Login**:
   ```bash
   fly auth login
   ```

3. **Create Fly app** (in project root):
   ```bash
   cd alena/AlenaCinta
   fly launch
   ```
   - Follow prompts
   - Don't deploy yet

4. **Create `fly.toml`** (if not auto-generated):
   ```toml
   app = "your-app-name"
   primary_region = "iad"
   
   [build]
     builder = "paketobuildpacks/builder:base"
   
   [env]
     PORT = "8080"
     NODE_ENV = "production"
   
   [[services]]
     internal_port = 8080
     protocol = "tcp"
   
     [[services.ports]]
       handlers = ["http"]
       port = 80
   
     [[services.ports]]
       handlers = ["tls", "http"]
       port = 443
   
     [[services.http_checks]]
       interval = "10s"
       timeout = "2s"
       grace_period = "5s"
       method = "GET"
       path = "/"
   ```

5. **Deploy**:
   ```bash
   fly deploy
   ```

### Note:
- Free tier: 3 shared VMs
- Generous free allowance
- Global edge network

---

## Option 4: Vercel (Frontend-First)

**Note**: Vercel is optimized for serverless. For this full-stack app, you'd need to:
- Keep backend on Render/Railway
- Deploy frontend to Vercel
- More complex setup

**Recommendation**: Use Render or Railway for simplicity.

---

## Pre-Deployment Checklist

Before deploying, make sure:

✅ **Build works locally**:
```bash
cd alena/AlenaCinta
npm install
npm run build
npm start
```

✅ **Test production build**:
- Visit `http://localhost:5000`
- Test all pages
- Test gallery password (should be "mommy")

✅ **Environment variables**:
- `NODE_ENV` = `production` (for production builds)
- `PORT` = Auto-assigned by platform (no need to set)

---

## Quick Deploy Commands

### For Render/Railway:
Just push to GitHub and connect in their dashboard - no CLI needed!

### For Fly.io:
```bash
cd alena/AlenaCinta
fly launch
fly deploy
```

---

## Custom Domain (Optional)

After deployment, you can add a custom domain:
- **Render**: Settings → Custom Domain
- **Railway**: Settings → Domains
- **Fly.io**: `fly certs add yourdomain.com`

---

## Troubleshooting

### Build fails:
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in platform dashboard

### App won't start:
- Verify `PORT` environment variable is set
- Check that `npm start` runs the built server
- Look at runtime logs

### Assets not loading:
- Ensure `client/public` folder is included in build
- Check that static files are served correctly

---

## Recommended: Render

**Why Render?**
- ✅ Easiest setup (just connect GitHub)
- ✅ Free tier is generous
- ✅ Perfect for personal projects
- ✅ Auto-deploys on git push
- ✅ Great documentation

**Get started**: https://render.com → Sign up → New Web Service → Connect GitHub → Deploy!


