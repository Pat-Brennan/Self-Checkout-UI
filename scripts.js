/* Flip on click functionality. */
document.addEventListener("DOMContentLoaded", function () {
  const flipCards = document.querySelectorAll('.flip-card'); // Select all flip cards
  let flippedCard = null; // Track the currently flipped card

  flipCards.forEach(card => {
    card.addEventListener('click', function () {
      const cardInner = card.querySelector('.flip-card-inner'); // Get the inner part of the card

      // If another card is flipped, flip it back to the front
      if (flippedCard && flippedCard !== card) {
        flippedCard.querySelector('.flip-card-inner').style.transform = ''; // Reset the previous card flip
      }

      // Flip the current card
      cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';

      // Update the currently flipped card
      flippedCard = cardInner.style.transform === 'rotateY(180deg)' ? card : null;
    });
  });
});


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

// FONT SIZE INCREASE:

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

  // Store original English text in data-original-text attribute
  const translatableElements = document.querySelectorAll('.translatable');
  translatableElements.forEach(element => {
    element.dataset.originalText = element.textContent;
  });

//! Struggling with the translations...Really bad....

// Global variable to store the current language
let currentLanguage = "en";  // Default language is English

// Function to toggle the visibility of the language selection popup
function togglePopup() {
  const popup = document.getElementById("myPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

// Function to translate the content to English
function translateToEnglish() {
  // Hide the popup after selection
  document.getElementById("myPopup").style.display = "none";

  // Update content to English
  document.querySelector(".language-button").textContent = "ENGLISH"; // Reset language button text
  translatePageContent("en");

  // Set the current language to English
  currentLanguage = "en";
}

// Function to translate the content to Spanish
function translateToSpanish() {
  // Hide the popup after selection
  document.getElementById("myPopup").style.display = "none";

  // Update content to Spanish
  document.querySelector(".language-button").textContent = "ESPAÑOL"; // Reset language button text
  translatePageContent("es");

  // Set the current language to Spanish
  currentLanguage = "es";
}

// Function to translate page content based on the selected language
function translatePageContent(language) {
  const translatableElements = document.querySelectorAll(".translatable");

  translatableElements.forEach(element => {
    if (language === "en") {
      // Set the text to English
      element.textContent = element.dataset.originalText;
    } else if (language === "es") {
      // Set the text to Spanish
      switch (element.textContent.trim()) {
        case "CATALOG":
          element.textContent = "CATÁLOGO";
          break;
        case "A place to check out books and resources.":
          element.textContent = "Un lugar para consultar libros y recursos.";
          break;
        case "CHECKOUT":
          element.textContent = "PAGO";
          break;
        case "Checkout books and manage your account.":
          element.textContent = "Pague libros y administre su cuenta.";
          break;
        case "EVENTS":
          element.textContent = "EVENTOS";
          break;
        case "Explore library events and programs.":
          element.textContent = "Explore eventos y programas de la biblioteca.";
          break;
        case "MEETINGS":
          element.textContent = "REUNIONES";
          break;
        case "Reserve meeting rooms for events and gatherings.":
          element.textContent = "Reserve salas de reuniones para eventos y reuniones.";
          break;
        case "CONTRAST":
          element.textContent = "CONTRASTE";
          break;
        case "TEXT SIZE":
          element.textContent = "TAMAÑO DEL TEXTO";
          break;
        case "Small":
          element.textContent = "Pequeño";
          break;
        case "Medium":
          element.textContent = "Mediano";
          break;
        case "Large":
          element.textContent = "Grande";
          break;
        case "Extra Large":
          element.textContent = "Extra Grande";
          break;
        case "CLOSE":
          element.textContent = "CERRAR";
          break;
        default:
          break;
      }
    }
  });
}

// Attach event listeners to the language buttons
document.getElementById("english-button").addEventListener("click", translateToEnglish);
document.getElementById("spanish-button").addEventListener("click", translateToSpanish);

// Add click event to open/close popup
document.querySelector(".language-button").addEventListener("click", togglePopup);
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("myPopup").style.display = "none";
});