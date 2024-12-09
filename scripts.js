

/* I'm copying what Envisionware did... Their "Adjust Contrast" just turns the entire page Black and White with no slider.
I'm assuming someone uses it and loves it as is so... */
const ctButton = document.getElementById('ctButton');
let isGrayscale = false;

ctButton.addEventListener('click', () => {
  if (isGrayscale) {
    document.body.style.filter = 'none';
    isGrayscale = false;
  } else {
    document.body.style.filter = 'grayscale(100%)';
    isGrayscale = true;
  }
});

/* Mimicking Envisionware's text animation for language button*/
const languageButton = document.querySelector('.language-button');
const languages = ['ESPAÑOL', 'FRANÇAIS', 'DEUTSCH'];
let currentLanguageIndex = 0;

setInterval(() => {
  currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
  languageButton.textContent = languages[currentLanguageIndex];
}, 2000); // Change text every 2 seconds (adjust as needed)


/* This is the popup for language select. */
languageButton.addEventListener(
  "click",
  function () {
      myPopup.classList.add("show");
  }
);
closePopup.addEventListener(
  "click",
  function () {
      myPopup.classList.remove(
          "show"
      );
  }
);
window.addEventListener(
  "click",
  function (event) {
      if (event.target == myPopup) {
          myPopup.classList.remove(
              "show"
          );
      }
  }
);
//! Struggling with the translations...Really bad....

// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {

  // Get references to the elements
  const textSizeButton = document.getElementById("text-size");
  const fontSizeMenu = document.getElementById("fontSizeMenu");
  const fontSizeOptions = document.querySelectorAll(".font-size-option");
  
  // Show font size menu when the TEXT SIZE button is clicked
  textSizeButton.addEventListener("click", function () {
      fontSizeMenu.style.display = fontSizeMenu.style.display === "block" ? "none" : "block";
  });

  // Loop through font size options and add event listener to change text size
  fontSizeOptions.forEach(function (option) {
      option.addEventListener("click", function () {
          // Get the selected size from the data-size attribute
          const selectedSize = option.getAttribute("data-size");

          // Apply the selected font size to the body, h3, and p tags
          document.body.style.fontSize = selectedSize; // Apply to entire body

          // Apply to buttons, h3, and p elements
          const buttons = document.querySelectorAll("button");
          const headings = document.querySelectorAll("h3");
          const paragraphs = document.querySelectorAll("p");
          
          buttons.forEach(function (button) {
              button.style.fontSize = selectedSize;
          });

          headings.forEach(function (heading) {
              heading.style.fontSize = selectedSize;
          });

          paragraphs.forEach(function (para) {
              para.style.fontSize = selectedSize;
          });

          // Hide the font size menu after selection
          fontSizeMenu.style.display = "none";
      });
  });

  // Close the font size menu when clicked outside
  document.addEventListener("click", function (event) {
      if (!textSizeButton.contains(event.target) && !fontSizeMenu.contains(event.target)) {
          fontSizeMenu.style.display = "none";
      }
  });
});
