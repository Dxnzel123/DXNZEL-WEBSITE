# DXNZEL — Official Artist Website

A premium, production-grade artist website built with Next.js. Dark cinematic aesthetic, futuristic typography, glitch effects, and full mobile responsiveness.

---

## 🗂 Project Structure

```
dxnzel-website/
├── components/
│   ├── Layout.jsx        # Wraps every page (Navbar + Footer + Head)
│   ├── Navbar.jsx        # Fixed navbar with mobile menu
│   ├── Footer.jsx        # Site footer
│   ├── SectionTitle.jsx  # Reusable section heading component
│   └── GlitchText.jsx    # Animated glitch text effect
├── pages/
│   ├── _app.jsx          # Next.js app entry
│   ├── index.jsx         # Homepage (hero, music, gallery preview, bio, contact)
│   ├── music.jsx         # Music / streaming page
│   ├── gallery.jsx       # Photo gallery with lightbox
│   ├── bio.jsx           # Cinematic bio + timeline
│   ├── news.jsx          # News/updates + newsletter
│   ├── contact.jsx       # Full contact/booking form
│   └── 404.jsx           # Custom 404 page
├── styles/
│   └── globals.css       # Global styles, CSS variables, animations
├── public/
│   └── assets/           # ← PUT ALL YOUR MEDIA FILES HERE
│       ├── hero.jpg
│       ├── artist.jpg
│       ├── gallery1.jpg → gallery6.jpg
│       └── intro.mp4     (optional background video)
├── next.config.js
├── package.json
├── vercel.json
└── README.md
```

---

## 📸 Adding Your Images & Videos

All media must go into `/public/assets/`. Use these exact filenames:

| File | Used On |
|------|---------|
| `hero.jpg` | Homepage hero background |
| `intro.mp4` | Homepage hero background video (optional) |
| `artist.jpg` | Bio page hero + homepage bio section |
| `gallery1.jpg` | Gallery image 1 |
| `gallery2.jpg` | Gallery image 2 |
| `gallery3.jpg` | Gallery image 3 |
| `gallery4.jpg` | Gallery image 4 |
| `gallery5.jpg` | Gallery image 5 |
| `gallery6.jpg` | Gallery image 6 |

**Recommended image sizes:**
- `hero.jpg` — 1920×1080px minimum (landscape)
- `artist.jpg` — 800×1100px (portrait)
- `gallery*.jpg` — 800×1000px each (portrait)
- `intro.mp4` — 1080p, short loop (5–15 seconds)

---

## 🔗 Updating Embed Links

### Spotify
In `pages/index.jsx` and `pages/music.jsx`, replace `YOUR_TRACK_ID` with your actual Spotify track ID:
```
https://open.spotify.com/track/YOUR_TRACK_ID
```
Extract just the ID (the part after `/track/`).

### YouTube
Replace `YOUR_VIDEO_ID` with your YouTube video ID:
```
https://www.youtube.com/watch?v=YOUR_VIDEO_ID
```
Extract just the ID after `v=`.

### Social Links
In `components/Footer.jsx` and `pages/contact.jsx`, update the `href="#"` attributes to your real social media URLs.

### Contact Emails
In `pages/contact.jsx`, update the email addresses in the `.info-items` section.

---

## 🚀 Step 1: Push to GitHub

```bash
# 1. Initialize a git repo inside the project folder
cd dxnzel-website
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit: DXNZEL artist website"

# 4. Create a new repo on github.com (name it: dxnzel-website)
#    Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/dxnzel-website.git

# 5. Push
git branch -M main
git push -u origin main
```

To push future updates:
```bash
git add .
git commit -m "Update: added new gallery images"
git push
```

---

## ☁️ Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `dxnzel-website` repository
4. Vercel auto-detects Next.js — no settings needed
5. Click **Deploy**

Your site will be live at `https://dxnzel-website.vercel.app` (or your custom domain).

### Adding a Custom Domain on Vercel
1. Go to your project settings on Vercel
2. Click **Domains**
3. Add your domain (e.g., `dxnzel.com`)
4. Follow Vercel's DNS instructions

---

## 💻 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:3000
```

---

## 🎵 Adding a Contact Form Backend (Optional)

The contact form is frontend-only by default. To make it actually send emails:

### Option A: Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your form ID
3. In `pages/contact.jsx`, change the form action:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install emailjs-com`
3. Replace the `handleSubmit` function with EmailJS send logic

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: CSS-in-JS (styled-jsx, built into Next.js)
- **Fonts**: Bebas Neue, Rajdhani, Space Mono (Google Fonts)
- **Animations**: CSS animations + keyframes
- **Deployment**: Vercel
- **Images**: next/image (optimized)

---

## ✏️ Customization Notes

- **Colors**: Edit CSS variables in `styles/globals.css` (look for `--glow-primary: #ff6b00`)
- **Font sizes**: The site uses `clamp()` for fluid responsive type
- **Timeline in Bio**: Edit the `timeline` array in `pages/bio.jsx`
- **News articles**: Edit the `newsItems` array in `pages/news.jsx`
- **Music tracks**: Edit the `tracks` array in `pages/music.jsx`
