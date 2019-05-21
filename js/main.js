(() => {
  // stub
  console.log('fired!');

  // select elements with JavaScript

  // setting up a variablt using the let keyword,
  // and using a css selector to find the element we want to use.

  //let stores the reference to element as a variable (in memory)
  let mainHeadline = document.querySelector(".main-headline");
      subHead = document.querySelector("#raster-vector h3"),
      swapTextButton = document.querySelector(".switch-type");
      allImages = document.querySelectorAll("#image-container img");
      objectButton = document.querySelector

    #image-container img {
      cursor: pointer;
    }

// functiona re reusable peices of code- put these between the variables and the event handling
// that you can run any time
function logMyId() {
  console.log(this.id);
  // toggle a class here with classlist
}

this.style.opacity = 0.5;
}

function swapText() {
  console.log(this.previousElementsibling);
}

  mainHeadline.textcontent = "Now you're something else!";
  mainHeadline.classList.Toggle("seleted");

  subHead.textContent = "you are also something else!";
  mainHeadline.classlist.Toggle("selected");
}

//events always go here
swapTextButton.addEventListener("mouseover", swapText);

// select and loop through a bunch of items at once -> one to many relationships
  allImages.forEach(item => {
    item.addEventListener("click", logMyId);
  });

  objectbutton.addEventListener("cllick")
})();
