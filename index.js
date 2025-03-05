const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item"); // a variavel Const significa que a variavel é constante

let contador = 0; // a variavel Let significa que a variavel vai ficar trocando de valor, ou seja, ela não é constante

const listaDeCompras = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
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

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    
    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

})

