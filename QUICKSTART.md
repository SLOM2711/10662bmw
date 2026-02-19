# ⚡ Quick Start Guide

Get your BMW React App running in 3 minutes!

## 🎯 Option 1: Local Development (Fastest)

### Prerequisites
- Node.js 16+ installed ([Download](https://nodejs.org/))

### Steps:

```bash
# 1. Navigate to project
cd bmw-react-app

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

**That's it!** Your app is now running locally. 🎉

---

## 🌐 Option 2: Deploy to Web (5 minutes)

### Quick Deploy to Vercel:

```bash
# 1. Install dependencies
npm install

# 2. Install Vercel CLI
npm install -g vercel

# 3. Login to Vercel
vercel login

# 4. Deploy
vercel --prod
```

**Your app is now live on the internet!** 🚀

---

## 📝 What's Included?

✅ **12 React Components**
- Header with navigation
- Hero with auto-slider
- Find Your BMW cards
- Model showcase
- Special offers
- Newsletter with validation
- Accordion sections
- Social links
- Footer
- Floating buttons
- Theme toggle

✅ **7 Interactive Features**
1. Dark/Light mode toggle
2. Visit counter (localStorage)
3. Form validation
4. Show/hide sections
5. Active navigation
6. Image slider
7. Button interactions

✅ **Props & State**
- 7+ components use props
- State-driven UI throughout
- No manual DOM manipulation

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Git
git add .           # Stage all changes
git commit -m "msg" # Commit changes
git push            # Push to GitHub

# Vercel
vercel              # Deploy to staging
vercel --prod       # Deploy to production
```

---

## 📱 Test Your App

### Features to Test:

1. **Theme Toggle** (top-right corner)
   - Click 🌙/☀️ to switch
   - Refresh page - theme persists

2. **Visit Counter** (header)
   - Shows your visit count
   - Increases on each visit

3. **Hero Slider**
   - Auto-rotates every 5 seconds
   - Click dots to change manually

4. **Navigation**
   - Highlights active section
   - Smooth scroll on click

5. **Newsletter Form**
   - Click "Sign up"
   - Try submitting empty
   - See validation errors
   - Fill correctly to submit

6. **Model Filter**
   - Click "Show Electric Only"
   - See only electric models

7. **Mobile Menu**
   - Resize browser (< 1024px)
   - Click hamburger menu
   - Test navigation

8. **Accordion**
   - Click any section
   - See content expand/collapse

---

## 🎓 For Your Assignment

### Required Information:

**Reference Website**: https://www.bmw.in/en/index.html

**Your URLs** (after deployment):
- GitHub: `https://github.com/YOUR_USERNAME/bmw-react-app`
- Vercel: `https://bmw-react-app-xxx.vercel.app`

### Components Count: **12**

### Props Usage: **7 components**
- Header, ActionCard, ModelCard, AccordionItem, SocialIcon, FooterColumn, ThemeToggle

### State Features: **7+**
- Theme toggle with localStorage
- Visit counter with localStorage
- Form validation (Newsletter)
- Show/hide (Menu, Newsletter form, Accordion, Model filter)
- Navigation highlight (Active section)
- Image slider (Hero with auto-rotate)
- Button interactions (Alerts, scroll, actions)

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue: Images not loading

**Solution:**
- Check internet connection (images are from Unsplash)
- Check browser console for errors
- Verify URLs in component files

---

## 📚 Project Structure

```
bmw-react-app/
├── src/
│   ├── components/     # All React components
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
└── README.md           # Full documentation
```

---

## ✨ Key Features Showcase

### 1. State Management
```jsx
const [isDarkMode, setIsDarkMode] = useState(false)
```

### 2. Props Usage
```jsx
<Header 
  activeSection={activeSection}
  visitCount={visitCount}
/>
```

### 3. Conditional Rendering
```jsx
{isOpen && <div className="menu">...</div>}
```

### 4. Event Handling
```jsx
<button onClick={handleClick}>Click Me</button>
```

### 5. useEffect for Side Effects
```jsx
useEffect(() => {
  localStorage.setItem('theme', theme)
}, [theme])
```

---

## 🎯 Success Criteria

Your app should:
- ✅ Load without errors
- ✅ Display all sections
- ✅ Work on mobile and desktop
- ✅ Save theme preference
- ✅ Validate newsletter form
- ✅ Auto-rotate hero slider
- ✅ Highlight active navigation
- ✅ Show/hide mobile menu
- ✅ Expand/collapse accordion

---

## 🚀 Next Steps

1. **Test Everything**: Go through all features
2. **Deploy**: Push to GitHub and Vercel
3. **Document**: Take screenshots
4. **Submit**: Include both URLs in assignment

---

## 💡 Pro Tips

- Save often with Git commits
- Test on different browsers
- Check mobile responsiveness
- Review React DevTools
- Read component comments

---

## 🎉 You're Ready!

Everything is set up. Just run `npm install && npm run dev` and start exploring!

Need detailed help? Check:
- `README.md` - Complete documentation
- `DEPLOYMENT_GUIDE.md` - Step-by-step deployment
- Component files - Inline comments

**Happy Coding!** 🚗💨
