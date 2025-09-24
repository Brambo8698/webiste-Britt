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
