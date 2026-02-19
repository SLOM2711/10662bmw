# 🚗 BMW India - React Single Page Application

**Academic Assignment - Activity 3 (React.js)**

A complete conversion of the BMW India website clone into a React single-page application with component-based architecture, props, state management, and dynamic rendering.

## 📚 Assignment Reference

**Original Website**: [BMW India Official Website](https://www.bmw.in/en/index.html)

**Converted from**: Activities 1 & 2 (Static HTML/CSS and Vanilla JavaScript)

---

## ✅ Assignment Requirements Met

### A) Component Structure (✓ 10+ Components)
1. **App.jsx** - Main application component
2. **Header.jsx** - Navigation and header
3. **Hero.jsx** - Hero section with image slider
4. **FindYourBMW.jsx** - Action cards section
5. **ModelShowcase.jsx** - Vehicle models display
6. **SpecialOffers.jsx** - Promotional offers
7. **Newsletter.jsx** - Newsletter subscription form
8. **Accordion.jsx** - Expandable content sections
9. **SocialLinks.jsx** - Social media integration
10. **Footer.jsx** - Website footer
11. **FloatingButtons.jsx** - Call and back-to-top buttons
12. **ThemeToggle.jsx** - Dark/Light mode toggle

### B) Props Implementation (✓ Multiple Components)

**Components Using Props:**

1. **Header** - Receives `activeSection`, `isMobileMenuOpen`, `toggleMobileMenu`, `visitCount`
2. **ActionCard** - Receives `icon`, `title`, `buttonText`, `onAction`
3. **ModelCard** - Receives `model` object with vehicle data
4. **AccordionItem** - Receives `title`, `content`, `isOpen`, `onToggle`
5. **SocialIcon** - Receives `name`, `icon`, `url`
6. **FooterColumn** - Receives `title` and `links` array
7. **ThemeToggle** - Receives `isDarkMode` and `toggleTheme`

### C) State + Events (✓ 7+ Features)

1. **✅ Theme Toggle** (`useState` + `localStorage`)
   - Dark/Light mode with persistence
   - `isDarkMode` state managed in App.jsx

2. **✅ Visit Counter** (`useState` + `useEffect` + `localStorage`)
   - Tracks and displays user visit count
   - Persists across sessions

3. **✅ Form Validation** (`useState`)
   - Newsletter form with real-time validation
   - Email and name validation with error messages

4. **✅ Show/Hide Sections** (Conditional Rendering)
   - Mobile menu toggle
   - Newsletter form show/hide
   - Accordion expand/collapse
   - Model filter (Show All vs Electric Only)

5. **✅ Navigation Highlight** (Active State)
   - Scroll-based active section detection
   - Highlights current section in navigation

6. **✅ Image Slider** (`useState` + `useEffect`)
   - Auto-rotating hero slider (3 slides)
   - Manual slide selection
   - 5-second interval

7. **✅ Button Interactions** (Event Handling)
   - Alert modals for various actions
   - Form submissions
   - Smooth scroll to sections
   - Back to top button (appears after scrolling)

---

## 🚀 Technologies Used

- **React 18.2.0** - UI library
- **Vite** - Build tool and dev server
- **PropTypes** - Type checking for props
- **CSS3** - Styling (no CSS frameworks, pure CSS)
- **localStorage** - Data persistence

---

## 📁 Project Structure

```
bmw-react-app/
├── public/
│   └── (static assets)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FindYourBMW.jsx
│   │   ├── ModelShowcase.jsx
│   │   ├── SpecialOffers.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Accordion.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingButtons.jsx
│   │   └── ThemeToggle.jsx
│   ├── styles/
│   │   ├── index.css (from Activity 1)
│   │   └── App.css (React-specific styles)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── .gitignore
└── README.md
```

---

## 💻 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Step 1: Install Dependencies
```bash
cd bmw-react-app
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
The app will open at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

---

## 🌐 Deployment

### Deploy to Vercel

#### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Method 2: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "BMW React SPA - Activity 3"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

---

## 🎯 React Implementation Highlights

### 1. No DOM Manipulation
```javascript
// ❌ Old Way (Activity 2)
document.getElementById('menu').style.display = 'none'

// ✅ React Way (Activity 3)
const [isOpen, setIsOpen] = useState(false)
{isOpen && <div className="menu">...</div>}
```

### 2. State-Driven UI
```javascript
// Theme toggle
const [isDarkMode, setIsDarkMode] = useState(false)

// Conditional class
<body className={isDarkMode ? 'dark-mode' : ''}>
```

### 3. Props for Reusability
```javascript
// Reusable component
<ActionCard 
  icon="🚗"
  title="Find a new car"
  buttonText="Search Now"
  onAction={() => alert('Search')}
/>
```

### 4. useEffect for Side Effects
```javascript
// localStorage persistence
useEffect(() => {
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
}, [isDarkMode])
```

---

## 🎨 Features Comparison

| Feature | Activity 2 (Vanilla JS) | Activity 3 (React) |
|---------|------------------------|-------------------|
| DOM Updates | Manual (`getElementById`) | Automatic (state) |
| Event Handling | `addEventListener` | `onClick` props |
| Data Flow | Global variables | Props & state |
| Reusability | Copy-paste | Components |
| Code Organization | Single file | Multiple components |

---

## 🔍 Key Learning Outcomes

1. **Component-Based Architecture**
   - Breaking UI into reusable pieces
   - Composing complex UIs from simple components

2. **Props vs State**
   - Props for parent-to-child communication
   - State for component-level data management

3. **Declarative Programming**
   - Describe WHAT the UI should look like
   - React handles HOW to update the DOM

4. **Side Effects Management**
   - Using useEffect for subscriptions, timers, storage
   - Cleanup functions for memory management

5. **Conditional Rendering**
   - Ternary operators, && operator
   - Showing/hiding content based on state

---

## 📊 Performance Optimizations

- ✅ Component memoization ready (can add React.memo)
- ✅ Event listener cleanup in useEffect
- ✅ Conditional rendering to avoid unnecessary renders
- ✅ Image optimization with proper URLs
- ✅ Lazy loading images (browser native)

---

## 🐛 Known Limitations

1. **No React Router** - Single page (can be extended)
2. **No Backend** - All data is hardcoded/localStorage
3. **No API Calls** - Can be added with fetch/axios
4. **Basic Form Validation** - Can be enhanced with libraries

---

## 🔮 Future Enhancements

- [ ] Add React Router for multi-page navigation
- [ ] Implement Redux/Context API for global state
- [ ] Add API integration for real data
- [ ] Use React Query for data fetching
- [ ] Add unit tests with Jest/React Testing Library
- [ ] Implement lazy loading for components
- [ ] Add animations with Framer Motion

---

## 📝 Assignment Submission Checklist

- [x] Minimum 5 components (We have 12)
- [x] Props used in at least 2 components (We have 7)
- [x] 4 state + event features (We have 7+)
- [x] No manual DOM manipulation
- [x] Same layout as Activity 1
- [x] Same interactivity as Activity 2
- [x] Reference website URL mentioned
- [x] Code properly commented
- [x] README documentation
- [x] Deployed on Vercel

---

## 👨‍💻 Development Notes

### Component Organization
Each component is self-contained with:
- PropTypes for type checking
- Clear prop documentation
- Consistent naming conventions
- Proper event handling

### State Management
- Local state (useState) for component-specific data
- Lifted state (App.jsx) for shared data
- localStorage for persistence
- useEffect for side effects

### Styling Approach
- Retained original CSS from Activity 1
- Added React-specific styles in App.css
- Dark mode implementation
- Responsive design maintained

---

## 📧 Contact & Support

**Student Name**: [Your Name]  
**Roll Number**: [Your Roll Number]  
**Course**: Web Development / React.js  
**Assignment**: Activity 3 - React SPA

---

## ⚖️ Academic Integrity

This project is created for educational purposes as part of academic coursework. The original BMW India website design and branding belong to BMW AG. This is a student project demonstrating React.js skills and is not intended for commercial use.

**Reference Website**: https://www.bmw.in/en/index.html

---

## 🙏 Acknowledgments

- **BMW AG** - Original website design and inspiration
- **React Team** - For the amazing library
- **Vite Team** - For the fast build tool
- **Unsplash** - For high-quality images

---

## 📄 License

MIT License - Educational Use Only

---

**Last Updated**: February 2025  
**Version**: 1.0.0  
**React Version**: 18.2.0
