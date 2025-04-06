document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("open");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("open");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove("open");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
