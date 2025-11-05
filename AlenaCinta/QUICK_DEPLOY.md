# 🚀 Quick Deploy Guide - Render (Easiest Free Option)

## Step-by-Step Instructions

### 1. Push to GitHub (if not already done)
```bash
# If you haven't pushed to GitHub yet:
cd "C:\Users\HarshB\Downloads\alena (1)\alena\AlenaCinta"
git init
git add .
git commit -m "Initial commit"
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy on Render

1. **Go to**: https://render.com
2. **Sign up** (free account)
3. **Click**: "New +" → "Web Service"
4. **Connect GitHub**:
   - Authorize Render to access your GitHub
   - Select your repository
   - Select the branch (usually `main` or `master`)

5. **Configure**:
   - **Name**: `alena-website` (or any name)
   - **Region**: Choose closest to you
   - **Root Directory**: `alena/AlenaCinta` (if your repo root is one level up)
     - OR leave empty if repo root is `alena/AlenaCinta`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

6. **Environment Variables** (optional - Render auto-detects):
   - Click "Advanced"
   - Add: `NODE_ENV` = `production`

7. **Click "Create Web Service"**
   - Render will build and deploy automatically
   - Wait 5-10 minutes for first build

8. **Done!** 
   - Your site is live at: `https://your-app-name.onrender.com`
   - Share this URL with Alena! 💕

---

## Alternative: Railway (Even Easier!)

1. **Go to**: https://railway.app
2. **Sign up** with GitHub
3. **Click**: "New Project" → "Deploy from GitHub repo"
4. **Select** your repository
5. **Railway auto-detects everything!**
   - No configuration needed
   - Just click "Deploy"
6. **Done!** 
   - Get your free `.railway.app` URL

---

## Testing After Deployment

1. Visit your deployed URL
2. Test Home page
3. Test "Our Story" page
4. Test Gallery:
   - Password: `mommy`
   - Should unlock and show photos

---

## Troubleshooting

**Build fails?**
- Check build logs in Render/Railway dashboard
- Make sure `Root Directory` is set correctly
- Verify `package.json` has correct scripts

**App won't start?**
- Check runtime logs
- Verify PORT is set (should be auto-set by platform)
- Ensure `npm start` command works

**Need help?**
- Check the full `DEPLOYMENT.md` guide
- Render docs: https://render.com/docs
- Railway docs: https://docs.railway.app

---

## Quick Links

- **Render**: https://render.com
- **Railway**: https://railway.app
- **Both are FREE** for personal projects!

**Recommended**: Start with **Render** - it's the easiest! 🎉


