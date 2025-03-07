import { criarItemDaLista } from "./criarItemDaLista.js"; // Importando a função de um arquivo 
import verificarListaVazia from "./verificarListaVazia.js"; // Importando apenas uma funcionalidade

const botaoAdicionar = document.getElementById("adicionar-item"); // a variavel Const significa que a variavel é constante //
const listaDeCompras = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);

})

verificarListaVazia(listaDeCompras);