function myFunction(el) {
  // If it is hamburger (☰), change to "X"
  if (el.innerHTML === "&#9776;" || el.innerHTML === "☰") {
    el.innerHTML = "&#10005;"; // X symbol
  } else {
    el.innerHTML = "&#9776;"; // back to ☰
  }
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (img) {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
    if (!img.hasAttribute("decoding")) {
      img.setAttribute("decoding", "async");
    }
  });
});
