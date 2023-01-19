
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
