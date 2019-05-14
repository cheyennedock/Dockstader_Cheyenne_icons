(() => {
  // stub
  console.log('fired!');

  // select elements with JavaScript

  // setting up a variablt using the let keyword,
  // and using a css selector to find the element we want to use.

  //let stores the reference to element as a variable (in memory)
  let svgGraphic = document.querySelector("#badgeSVG");

// functiona re reusable peices of code
// that you can run any time
function logMyId() {
  console.log(this.id);
}

svgGraphic.addEventListener("click", logmyId) ;
})();
