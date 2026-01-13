# Deploy to GitHub - Simple Instructions

## You're Almost Done! Just 3 Steps:

### Step 1: Create GitHub Repository (2 minutes)

1. Open browser and go to: **https://github.com/new**
2. Fill in:
   - Repository name: `socra-study-app`
   - Description: `Study app for SOCRA CCRP certification exam`
   - Choose: **Public** (required for free GitHub Pages)
   - Leave everything else unchecked
3. Click **"Create repository"**

Keep this page open! You'll need the URL it shows.

---

### Step 2: Connect and Push Your Code (1 minute)

You'll see instructions on GitHub. Copy the commands from the section that says:
**"...or push an existing repository from the command line"**

It will look like this:
```bash
git remote add origin https://github.com/YOUR-USERNAME/socra-study-app.git
git branch -M main
git push -u origin main
```

**Open PowerShell or Command Prompt in this folder** and paste those commands.

Or just run these (replace YOUR-USERNAME):

```bash
git remote add origin https://github.com/YOUR-USERNAME/socra-study-app.git
git branch -M main
git push -u origin main
```

You may be asked to sign in to GitHub - use your username and **Personal Access Token** (not password).

**Don't have a token?**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "SOCRA Study App"
4. Check the box for: **repo** (full control)
5. Click "Generate token" at bottom
6. Copy the token (starts with `ghp_`) - you'll use this as your password

---

### Step 3: Enable GitHub Pages (1 minute)

1. On your GitHub repository page, click **Settings** (top right tabs)
2. In left sidebar, click **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: Select **main** and **/ (root)**
   - Click **Save**
4. Wait 2 minutes
5. Refresh the page - you'll see a green box with your URL!

**Your URL will be:**
```
https://YOUR-USERNAME.github.io/socra-study-app/
```

---

## That's It! 🎉

Your app is now live on the internet!

- Share the URL with your wife
- She can bookmark it on all her devices
- Works on phone, tablet, laptop, work computer
- Updates whenever you push new changes

---

## To Update the App Later

Made changes and want to upload them?

```bash
git add .
git commit -m "Added more practice questions"
git push
```

GitHub Pages will automatically update in 1-2 minutes!

---

## Quick Test

After deployment, test:
1. Open the URL in your browser
2. Try the flashcards - do they work?
3. Try a practice test
4. Check if it works on mobile (send link to your phone)

---

## Share With Your Wife

Send her:
```
Hey! I built you a study app for your SOCRA exam 💙

Access it here: https://YOUR-USERNAME.github.io/socra-study-app/

Bookmark it on your phone and computer. It has:
- 75 flashcards
- Practice tests
- Study guide
- AI tutor (you'll need to set up an API key - I can help)

Good luck studying! You've got this! 🎓
```

---

## Troubleshooting

**"Authentication failed"**
- Use Personal Access Token instead of password
- Get one at: https://github.com/settings/tokens

**"remote: Repository not found"**
- Double-check the username in the URL
- Make sure the repository exists on GitHub

**"GitHub Pages not working"**
- Wait 5-10 minutes after enabling
- Check Settings → Pages shows green checkmark
- Try adding `/index.html` to end of URL

**Still stuck?**
- Follow the visual guide with screenshots: https://pages.github.com/
- Or check DEPLOYMENT_GUIDE.md for detailed troubleshooting

---

## Need a Different Hosting Option?

If GitHub seems complicated, try **Netlify** instead (even easier):

1. Go to: https://app.netlify.com/drop
2. Drag this entire folder onto the page
3. Get instant URL!
4. Done in 30 seconds!

No git, no commands, no accounts needed (though creating one lets you update it).

---

Good luck! Your wife is going to ace that exam! 💪
