// Sunset Portfolio – Floregen Sarno
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  toggle.addEventListener("click", () => navLinks.classList.toggle("show"));

  // Contact form (demo)
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "✅ Message ready to send (demo only).";
    msg.style.color = "#ff5e62";
    form.reset();
  });
});
