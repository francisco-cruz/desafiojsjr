// Erro Checkbox
export function errorCheckBox(message) {
    const small = document.getElementById('small')
    small.style.visibility = "visible";
    small.innerText = message;
  }