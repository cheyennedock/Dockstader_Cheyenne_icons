(() => {
  // stub
  console.log('fired!');

  // select elements with JavaScript

  // setting up a variablt using the let keyword,
  // and using a css selector to find the element we want to use.

  //let stores the reference to element as a variable (in memory)
  let svgGraphic = document.querySelector("#badgeSVG"),
    mainHeadline = document.querySelector(".main-headline");
    subHead = document.querySelector("#raster-vector h3"),
    swapTextButton = document.querySelector(".switch-type");

// functiona re reusable peices of code
// that you can run any time
function logMyId() {
  console.log(this.id);

this.style.opacity = 0.5;
}

function swapText() {
  mainHeadline.textcontent = "Now you're something else!";
  mainHeadline.classList.Toggle("seleted");

  subHead.textContent = "you are also something else!";
  mainHeadline.classlist.Toggle("selected");
}

//events always go here
svgGraphic.addEventListener("click", logMyId);
swapTextButton.addEventListener("mouseover", swapText);
})();
