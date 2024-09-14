import { database } from './firebase.js'; // Ajuste o caminho se necessário
import { ref, push } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

// Função para salvar o nome no Firebase
function salvarNomeNoFirebase(nome) {
    const nomesRef = ref(database, 'lista'); // Cria uma referência para a coleção "presenca"
    push(nomesRef, { nome }); // Envia o nome digitado para o Firebase
}

// Captura os elementos da página
const inputNome = document.querySelector('input');
const btnConfirmar = document.getElementById('bt-confirmar');
const btnFinalizar = document.getElementById('bt-finalizar');
const modalAgradecimento = document.querySelector('.modal-agradecimento');
const conteudoPrincipal = document.querySelector('.conteudo-principal');

// Lógica ao clicar no botão "Confirmar"
btnConfirmar.addEventListener('click', () => {
    const nome = inputNome.value.trim(); // Captura o valor do input
    if (nome) {
        salvarNomeNoFirebase(nome); // Envia o nome para o Firebase
        alert('Nome(s) confirmado(s)!'); // Alerta de sucesso
        inputNome.value = ''; // Limpa o input após confirmar
    } else {
        alert('Por favor, digite um nome.');
    }
});

// Lógica ao clicar no botão "Finalizar"
btnFinalizar.addEventListener('click', () => {
    conteudoPrincipal.style.display = 'none';
    modalAgradecimento.style.display = 'block'; // Exibe o modal de agradecimento
});
