# ConnectImpact 🌐

**AI-Powered Community Platform** — Combat social isolation through real-world connections.

---

## 🚀 How to Open in VS Code with Live Server

### Step 1 — Install VS Code
Download from: https://code.visualstudio.com/

### Step 2 — Install Live Server Extension
1. Open VS Code
2. Press `Ctrl+Shift+X` (Extensions panel)
3. Search **"Live Server"** by Ritwick Dey
4. Click **Install**

### Step 3 — Open the Project
1. Open VS Code
2. `File → Open Folder`
3. Select the `connectimpact` folder
4. You'll see all files in the Explorer panel

### Step 4 — Launch Live Server
1. Open `index.html`
2. Right-click anywhere in the file
3. Select **"Open with Live Server"**
4. Browser opens automatically at `http://127.0.0.1:5500`

---

## 📁 Project Structure

```
connectimpact/
├── index.html              ← Landing Page (start here)
├── css/
│   ├── main.css            ← All styles, variables, components
│   └── animations.css      ← Scroll reveals, transitions, effects
├── js/
│   ├── main.js             ← Navbar, counters, toast, interactions
│   ├── neural.js           ← Animated neural network canvas
│   └── ai-assistant.js     ← Claude AI API integration
└── pages/
    ├── dashboard.html      ← User impact dashboard
    ├── communities.html    ← Browse & join communities
    ├── events.html         ← Events + AI event generator
    ├── volunteer.html      ← Volunteer matching hub
    ├── skills.html         ← Skill exchange marketplace
    ├── ai-assistant.html   ← Live AI chat (ConnectAI)
    ├── profile.html        ← User profile & achievements
    ├── settings.html       ← App settings & preferences
    └── admin.html          ← Admin dashboard
```

---

## 🤖 AI Features (Live)

The AI Assistant page (`pages/ai-assistant.html`) calls the **Anthropic Claude API** in real-time.

The API key is handled automatically when running through ConnectImpact's backend.
For standalone testing, the app includes intelligent fallback responses.

**AI capabilities:**
- Community & event recommendations
- Conversation starters / ice breakers
- AI-generated events from natural language
- Mood check-ins and wellness suggestions
- Skill exchange matching

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#030507` (near-black) |
| Surface | `rgba(255,255,255,0.03)` |
| Primary | `#3B82F6` (blue) |
| Secondary | `#8B5CF6` (purple) |
| Font | Inter + JetBrains Mono |
| Style | Glassmorphism + Neon accents |

---

## 📄 All Pages

| Page | URL |
|------|-----|
| Landing | `index.html` |
| Dashboard | `pages/dashboard.html` |
| Communities | `pages/communities.html` |
| Events | `pages/events.html` |
| Volunteer Hub | `pages/volunteer.html` |
| Skill Exchange | `pages/skills.html` |
| AI Assistant | `pages/ai-assistant.html` |
| Profile | `pages/profile.html` |
| Settings | `pages/settings.html` |
| Admin | `pages/admin.html` |

---

## ✅ Features Included

- [x] Neural network animated hero background
- [x] Animated AI orb with mouse tracking
- [x] Live counter animations
- [x] Scroll reveal animations
- [x] Community discovery with filters & search
- [x] Event listing with RSVP system
- [x] AI event generator (calls Claude API)
- [x] Volunteer matching with hour tracking
- [x] Skill exchange marketplace
- [x] Live AI assistant chat (Claude-powered)
- [x] User profile with XP & badges
- [x] Gamification system (5 levels)
- [x] Admin dashboard with safety alerts
- [x] Toast notifications
- [x] Responsive design (mobile-friendly)
- [x] Dark theme + glassmorphism UI

---

Built with HTML5, CSS3, Vanilla JavaScript, and Anthropic Claude API.
