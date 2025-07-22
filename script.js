// 1. Toggle Mobile Menu
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// 2. Smooth Scroll on Menu Click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Hide menu on mobile after click
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("show");
  });
});

// 3. Typing Animation in Hero Section
const heroText = "Capturing Moments, Creating Memories";
let i = 0;
function typeEffect() {
  const h2 = document.querySelector(".hero-content h2");
  if (i < heroText.length) {
    h2.innerHTML += heroText.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// 4. Scroll-to-Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.className = "scroll-to-top";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// 5. Lightbox for Gallery
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-images img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.innerHTML = `
        <img src="${img.src}" alt="${img.alt}">
        <span class="close-btn">×</span>
      `;
      document.body.appendChild(lightbox);

      document.querySelector(".close-btn").addEventListener("click", () => {
        lightbox.remove();
      });
    });
  });
});

