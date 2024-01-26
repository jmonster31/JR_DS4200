
// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === "images/DS4200_website_image1.jpeg") {
    myImage.setAttribute ('src',"images/scrabble_photo1.jpeg");
  } else {
    myImage.setAttribute ('src',"images/scrabble_photo1.jpeg");
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Welcome to Justin Radist's website, " + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = "Welcome to Justin Radist's website, " + storedName;
}

/*
myButton.onclick = function() {
  setUserName();
}
*/
  