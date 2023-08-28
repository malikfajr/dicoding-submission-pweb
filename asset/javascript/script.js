let headerEl = document.querySelector("header");
let articles = document.querySelectorAll("article");

window.onresize = setArticleMarginTop;
window.onload = setArticleMarginTop;

function setArticleMarginTop() {
  articles.forEach((article) => {
    // memberi jarak agar tidak menumpuk ketika navigasi diklik
    article.style.scrollMarginTop = headerEl.offsetHeight + "px";
  });

  document.querySelector("#contact").style.scrollMarginTop =
    headerEl.offsetHeight + "px";
}

// proses transisi
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll(".nav-link")
let btn = document.querySelector("#humberger-button");

btn.addEventListener('click', humbergerAction)
navLinks.forEach(navLink => {
  navLink.addEventListener('click', humbergerAction)
})

function humbergerAction() {
  btn.classList.toggle("close");
  nav.classList.toggle("nav-close")
}
