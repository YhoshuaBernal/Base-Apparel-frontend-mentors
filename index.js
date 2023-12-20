const input = document.querySelector("#email-container__email");
const containerEmail = document.querySelector("#email-container");
const formEmail = document.querySelector(".email-form");
const buttonEmail = document.querySelector("#email-container__send-button");
const errorIcon = document.querySelector(".form__icon-error");

function createParagraph(text) {
  const newParagraph = document.createElement("p");
  const existingParagraph = formEmail.querySelector("p");

  if (existingParagraph) {
    existingParagraph.remove();
  }

  newParagraph.innerText = text;
  formEmail.appendChild(newParagraph);
}

function changeColor(element, property, color) {
  element.style[property] = color;
}

function validateEmail() {
  const inputValue = input.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(inputValue)) {
    createParagraph("Please provide a valid email");
    changeColor(formEmail, "border", "2px solid hsl(0, 93%, 68%)");
    errorIcon.classList.remove("inactive");
  } else {
    const existingParagraph = formEmail.querySelector("p");

    if (existingParagraph) {
      existingParagraph.remove();
    }

    changeColor(formEmail, "border", "1px solid hsl(0, 6%, 24%, .2)");
    errorIcon.classList.add("inactive");
  }
}

input.addEventListener("change", validateEmail);