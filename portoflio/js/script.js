/* ==========================================================
   Portfolio – script.js
   Handles: theme toggle, smooth scrolling, mobile nav,
   greeting message, contact form validation, scroll animations.
   ========================================================== */

// ────────────────────────────────────────────────
// 1. DOM Element References
// ────────────────────────────────────────────────
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const greetingEl = document.getElementById("greeting");
const contactForm = document.getElementById("contact-form");

// ────────────────────────────────────────────────
// 2. Cycling Tagline Animation
// ────────────────────────────────────────────────
const cycleEl = document.getElementById("cycle-text");
const phrases = ["Aspiring Web Developer", "Tech Enthusiast", "AI Specialist"];
let phraseIndex = 0;

if (cycleEl) {
  setInterval(() => {
    cycleEl.classList.add("fade-out");
    setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      cycleEl.textContent = phrases[phraseIndex];
      cycleEl.classList.remove("fade-out");
    }, 500);
  }, 3000);
}

// ────────────────────────────────────────────────
// 3. Mobile Navigation Toggle
// ────────────────────────────────────────────────
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("open");
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
});

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ────────────────────────────────────────────────
// 4. Time-Based Greeting
//    Displays a greeting in the hero section that
//    changes based on the time of day.
// ────────────────────────────────────────────────
(function setGreeting() {
  const hour = new Date().getHours();
  let message;

  if (hour >= 5 && hour < 12) {
    message = "Good morning! ☀️";
  } else if (hour >= 12 && hour < 17) {
    message = "Good afternoon! 🌤️";
  } else if (hour >= 17 && hour < 21) {
    message = "Good evening! 🌅";
  } else {
    message = "Hello, night owl! 🌙";
  }

  if (greetingEl) {
    greetingEl.textContent = message;
  }
})();

// ────────────────────────────────────────────────
// 5. Contact Form Validation
//    Client-side validation with user-friendly
//    error messages. No backend required.
// ────────────────────────────────────────────────
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // --- Name validation ---
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (nameInput.value.trim().length < 2) {
      nameError.textContent = "Please enter your name (at least 2 characters).";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // --- Email validation ---
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // --- Message validation ---
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    // --- Success feedback ---
    const successMsg = document.getElementById("form-success");
    if (isValid) {
      successMsg.textContent = "✅ Message sent successfully! (demo)";
      contactForm.reset();
      // Clear success message after 4 seconds
      setTimeout(() => {
        successMsg.textContent = "";
      }, 4000);
    } else {
      successMsg.textContent = "";
    }
  });
}

// ────────────────────────────────────────────────
// 6. Scroll Fade-In Animation
//    Uses IntersectionObserver to add a "visible"
//    class when elements scroll into view.
// ────────────────────────────────────────────────
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => observer.observe(el));
