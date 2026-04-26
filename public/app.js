// Éden Technologies — interactions

// ============================================
// Reveal on scroll
// ============================================
function attachReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll("[data-reveal]:not(.in)").forEach(el => io.observe(el));
}

// ============================================
// Init
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  attachReveal();

  // language toggle — navigate to the other locale's page
  document.querySelectorAll("[data-lang-btn]").forEach(b => {
    b.addEventListener("click", () => {
      const target = b.dataset.langBtn;
      globalThis.location.href = target === "en" ? "/en/" : "/";
    });
  });

  // active nav scrollspy
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => io.observe(s));
});
