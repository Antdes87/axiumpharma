document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".main-nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a[data-page]").forEach(function (link) {
    if (link.getAttribute("data-page") === current) link.classList.add("active");
  });

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var lines = [
        "Nom : " + (data.get("nom") || ""),
        "E-mail : " + (data.get("email") || ""),
        "Téléphone : " + (data.get("telephone") || ""),
        "Horaire souhaité de rappel : " + (data.get("horaire") || ""),
        "",
        "Votre projet :",
        (data.get("projet") || "")
      ];
      var subject = "Nouveau message depuis axiumpharma.com";
      var mailto = "mailto:contact@axiumpharma.com"
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(lines.join("\n"));
      var status = document.getElementById("form-status");
      if (status) {
        status.style.display = "block";
        status.textContent = "Ouverture de votre client e-mail… Si rien ne se passe, écrivez-nous directement à contact@axiumpharma.com";
      }
      window.location.href = mailto;
    });
  }
});
