# 🚀 Deployment Guide - Portfolio Website

This guide will help you deploy your portfolio website to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git**: Install Git on your local machine
3. **Node.js**: Install Node.js 18+ for building the project

## 🎯 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `portfolio-website`
5. Make it **Public** (required for GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website commit"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The site will be deployed automatically when you push to main branch

### 4. Configure GitHub Pages Settings

1. In the same Pages section:
2. Set "Branch" to `main`
3. Set "Folder" to `/ (root)`
4. Click "Save"

### 5. Verify Deployment

1. Wait a few minutes for the GitHub Action to complete
2. Go to the "Actions" tab in your repository
3. You should see a successful deployment
4. Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-website`

## 🔧 Custom Domain (Optional)

If you want to use a custom domain:

1. In repository Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Click "Save"
4. Add a CNAME record in your domain provider pointing to `YOUR_USERNAME.github.io`
5. Create a `CNAME` file in the `public` folder with your domain name

## 📝 Updating Your Portfolio

To update your portfolio:

1. Make changes to your local files
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
3. The site will automatically redeploy

## 🖼️ Adding Project Screenshots

1. Place your screenshots in the `public/screenshots/` directory
2. Use these exact names:
   - `dipsignal.jpg` - DipSignal project
   - `lol-analytics.jpg` - LoL Analytics project
   - `dijamour.jpg` - Dijamour project
   - `feelytext.jpg` - FeelyText project
   - `jumia-tracker.jpg` - Jumia Price Tracker project

3. Commit and push the images:
```bash
git add public/screenshots/
git commit -m "Add project screenshots"
git push origin main
```

## 🐛 Troubleshooting

### Build Failures
- Check the "Actions" tab for error details
- Ensure all dependencies are properly installed
- Verify that all imports are correct

### Site Not Loading
- Wait a few minutes for deployment to complete
- Check if the repository is public
- Verify the GitHub Pages settings

### Custom Domain Issues
- Ensure DNS records are properly configured
- Wait up to 24 hours for DNS propagation
- Check if the CNAME file is in the public folder

## 📊 Performance Optimization

The website is already optimized for:
- ✅ Fast loading times
- ✅ Mobile responsiveness
- ✅ SEO optimization
- ✅ Accessibility compliance
- ✅ Image optimization

## 🔒 Security

- The website is static and secure
- No server-side code execution
- All external links open in new tabs
- Contact form is client-side only (for demo purposes)

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the build output
3. Ensure all files are properly committed
4. Verify repository settings

---

**Your portfolio website is now live and ready to showcase your career transition! 🎉**

