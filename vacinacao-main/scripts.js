document.addEventListener('DOMContentLoaded', function () {
    // Coloque aqui a lógica para inicialização ou chamadas de função adicionais, se necessário.
});

// Mantenha uma referência ao conteúdo oculto
let currentHiddenContent = null;

function openModal(event, sectionId) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const section = document.getElementById(sectionId);

    // Limpar qualquer conteúdo anterior
    modalContent.innerHTML = "";

    // Clonar o conteúdo da seção
    const sectionContent = section.cloneNode(true);

    // Armazenar a referência ao conteúdo oculto
    currentHiddenContent = sectionContent.querySelector('.hidden-content');

    // Exibir o conteúdo clonado
    modalContent.appendChild(sectionContent);
    currentHiddenContent.style.display = 'block';

    // Exibir o modal
    modal.style.display = 'block';

    // Impedir o evento de propagação para evitar que o clique no card subjacente seja acionado
    event.stopPropagation();
}

function hideHiddenContent() {
    // Esconder o conteúdo oculto
    if (currentHiddenContent) {
        currentHiddenContent.style.display = 'none';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    // Ocultar o conteúdo oculto ao fechar o modal
    hideHiddenContent();
}