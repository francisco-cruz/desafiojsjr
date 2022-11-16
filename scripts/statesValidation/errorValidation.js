// Erro
export function errorValidation(input, message) {
    input.className = "form-control error";
    input.parentElement.querySelector("small").innerText = message;
  }