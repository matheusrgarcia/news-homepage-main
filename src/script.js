

function showMobileMenu() {
  const mobileNav = document.getElementsByClassName("mobile-nav-container")[0];
  const body = document.getElementById("body");
  mobileNav.style.display = "flex";
  body.style["overflow-y"] = "hidden";

}

function hideMobileMenu() {
  const mobileNav = document.getElementsByClassName("mobile-nav-container")[0];
  mobileNav.style.display = "none";
  body.style["overflow-y"] = "auto";
}