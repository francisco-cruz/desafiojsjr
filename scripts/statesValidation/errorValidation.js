// Erro
export function errorValidation(input, message) {
    input.className = "form-control error";
  
    const formControl = input.parentElement;
    formControl.querySelector("small").innerText = message;
  }