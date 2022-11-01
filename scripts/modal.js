const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal-background');

// Abrir modal
export function openModal(usuario) {
    renderUsuarioOnModal(usuario)
    modal.style.display = 'block'

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none'
      location.reload();
    })
  }

  // Renderizar o JSON do usuario no modal
  function renderUsuarioOnModal(usuario) {
    const usuarioJson = JSON.stringify(usuario);
    const htmlUsuarioJson = `<p class="text-json">${usuarioJson}<p/>`
    document.getElementById("modal-conteudo").innerHTML += htmlUsuarioJson;
  }
  
  