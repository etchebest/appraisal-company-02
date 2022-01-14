const btnMobile = document.getElementById("btn-mobile");
const backTotop = document.getElementById("to-top");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

window.onscroll = function() {scrollFunction()};

function topFunction() {
  document.body.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
function scrollFunction(){
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backTotop.style.display = "block";
  } else {
    backTotop.style.display = "none";
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

backTotop.addEventListener("click", topFunction);
