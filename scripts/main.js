const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo_2025-05-09_02-32-08.jpg") {
    myImage.setAttribute("src", "images/photo_2025-05-09_02-32-13.jpg");
  } else {
    myImage.setAttribute("src", "images/photo_2025-05-09_02-32-08.jpg");
  }

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
}

myButton.addEventListener("click", () => {
  setUserName()});

});
