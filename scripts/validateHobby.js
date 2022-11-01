import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"
import { hobbies } from "./index.js";


// Validar Input Hobby 
export function validateHobbyToArray(input, value) {
    const hobbyRegex = value.replace(/[0-9]/g, "");

    if (hobbyRegex === "") {
        errorValidation(input, "Não aceita valores vazios");
        return false;
    }

    return true;
}


// Validar Hobby
export function validateHobby(input) {
    if (hobbies.length <= 0) {
        errorValidation(input, "Preencha esse campo");
        return false;
    }

    successValidation(input);
    return true;
}

// Renderizar os chips na tela
export function renderChip(array) {
    if (array.at(-1) === "") {
    }
    let chip = `
            <div class="chip" id="${array.at(-1)}">
            <p>${array.at(-1)}</p>
            <svg onclick="deleteHobbie('${array.at(-1)}')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          `;
    document.getElementById("chips").innerHTML += chip;

}

// Deletar Hobby
function deleteHobbie(hobby) {
    const indexHobby = hobbies.indexOf(hobby);
    hobbies.splice(indexHobby, 1);
    removeChipOfScreen(hobby);
}


// Remover os chips da tela
function removeChipOfScreen(hobby) {
    const chipToRemove = document.querySelector(`.chip#${hobby}`);
    chipToRemove.remove();
}
