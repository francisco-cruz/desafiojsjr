const form = document.getElementById('form');
const nome = document.getElementById('exampleInputNome');
const cpf = document.getElementById('exampleInputCPF');
const nascimento = document.getElementById('exampleInputNascimento');
const idade = document.getElementById('exampleInputIdade')
const cep = document.getElementById('exampleInputCEP');
const rua = document.getElementById('exampleInputRua');
const numero = document.getElementById('exampleInputNumero');
const bairro = document.getElementById('exampleInputBairro');
const cidade = document.getElementById('exampleInputCidade');
const estado = document.getElementById('exampleInputEstado');
const hobby = document.getElementById('exampleInputHobby');
const buttonAddHobby = document.getElementById('add-hobby');
const chipsHobby = document.querySelector('#chips');
const hobbies = []

// submit form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    chipsHobby.className = 'disable';
    checkInputs()
})

// botao de adicionar hobby
buttonAddHobby.addEventListener('click', () => {
    checkHobby()
})


// consumir api Viacep
cep.addEventListener('focusout', seacherCep(cep ,cep.value));



function checkHobby() {
    const hobbyValue = hobby.value.toLowerCase();
    const isValideHobby = validateInputHobby(hobby, hobbyValue);

    if (isValideHobby) {
        hobbies.push(hobbyValue);
        hobby.value = ''
        renderChip(hobbies)
        successValidation(hobby)
    } else {
        errorValidation(hobby, "Campo vazio");
    }
}

// check inputs
function checkInputs() {
    const nomeValue = nome.value.trim();
    const cpfValue = cpf.value.trim();
    const nascimentoValue = nascimento.value.trim();
    const idadeValue = idade.value.trim();
    const cepValue = cep.value.trim();
    const ruaValue = rua.value.trim();
    const numeroValue = numero.value.trim();
    const bairroValue = bairro.value.trim();
    const cidadeValue = cidade.value.trim();
    const estadoValue = estado.value.trim();


    const valideNome = validateNome(nome, nomeValue);
    const valideCPF = validateCPF(cpf, cpfValue);
    const valideNascimento = validateNascimento(nascimento, nascimentoValue);
    const valideIdade = validateIdade(idade, idadeValue);
    const valideCEP = validateCEP(cep, cepValue);
    const valideRua = validateRua(rua, ruaValue);
    const valideNumero = validateNumero(numero, numeroValue);
    const valideBairro = validateBairro(bairro, bairroValue);
    const valideCidade = validateCidade(cidade, cidadeValue);
    const valideEstado = validateEstado(estado, estadoValue);
    const valideHobby = validateHobby(hobby);

    // se todas as variáveis forem verdadeiras irá montar o objeto usuário
    if (valideNome && valideCPF && valideNascimento && valideIdade && valideCEP && valideRua
        && valideNumero && valideBairro && valideCidade && valideEstado && valideHobby) {
        const usuario = {
            'nome': nomeValue,
            'cpf': cpfValue,
            'nascimento': nascimentoValue,
            'idade': idadeValue,
            'cep': cepValue,
            'rua': ruaValue,
            'cidade': cidadeValue,
            'estado': estadoValue,
            'hobbies': hobbies
        }

        openModal(usuario)
    }

}

// functions of states validation
function errorValidation(input, message) {
    input.className = 'form-control error';

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
}

function successValidation(input) {
    input.className = 'form-control success';
}



//validate nome 
function validateNome(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    }
    successValidation(input);
    return true;
}

// validate cpf
function validateCPF(input, value) {
    // validating characters with Regex
    const cpfFormat = value.replace(/[^0-9]/g, "");
    // converting cpfFormat into array
    const cpf = convertCpfToArray(cpfFormat);
    // invalid cpf cases
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else if (cpf.length != 11) {
        errorValidation(input, "Número de caracteres inválido");
        return false
    } else if (!validateRepeatedNumber(cpf)) {
        errorValidation(input, "CPF com número repetidos");
        return false
    } else if (!validateFistDigit(cpf)) {
        errorValidation(input, "Primeiro digito inválido");
        return false
    } else if (!validateSecondDigit(cpf)) {
        errorValidation(input, "Segundo digito inválido");
        return false
    } else {
        successValidation(input)
        return true;
    }
}

//convert cpf to array
function convertCpfToArray(cpf) {
    const cpfArray = cpf.split('').map((e) => parseInt(e));
    return cpfArray;
}

//validate repeated number cpf
function validateRepeatedNumber(cpf) {
    const fistDigit = cpf[0];
    let differentNumber = false;

    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] != fistDigit) {
            differentNumber = true;
        }
    }
    return differentNumber;
}

//validate fist digit cpf
function validateFistDigit(cpf) {
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += cpf[i] * (10 - i);
    }

    const rest = (sum * 10) % 11;

    if (rest < 10) {
        return cpf[9] == rest;
    }
    return cpf[9] == 0;
}

//validate second digit cpf
function validateSecondDigit(cpf) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += cpf[i] * (11 - i);
    }

    const rest = (sum * 10) % 11;

    if (rest < 10) {
        return cpf[10] == rest;
    }
    return cpf[10] == 0;
}

// validate nascimento
function validateNascimento(input, value) {
    const data = value.replace(/\//g, "-"); // validating data characters with Regex
    const dataArray = data.split("-");  // converting data into array separando por "-"

    let day = dataArray[2]
    let month = dataArray[1]
    let yaer = dataArray[0]

    let leapYear = isLeapYear(yaer);
    let valideYaer = isValideYaer(yaer);
    let valideMonth = isValideMonth(month)
    let valideDay = isValideDay(day, month, leapYear)

    if (value == '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else if (!(valideYaer && valideMonth && valideDay)) {
        errorValidation(input, "Data inválida");
        return false
    } else {
        successValidation(input);
        return true;
    }
}

// Múltiplos de 4, mas que não são múltiplos de 100.
// Todos os não múltiplos de 400 são bissextos.
function isLeapYear(yaer) {
    if ((yaer % 4 == 0) && (yaer % 100 != 0) || yaer % 400 == 0) {
        return true
    } else {
        return false
    }
}

//validação do ano
function isValideYaer(yaer) {
    if (yaer => 0) {
        return true;
    } else {
        return false;
    }
}

// validção do mes
function isValideMonth(month) {
    if (month >= 1 && month <= 12) {
        return true;
    } else {
        return false;
    }
}

// validação do dia
function isValideDay(day, month, leapYear) {
    if (day > 1) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day <= 31) {
                return true;
            } else if (month == 4 || month == 6 || month == 0 || month == 11) {
                if (day <= 30) {
                    return true;
                }
            } else if (month == 2) {
                if (leapYear && day <= 20) {
                    return true;
                } else if (!leapYear && day <= 28) {
                    return true;
                }
            }

        } else {
            return false;
        }

    } else {
        return false;
    }
}

// validate idade
function validateIdade(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input)
        return true;
    }
}

// validate CEP
function validateCEP(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input);
        return true
    }
}

function convertCeptoArray(cep) {
    const cepArray = cep.split('').map((e) => parseInt(e));
    return cepArray;
}


function seacherCep(value) {
    const cep =  value.replace(/[^0-9]/g, "");
    console.log(cep);
    const cepArray = convertCeptoArray(cep);

    if (cepArray.length != 8) {
        errorValidation(input, "CEP inválido");
    } else {
        const requestApiCep = new XMLHttpRequest();
     
        requestApiCep.open("GET", `http://viacep.com.br/ws/${cep}/json/`, false);
        requestApiCep.send();

        const dataApiCep = (JSON.parse(requestApiCep.responseText));
        completeFields(dataApiCep)
      
    }

}

//Preencher campos
function completeFields(response) {
    rua.value = response['logradouro']
    bairro.value = response['bairro']
    cidade.value = response['localidade']
    estado.value = response['uf']
}


//validate rua
function validateRua(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input)
        return true;
    }
}

//validate Numero
function validateNumero(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input);
        return true;
    }
}

//validate Bairro
function validateBairro(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input);
        return true;
    }
}


//validate Cidade
function validateCidade(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input);
        return true;
    }
}

//validate Estado
function validateEstado(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input);
        return true;
    }
}


function validateInputHobby(input, value) {
    if (value === '') {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        return true;
    }
}

function validateHobby(input) {
    if (hobbies.length <= 0) {
        errorValidation(input, "Preencha esse campo");
        return false;
    } else {
        successValidation(input);
        return true;
    }
}

function renderChip(array) {
    const lastHobby = array.at(-1);

    if (lastHobby === '') {

    } else {
        let chip = `
            <div class="chip" id="${lastHobby}">
            <p>${lastHobby}</p>
            <svg onclick="deleteHobbie('${lastHobby}')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
        `
        document.getElementById('chips').innerHTML += chip;
    }

}

function deleteHobbie(hobby) {
    const indexHobby = hobbies.indexOf(hobby);

    hobbies.splice(indexHobby, 1);
    removeChipOfScreen(hobby);
}

function removeChipOfScreen(hobby) {
    const chipToRemove = document.querySelector(`.chip#${hobby}`);
    chipToRemove.remove();

}

