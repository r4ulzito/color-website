const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector(".navbar-logo");

// Abre/Fecha o Menu Mobile

function mobileMenu() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

// Mostrar menu ativo ao scrollar a pagina

const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  //adicionando a classe 'highlight' nos itens do menu
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    homeMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//Fecha o Menu Mobile quando um item do menu é clicado

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// Animações

const animateTargets = document.querySelectorAll("[data-anime]");

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  animateTargets.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", animeScroll);
