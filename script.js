const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}
document.querySelectorAll(".filter-btn").forEach(button => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  document.querySelectorAll(".filter-btn").forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".vehicle-card").forEach(card => card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter));
}));
document.querySelectorAll(".favorite-btn").forEach(button => button.addEventListener("click", () => {
  const saved = button.getAttribute("aria-pressed") === "true";
  const name = button.closest(".vehicle-card").querySelector("h3").textContent.trim();
  button.setAttribute("aria-pressed", String(!saved));
  button.textContent = saved ? "♡" : "♥";
  button.setAttribute("aria-label", `${saved ? "Save" : "Remove"} ${name} ${saved ? "to" : "from"} favorites`);
}));
const dialog = document.getElementById("detailsDialog");
document.querySelectorAll(".details-btn").forEach(button => button.addEventListener("click", () => {
  document.getElementById("dialogTitle").textContent = button.dataset.car;
  document.getElementById("dialogText").textContent = "Contact our team to learn more about this vehicle. Specifications and prices shown are illustrative demo content.";
  if (dialog?.showModal) dialog.showModal(); else alert(button.dataset.car);
}));
document.getElementById("dialogClose")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.getElementById("dialogContact")?.addEventListener("click", () => dialog.close());
document.getElementById("contactForm")?.addEventListener("submit", event => {
  event.preventDefault();
  alert("Successfully submitted your form!");
  event.currentTarget.reset();
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
