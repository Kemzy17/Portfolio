window.onscroll = function () {
  scrollFunction();
};

var topnav = document.getElementById("topnav");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topnav.style.background = "rgb(0,0,0,0.9)";
    topnav.style.transition = ".4s";
  } else {
    topnav.style.background = "none";
    topnav.style.transition = ".4s";
  }
}

var sidenav = document.getElementById("sidenav");

function opennav() {
  sidenav.style.position = "fixed";
  sidenav.style.right = "0px";
}
function closenav() {
  sidenav.style.position = "fixed";
  sidenav.style.right = "-250px";
}
