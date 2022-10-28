const hobbies = []

export function deleteHobbie (id) {
  hobbies.delete[id]
}
document.getElementById('addHobbie')
        .addEventListener('click', () => {
          hobbies.push(document.getElementById('exampleInputHobby').value)
          for (let i = 0; i < hobbies.length; i++) {   
            let chip =`
            <div class="chip" id="${i}">
            <p>${hobbies[i]}</p>
            <svg onClick="deleteHobbie(${i})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            `
           document.getElementById('chips').innerHTML += chip;
          }
  })


