
/*------------------------------------*\
  Come back here
\*------------------------------------*/

let pageTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Come back here";
});

window.addEventListener("focus", () => {
  document.title = pageTitle;
});



/*------------------------------------*\
  BUTTON
\*------------------------------------*/

function gotoAbout() {
  const element = document.getElementById("about");
  element.scrollIntoView({
    behavior: "smooth",
  });
  
}



/*------------------------------------*\
  BACK-BUTTON
\*------------------------------------*/

function gotoTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}



/*------------------------------------*\
  NAVBAR
\*------------------------------------*/

/* SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));



/*------------------------------------*\
  PROJECT
\*------------------------------------*/
//image movement, for scrolling
/*-----------------*\
  pc img
\*-----------------*/

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});



/*------------------------------------*\
  SKILL
\*------------------------------------*/
//image movement when the mouse moves

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".logo").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
