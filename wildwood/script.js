// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { rootMargin: "0px 0px -80px 0px", threshold: 0.08 });

document.querySelectorAll("section h2, .story-text, .story-card, .fac, .tier, .sgoal, .merch-card, .tl li, .creator-pull").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});

// Smooth scroll offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });
});
