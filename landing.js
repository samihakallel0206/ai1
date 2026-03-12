// ===== Micro-interactions en Vanilla JS =====

document.addEventListener("DOMContentLoaded", function () {
  // 1. Animation d'apparition au chargement (staggered fade-in)
  var elements = document.querySelectorAll(".hero-animate");
  elements.forEach(function (el, i) {
    setTimeout(
      function () {
        el.classList.add("visible");
      },
      200 + i * 250,
    );
  });

  // 2. Scroll fluide vers le bas au clic sur le bouton
  var btn = document.getElementById("cta-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    });
  }
});
