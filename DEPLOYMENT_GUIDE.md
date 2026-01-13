# GitHub Pages Deployment Guide

## Quick Deploy to GitHub Pages (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create account if needed)
2. Click the **+** icon in top right → **New repository**
3. Name it: `socra-study-app` (or whatever you prefer)
4. **Important:** Choose **Public** (required for free GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Push Your Code

Open your terminal in this folder and run these commands:

```bash
# Already initialized, so add all files
git add .

# Create your first commit
git commit -m "Initial commit - SOCRA Study App"

# Connect to GitHub (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/socra-study-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Or use these one-liner commands:**

```bash
git add . && git commit -m "Initial commit - SOCRA Study App" && git remote add origin https://github.com/YOUR-USERNAME/socra-study-app.git && git branch -M main && git push -u origin main
```

You'll be prompted for your GitHub username and password (use a Personal Access Token as password).

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (in left sidebar)
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 4: Wait & Access

1. Wait 1-2 minutes for deployment
2. Your app will be live at:
   ```
   https://YOUR-USERNAME.github.io/socra-study-app/
   ```
3. Bookmark this URL and share with your wife!

## Alternative: If You Don't Want Public Repository

GitHub Pages requires public repos on free tier. If you want to keep it private:

### Option 1: Netlify (Free, Easier)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag and drop this entire folder
4. Get instant URL like: `https://socra-study-app.netlify.app`
5. **Pros:** Private source, easy updates, free HTTPS, no git needed

### Option 2: Vercel (Free, Similar to Netlify)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import this project
4. Get URL like: `https://socra-study-app.vercel.app`

### Option 3: GitHub Pages with Password Protection
GitHub Pages doesn't support password protection, but you can:
1. Use a obscure repository name (security through obscurity)
2. Don't link to it publicly
3. Only share URL with your wife

## Updating the App

When you want to add more questions or make changes:

```bash
# Make your changes to the files
# Then:
git add .
git commit -m "Added more practice questions"
git push
```

GitHub Pages will automatically update in 1-2 minutes!

## Custom Domain (Optional)

If you own a domain (like `socrastudy.com`):

1. Buy domain from Namecheap, Google Domains, etc. (~$12/year)
2. In GitHub repo Settings → Pages → Custom domain
3. Enter your domain
4. Update DNS records at your domain registrar
5. Wait for DNS propagation (can take 24 hours)

## Security Considerations

### What's Safe to Share:
- ✅ The app URL
- ✅ Study content (all public information)
- ✅ App functionality

### What to Keep Private:
- ❌ API keys (users provide their own)
- ❌ Personal study progress (stored locally on each device)

### Privacy Notes:
- GitHub repo is public but contains no personal data
- Each user's progress stays on their device (localStorage)
- API keys are stored locally, never in the code
- No analytics or tracking added

## Troubleshooting

### "git: command not found"
- Install Git from [git-scm.com](https://git-scm.com)
- Restart terminal after installation

### "remote: Repository not found"
- Make sure you replaced YOUR-USERNAME with actual GitHub username
- Check repository exists on GitHub
- Verify you have permissions

### "Authentication failed"
- GitHub no longer accepts passwords
- Create Personal Access Token:
  1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. Generate new token with 'repo' permissions
  3. Use token instead of password when prompted

### GitHub Pages not showing
- Wait up to 10 minutes after enabling
- Check Settings → Pages shows green checkmark
- Try accessing with /index.html at end: `https://YOUR-USERNAME.github.io/socra-study-app/index.html`
- Check browser console for errors (F12)

### Changes not appearing
- GitHub Pages caching can delay updates
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Wait a few minutes

## Making It Extra Nice

### Add a Custom README for GitHub

I've created a nice README.md that explains the project. When people visit your GitHub repo, they'll see a professional description.

### Add a Favicon

Create a small icon for the browser tab:
1. Create/find a 32x32px icon (PNG or ICO)
2. Save as `favicon.ico`
3. Add to `<head>` of index.html:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Add Open Graph Tags

For nice link previews when shared:
```html
<meta property="og:title" content="SOCRA CCRP Study Assistant">
<meta property="og:description" content="Comprehensive study app for SOCRA certification">
<meta property="og:type" content="website">
```

## Cost Breakdown

### Free Option (Recommended):
- GitHub Pages: **FREE**
- GitHub repository: **FREE**
- Domain (optional): ~$12/year
- Anthropic API: ~$0.05-0.10 per study session (user pays with own key)

**Total: $0** (or $12/year with custom domain)

### Completely Free Alternatives:
- **Netlify**: Free tier, 100GB bandwidth/month
- **Vercel**: Free tier, unlimited bandwidth
- **Cloudflare Pages**: Free tier, unlimited bandwidth

All include free HTTPS and automatic deployments!

## Recommended: Use GitHub Pages

For your use case, I recommend:
1. **GitHub Pages** - Simple, reliable, free
2. Create public repo (it's just study materials, no private data)
3. Easy to update via git
4. Share URL with your wife
5. She bookmarks it on all her devices

The app works perfectly on:
- ✅ Desktop computers
- ✅ Laptops
- ✅ Tablets (iPad, Android)
- ✅ Phones (responsive design)
- ✅ Any modern browser

## Support

If you run into issues:
1. Check this guide's Troubleshooting section
2. Check GitHub's documentation: [pages.github.com](https://pages.github.com)
3. GitHub Pages are widely used - many tutorials available online

## Ready to Deploy?

Just follow Step 1, 2, and 3 above. It takes about 5 minutes total!

Your wife will be able to access the app from:
- Her work computer at Huntsman Cancer
- Her phone during breaks
- Home computer
- Tablet
- Anywhere with internet!

Good luck! 🚀
