let input = document.querySelector("#email-container__email")
let containerEmail = document.querySelector("#email-container")
let formEmail = document.querySelector(".email-form")


function createaParragraph (text) {
  let newParragraph = document.createElement("p")
  let existingParagraph = formEmail.querySelector("p");

  if (existingParagraph) {
    existingParagraph.remove();
  }

  newParragraph.innerText = text  
  formEmail.appendChild(newParragraph)
}

function cambiarBorde () {
  formEmail.setAttribute("borderColor", "hsl(0, 93%, 68%)")
  // let bordeRojo = formEmail.style.borderColor = "hsl(0, 93%, 68%)"
}

function validateEmail () {
  let inputValie = input.value
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(inputValie) == false) {
    createaParragraph("Please provide a valid email")
  } else {
    let existingParagraph = formEmail.querySelector("p");
    existingParagraph.remove();
    
  }
}
input.addEventListener("change", validateEmail)

