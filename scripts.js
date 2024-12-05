

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

//Skipping to address 'TEXT SIZE'
