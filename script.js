// Mobile Navbar Toggle
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


// Close navbar when click link (mobile)
if (nav) {
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") nav.classList.remove("active");
  });
}

// Single Product Image Switcher
const mainImg = document.getElementById("MainImg");
const smallImgs = document.querySelectorAll(".small-img");

if (mainImg && smallImgs.length) {
  smallImgs.forEach((img) => {
    img.addEventListener("click", () => {
      mainImg.src = img.src;
    });
  });
}
