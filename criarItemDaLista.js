import gerarDiaDaSemana from "./gerarDiaDaSemana.js"; // Esse tipo não precisa de chaves, porém ele exporta apenas uma funcionalidade
const inputItem = document.getElementById("input-item");
let contador = 0; // a variavel Let significa que a variavel vai ficar trocando de valor, ou seja, ela não é constante //

// export serve para exportar essa nossa função para eu pode utilizar em arquivos  //
export function criarItemDaLista() {

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    // document.createElement para criar elementos dentro da variavel
    const itemDaLista = document.createElement("li");

    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    
    // .type é o atributo da nossa variavel inputCheckbox 
    inputCheckbox.type = "checkbox";

    // .id tambem é uma das opções de atributos
    inputCheckbox.id = "checkbox-" + contador++; 
    // ++ serve para adicionar +1 toda vez que att //

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }  // Se o nosso Checkbox for clicado vai aparecer o textDecoration com um risco na palavra. Se não, simplesmente nõ vai aparecer decoração nenhuma.
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    
    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    inputItem.value = "";

    return itemDaLista;
}