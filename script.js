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
  document.querySelectorAll(".dropdown .dropbtn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      if (window.innerWidth <= 600) {
        var parent = button.closest(".dropdown");
        var content = parent.querySelector(".dropdown-content");
        var isOpen = parent.classList.contains("open");

        document.querySelectorAll(".dropdown").forEach(function (item) {
          if (item !== parent) {
            item.classList.remove("open");
            var otherContent = item.querySelector(".dropdown-content");
            if (otherContent) {
              otherContent.style.display = "none";
            }
          }
        });

        if (isOpen) {
          parent.classList.remove("open");
          if (content) {
            content.style.display = "none";
          }
        } else {
          parent.classList.add("open");
          if (content) {
            content.style.display = "block";
          }
        }

        event.preventDefault();
      }
    });
  });

  document.querySelectorAll("img").forEach(function (img) {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
    if (!img.hasAttribute("decoding")) {
      img.setAttribute("decoding", "async");
    }
  });
});
