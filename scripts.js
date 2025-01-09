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
let isGrayscale = false; // Initializing the grayscale state

ctButton.addEventListener('click', () => {
  if (isGrayscale) {
    // Remove the grayscale effect and reset the background color of flip cards
    document.body.style.filter = 'none';
    
    // Reset the background color of flip cards
    const flipCards = document.querySelectorAll(".flip-card-back-catalog, .flip-card-back-checkout, .flip-card-back-events, .flip-card-back-meetingroom");
    flipCards.forEach(function(card) {
      card.style.backgroundColor = ''; // Reset to default or initial state
    });

    isGrayscale = false;
  } else {
    // Apply the grayscale effect
    document.body.style.filter = 'grayscale(100%)';
    
    // Change the background color of the flip cards to specific hex. Requested by Carly and Lisa specifically for accessibility/visibility.
    const flipCards = document.querySelectorAll(".flip-card-back-catalog, .flip-card-back-checkout, .flip-card-back-events, .flip-card-back-meetingroom");
    flipCards.forEach(function(card) {
      card.style.backgroundColor = '#161616'; // Setting to the desired hex color.
    });

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
          const h2Elements = document.querySelectorAll("h2"); // Also target h2
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

          h2Elements.forEach(function (h2) {
            let h2FontSize = 1.9; // Default base font size for h2 in em (2.5em)
            if (selectedSize === '18px') {
                h2FontSize = 2.0; // Adjust for medium size
            } else if (selectedSize === '20px') {
                h2FontSize = 2.2; // Adjust for large size
            } else if (selectedSize === '22px') {
                h2FontSize = 2.5; // Adjust for extra large size
            }
            h2.style.fontSize = `${h2FontSize}em`;
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
let currentLanguage = "en"; // Default language is English

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


//! FLICKR FUNCTION START FOR CAROUSEL //
const list = document.getElementById('item-list');

// Function to calculate slide width (adjust calculation if needed)
function calculateSlideWidth() {
    // You might need to adjust this calculation based on your new item structure
    const listItem = list.querySelector('li'); // Get a sample list item
    return listItem ? listItem.offsetWidth : 235; // 235px as a fallback if no items yet
}

let currentPosition = 0;
let slideWidth = 0;

// Fetch Flickr photos and add them to the carousel
fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=e432bc32d8457092de91848dd045e6e0&photoset_id=72177720322693206&user_id=68661893@N00&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(data => {
        const photos = data.photoset.photo.slice(0, 15); 
        console.log(photos)


        photos.forEach(photo => {
            const imgUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

            const listItem = document.createElement('li');
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imgElement.classList.add('item'); // Add the 'item' class to the image
            listItem.appendChild(imgElement);
            list.appendChild(listItem);
        });

        // After adding the images, calculate the slide width and start the auto scroll
        slideWidth = calculateSlideWidth(); 
    });

// Automate carousel 
// function autoScroll() {
//     const maxScroll = list.scrollWidth - list.clientWidth;
//     currentPosition += slideWidth;
//     if (currentPosition > maxScroll) {
//         currentPosition = 0;
//     }
//     list.scrollLeft = currentPosition;
// }

//   setInterval(autoScroll, 3000);



//? STATIC PHOTO CAROUSEL
// const list = document.getElementById('item-list');

// // Function to calculate slide width (adjust calculation if needed)
// function calculateSlideWidth() {
//     const itemWidth = 150; // Adjust if necessary
//     const padding = 10; // Adjust if necessary
//     return itemWidth + padding;
// }

// let currentPosition = 0;
// const slideWidth = calculateSlideWidth();

// // Automate carousel
// function autoScroll() {
//     const maxScroll = list.scrollWidth - list.clientWidth;
//     currentPosition += slideWidth;
//     if (currentPosition > maxScroll) {
//         currentPosition = 0;
//     }
//     list.scrollLeft = currentPosition;
// }

// setInterval(autoScroll, 3000);
//! END FOR CAROUSEL//