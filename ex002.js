
const inputItem = document.getElementById("input_item");
const adicionarBotao = document.getElementById("adicionar_Button")
const listaDeFilmes = document.getElementById("lista_de_filmes")

function adicionarFilme() {
    const valorDigitado = inputItem.value;
    const nomeLista = document.createElement("li");
    nomeLista.textContent = valorDigitado;
    listaDeFilmes.appendChild(nomeLista); // Adiciona o <li> à lista
    inputItem.value = "";
}

adicionarBotao.addEventListener("click", adicionarFilme)