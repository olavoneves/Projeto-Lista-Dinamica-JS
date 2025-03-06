import { criarItemDaLista } from "./scripts/criarItemDaLista.js"; // Importando a função de um arquivo externo

const botaoAdicionar = document.getElementById("adicionar-item"); // a variavel Const significa que a variavel é constante //
const listaDeCompras = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();

})

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}