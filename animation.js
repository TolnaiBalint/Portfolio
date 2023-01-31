
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
  PROJECT
\*------------------------------------*/

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

