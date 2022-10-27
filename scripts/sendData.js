import {validateCpf, convertCpftoArray } from './validarCPF.js'

function sendData () {

  let valueInputCpf = document.getElementById("exampleInputCPF").value;
  console.log(valueInputCpf);
  let cpfArray = convertCpftoArray (valueInputCpf);
  console.log(cpfArray);

 let cpfValide = validateCpf(cpfArray);
 console.log(cpfValide);

}

let sendButton = document.getElementById("btn-send");
sendButton.addEventListener('click', () => {
  sendData()
} )