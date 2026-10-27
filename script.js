(function () {
  var root = document.documentElement;

  // Theme: the saved choice, else the system's; set before paint in index.html.
  var toggle = document.getElementById("theme-toggle");
  function syncToggle() {
    var dark = root.dataset.theme === "dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  syncToggle();
  toggle.addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* private mode: the choice just lasts for this visit */
    }
    syncToggle();
  });

  // Mobile menu.
  var menuBtn = document.getElementById("menu-btn");
  var links = document.getElementById("nav-links");
  function setMenu(open) {
    links.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  menuBtn.addEventListener("click", function () {
    setMenu(!links.classList.contains("open"));
  });
  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && links.classList.contains("open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  // Footer year.
  document.getElementById("year").textContent = new Date().getFullYear();

  // Typing headline. Screen readers get the static sentence next to it, and people who
  // prefer reduced motion keep the first role without animation.
  var target = document.getElementById("typed");
  var roles = ["QA Automation Engineer", "Python Developer", "Full-stack Developer"];
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var role = 0;
  var chars = roles[0].length;
  var deleting = true;
  function tick() {
    var word = roles[role];
    chars += deleting ? -1 : 1;
    target.textContent = word.slice(0, chars);
    var delay = deleting ? 45 : 85;
    if (!deleting && chars === word.length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && chars === 0) {
      deleting = false;
      role = (role + 1) % roles.length;
      delay = 300;
    }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 1800);
})();
