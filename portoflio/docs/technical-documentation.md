# Technical Documentation

## Project Overview

This personal portfolio website is a single-page application built with vanilla HTML, CSS, and JavaScript. It is designed to showcase projects, skills, and provide a contact form, all wrapped in a modern dark-themed UI.

---

## Architecture

The application follows a simple **static site** architecture with no build tools or frameworks:

```
Browser → index.html → css/styles.css  (styling)
                      → js/script.js   (interactivity)
                      → assets/images/ (media)
```

All logic runs client-side. There is no backend or database.

---

## File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main HTML document containing all page sections (nav, hero, projects, skills, contact, footer). Uses semantic HTML5 elements. |
| `css/styles.css` | Complete stylesheet with CSS custom properties for theming, Flexbox & Grid layouts, responsive breakpoints, and animations. |
| `js/script.js` | Handles theme toggling, mobile navigation, time-based greeting, contact form validation, and scroll-triggered fade-in animations. |
| `assets/images/` | Project screenshot images used in the Projects section. |

---

## Features in Detail

### 1. Dark / Light Theme Toggle
- Uses the HTML `data-theme` attribute on `<html>` to switch CSS custom property values.
- The user's preference is persisted in `localStorage` so it survives page reloads.
- Falls back to the system's `prefers-color-scheme` media query on first visit.

### 2. Responsive Design
Three breakpoints are defined using `@media` queries:
| Breakpoint | Target |
|------------|--------|
| `> 1024px` | Desktop — two-column layouts |
| `601–1024px` | Tablet — adjusted spacing |
| `≤ 768px` | Mobile — single-column, hamburger nav |
| `≤ 480px` | Small phone — reduced font sizes |

Layouts use **CSS Grid** (projects, contact form) and **Flexbox** (nav, skills, footer).

### 3. Time-Based Greeting
A self-invoking function checks `new Date().getHours()` and sets a greeting message:
- 05:00–11:59 → "Good morning! ☀️"
- 12:00–16:59 → "Good afternoon! 🌤️"
- 17:00–20:59 → "Good evening! 🌅"
- 21:00–04:59 → "Hello, night owl! 🌙"

### 4. Contact Form Validation
Client-side validation runs on form submit:
- **Name**: must be at least 2 characters.
- **Email**: validated against a regex pattern.
- **Message**: must be at least 10 characters.
Error messages appear below each field. On success, a confirmation message is shown and the form resets.

### 5. Scroll Animations
Uses the **Intersection Observer API** to add a `.visible` class to `.fade-in` elements when they enter the viewport (threshold: 15%). Each element animates once and is then unobserved for performance.

### 6. Ambient Page Glow
`body::before` and `body::after` pseudo-elements create a soft light gradient along the left and right edges of the page, using `--glow-color` from the CSS custom properties.

---

## Browser Compatibility

Tested and compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

All features use widely supported web standards (Intersection Observer, CSS Custom Properties, Flexbox, Grid).

---

## Performance Considerations

- Images use `loading="lazy"` for deferred loading.
- Google Fonts use `preconnect` hints for faster font loading.
- CSS transitions are GPU-accelerated (`transform`, `opacity`).
- No external JavaScript libraries — minimal bundle size.
